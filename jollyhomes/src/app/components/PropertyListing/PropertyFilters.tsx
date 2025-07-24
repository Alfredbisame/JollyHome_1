'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface FilterState {
  search: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  status: string;
}

interface PropertyFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
  className?: string;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  onFiltersChange,
  className = ""
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    status: ''
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      search: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      beds: '',
      status: ''
    };
    setFilters(clearedFilters);
    onFiltersChange?.(clearedFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8 ${className}`}
    >
      {/* Basic Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">All Locations</option>
            <option value="Greater Accra, Oyarifa">Greater Accra, Oyarifa</option>
            <option value="Kumasi">Kumasi</option>
            <option value="Tema">Tema</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="relative">
          <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">Min Price</option>
            <option value="50000">$50,000</option>
            <option value="75000">$75,000</option>
            <option value="100000">$100,000</option>
            <option value="150000">$150,000</option>
          </select>
        </div>

        {/* Advanced Filters Toggle */}
        <motion.button
          onClick={() => setShowAdvanced(!showAdvanced)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center space-x-2 px-4 py-3 border border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
        >
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
          <span>Filters</span>
        </motion.button>
      </div>

      {/* Advanced Filters */}
      <motion.div
        initial={false}
        animate={{ height: showAdvanced ? 'auto' : 0, opacity: showAdvanced ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          {/* Max Price */}
          <select
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">Max Price</option>
            <option value="100000">$100,000</option>
            <option value="150000">$150,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000+</option>
          </select>

          {/* Bedrooms */}
          <select
            value={filters.beds}
            onChange={(e) => handleFilterChange('beds', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bedroom</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>

          {/* Status */}
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">All Status</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
            <option value="Sold">Sold</option>
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex justify-end mt-4">
          <motion.button
            onClick={clearFilters}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
          >
            Clear All Filters
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyFilters;
