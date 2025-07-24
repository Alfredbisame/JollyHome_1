'use client';

import { motion, Variants } from 'framer-motion';
import { AgentSignupContent } from './AgentSignupContent';
import { AgentSignupButton } from './AgentSignupButton';

interface AgentSignupBannerProps {
  className?: string;
}

const AgentSignupBanner: React.FC<AgentSignupBannerProps> = ({
  className = ""
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`bg-gradient-to-r from-emerald-500 to-emerald-600 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full transform -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <AgentSignupContent />
          <AgentSignupButton />
        </div>
      </div>
    </motion.section>
  );
};

export default AgentSignupBanner;
