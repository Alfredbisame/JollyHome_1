'use client';

import { motion, Variants } from 'framer-motion';

interface PropertyLoadingSkeletonProps {
  count?: number;
  className?: string;
}

const PropertyLoadingSkeleton: React.FC<PropertyLoadingSkeletonProps> = ({
  count = 3,
  className = ""
}) => {
  const skeletonVariants: Variants = {
    loading: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          variants={skeletonVariants}
          animate="loading"
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Image Skeleton */}
          <div className="w-full h-56 bg-gray-200" />
          
          {/* Content Skeleton */}
          <div className="p-6">
            {/* Status and Price */}
            <div className="flex justify-between items-center mb-4">
              <div className="w-20 h-6 bg-gray-200 rounded-full" />
              <div className="w-24 h-6 bg-gray-200 rounded" />
            </div>

            {/* Title */}
            <div className="w-full h-6 bg-gray-200 rounded mb-4" />

            {/* Property Details */}
            <div className="flex justify-between mb-6">
              <div className="w-16 h-4 bg-gray-200 rounded" />
              <div className="w-16 h-4 bg-gray-200 rounded" />
              <div className="w-16 h-4 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t border-gray-100 px-6 py-4 bg-gray-50/50">
            <div className="w-32 h-4 bg-gray-200 rounded" />
            <div className="w-16 h-8 bg-gray-200 rounded-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PropertyLoadingSkeleton;
