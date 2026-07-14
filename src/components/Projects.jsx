import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { ExternalLink, X, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "gigshield",
      title: "GigShield",
      subtitle: "AI-Powered Parametric Insurance Platform",
      desc: "GigShield is an AI-powered parametric insurance platform built for gig workers, providing real-time risk assessment, personalized premium estimation, and automated claim processing using machine learning and cloud technologies. The platform helps workers access affordable, transparent, and instant insurance coverage through an intuitive dashboard.",
      image: "/gig.png",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Python (ML Service)"],
      github: "https://github.com/shivanir0210/gig-workers-project.git",
      liveDemo: "https://gig-workers-project.vercel.app/",
      features: [
        "AI-based premium calculation",
        "Real-time risk monitoring",
        "Automated claim processing",
        "Policy & coverage management",
        "Interactive analytics dashboard"
      ],
      featured: true
    },
    {
      id: "crimesphere-ai",
      title: "CrimeSphere AI",
      subtitle: "Conversational AI & Crime Analytics Platform",
      desc: "CrimeSphere AI is an AI-powered crime analytics platform that assists law enforcement with intelligent crime investigation, hotspot prediction, criminal network analysis, multilingual AI assistance, and real-time crime insights through an interactive dashboard.",
      image: "/crimesphere ai.png",
      tags: ["React.js", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "Gemini API"],
      github: "https://github.com/shivanir0210/crime_sphere_Ai.git",
      features: [
        "AI Crime Assistant",
        "Criminal Network Analysis",
        "Crime Hotspot Prediction",
        "Case Summary Generation",
        "Law Enforcement Dashboard"
      ]
    },
    {
      id: "medico",
      title: "Medico",
      subtitle: "AI-Powered Wellness & Mindfulness Platform",
      desc: "A wellness platform with meditation tracking, breathing exercises, mood analytics, AI assistant integration, reward systems, wellness guilds, and community engagement.",
      image: "/medico.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API", "WebRTC"],
      github: "https://github.com/shivanir0210/medico-project.git",
      features: [
        "AI wellness assistant",
        "Meditation tracking",
        "Webcam breathing exercise",
        "Mood analytics",
        "Rewards & guild system",
        "Modern responsive dashboard"
      ]
    },
    {
      id: "trash-here",
      title: "Trash Here",
      subtitle: "Smart Waste Management App",
      desc: "A smart waste management application with waste reporting, real-time tracking, eco rewards, Google Maps integration, recycling support, and sustainability engagement.",
      image: "/trash.png",
      tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Google Maps API"],
      github: "https://github.com/shivanir0210/trash-here.git",
      features: [
        "Waste reporting",
        "Real-time tracking",
        "Recycling support",
        "Eco reward system",
        "Analytics dashboard"
      ]
    },
    {
      id: "quick-bite",
      title: "Quick Bite",
      subtitle: "Full-Stack Food Ordering Application",
      desc: "A full-stack food ordering application built with Spring Boot and React.js, featuring restaurant management, menu browsing, order placement, and user authentication with PostgreSQL as the database.",
      image: "/food.png",
      tags: ["Spring Boot", "React.js", "PostgreSQL", "JPA/Hibernate", "REST APIs", "JWT"],
      github: "https://github.com/MahaAswin/Quick_Bite.git",
      features: [
        "User authentication & authorization",
        "Restaurant & menu management",
        "Order placement & tracking",
        "REST API backend",
        "PostgreSQL database integration"
      ]
    },
    {
      id: "atm-theft",
      title: "ATM Theft Detection",
      subtitle: "IoT Security System",
      desc: "An IoT-based ATM security system using vibration sensors, GPS tracking, ESP32-CAM surveillance, real-time alerts, and automated locking mechanisms.",
      image: "/atm.png",
      tags: ["NodeMCU (ESP8266)", "ESP32-CAM", "GPS Module", "Embedded C", "IoT"],
      features: [
        "Theft detection",
        "Real-time alerts",
        "Camera surveillance",
        "GPS tracking",
        "Auto locking mechanism"
      ]
    }
  ];

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my recent work, highlighting problem-solving skills and technical execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <BentoCard 
              key={project.id} 
              delay={0.1 * idx} 
              className={`group cursor-pointer ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''} hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20`}
              spotlight={true}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 md:h-80 w-full mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                
                {/* Image Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-primary hover:bg-primary/95 text-white rounded-xl font-medium text-sm flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-350 ease-out hover:scale-105 shadow-md shadow-primary/20"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-slate-900/80 hover:bg-slate-900 border border-white/20 text-white rounded-xl font-medium text-sm flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-350 ease-out hover:scale-105 shadow-md"
                    >
                      <FaGithub size={16} /> View Source
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent z-10" />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg z-10">
                    <Star size={16} className="fill-white" /> Flagship Project
                  </div>
                )}

                <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 relative inline-block">
                    {project.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_0_8px_rgba(16,185,129,0.5)] cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span 
                        key="more"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_0_8px_rgba(16,185,129,0.5)] cursor-default"
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-content-light/80 dark:text-content-dark/80 line-clamp-2">
                {project.desc}
              </p>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background-dark/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-surface-light dark:bg-surface-dark w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="relative h-64 md:h-96 w-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-xl text-primary font-medium mb-6">{selectedProject.subtitle}</p>
                
                <p className="text-lg text-content-light/80 dark:text-content-dark/80 mb-8 leading-relaxed">
                  {selectedProject.desc}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Star size={20} className="text-primary" /> Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-content-light/80 dark:text-content-dark/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Star size={20} className="text-primary" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium">
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Button>
                        <ExternalLink size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Live Demo
                      </Button>
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Button variant={selectedProject.liveDemo ? "secondary" : "primary"}>
                        <FaGithub size={20} className="transition-transform duration-300 group-hover:rotate-12" /> View Source
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
