import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { BentoCard } from './ui/BentoCard';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    
    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Strict check to prevent fake success messages
      if (!serviceId || !templateId || !publicKey || serviceId.includes('your_service_id')) {
        throw new Error("EmailJS credentials are not configured properly.");
      }

      // Explicitly map formData to match exact EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Use emailjs.send instead of sendForm for better data control
      const response = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams, 
        {
          publicKey: publicKey,
        }
      );

      console.log('EmailJS Success:', response.status, response.text);
      
      // Only show success after confirmed response
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error Response:', error);
      const errorMsg = error?.text || error?.message || "Please try again later.";
      toast.error("EmailJS Error: " + errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <BentoCard delay={0.1} className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6 flex-1">
                <ContactItem 
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  value="shivanirasappan@gmail.com"
                  href="mailto:shivanirasappan@gmail.com"
                />
                <ContactItem 
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  value="9363742006"
                  href="tel:9363742006"
                />
                <ContactItem 
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  value="Available Worldwide"
                />
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-500 mb-4">SOCIAL PROFILES</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/shivanir0210" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/shivani-r-498851333" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Contact Form */}
          <BentoCard delay={0.2} className="lg:col-span-3 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-sm font-medium transition-colors group-focus-within:text-primary">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-sm font-medium transition-colors group-focus-within:text-primary">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label htmlFor="subject" className="text-sm font-medium transition-colors group-focus-within:text-primary">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="message" className="text-sm font-medium transition-colors group-focus-within:text-primary">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full md:w-auto mt-4" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending... <Loader2 size={18} className="ml-2 animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} className="ml-2" /></>
                )}
              </Button>
            </form>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, href }) {
  const content = (
    <>
      <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h4>
        <p className="font-medium text-slate-800 dark:text-slate-200">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 -ml-2 rounded-xl transition-colors">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-2 -ml-2">
      {content}
    </div>
  );
}
