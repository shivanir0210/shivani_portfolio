import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function BentoCard({ children, className, delay = 0, noHover = false, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={cn(
        "glass-card rounded-3xl p-6 md:p-8 overflow-hidden relative group",
        !noHover && "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Hover glow effect */}
      {!noHover && (
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
