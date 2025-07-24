'use client';

import { motion } from 'framer-motion';

const GalleryLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Header Skeleton */}
      <div className="relative bg-gradient-to-r from-[#203ea7] via-[#2563eb] to-[#1d4ed8] py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 bg-white/20 rounded-lg mx-auto mb-4 max-w-md"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="h-6 bg-white/20 rounded-lg mx-auto max-w-lg"
          />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="h-12 w-32 bg-gray-200 rounded-lg my-4"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Info Skeleton */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gray-100 rounded-2xl p-6 mb-8 h-32"
        />

        {/* Stats Skeleton */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-8 bg-gray-200 rounded mb-2" />
                <div className="h-6 bg-gray-200 rounded mb-1" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] bg-gray-200" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryLoading;
