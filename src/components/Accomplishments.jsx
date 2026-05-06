import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Trophy, Award, Medal } from 'lucide-react';

export function Accomplishments() {
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
    { name: "Python for Beginners", issuer: "Sololearn", year: "2025" },
    { name: "Python for Beginners", issuer: "Infosys Springboard", year: "2025" },
    { name: "Mastering Data Structures and Algorithms using C and C++", issuer: "Udemy", year: "2025" },
    { name: "Master Full-Stack Web Development", issuer: "Udemy", year: "2025" },
    { name: "Introduction to C", issuer: "Sololearn", year: "2024" },
    { name: "C++ Spoken Tutorial Training", issuer: "IIT Bombay", year: "2024" },
    { name: "C Spoken Tutorial Training", issuer: "IIT Bombay", year: "2024" }
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
            <BentoCard delay={0.3} className="p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex flex-col p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold text-primary mb-1">{cert.year}</span>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">{cert.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-auto">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
