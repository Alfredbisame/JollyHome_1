'use client';

import { motion, Variants } from 'framer-motion';
import { StepCardProps } from './types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOut cubic-bezier
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
        delay: index * 0.2 + 0.3,
        ease: [0.68, -0.55, 0.265, 1.55] // backOut cubic-bezier
      }
    }
  };

  const arrowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2 + 0.5
      }
    }
  };

  return (
    <div className="flex items-center">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center group relative"
      >
        {/* Step Number Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.3 }}
          className="absolute -top-3 -left-3 bg-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-10 shadow-lg"
        >
          {step.id}
        </motion.div>

        {/* Icon Container */}
        <motion.div
          variants={iconVariants}
          className={`${step.bgColor} rounded-3xl w-28 h-28 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
          whileHover={{ 
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.2 }
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={step.icon}
              alt={`${step.title} icon`}
              width={40}
              height={40}
              className={`${step.iconColor} drop-shadow-sm`}
            />
          </motion.div>
        </motion.div>

        {/* Step Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.2 + 0.4, 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="font-bold text-gray-800 text-base mb-2 text-center group-hover:text-emerald-600 transition-colors duration-300"
        >
          {step.title}
        </motion.h3>

        {/* Step Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.2 + 0.5, 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-gray-600 text-sm text-center max-w-xs leading-relaxed"
        >
          {step.description}
        </motion.p>
      </motion.div>

      {/* Arrow Separator */}
      {!isLast && (
        <motion.div
          variants={arrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-8 hidden lg:block"
        >
          <div className="flex items-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: [0.42, 0, 0.58, 1] // easeInOut cubic-bezier
              }}
              className="text-emerald-500"
            >
              <ChevronRightIcon className="w-8 h-8 font-bold" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StepCard;
