import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  tabId: string;
  number: string;
  className?: string;
  isVisible?: boolean;
}

export const ResearchCard = ({ title, image, tabId, number, className, isVisible = true }: ResearchCardProps) => {
  return (
    <Link
      to={`/research?tab=${tabId}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-muted transition-all duration-[400ms] ease-in-out hover:scale-[1.03] hover:shadow-xl",
        isVisible ? "animate-slide-up-fade" : "opacity-0",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay — darkens on hover for title readability */}
        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/50 transition-all duration-[400ms]" />

        {/* Index number — top right */}
        <span className="absolute top-6 right-6 text-6xl md:text-6xl font-bold text-primary-foreground/90 leading-none tracking-tighter drop-shadow-md">
          {number}
        </span>

        {/* Plus icon — bottom center, fades out on hover */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-[400ms] group-hover:opacity-0">
          <Plus className="w-8 h-8 text-primary-foreground/80" strokeWidth={1.5} />
        </div>

        {/* Title — hidden by default, fades in on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-in-out">
          <div className="w-10 h-[2px] bg-primary-foreground/70 mb-3" />
          <h3 className="text-lg md:text-xl font-bold text-primary-foreground tracking-tight leading-snug">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
