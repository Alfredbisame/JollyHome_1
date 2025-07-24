'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSlide: number;
  duration?: number;
}

const ProgressBar = ({ currentSlide, duration = 5 }: ProgressBarProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
      <motion.div
        className="h-full bg-green-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration, 
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0
        }}
        key={currentSlide}
      />
    </div>
  );
};

export default ProgressBar;
