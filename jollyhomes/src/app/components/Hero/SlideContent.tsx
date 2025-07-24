'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HeroSlide } from './types';

interface SlideContentProps {
  slide: HeroSlide;
  onButtonHover: (isHovering: boolean) => void;
}

const SlideContent = ({ slide, onButtonHover }: SlideContentProps) => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/communities');
  };

  return (
    <motion.div
      key={`content-${slide.id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm sm:text-base md:text-lg text-gray-200 mb-2 font-light tracking-wide"
      >
        {slide.subtitle}
      </motion.p>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-center leading-tight"
      >
        {slide.title}
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)" 
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-gray-800 text-sm sm:text-base md:text-lg font-semibold rounded-xl px-8 py-2 cursor-pointer sm:px-10 sm:py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg backdrop-blur-sm"
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        onClick={handleCTAClick}
      >
        {slide.ctaText}
      </motion.button>
    </motion.div>
  );
};

export default SlideContent;
