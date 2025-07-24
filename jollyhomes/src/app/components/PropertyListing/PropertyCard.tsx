'use client';

import { motion, Variants } from 'framer-motion';
import { PropertyCardProps } from './types';
import { 
  MapPinIcon, 
  HeartIcon, 
  EyeIcon,
  HomeIcon,
  Square3Stack3DIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  className = ""
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency === '$' ? 'USD' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'For Rent':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Sold':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto group ${className}`}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.div variants={imageVariants} whileHover="hover">
          <Image
            src={property.image}
            alt={property.title}
            width={400}
            height={240}
            className="w-full h-56 object-cover"
            priority
          />
        </motion.div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <motion.button
          onClick={() => onToggleFavorite(property.id)}
          aria-label="Toggle favorite"
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer ${
            isFavorite
              ? 'bg-red-500/90 text-white shadow-lg'
              : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isFavorite ? (
            <HeartSolidIcon className="w-5 h-5" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
        </motion.button>

        {/* Featured Badge */}
        {property.featured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            Featured
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Status and Price */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusStyles(property.status)}`}>
            {property.status}
          </span>
          <span className="text-slate-800 font-bold text-xl">
            {formatPrice(property.price, property.currency)}
          </span>
        </div>

        {/* Property Title */}
        <h3 className="text-slate-800 font-bold text-lg mb-4 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
          {property.title}
        </h3>

        {/* Property Details */}
        <div className="flex items-center justify-between text-slate-500 text-sm mb-6">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4 text-slate-400" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-3 h-3 rounded border-2 border-slate-400"></div>
            </div>
            <span>{property.baths} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square3Stack3DIcon className="w-4 h-4 text-slate-400" />
            <span>{property.sqft} m²</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-100 px-6 py-4 bg-gray-50/50">
        <div className="flex items-center space-x-2 text-slate-500 text-sm">
          <MapPinIcon className="w-4 h-4 text-slate-400" />
          <span className="truncate">{property.location}</span>
        </div>
        <motion.button
          onClick={() => onViewDetails(property)}
          className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <EyeIcon className="w-4 h-4" />
          <span>View</span>
        </motion.button>
      </div>
    </motion.article>
  );
};

export default PropertyCard;
