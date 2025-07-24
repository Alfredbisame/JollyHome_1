'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { heroSlides } from './data';
import { useAutoPlay } from '@/app/Hooks/useAutoPlay';
import SlideImage from './SlideImage';
import SlideContent from './SlideContent';
import NavigationArrows from './NavigationArrows';
import DotIndicators from './DotIndicators';
import ProgressBar from './ProgressBar';
import Iridescence from './Iridescence';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleHover = (isHovering: boolean) => {
    setIsAutoPlaying(!isHovering);
  };

  // Auto-play hook
  useAutoPlay({
    isPlaying: isAutoPlaying,
    totalSlides: heroSlides.length,
    onNext: nextSlide
  });
  
  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh] overflow-hidden">
     <Iridescence
      color={[1, 1, 1]}
      mouseReact={false}
      amplitude={0.1}
      speed={1.0}
    />
      {/* Background Container */}
      <div className="absolute inset-0 bg-white/10 overflow-hidden">
        <AnimatePresence mode="wait">
          <SlideImage 
            slide={heroSlides[currentSlide]} 
            isActive={true}
          />
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
        <SlideContent 
          slide={heroSlides[currentSlide]}
          onButtonHover={handleHover}
        />
      </div>

      {/* Navigation Controls */}
      <NavigationArrows
        onPrevious={prevSlide}
        onNext={nextSlide}
        onHover={handleHover}
      />

      {/* Dot Indicators */}
      <DotIndicators
        totalSlides={heroSlides.length}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
        onHover={handleHover}
      />

      {/* Progress Bar */}
      <ProgressBar currentSlide={currentSlide} />
    </div>
  );
};

export default HeroCarousel;
