import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { cn } from '@/lib/utils';
import researchAI from '@/assets/research-ai-hardware.jpg';
import research3D from '@/assets/research-3d-integration.jpg';
import researchBio from '@/assets/research-bio-electronics.jpg';

const researchTopics = [
  {
    id: 'ai-hardware',
    title: 'AI Hardware',
    subtitle: 'Next-generation Computing Architectures',
    image: researchAI,
    description: `Our AI hardware research focuses on developing specialized computing architectures that efficiently execute artificial intelligence and machine learning workloads. We develop novel functional devices and neuro-inspired dynamics to realize device-to-system innovations that overcome the von Neumann bottleneck.`,
    keyAreas: [
      'Neuromorphic & Emerging Devices',
      'Hardware-driven In-memory & In-sensor computing',
      'Physical Implementation of Low-power AI Hardware'
    ],
  },
  {
    id: '3d-integration',
    title: '3D Integration',
    subtitle: 'Advanced Vertical Integration Technologies',
    image: research3D,
    description: `We focus on the monolithic integration of functional layers to realize high-density 3D nanosystems. Our research aims to synthesize multi-functional layers sequentially while maintaining stable layer boundaries, overcoming the thermal and structural challenges of conventional 3D integration.`,
    keyAreas: [
      'Monolithic 3D (M3D) Integration',
      'Sequential Functional Layer Synthesis & Stacking',
      'Interfacial connectivity optimization',
      'Non-destructive multi-layer processing',
    ],
  },
  {
    id: 'bio-electronics',
    title: 'Bio-inspired Electronics',
    subtitle: 'Neuromorphic Computing & Synaptic Devices',
    image: researchBio,
    description: `Our bio-inspired electronics research creates neuromorphic devices and synaptic circuits that mimic biological neural networks. We develop memristive devices, spiking neural networks, and bio-compatible electronic interfaces for next-generation computing and biomedical applications.`,
    keyAreas: [
      'Memristive synaptic devices',
      'Spiking neural networks',
      'Brain-inspired computing',
      'Bioelectronic interfaces',
    ],
  },
];

const Research = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('ai-hardware');
  const activeTopic = researchTopics.find(t => t.id === activeTab) || researchTopics[0];

  // Handle URL query parameter for tab selection
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && researchTopics.find(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <Layout>
      {/* Page Header with Hero Background */}
      <PageHeader title="Research" subtitle="Exploring the frontiers of semiconductor technology" />

      {/* Tab Navigation */}
      <section className="sub-tab-bar border-b border-border sticky top-20 z-40">
        <div className="section-container">
          <div className="flex justify-center gap-8 md:gap-12 overflow-x-auto">
            {researchTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveTab(topic.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={cn(
                  'sub-tab-button',
                  activeTab === topic.id && 'active'
                )}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="section-padding bg-background" key={activeTab}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-fade-in">
            {/* Image with drop shadow */}
            <div className="w-full max-w-2xl ml-auto mr-5 overflow-hidden bg-secondary research-image-shadow">
              <img 
                src={activeTopic.image} 
                alt={activeTopic.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-2">
                {activeTopic.title}
              </h2>
              <p className="text-accent mb-6">{activeTopic.subtitle}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {activeTopic.description}
              </p>

              <h3 className="text-lg font-semibold mb-4 mt-20">Key Research Areas</h3>
              <ul className="space-y-3">
                {activeTopic.keyAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
