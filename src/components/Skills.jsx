import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Terminal, Layout, Server, Database, Cloud } from 'lucide-react';

export function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      skills: ["Java", "Python", "JavaScript", "C", "SQL"],
      className: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["HTML5", "CSS3", "React.js", "Bootstrap", "Tailwind CSS"],
      className: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT"],
      className: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MongoDB", "MySQL"],
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="w-6 h-6 text-primary" />,
      skills: ["AWS (EC2, S3, IAM)", "Firebase", "Git & GitHub", "Postman", "VS Code"],
      className: "md:col-span-3 lg:col-span-2"
    }
  ];

  const otherSkills = [
    "Full Stack Development", "Responsive Web Design", "API Integration", 
    "Deployment & Hosting", "Database Management", "Problem Solving", "Team Collaboration"
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="skills">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technological toolkit and expertise."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((cat, idx) => (
            <BentoCard key={idx} delay={0.1 * idx} className={`p-8 ${cat.className}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                    <span 
                    key={sIdx}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Other Skills Marquee / Badges */}
        <BentoCard delay={0.5} className="p-6 md:p-8" noHover>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_14px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 transition-all duration-300 rounded-lg px-2 py-1 cursor-default"
              >
                {skill}{' '}
                {idx < otherSkills.length - 1 && (
                  <span className="mx-2 text-slate-300 dark:text-slate-700">•</span>
                )}
              </span>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
