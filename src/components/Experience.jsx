import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Briefcase, Calendar, Users, Award, ExternalLink, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Experience() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCertOpen(false);
      }
    };
    if (isCertOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCertOpen]);
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="experience">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Experience & Leadership" 
          subtitle="Professional journey and community engagement roles."
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rampex Internship */}
          <BentoCard delay={0.1} className="p-8 hover:shadow-primary/5 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <Briefcase className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Spring Boot Development Intern</h3>
                <p className="text-lg text-primary font-medium">Rampex Technologies</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} /> Summer Internship
                </div>
              </div>
            </div>
            
            <p className="text-content-light/80 dark:text-content-dark/80 leading-relaxed mb-6">
              Worked as a Spring Boot Development Intern developing full-stack applications using Spring Boot, React.js, PostgreSQL, JPA/Hibernate, and REST APIs. Gained hands-on experience in backend development, database integration, frontend development, API implementation, and collaborative software development using Git and GitHub.
            </p>
            
            <div className="flex flex-wrap gap-2">
               {["Spring Boot", "React.js", "PostgreSQL", "JPA/Hibernate", "REST APIs", "Git"].map((tag, idx) => (
                 <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </BentoCard>

          {/* iGenuine Internship */}
          <BentoCard delay={0.2} className="p-8 hover:shadow-primary/5 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <Briefcase className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MERN Stack Intern</h3>
                <p className="text-lg text-primary font-medium">iGenuine Solutions Pvt. Ltd.</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} /> Winter Internship
                </div>
              </div>
            </div>
            
            <p className="text-content-light/80 dark:text-content-dark/80 leading-relaxed mb-6">
              Worked on real-world full-stack application development involving frontend design, backend logic, workflow optimization, and database integration. Developed scalable systems and improved productivity through efficient architecture and secure data handling.
            </p>

            <Button 
              variant="secondary" 
              className="py-2 px-4 text-sm gap-1.5 mb-6"
              onClick={() => setIsCertOpen(true)}
            >
              <Award size={16} /> View Certificate
            </Button>
            
            <div className="flex flex-wrap gap-2">
               {["React", "Node.js", "Express", "MongoDB", "Architecture", "Optimization"].map((tag, idx) => (
                 <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </BentoCard>

          {/* Event Coordination */}
          <BentoCard delay={0.2} className="p-8 hover:shadow-secondary/5 group">
             <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-xl shrink-0 transition-all duration-300 group-hover:bg-secondary/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Users className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Event Coordinator</h3>
                <p className="text-lg text-secondary font-medium">Thiran Cultural Fest</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} /> AR/VR Workshop
                </div>
              </div>
            </div>
            
            <p className="text-content-light/80 dark:text-content-dark/80 leading-relaxed mb-6">
              Led the coordination of the AR/VR workshop. Handled event planning, technical coordination, participant management, and workshop execution. Demonstrated strong leadership, communication, and organizational skills.
            </p>
            
            <div className="flex flex-wrap gap-2">
               {["Leadership", "Event Planning", "Communication", "Management", "Execution"].map((tag, idx) => (
                 <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setIsCertOpen(false)}
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
                onClick={() => setIsCertOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/55 hover:bg-black/75 text-white rounded-full backdrop-blur-md transition-colors z-50 cursor-pointer animate-none"
              >
                <X size={20} />
              </button>
              
              <img 
                src="/intern.png" 
                alt="MERN Stack Internship Certificate" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
