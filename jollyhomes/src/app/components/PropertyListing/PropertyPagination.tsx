'use client';

import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PropertyPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PropertyPagination: React.FC<PropertyPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ""
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center space-x-2 mt-12 ${className}`}
    >
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
        className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${
          currentPage === 1
            ? 'border-gray-200 text-gray-400 cursor-not-allowed'
            : 'border-gray-300 text-gray-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600'
        }`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </motion.button>

      {/* Page Numbers */}
      {getVisiblePages().map((page, index) => (
        <motion.button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : undefined}
          disabled={typeof page !== 'number'}
          whileHover={{ scale: typeof page === 'number' ? 1.05 : 1 }}
          whileTap={{ scale: typeof page === 'number' ? 0.95 : 1 }}
          className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${
            page === currentPage
              ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg'
              : typeof page === 'number'
              ? 'border-gray-300 text-gray-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600'
              : 'border-transparent text-gray-400 cursor-default'
          }`}
        >
          {page}
        </motion.button>
      ))}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
        className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${
          currentPage === totalPages
            ? 'border-gray-200 text-gray-400 cursor-not-allowed'
            : 'border-gray-300 text-gray-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600'
        }`}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default PropertyPagination;
