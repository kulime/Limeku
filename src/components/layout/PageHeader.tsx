import heroImage from '@/assets/hero-bg.jpg';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section 
      className="page-header"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="page-header-content section-container text-center">
        <h1 className="page-title mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-center animate-fade-in max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
