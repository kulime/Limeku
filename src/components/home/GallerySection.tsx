import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import researchAI from '@/assets/research-ai-hardware.jpg';
import research3D from '@/assets/research-3d-integration.jpg';
import researchBio from '@/assets/research-bio-electronics.jpg';
import kcs2026 from '@/assets/KCS_2026.jpg';

const galleryItems = [
  { 
    src: kcs2026, 
    title: 'KCS2026 Conference',
    date: '2026-01-30'
  },
];

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = galleryItems[activeIndex];

  return (
    <div className="relative h-full">
      {/* Gallery Container */}
      <Link 
        to="/board?tab=gallery"
        className="block relative aspect-[4/3] overflow-hidden group"
      >
        {/* Gallery Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
            Gallery
          </span>
        </div>

        {/* Image */}
        <img 
          src={activeItem.src}
          alt={activeItem.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">
            {activeItem.title}
          </h3>
          <p className="text-sm text-white/70">
            {activeItem.date}
          </p>
        </div>
      </Link>

      {/* Pagination Dots */}
      <div className="flex justify-end gap-2 mt-4">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex 
                ? 'bg-accent' 
                : 'bg-border hover:bg-muted-foreground'
            }`}
            aria-label={`View gallery item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
