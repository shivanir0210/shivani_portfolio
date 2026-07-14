import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function BentoCard({ children, className, delay = 0, noHover = false, onClick, spotlight = false }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.08), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      className={cn(
        "glass-card rounded-3xl p-6 md:p-8 overflow-hidden relative group transition-all duration-350 ease-out",
        !noHover && "hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/10",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Spotlight Effect */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ background }}
        />
      )}

      {/* Hover glow border effect */}
      {!noHover && (
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-300 pointer-events-none z-0" />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
