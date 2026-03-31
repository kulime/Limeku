import { PageHeader } from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';
import { useInView } from '@/hooks/useInView';

const Contact = () => {
  const [joinRef, joinInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return <Layout>
      {/* Page Header with Hero Background */}
      <PageHeader title="Contact" subtitle="Get in touch with LIME Lab" />

      {/* Contact Info & Map - KAIST Style Vertical Layout */}
      <section className="section-padding bg-background animate-fade-in">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Main Grid: Map + Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border overflow-hidden">
              {/* Map - Takes more space */}
              <div className="lg:col-span-3 h-[400px] lg:h-auto min-h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8104390146736!2d127.02328092643084!3d37.58308117317825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbd005b753081%3A0x39343fd82979ff54!2z6rOg66Ck64yA7ZWZ6rWQIOqzte2Vmeq0gA!5e0!3m2!1sko!2skr!4v1770542511591!5m2!1sko!2skr" width="100%" height="100%" style={{
                border: 0,
                minHeight: '400px'
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LIME Lab Location" />
              </div>

              {/* Contact Details - Structured Vertical Layout */}
              <div className="lg:col-span-2 bg-secondary/30 p-8 lg:p-10 flex flex-col justify-center">
                {/* Office */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Office</h3>
                  <p className="text-foreground leading-relaxed">
                    Room 504, Engineering Building<br />
                    Korea University<br />
                    145 Anam-ro, Seongbuk-gu<br />
                    Seoul 02841, Republic of Korea
                  </p>
                </div>

                {/* Number */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Number</h3>
                  <p className="text-foreground">
                    Lab: +82-2-3290-3238
                  </p>
                </div>

                {/* Mail */}
                <div>
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Mail</h3>
                  <a href="mailto:mksong@korea.ac.kr" className="text-foreground hover:text-accent transition-colors">
                    mksong@korea.ac.kr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section - Prominent Call to Action */}
      <section className="section-padding bg-secondary/50">
        <div ref={joinRef} className={`section-container transition-all duration-700 ${joinInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Join Our Lab</h2>
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                Highly motivated candidates for PhD or postdoctoral positions are encouraged to contact Professor Min-Kyu Song.
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg">Preferred Qualifications:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Experience in 2D material synthesis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Hands-on experience in transistor/memory device processing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 text-primary" />
                    <span>Simulation tools relevant to semiconductor device physics and/or neural networks.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Please attach your curriculum vitae and academic transcripts (PhD candidates) to your email correspondence.
              </p>

              <p className="font-semibold text-muted-foreground mt-4">
                Email: mksong@korea.ac.kr
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;