'use client';

import { motion } from 'framer-motion';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  onHover: (isHovering: boolean) => void;
}

// Custom Arrow Icons
const LeftArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavigationArrows = ({ onPrevious, onNext, onHover }: NavigationArrowsProps) => {
  return (
    <div>
      {/* Previous Arrow */}
      <motion.button
        onClick={onPrevious}
        className="group absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 focus:outline-none cursor-pointer"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Outer ring */}
          <motion.div
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-white/30 to-white/20 shadow-2xl"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.6)",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner circle */}
            <motion.div
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-green-500"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                scale: 1.1
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <LeftArrowIcon />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.button>

      {/* Next Arrow */}
      <motion.button
        onClick={onNext}
        className="group absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 focus:outline-none cursor-pointer"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Outer ring */}
          <motion.div
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 shadow-2xl"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.6)",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner circle */}
            <motion.div
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-green-500"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                scale: 1.1
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <RightArrowIcon />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.button>
    </div>
  );
};

export default NavigationArrows;
