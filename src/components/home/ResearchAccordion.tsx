import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  tabId: string;
  number: string;
}

interface ResearchAccordionProps {
  topics: ResearchCardProps[];
  isVisible?: boolean;
}

export const ResearchAccordion = ({ topics, isVisible = true }: ResearchAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1500px] mx-auto px-4">
      <div
        className={cn(
          'flex h-[400px] md:h-[500px] gap-2 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        {topics.map((topic, index) => {
          const isActive = activeIndex === index;
          return (
            <Link
              key={topic.tabId}
              to={`/research?tab=${topic.tabId}`}
              className="relative overflow-hidden rounded-lg cursor-pointer block"
              style={{
                flex: isActive ? 3 : 1,
                transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Static image — no zoom */}
              <img
                src={topic.image}
                alt={topic.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-colors duration-500"
                style={{
                  backgroundColor: isActive
                    ? 'hsl(var(--foreground) / 0.5)'
                    : 'hsl(var(--foreground) / 0.2)',
                }}
              />

              {/* Large index number */}
              <span className="absolute top-5 right-5 text-5xl md:text-6xl font-bold text-white/70 leading-none tracking-tighter drop-shadow-sm">
                {topic.number}
              </span>

              {/* Plus icon — collapsed only */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-400"
                style={{ opacity: isActive ? 0 : 0.85 }}
              >
                <Plus className="w-10 h-10 text-primary-foreground" strokeWidth={1.2} />
              </div>

              {/* Title + description — expanded only */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                <div className="w-10 h-[2px] bg-primary-foreground/70 mb-3" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight leading-tight">
                  {topic.title}
                </h3>
                <p className="text-sm md:text-base text-primary-foreground/70 mt-2 leading-relaxed max-w-md line-clamp-2">
                  {topic.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
