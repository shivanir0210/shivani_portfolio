import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 group cursor-default"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 relative inline-block">
        {title} <span className="text-primary">.</span>
        <span className="absolute -bottom-1.5 left-0 w-8 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
      </h2>
      {subtitle && (
        <p className="text-content-light/70 dark:text-content-dark/70 text-lg max-w-2xl mt-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
