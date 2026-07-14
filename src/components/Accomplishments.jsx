import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Trophy, Award, Medal, X, Eye } from 'lucide-react';

export function Accomplishments() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const achievements = [
    {
      title: "Top 10 / 148 Teams",
      desc: "CIT Paper Presentation Event",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Hack24 Participant",
      desc: "24-hour Hackathon by Dr. NGP Institute of Engineering",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: "Round 2 Shortlist",
      desc: "MSME Hackathon",
      icon: <Medal className="w-6 h-6 text-secondary" />
    }
  ];

  const certifications = [
    { 
      name: "Guidewire DEVTrails University Hackathon 2026 – Certificate of Participation", 
      issuer: "Guidewire DEVTrails (in partnership with EY & National Insurance Academy)", 
      year: "2026",
      certificate: "/guidewire.jpeg"
    },
    { 
      name: "Introduction to Cloud Infrastructure: Describe Cloud Concepts", 
      issuer: "Microsoft", 
      year: "2026",
      certificate: "/MS cloud.png"
    },
    { 
      name: "Introduction to Cloud Infrastructure: Describe Azure Architecture and Services", 
      issuer: "Microsoft", 
      year: "2026",
      certificate: "/MS.png"
    },
    { 
      name: "Design Thinking – A Primer", 
      issuer: "NPTEL (IIT Madras)", 
      year: "2026",
      certificate: "/nptel.png"
    },
    { 
      name: "Python for Beginners", 
      issuer: "Sololearn", 
      year: "2025" 
    },
    { 
      name: "Python for Beginners", 
      issuer: "Infosys Springboard", 
      year: "2025",
      certificate: "/infosis.png"
    },
    { 
      name: "Mastering Data Structures and Algorithms using C and C++", 
      issuer: "Udemy", 
      year: "2025",
      certificate: "/udemy ds.png"
    },
    { 
      name: "Master Full-Stack Web Development", 
      issuer: "Udemy", 
      year: "2025" 
    },
    { 
      name: "Introduction to C", 
      issuer: "SoloLearn", 
      year: "2024",
      certificate: "/sololearn c.png"
    },
    { 
      name: "C Spoken Tutorial Training", 
      issuer: "IIT Bombay", 
      year: "2024",
      certificate: "/c.png"
    },
    { 
      name: "C++ Spoken Tutorial Training", 
      issuer: "IIT Bombay", 
      year: "2024",
      certificate: "/cpp.png"
    }
  ];

  return (
    <section className="py-24" id="accomplishments">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Achievements & Certifications" 
          subtitle="Milestones, hackathons, and continuous learning."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="text-primary" /> Achievements
            </h3>
            {achievements.map((item, idx) => (
              <BentoCard key={idx} delay={0.1 * idx} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" /> Certifications
            </h3>
            <BentoCard delay={0.3} className="p-8" noHover>
              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 group/cert-item"
                  >
                    <span className="text-xs font-bold text-primary mb-1">{cert.year}</span>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2 transition-colors duration-300 group-hover/cert-item:text-slate-900 dark:group-hover/cert-item:text-white">{cert.name}</h4>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                      {cert.certificate && (
                        <button 
                          onClick={() => setSelectedCert(cert)}
                          className="text-xs font-semibold px-2.5 py-1.5 bg-slate-100 hover:bg-primary dark:bg-slate-800 dark:hover:bg-primary text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 flex items-center gap-1 shrink-0 cursor-pointer"
                        >
                          <Eye size={12} /> View
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-2 flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-black/55 hover:bg-black/75 text-white rounded-full backdrop-blur-md transition-colors z-50 cursor-pointer animate-none"
              >
                <X size={20} />
              </button>
              
              <img 
                src={selectedCert.certificate} 
                alt={selectedCert.name} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
