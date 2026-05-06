import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Code2, Cpu, Cloud, Lightbulb } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "MERN Stack",
      desc: "Building scalable web applications"
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "IoT Systems",
      desc: "Hardware-software integration"
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: "Cloud Tech",
      desc: "AWS & Firebase deployments"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Problem Solving",
      desc: "AI-powered innovative solutions"
    }
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="About Me" 
          subtitle="A glimpse into my passion, background, and what drives my development journey."
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <BentoCard className="lg:col-span-2 p-8 md:p-10" delay={0.1}>
            <div className="text-lg text-content-light/80 dark:text-content-dark/80 leading-relaxed">
              <p className="mb-6">
                I am a passionate <strong className="text-primary font-semibold">Full Stack Developer</strong> with a strong foundation in modern web technologies and a keen interest in solving real-world problems. I enjoy building applications that are both functional and user-friendly, while continuously learning new technologies to improve my skills and broaden my technical knowledge.
              </p>
              <p className="mb-6">
                My technical journey spans across the <strong className="text-primary font-semibold">MERN stack</strong>, cloud technologies, IoT systems, and AI-powered applications. I have experience developing responsive frontend interfaces using React and Tailwind CSS, creating scalable backend systems with Node.js and Express, and working with databases and cloud platforms to build efficient full-stack solutions.
              </p>
              <p>
                Beyond web development, I am also interested in innovation-driven projects involving IoT and smart systems. From integrating sensors and automation technologies to developing AI-powered applications, I strive to create impactful and high-quality solutions that solve practical challenges and deliver meaningful user experiences.
              </p>
            </div>
          </BentoCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <BentoCard key={idx} delay={0.2 + (idx * 0.1)} className="flex items-center gap-4 p-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
