import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Briefcase, Calendar, Users } from 'lucide-react';

export function Experience() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="experience">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Experience & Leadership" 
          subtitle="Professional journey and community engagement roles."
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rampex Internship */}
          <BentoCard delay={0.1} className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
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
          <BentoCard delay={0.2} className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
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
            
            <div className="flex flex-wrap gap-2">
               {["React", "Node.js", "Express", "MongoDB", "Architecture", "Optimization"].map((tag, idx) => (
                 <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </BentoCard>

          {/* Event Coordination */}
          <BentoCard delay={0.2} className="p-8">
             <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-xl shrink-0">
                <Users className="w-8 h-8 text-secondary" />
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
    </section>
  );
}
