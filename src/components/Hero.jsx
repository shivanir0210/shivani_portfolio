import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/Button';

export function Hero() {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "IoT & Cloud Enthusiast",
    "Problem Solver"
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  // Resume PDF path
  const resumeUrl = "/resume/resume-shivani.pdf";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Intro */}
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide">
                Hello, I'm
              </p>

              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                Shivani R <span className="text-primary">.</span>
              </h1>

              <div className="h-10 mt-2">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300"
                >
                  {titles[titleIndex]}
                </motion.p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-content-light/80 dark:text-content-dark/80 max-w-xl leading-relaxed">
              Passionate developer specializing in building scalable MERN stack
              applications, innovative IoT systems, and user-centric digital
              experiences. Always eager to solve real-world problems through
              clean code and modern technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center">

              {/* Download Resume */}
              <a
                href={resumeUrl}
                download="Shivani_Resume.pdf"
                className="group"
              >
                <Button className="hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-shadow duration-300">
                  <Download
                    size={20}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  Download Resume
                </Button>
              </a>

              {/* View Resume */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="secondary"
                  className="hover:border-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 group"
                >
                  <Eye
                    size={20}
                    className="group-hover:text-primary transition-colors"
                  />
                  View Resume
                </Button>
              </a>

              {/* Contact Button */}
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:bg-primary/5 transition-colors"
              >
                Contact Me <ArrowRight size={20} />
              </Button>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">

              <SocialLink
                href="https://github.com/shivanir0210"
                icon={<FaGithub size={24} />}
              />

              <SocialLink
                href="https://www.linkedin.com/in/shivani-r-498851333"
                icon={<FaLinkedin size={24} />}
              />

              <SocialLink
                href="mailto:shivanirasappan@gmail.com"
                icon={<Mail size={24} />}
              />

            </div>
          </motion.div>

          {/* Right Image / Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >

            {/* Profile Image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass-card p-2 z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Shivani R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <FloatingBadge
              className="-top-4 -left-8 md:top-10 md:left-0"
              title="250+"
              subtitle="LeetCode"
              delay={0}
            />

            <FloatingBadge
              className="top-1/4 -right-10 md:top-32 md:-right-4"
              title="MERN Stack"
              subtitle="Intern"
              delay={1}
            />

            <FloatingBadge
              className="bottom-1/4 -left-12 md:bottom-32 md:-left-8"
              title="1000+"
              subtitle="SkillRack"
              delay={2}
            />

            <FloatingBadge
              className="-bottom-8 right-0 md:bottom-10 md:right-10"
              title="AWS & IoT"
              subtitle="Enthusiast"
              delay={3}
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
    >
      {icon}
    </a>
  );
}

function FloatingBadge({ title, subtitle, className, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay
      }}
      className={`absolute z-20 glass-card px-4 py-3 rounded-2xl shadow-xl ${className}`}
    >
      <p className="font-bold text-lg md:text-xl text-primary">
        {title}
      </p>

      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    </motion.div>
  );
}