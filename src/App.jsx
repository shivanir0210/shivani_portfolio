import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Accomplishments } from './components/Accomplishments';
import { Profiles } from './components/Profiles';
import { Contact } from './components/Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      <Toaster 
        position="top-right"
        containerStyle={{
          top: 20,
          right: 20,
          zIndex: 9999,
        }}
        toastOptions={{
          className: 'dark:bg-slate-800 dark:text-white shadow-xl',
          style: {
            background: 'var(--bg-color)',
            color: 'var(--text-color)',
            borderRadius: '1rem',
            padding: '16px',
            border: '1px solid rgba(16, 185, 129, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: 'white',
            },
          },
        }}
      />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Accomplishments />
        <Profiles />
        <Contact />
      </main>

      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shivani R. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shivanir0210" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:-translate-y-1 transform duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shivani-r-498851333" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:-translate-y-1 transform duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
