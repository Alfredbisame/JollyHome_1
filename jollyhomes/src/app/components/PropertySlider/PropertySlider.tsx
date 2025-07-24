'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { PropertySliderProps, Property } from './types';
import PropertyCard from './PropertyCard';
import NavigationButtons from './NavigationButtons';
import SlideIndicators from './SlideIndicators';

const PropertySlider: React.FC<PropertySliderProps> = ({
  properties,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  }, [properties.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  }, [properties.length]);

  const goToSlide = useCallback((index: number) => {
    const current = currentIndex;
    const target = index;
    
    // Determine direction based on target vs current
    if (target > current) {
      setDirection(1);
    } else if (target < current) {
      setDirection(-1);
    } else {
      setDirection(0);
    }
    
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleViewDetails = (property: Property) => {
    console.log('View details for:', property);
    // Implement navigation to property details page
    // router.push(`/properties/${property.id}`);
  };

  const handleToggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };
  
  // const handleShuffle = () => {
  //   const randomIndex = Math.floor(Math.random() * properties.length);
  //   setDirection(Math.random() > 0.5 ? 1 : -1);
  //   setCurrentIndex(randomIndex);
  // };
  
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsAutoPlaying(true);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || properties.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval, properties.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          setIsAutoPlaying(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!properties.length) {
    return (
      <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No properties available</p>
      </div>
    );
  }

  const currentProperty = properties[currentIndex];

  // Animation variants for sliding effect - properly typed
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
    }),
  };

  // Transition configurations
  const slideTransition = {
    x: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 30 
    },
    opacity: { 
      duration: 0.4 
    },
    scale: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    }
  };
  
  // const exitTransition = {
  //   x: { 
  //     type: "spring" as const, 
  //     stiffness: 300, 
  //     damping: 30 
  //   },
  //   opacity: { 
  //     duration: 0.3 
  //   },
  //   scale: { 
  //     duration: 0.4 
  //   }
  // };

  return (
    <div 
      className={`relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] bg-gradient-to-t from-slate-800 to-transparent overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              ...slideTransition,
              duration: 0.6
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentProperty.image}
              alt={currentProperty.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-slate-900/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Property Card */}
      <div className="absolute top-1/2 left-8 md:left-20 -translate-y-1/2 z-20">
        <AnimatePresence mode="wait">
          <PropertyCard
            key={currentProperty.id}
            property={currentProperty}
            onViewDetails={handleViewDetails}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.includes(currentProperty.id)}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        onPrevious={prevSlide}
        onNext={nextSlide}
        disabled={properties.length <= 1}
      />

      {/* Slide Indicators */}
      <SlideIndicators
        total={properties.length}
        current={currentIndex}
        onSelect={goToSlide}
      />

      {/* Auto-play Indicator */}
      {autoPlay && (
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              isAutoPlaying 
                ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/30' 
                : 'bg-gray-500/20 text-gray-100 border border-gray-400/30'
            }`}
            animate={{ scale: isAutoPlaying ? [1, 1.05, 1] : 1 }}
            transition={{ duration: 2, repeat: isAutoPlaying ? Infinity : 0 }}
          >
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </motion.div>
        </div>
      )}

      {/* Property Counter */}
      <div className="absolute bottom-16 right-4 z-20">
        <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {properties.length}
        </div>
      </div>

      {/* Slide Direction Indicator (Optional - for debugging) */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
            Direction: {direction > 0 ? '→' : direction < 0 ? '←' : '•'}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default PropertySlider;
