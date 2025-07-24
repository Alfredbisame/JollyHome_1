'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeroSlide } from './types';

interface SlideImageProps {
  slide: HeroSlide;
  isActive: boolean;
}

const SlideImage = ({ slide, isActive }: SlideImageProps) => {
  if (!isActive) return null;

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="relative w-full max-w-7xl h-full rounded-sm overflow-hidden shadow-2xl">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default SlideImage;
