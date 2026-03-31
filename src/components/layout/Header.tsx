import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; tab: string }[];
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { 
    label: 'MEMBERS', 
    path: '/members',
    subItems: [
      { label: 'Professor', tab: 'professor' },
      { label: 'Current Members', tab: 'current' },
      { label: 'Alumni', tab: 'alumni' },
    ]
  },
  { 
    label: 'RESEARCH', 
    path: '/research',
    subItems: [
      { label: 'AI Hardware', tab: 'ai-hardware' },
      { label: '3D Integration', tab: '3d-integration' },
      { label: 'Bio-inspired\nElectronics', tab: 'bio-electronics' },
    ]
  },
  { 
    label: 'PUBLICATION', path: '/publication',
  },
  { 
    label: 'BOARD', 
    path: '/board',
    subItems: [
      { label: 'News', tab: 'news' },
      { label: 'Gallery', tab: 'gallery' },
    ]
  },
  { label: 'CONTACT', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.search]);

  const handleNavClick = () => {
    // Scroll to top on any nav click
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubItemClick = (path: string, tab: string) => {
    navigate(`${path}?tab=${tab}`);
    setOpenDropdown(null);
  };

  // Apply transparent header on ALL pages initially, solid on scroll
  const headerBg = !isScrolled 
    ? 'bg-transparent' 
    : 'bg-background border-b border-border';
  
  // Text is light when header is transparent (over hero), dark when solid
  const textColor = !isScrolled 
    ? 'text-primary-foreground' 
    : 'text-foreground';

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        headerBg
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleNavClick}
            className={cn(
              'flex items-center gap-3 text-2xl font-bold tracking-tighter transition-colors',
              textColor
            )}
          >
            <img 
              src="/logo.png" 
              alt="LIME logo" 
              className="h-9 w-9 object-contain"
            />
            LIME
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-14">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative flex justify-center"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={cn(
                    'nav-link tracking-wide inline-flex items-center gap-1',
                    textColor,
                    location.pathname === item.path && 'active'
                  )}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown 
                      size={14} 
                      className={cn(
                        'transition-transform duration-200',
                        openDropdown === item.path && 'rotate-180'
                      )} 
                    />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.subItems && (
                  <div 
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                      openDropdown === item.path 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    )}
                  >
                    <div className="bg-background border border-border rounded-md shadow-lg w-[160px] py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.tab}
                          to={`${item.path}?tab=${subItem.tab}`}
                          className="block w-full text-center py-2.5 px-3 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors whitespace-pre-line leading-snug"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn('lg:hidden p-2', textColor)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border transition-all duration-300',
          isMobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="section-container py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={cn(
                    'text-foreground text-base font-medium py-2 block transition-colors hover:text-accent',
                    location.pathname === item.path && 'text-accent'
                  )}
                >
                  {item.label}
                </Link>
                {/* Mobile Sub Items */}
                {item.subItems && (
                  <div className="pl-4 border-l border-border ml-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.tab}
                        to={`${item.path}?tab=${subItem.tab}`}
                        className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
