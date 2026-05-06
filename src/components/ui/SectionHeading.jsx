import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        {title} <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="text-content-light/70 dark:text-content-dark/70 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
