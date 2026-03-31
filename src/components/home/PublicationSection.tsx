import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightNav } from 'lucide-react';
import { cn } from '@/lib/utils';
import researchAI from '@/assets/research-ai-hardware.jpg';
import research3D from '@/assets/research-3d-integration.jpg';
import researchBio from '@/assets/research-bio-electronics.jpg';
import batio3 from '@/assets/batio3.jpg';
import m3d from '@/assets/m3d.png';
import reconfig from '@/assets/reconfig.jpg';
import proton from '@/assets/proton.png';


interface PublicationItem {
  title: string;
  journal: string;
  volume?: string;
  year: string;
  coverImage?: string;
  doi?: string;
  hasCover?: boolean;
}

interface PublicationSectionProps {
  isVisible?: boolean;
}

const highlightedPublications: PublicationItem[] = [
  {
    title: 'Single-crystalline BaTiO3-based ferroelectric capacitive memory via membrane transfer',
    journal: 'Science Advances',
    volume: 'Vol.11, eadz2553 (2025)',
    year: '',
    coverImage: batio3,
    doi: 'https://www.science.org/doi/10.1126/sciadv.adz2553',
    hasCover: false,
  },
  {
    title: 'Monolithic 3D integration of 2D materials-based electronics towards ultimate edge computing solutions',
    journal: 'Nature Materials',
    volume: 'Vol. 22, 1470-1477 (2023)',
    year: '',
    coverImage: m3d,
    doi: 'https://www.nature.com/articles/s41563-023-01704-z',
    hasCover: true,
  },
  {
    title: 'Reconfigurable heterogeneous integration using stackable chips with embedded artificial intelligence',
    journal: 'Nature Electronics',
    volume: 'Vol. 5, 386-393 (2022)',
    year: '',
    coverImage: reconfig,
    doi: 'https://www.nature.com/articles/s41928-022-00778-y',
    hasCover: true,
  },
  {
    title: 'Proton-enabled activation of peptide materials for biological bimodal memory',
    journal: 'Nature Communications',
    volume: 'Vol. 11, 5896 (2020)',
    year: '',
    coverImage: proton,
    doi: 'https://www.nature.com/articles/s41467-020-19750-5',
    hasCover: false,
  },
];

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const PublicationSection = ({ isVisible = true }: PublicationSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const CARD_HEIGHT = 480;

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Research Highlights</h2>
      </div>

      {/* View More */}
      <div className="flex justify-end mb-8">
        <Link
          to="/publication"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider"
        >
          View More
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* List + Card Stack Layout — 4:6 ratio */}
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 items-start px-4 lg:px-8',
          isVisible ? 'animate-slide-up-fade' : 'opacity-0'
        )}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left: Publication List — height synced to card stack */}
        <div className="flex flex-col" style={{ height: `${CARD_HEIGHT}px` }}>
          {highlightedPublications.map((pub, index) => (
            <a
              key={index}
              href={pub.doi ? `${pub.doi}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex-1 flex items-center px-4 border-l-[3px] transition-all duration-300 cursor-pointer',
                hoveredIndex === index
                  ? 'border-l-accent bg-accent/5'
                  : 'border-l-border hover:border-l-muted-foreground',
                index < highlightedPublications.length - 1 && 'border-b border-b-border'
              )}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="w-full">
                <div className="flex items-start gap-2.5">
                  <span className={cn(
                    'text-2xl font-bold tracking-tighter transition-colors duration-300 shrink-0 leading-[1.4]',
                    hoveredIndex === index ? 'text-accent' : 'text-muted-foreground/30'
                  )}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className={cn(
                      'text-base font-semibold leading-[1.4] transition-colors duration-300 line-clamp-2',
                      hoveredIndex === index ? 'text-accent' : 'text-foreground'
                    )}>
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                      <span className="font-semibold italic">{pub.journal}</span>
                      {pub.volume && `, ${pub.volume}`}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Image-Only Card Stack with 50% overlap */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div
            className="relative w-full"
            style={{ height: `${CARD_HEIGHT}px` }}
          >
            {(() => {
              const total = highlightedPublications.length;
              const cardWidthPercent = 35;
              const stepPercent = cardWidthPercent * 0.5;
              const isAnyHovered = hoveredIndex !== null;

              return highlightedPublications.map((pub, index) => {
                const isActive = hoveredIndex === index;
                const centerLeft = (120 - cardWidthPercent) / 2;

                return (
                  <div
                    key={index}
                    className="absolute top-0 bottom-0 rounded-lg overflow-hidden border-3 border-border bg-background cursor-pointer"
                    style={{
                      width: `${cardWidthPercent}%`,
                      left: isActive ? `${centerLeft}%` : `${ 10 + index * stepPercent}%`,
                      zIndex: isActive ? 50 : total - index,
                      opacity: isAnyHovered ? (isActive ? 1 : 0) : 1,
                      visibility: isAnyHovered && !isActive ? 'hidden' : 'visible',
                      boxShadow: isActive
                        ? '0 20px 50px -10px rgba(0,0,0,0.25)'
                        : `0 ${4 + index * 2}px ${12 + index * 4}px -${4 + index}px rgba(0,0,0,0.12)`,
                      transition: 'all 500ms ease-in-out',
                      transitionProperty: 'left, opacity, box-shadow, visibility',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <div className="relative h-full">
                      <img
                        src={pub.coverImage}
                        alt={pub.title}
                        className="w-full h-full object-cover"
                      />
                      {pub.hasCover && (
                        <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded">
                          Cover
                        </span>
                      )}
                    </div>
                  </div>
                );
              });
            })()}

            {/* Navigation Buttons — only visible when a card is active */}
            {hoveredIndex !== null && hoveredIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredIndex(hoveredIndex - 1);
                }}
                className="absolute left-[20%] top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full flex items-center justify-center bg-transparent border border-muted-foreground/20 text-muted-foreground hover:bg-muted-foreground hover:text-background transition-all duration-150 animate-fade-in [animation-duration:150ms]"
                aria-label="Previous publication"
              >
                <ArrowLeft size={26} strokeWidth={3} />
              </button>
            )}
            {hoveredIndex !== null && hoveredIndex < highlightedPublications.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredIndex(hoveredIndex + 1);
                }}
                className="absolute right-[0%] top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full flex items-center justify-center bg-transparent border border-muted-foreground/20 text-muted-foreground hover:bg-muted-foreground hover:text-background transition-all duration-150 animate-fade-in [animation-duration:150ms]"
                aria-label="Next publication"
              >
                <ArrowRightNav size={26} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile: Simple cards fallback */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {highlightedPublications.map((pub, index) => (
            <a
              key={index}
              href={pub.doi ? `${pub.doi}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border rounded-lg overflow-hidden bg-background hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={pub.coverImage} alt={pub.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};