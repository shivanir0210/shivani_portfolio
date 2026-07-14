import { BentoCard } from './ui/BentoCard';
import { SectionHeading } from './ui/SectionHeading';
import { Code, GitCommit, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

export function Profiles() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="profiles">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Coding Profiles" 
          subtitle="Problem solving and active open source contributions."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LeetCode */}
          <BentoCard delay={0.1} className="p-8 hover:shadow-yellow-500/5 group">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl transition-all duration-300 group-hover:bg-yellow-500/20 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] shrink-0">
                  <Code className="w-8 h-8 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LeetCode</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Competitive Programming</p>
                </div>
              </div>
              <a 
                href="https://leetcode.com/u/Shivani_0210/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-3xl font-bold text-yellow-500 mb-1">300+</p>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Problems Solved</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">405,060</p>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Global Rank</p>
              </div>
            </div>
          </BentoCard>

          {/* SkillRack */}
          <BentoCard delay={0.2} className="p-8 hover:shadow-primary/5 group">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] shrink-0">
                  <Code className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SkillRack</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Coding Platform</p>
                </div>
              </div>
              <a 
                href="https://www.skillrack.com/faces/resume.xhtml?id=515495&key=6eca1987b9916e88ff300a520908c003a6a14f0d" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-2xl font-bold text-primary mb-1">1000+</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Problems</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">280+</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Bronze Badges</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">5</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Certificates</p>
              </div>
            </div>
          </BentoCard>

          {/* GitHub Stats */}
          <BentoCard delay={0.3} className="lg:col-span-2 p-8 hover:shadow-primary/5 group">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-white transition-all duration-300 group-hover:bg-slate-700 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0">
                    <GitCommit className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">GitHub Contributions</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Continuous open source activity</p>
                  </div>
                </div>
                <p className="max-w-xl text-content-light/80 dark:text-content-dark/80 mb-6">
                  Check out my GitHub profile to see my latest commits, repositories, and open-source contributions. I believe in consistent coding and sharing solutions with the community.
                </p>
                <Button onClick={() => window.open('https://github.com/shivanir0210', '_blank')}>
                  View GitHub Profile
                </Button>
              </div>
              
              <div className="w-full md:w-auto relative group">
                 {/* This uses a reliable generic github stats generator image */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                 <img 
                   src="https://ghchart.rshah.org/10B981/shivanir0210" 
                   alt="GitHub Contributions" 
                   className="relative bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-800 w-full md:w-[400px]"
                 />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
