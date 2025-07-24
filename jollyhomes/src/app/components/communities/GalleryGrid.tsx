'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryGridProps } from './types';
import { staggerContainer, imageVariants, scaleOnHover } from './animations';
import { EyeIcon, StarIcon } from '@heroicons/react/24/outline';

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={imageVariants}
          whileHover="hover"
          role="button"
          tabIndex={0}
          aria-label={image.title ? `View details for ${image.title}` : 'View details'}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none"
          onClick={() => onImageClick(image)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick(image);
            }
          }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <motion.div variants={scaleOnHover}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:scale-105 transition-transform duration-300" />
            
            {/* Featured Badge */}
            {image.featured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center space-x-1"
              >
                <StarIcon className="w-3 h-3" />
                <span>Featured</span>
              </motion.div>
            )}
            
            {/* View Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <EyeIcon className="w-5 h-5 text-gray-700" />
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors duration-200">
              {image.title}
            </h3>
            <p className="text-sm text-gray-500 capitalize">
              {image.category}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
