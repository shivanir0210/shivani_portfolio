import { cn } from './BentoCard';

export function Button({ children, variant = 'primary', className, ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    secondary: "bg-surface-light dark:bg-surface-dark border-2 border-primary/20 text-content-light dark:text-content-dark hover:border-primary/50",
    outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
