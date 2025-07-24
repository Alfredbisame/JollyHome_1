'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GalleryModalProps } from './types';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  image,
  images,
  currentIndex,
  onNext,
  onPrevious
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={onPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>

            <div className="relative max-w-full max-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                priority
              />
            </div>


            {/* Image Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
                <div className="text-sm text-gray-300">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
