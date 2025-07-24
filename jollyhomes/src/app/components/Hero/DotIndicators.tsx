'use client';

import { motion } from 'framer-motion';

interface DotIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  onHover: (isHovering: boolean) => void;
}

const DotIndicators = ({
  totalSlides,
  currentSlide,
  onSlideSelect,
  onHover
}: DotIndicatorsProps) => {
  return (
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center space-x-1">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentSlide;
          
          return (
            <motion.button
              key={index}
              onClick={() => onSlideSelect(index)}
              className="relative group p-2 focus:outline-none"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
              aria-label={`Go to slide ${index + 1}`}
              whileTap={{ scale: 0.9 }}
            >
              {/* Main indicator */}
              <motion.div
                className="relative rounded-full overflow-hidden"
                animate={{
                  width: isActive ? 40 : 8,
                  height: 8,
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                whileHover={{
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                  scale: 1.1
                }}
              >
                {/* Active progress fill */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ 
                      duration: 5, 
                      ease: "linear",
                      repeat: Infinity 
                    }}
                  />
                )}
              </motion.div>

              {/* Glow effect */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 blur-sm"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default DotIndicators;
