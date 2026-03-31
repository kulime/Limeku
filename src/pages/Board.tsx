import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';
import researchAI from '@/assets/research-ai-hardware.jpg';
import research3D from '@/assets/research-3d-integration.jpg';
import researchBio from '@/assets/research-bio-electronics.jpg';
import kcs2026 from '@/assets/KCS_2026.jpg';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  content?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2026.02.01',
    title: 'Welcome to LIME Lab',
    category: 'Notice',
    content: 'We are officially launching our web platform to share our latest breakthroughs in next-generation semiconductor technologies and intelligent electronics.',
  },
];

const galleryImages = [
  { src: kcs2026, alt: 'Lab Equipment', caption: 'KCS2026 Conference' },
];

const sections = [
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
];

// Separate Gallery component to properly trigger scroll-based animations
const GalleryContent = () => {
  const [galleryRef, galleryInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="section-padding-tight bg-background">
      <div ref={galleryRef} className="section-container">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Gallery</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group overflow-hidden"
            >
              <div className={cn(
                "overflow-hidden",
                galleryInView ? 'animate-fade-in-image' : 'opacity-0'
              )}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className={cn(
                "text-sm text-muted-foreground mt-3",
                galleryInView ? 'animate-fade-in-text' : 'opacity-0'
              )}>{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Board = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState<'news' | 'gallery'>('news');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && (tabParam === 'news' || tabParam === 'gallery')) {
      setActiveSection(tabParam);
    }
  }, [searchParams]);

  return (
    <Layout>
      {/* Page Header with Hero Background */}
      <PageHeader title="Board" subtitle="News and updates from LIME Lab" />

      {/* Tab Navigation */}
      <section className="sub-tab-bar border-b border-border sticky top-20 z-40">
        <div className="section-container">
          <div className="flex justify-center gap-8 md:gap-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id as 'news' | 'gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={cn(
                  'sub-tab-button',
                  activeSection === section.id && 'active'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      {activeSection === 'news' && (
        <section className="section-padding-tight bg-background animate-fade-in">
          <div className="section-container">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">News</h2>
            <div className="space-y-0">
              {newsItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="py-6 border-b border-border animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex gap-4 md:gap-6">
                      <span className="text-sm font-medium text-muted-foreground min-w-[100px]">
                        {item.date}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-accent font-medium min-w-[100px]">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      {item.content && (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <GalleryContent />
      )}
    </Layout>
  );
};

export default Board;
