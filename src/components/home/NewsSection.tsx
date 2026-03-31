import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    day: '09',
    month: '02',
    year: '2026',
    category: 'Notice',
    title: 'Welcome to LIME Lab',
    description: 'We are officially launching our web platform to share our latest breakthroughs in next-generation semiconductor technologies and intelligent electronics.',
  },
];

export const NewsSection = () => {
  return (
    <div className="flex flex-col h-full">
      {/* News Items - aligned to top with Gallery */}
      <div className="flex-1 space-y-0">
        {newsItems.map((item, index) => (
          <Link
            key={index}
            to="/board?tab=news"
            className="group flex gap-6 py-6 border-b border-border hover:bg-secondary/30 transition-colors -mx-4 px-4"
          >
            {/* Date Column */}
            <div className="flex-shrink-0 w-20 text-center">
              <span className="block text-4xl font-light text-foreground leading-none">
                {item.day}
              </span>
              <span className="block text-sm text-accent font-medium mt-1">
                {item.year}.{item.month}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-accent">
                  [{item.category}]
                </span>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link - Bottom Right */}
      <div className="pt-4 flex justify-end">
        <Link 
          to="/board?tab=news" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          View All News <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
