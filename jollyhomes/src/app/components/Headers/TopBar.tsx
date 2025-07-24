'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import WishListButton from '@/app/components/WishList/WishListButton';

const TopBar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('GHS');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currencies = [
    { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleCurrencySelect = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency);

  return (
    <div className="bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] text-white text-sm shadow-sm relative z-50">
      <div className="max-w-screen-xl mx-auto flex justify-end items-center h-12 px-4 space-x-6">
        {/* Wishlist */}
        <WishListButton />

        {/* Currency Selector with Dropdown */}
        <div className="relative z-[9999]" ref={dropdownRef}>
          <motion.div
            className="flex items-center space-x-2 cursor-pointer select-none group transition-all duration-200 hover:bg-white/10 px-3 py-2 z-999 my-4 rounded-md"
            onClick={toggleDropdown}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium group-hover:text-gray-100 transition-colors duration-200">
              {selectedCurrencyData?.symbol} {selectedCurrency}
            </span>
              <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDownIcon className="w-3 h-3 text-white group-hover:text-gray-100 transition-colors duration-200" />
            </motion.div>
          </motion.div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 z-[9998]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-[9999] overflow-hidden"
                  style={{ 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
                  }}
                >
                  {/* Header */}
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Select Currency
                    </p>
                  </div>

                  {/* Currency Options */}
                  <div className="py-1">
                    {currencies.map((currency, index) => (
                      <motion.div
                        key={currency.code}
                        className={`px-4 py-3 cursor-pointer transition-all duration-150 flex items-center justify-between ${
                          selectedCurrency === currency.code
                            ? 'bg-green-50 text-green-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => handleCurrencySelect(currency.code)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          backgroundColor: selectedCurrency === currency.code ? '#f0fdf4' : '#f9fafb',
                          x: 4
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-medium flex items-center space-x-2">
                              <span className="text-lg">{currency.symbol}</span>
                              <span>{currency.code}</span>
                            </div>
                            <div className="text-xs text-gray-500">{currency.name}</div>
                          </div>
                        </div>
                        {selectedCurrency === currency.code && (
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Account */}
        {/* <div className="hidden md:flex items-center space-x-2 cursor-pointer select-none group transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-md">
          <i className="fas fa-user text-blue-300 group-hover:text-blue-200 transition-colors duration-200"></i>
          <span className="font-medium group-hover:text-gray-100 transition-colors duration-200">
            Account
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
