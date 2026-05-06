import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Button } from './Button';

export function ResumeModal({ isOpen, onClose, resumeUrl }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background-dark/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className="bg-surface-light dark:bg-surface-dark w-full h-full sm:w-[95vw] sm:h-[95vh] flex flex-col sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold">Resume</h3>
            <div className="flex items-center gap-4">
              {resumeUrl && (
                <a href={resumeUrl} download="Shivani_Resume.pdf">
                  <Button variant="primary" className="py-2 px-4 text-sm flex items-center shadow-lg hover:shadow-primary/40 transition-shadow">
                    <Download size={16} /> Download PDF
                  </Button>
                </a>
              )}
              <button 
                onClick={onClose}
                className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-all duration-300 hover:rotate-90 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 w-full h-full bg-slate-200 dark:bg-slate-800 relative">
            {resumeUrl ? (
              <iframe 
                src={`${resumeUrl}#toolbar=0`} 
                title="Resume PDF"
                className="w-full h-full border-none"
              />
            ) : (
              <div className="flex items-center justify-center h-full flex-col gap-4">
                <p className="text-slate-500">No resume uploaded yet.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
