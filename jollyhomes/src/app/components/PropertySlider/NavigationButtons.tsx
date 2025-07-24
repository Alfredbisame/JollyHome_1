'use client';

import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  disabled?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  disabled = false
}) => {
  return (
    <>
      {/* Previous Button */}
      <motion.button
        onClick={onPrevious}
        disabled={disabled}
        aria-label="Previous Property"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-900/20 backdrop-blur-sm text-green-500 p-3 rounded-full hover:bg-gray-900/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        disabled={disabled}
        aria-label="Next Property"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-900/20 backdrop-blur-sm text-green-500 p-3 rounded-full hover:bg-gray-900/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default NavigationButtons;
