import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { cn } from '@/lib/utils';
import { ExternalLink, GraduationCap, Briefcase } from 'lucide-react';
import professorImage from '@/assets/professor.jpg';
import hwang from '@/assets/hwang.jpg';
import kim from '@/assets/kim.png';

interface MemberProps {
  name: string;
  role: string;
  image?: string;
  email?: string;
  researchField?: string;
}

const professor = {
  name: 'Prof. Min-Kyu Song',
  title: 'Principal Investigator',
  department: 'Assistant Professor, School of Electrical Engineering, Korea University',
  bio: 'Professor Song leads the LIME laboratory, focusing on neuromorphic computing, 3D integration, and bio-inspired electronic devices. He has authored numerous high-impact papers in leading journals and maintains active research partnerships with global experts in the field.',
  image: professorImage,
  googleScholar: 'https://scholar.google.com/citations?user=r5YzxIgAAAAJ&hl=ko&oi=ao',
  education: [
    { period: '2015.03 - 2021.08', degree: 'Ph.D., School of Integrated Technology, Yonsei University (Advisor: Prof. Jang-Yeon Kwon)' },
    { period: '2008.03 - 2015.02', degree: 'B.S., School of Electrical and Electronic Engineering, Yonsei University' },
  ],
  career: [
    { period: '2025.03 - Current', position: 'Assistant Professor, School of Electrical Engineering, Korea University' },
    { period: '2021.09 - 2025.02', position: 'Postdoc. Researcher, Research Laboratory of Electronics, Massachusetts Institute of Technology (MIT) (Advisor: Prof. Jeehwan Kim)' },
  ],
};

const currentMembers: MemberProps[] = [
  { name: 'Gyeong-Hun Hwang', role: 'Integrated M.S. & Ph.D. student', email: 'ghhwang12@korea.ac.kr', researchField: 'Oxide Channel based Ferroelectric Devices', image: hwang},
  { name: 'Yeong-In Kim', role: 'M.S. Student', email: 'yeonginkim1325@korea.ac.kr', researchField: '2D Material Devices'},
];

const alumni: MemberProps[] = [
  //{ name: 'Dr. Sung-Woo Lee', role: 'Samsung Electronics (2024)' },
];

const MemberCard = ({ name, role, email, image, researchField }: MemberProps) => (
  <div className="member-card p-4 sm:p-6 text-center animate-fade-in min-h-[240px] sm:min-h-[280px] flex flex-col items-center border border-border rounded-lg bg-background hover:shadow-md transition-all duration-300">
    <div className="w-20 h-20 sm:w-36 sm:h-44 mx-auto mb-3 sm:mb-4 squared-xl bg-white overflow-hidden flex-shrink-0">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover transform-gpu backface-hidden" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl font-semibold text-muted-foreground">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
      )}
    </div>
    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base break-words w-full">{name}</h3>
    <p className="text-xs sm:text-sm text-muted-foreground mb-1 break-words w-full">{role}</p>
    <div className="min-h-5 sm:h-6 flex items-center">
      {researchField ? (
        <p className="text-xs text-accent font-medium break-words">{researchField}</p>
      ) : (
        <span className="text-xs text-transparent">—</span>
      )}
    </div>
    <div className="min-h-4 sm:h-5 flex items-center">
      {email ? (
        <a 
          href={`mailto:${email}`} 
          className="text-xs text-muted-foreground hover:text-accent hover:underline transition-colors break-all"
        >
          {email}
        </a>
      ) : (
        <span className="text-xs text-transparent">—</span>
      )}
    </div>
  </div>
);

const sections = [
  { id: 'professor', label: 'Professor' },
  { id: 'current', label: 'Current Members' },
  { id: 'alumni', label: 'Alumni' },
];

const Members = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState('professor');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && sections.find(s => s.id === tabParam)) {
      setActiveSection(tabParam);
    }
  }, [searchParams]);

  return (
    <Layout>
      {/* Page Header with Hero Background */}
      <PageHeader title="Members" subtitle="Meet our research team" />

      {/* Sub-navigation */}
      <section className="sub-tab-bar border-b border-border sticky top-20 z-40">
        <div className="section-container">
          <div className="flex justify-center gap-8 md:gap-12 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
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

      {/* Professor Section */}
      {activeSection === 'professor' && (
        <section className="section-padding-tight bg-background" key="professor">
          <div className="section-container">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Professor</h2>

            {/* Professor Card */}
            <div className="bg-secondary/20 border border-border rounded-lg overflow-hidden animate-fade-in">
              <div className="flex flex-col lg:flex-row">
                {/* Photo */}
                <div className="lg:w-[360px] flex-shrink-0">
                  <div className="aspect-[3/4] lg:aspect-auto lg:h-full bg-secondary">
                    {professor.image ? (
                      <img src={professor.image} alt={professor.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl font-semibold text-muted-foreground min-h-[400px]">
                        MKS
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{professor.name}</h3>
                  <p className="text-accent font-medium mb-1">{professor.title}</p>
                  <p className="text-muted-foreground text-sm mb-8">{professor.department}</p>
                  
                  <p className="text-foreground/80 leading-loose mb-10">{professor.bio}</p>
                  
                  {/* Education Section */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                      <GraduationCap size={18} className="text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Education</h4>
                    </div>
                    <ul className="space-y-4">
                      {professor.education.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="text-muted-foreground font-medium whitespace-nowrap">{item.period}</span>
                          <span className="text-foreground">{item.degree}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Academic Career Section */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                      <Briefcase size={18} className="text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Academic Career</h4>
                    </div>
                    <ul className="space-y-4">
                      {professor.career.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="text-muted-foreground font-medium whitespace-nowrap">{item.period}</span>
                          <span className="text-foreground">{item.position}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />
                  
                  {/* Google Scholar Button - Bottom Right with margin from edge */}
                  <div className="flex justify-end pb-2">
                    <a 
                      href={professor.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:border-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      Google Scholar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Current Members Section */}
      {activeSection === 'current' && (
        <section className="section-padding-tight bg-secondary/30" key="current">
          <div className="section-container">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Current Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {currentMembers.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Alumni Section */}
      {activeSection === 'alumni' && (
        <section className="section-padding-tight bg-background" key="alumni">
          <div className="section-container">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {alumni.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Members;
