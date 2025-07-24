"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoHome, IoClose, IoChevronForward, IoCall } from 'react-icons/io5';

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onQuoteClick: () => void;
  currentPath: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  onQuoteClick,
  currentPath
}) => {
  // Prevent body scroll when mobile menu is open
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

  const handleLinkClick = () => {
    onClose();
  };

  const handleQuoteClick = () => {
    onClose();
    onQuoteClick();
  };

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const menuVariants: Variants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const overlayVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: {
      x: -50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  const containerVariants: Variants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
          
          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-85 max-w-[90vw] bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[#1f5a0e] to-[#2d7a15] p-2 rounded-lg shadow-md">
                    <IoHome className="text-white text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#1f5a0e] tracking-tight">
                      JollyHome
                    </span>
                    <span className="text-xs text-gray-500 -mt-1">
                      Your Dream Home
                    </span>
                  </div>
                </div>
                               
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <IoClose className="text-gray-600 text-lg" />
                </button>
              </div>

              {/* Navigation Items */}
              <motion.div
                variants={containerVariants}
                initial="closed"
                animate="open"
                className="flex-1 px-6 py-8"
              >
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = isActiveLink(item.href);
                    return (
                      <motion.li key={item.href} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-4 py-4 px-4 rounded-xl transition-all duration-200 group relative ${
                            isActive 
                              ? 'bg-[#1f5a0e]/10 text-[#1f5a0e] border-l-4 border-[#1f5a0e]' 
                              : 'hover:bg-gray-50 hover:text-[#1f5a0e]'
                          }`}
                        >
                          <div 
                            className={`w-2 h-2 rounded-full transition-opacity duration-200 ${
                              isActive 
                                ? 'bg-[#1f5a0e] opacity-100' 
                                : 'bg-[#1f5a0e] opacity-0 group-hover:opacity-100'
                            }`}
                          ></div>
                          <span 
                            className={`text-lg font-medium transition-colors duration-200 ${
                              isActive 
                                ? 'text-[#1f5a0e] font-semibold' 
                                : 'text-[#2B3A67] group-hover:text-[#1f5a0e]'
                            }`}
                          >
                            {item.label}
                          </span>
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto"
                            >
                              <IoChevronForward className="text-[#1f5a0e] text-sm" />
                            </motion.div>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile CTA Button */}
                <motion.div variants={itemVariants} className="mt-8">
                  <button
                    onClick={handleQuoteClick}
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <IoCall className="text-sm" />
                    <span>Get Quote</span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div
                variants={itemVariants}
                className="p-6 border-t border-gray-100 bg-gray-50"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Ready to build your dream home?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Contact us today for a free consultation
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
