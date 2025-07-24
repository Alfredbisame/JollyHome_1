'use client';

import { motion } from 'framer-motion';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  total,
  current,
  onSelect
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      {Array.from({ length: total }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            index === current
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/75'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
