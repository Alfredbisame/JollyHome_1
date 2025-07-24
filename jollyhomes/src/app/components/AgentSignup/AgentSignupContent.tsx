'use client';

import { motion, Variants } from 'framer-motion';
import { UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const AgentSignupContent: React.FC = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "backOut" as const
      }
    }
  };

  return (
    <motion.div
      variants={contentVariants}
      className="text-white max-w-md flex-1"
    >
      <div className="flex items-center gap-3 mb-2">
        <motion.div
          variants={iconVariants}
          className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"
        >
          <UserGroupIcon className="w-5 h-5 text-white" />
        </motion.div>
        <h2 className="font-bold text-xl leading-tight">
          Want To Become A Real Estate Agent?
        </h2>
      </div>
      
      <div className="flex items-start gap-2">
        <ChartBarIcon className="w-4 h-4 text-emerald-200 mt-0.5 flex-shrink-0" />
        <p className="text-emerald-100 text-sm font-medium leading-relaxed">
          We&apos;ll help you grow your career and unlock new opportunities in real estate.
        </p>
      </div>
    </motion.div>
  );
};

export { AgentSignupContent };
