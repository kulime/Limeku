import { Layout } from '@/components/layout/Layout';
import { ResearchAccordion } from "@/components/home/ResearchAccordion";
import { PublicationSection } from '@/components/home/PublicationSection';
import { NewsSection } from '@/components/home/NewsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { useInView } from '@/hooks/useInView';
import heroImage from '@/assets/hero-bg.jpg';
import researchAI from '@/assets/research-ai-hardware.jpg';
import research3D from '@/assets/research-3d-integration.jpg';
import researchBio from '@/assets/research-bio-electronics.jpg';

const researchTopics = [{
  title: 'AI Hardware',
  description: 'Next-generation computing architectures for AI and machine learning workloads',
  image: researchAI,
  tabId: 'ai-hardware',
  number: "01",
}, {
  title: '3D Integration',
  description: 'Advanced chip stacking and heterogeneous integration technologies',
  image: research3D,
  tabId: '3d-integration',
  number: "02",
}, {
  title: 'Bio-inspired Electronics',
  description: 'Neuromorphic computing and synaptic devices mimicking biological systems',
  image: researchBio,
  tabId: 'bio-electronics',
  imageContain: true,
  number: "03",
}];

const Home = () => {
  const [researchRef, researchInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [publicationRef, publicationInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [updatesRef, updatesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* 수정된 부분: mx-auto를 제거하고 pl(padding-left)로 여백 조절 */}
        <div className="relative z-10 w-full px-6 md:pl-12 lg:pl-20 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary-foreground mb-6 animate-fade-in max-w-4xl text-left">
            Laboratory of Intelligent Materials & Electronics
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 tracking-wide animate-fade-in opacity-0 stagger-2 font-light max-w-2xl leading-relaxed text-left">
            Pioneering the next generation of semiconductor technologies through AI Hardware, 3D Integration, and
            Bio-inspired Electronics.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Research Topics Section */}
      <section className="section-padding bg-background">
        <div ref={researchRef} className="section-container">
          <div
            className={`text-center mb-16 transition-all duration-700 ${researchInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter lg:text-5xl">Research Topics</h2>
          </div>

          <ResearchAccordion topics={researchTopics} isVisible={researchInView} />
        </div>
      </section>

      {/* Publication Highlights Section */}
      <section className="section-padding bg-secondary/30">
        <div
          ref={publicationRef}
          className={`section-container transition-all duration-700 ${publicationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <PublicationSection isVisible={publicationInView} />
        </div>
      </section>

      {/* News & Gallery Section */}
      <section className="section-padding bg-background">
        <div ref={updatesRef} className="section-container">
          {/* Section Title */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${updatesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">LIME Updates</h2>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start transition-all duration-700 delay-200 ${updatesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* News - takes 3 columns */}
            <div className="lg:col-span-3">
              <NewsSection />
            </div>
            {/* Gallery - takes 2 columns, aligned to top */}
            <div className="lg:col-span-2">
              <GallerySection />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;