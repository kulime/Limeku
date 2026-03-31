export const Footer = () => {
  return (
    <footer className="footer-gray">
      <div className="section-container py-16">
        {/* Contact Info & Logo Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left: Contact Info Groups */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-32">
            <div className="text-base">
              <span className="font-bold text-foreground block mb-3">Address.</span>
              <span className="text-muted-foreground leading-relaxed">
                #504 Engineering Bldg., 145 Anam-ro,<br />
                Seongbuk-gu, Seoul, 02841, Korea
              </span>
            </div>
            <div className="text-base">
              <span className="font-bold text-foreground block mb-3">Tel.</span>
              <span className="text-muted-foreground">+82-2-3290-3238</span>
            </div>
            <div className="text-base">
              <span className="font-bold text-foreground block mb-3">E-mail.</span>
              <span className="text-muted-foreground">mksong@korea.ac.kr</span>
            </div>
          </div>

          {/* Right: University Logo */}
          <div className="flex-shrink-0 self-center md:self-start">
            <img 
              src="/korealogo.png" 
              alt="Korea University Logo" 
              className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-base text-muted-foreground text-left">
            © {new Date().getFullYear()} LIME Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};