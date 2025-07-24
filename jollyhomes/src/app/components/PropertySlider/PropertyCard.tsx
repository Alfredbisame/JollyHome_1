'use client';

import { motion, Variants } from 'framer-motion';
import { PropertyCardProps } from './types';
import { 
  MapPinIcon, 
  HeartIcon, 
  // ArrowPathIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const PropertyCard: React.FC<Omit<PropertyCardProps, 'onShuffle'>> = ({
  property,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false
}) => {
  const formatPrice = (price: number) => {
    // Always use Ghanaian cedis (₵) for formatting
    return `₵${price.toLocaleString('en-GH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-gray-200 text-gray-400 cursor-not-allowed';
      case 'For Rent':
        return 'bg-blue-100 text-blue-600';
      case 'Sold':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-200 text-gray-400';
    }
  };

  // Card animation variants - properly typed
  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
    },
    exit: { 
      opacity: 0, 
      x: -30,
      scale: 0.95,
    }
  };

  // Stagger animation for card content
  const contentVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
    }
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {}
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }}
      className="bg-white rounded-lg shadow-lg p-1 sm:p-2 md:p-4 max-w-[95vw] sm:max-w-sm md:max-w-md w-full backdrop-blur-sm flex flex-col"
    >
      {/* Property Image (mobile-first) */}
      <div className="relative w-full h-20 sm:h-32 md:h-48 rounded-lg overflow-hidden mb-2">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          priority={false}
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.3
        }}
      >
        {/* Status Badges */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-1 mb-2"
        >
          <button
            className={`text-xs font-semibold rounded px-3 py-1 ${getStatusStyles(property.status)}`}
            disabled={property.status === 'For Sale'}
          >
            {property.status}
          </button>
          {property.featured && (
            <button className="bg-emerald-500 text-white text-xs font-semibold rounded px-3 py-1">
              Featured
            </button>
          )}
        </motion.div>

        {/* Property Title */}
        <motion.h3 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-bold text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg mb-1 line-clamp-2"
        >
          {property.title}
        </motion.h3>

        {/* Location */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center text-gray-500 text-[10px] sm:text-xs md:text-sm mb-2 gap-1"
        >
          <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="capitalize">{property.location}</span>
        </motion.div>

        {/* Property Details */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-between text-gray-600 text-[10px] sm:text-xs md:text-sm mb-2 gap-y-1"
        >
          <span>Beds: {property.beds}</span>
          <span>Bath: {property.baths}</span>
          <span>Sqft: {property.sqft} m²</span>
        </motion.div>

        {/* Price and Actions */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between mb-2 gap-1"
        >
          <span className="text-emerald-500 font-semibold text-base sm:text-lg md:text-xl">
            {formatPrice(property.price)}
          </span>
          <motion.button
            onClick={() => onToggleFavorite(property.id)}
            aria-label="Favorite"
            className={`p-2 rounded border transition-colors ${
              isFavorite
                ? 'border-red-300 text-red-500 hover:border-red-400'
                : 'border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isFavorite ? (
              <HeartSolidIcon className="w-4 h-4" />
            ) : (
              <HeartIcon className="w-4 h-4" />
            )}
          </motion.button>
        </motion.div>

        {/* View Details Button */}
        <motion.button
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => onViewDetails(property)}
          className="w-full bg-emerald-500 text-white text-xs sm:text-sm md:text-base font-semibold rounded px-3 py-2 hover:bg-emerald-600 transition-colors flex items-center justify-center cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
          <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
