'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AgentSignupModal from './AgentSignupModal';

interface AgentSignupButtonProps {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const AgentSignupButton: React.FC<AgentSignupButtonProps> = ({
  onClick,
  loading = false,
  disabled = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      <motion.button
        variants={buttonVariants}
        onClick={handleButtonClick}
        disabled={disabled || loading}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        className={`
          group relative bg-white text-slate-800 font-semibold text-sm 
          rounded-full px-8 py-3 shadow-lg hover:shadow-xl 
          transition-all duration-300 flex items-center gap-2
          ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 cursor-pointer'}
        `}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>Sign Up Today</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </>
        )}
        
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
      </motion.button>

      {/* Agent Signup Modal */}
      <AgentSignupModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export { AgentSignupButton };
