"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import QuoteModal from './QuoteModal';
import { IoCall } from 'react-icons/io5';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/communities', label: 'Communities' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About us' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-[#1f5a0e] to-[#2d7a15] p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"
              >
                <i className="fas fa-home text-white text-xl"></i>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1f5a0e] tracking-tight group-hover:text-[#2d7a15] transition-colors duration-200">
                  JollyHome
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Your Dream Home
                </span>
              </div>
            </Link>
                     
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-8 text-sm font-medium text-[#2B3A67]">
                {navItems.map((item) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative py-2 px-1 transition-colors duration-200 group ${
                          isActive 
                            ? 'text-[#1f5a0e] font-semibold' 
                            : 'hover:text-[#1f5a0e]'
                        }`}
                      >
                        {item.label}
                        <span 
                          className={`absolute bottom-0 left-0 h-0.5 bg-[#1f5a0e] transition-all duration-300 ${
                            isActive 
                              ? 'w-full' 
                              : 'w-0 group-hover:w-full'
                          }`}
                        ></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openQuoteModal}
                className="hidden md:flex items-center space-x-2 bg-[#1f5a0e] hover:bg-[#2d7a15] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <IoCall className="text-sm" />
                <span>Get Quote</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="md:hidden p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 relative z-50 group"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center relative"
                >
                  {/* Menu Icon - Three Dots */}
                  <motion.div
                    variants={{
                      closed: { 
                        opacity: 1,
                        scale: 1
                      },
                      open: { 
                        opacity: 0,
                        scale: 0
                      }
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-1.5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#1f5a0e] rounded-full group-hover:bg-[#2d7a15] transition-colors duration-200"></div>
                    <div className="w-1.5 h-1.5 bg-[#1f5a0e] rounded-full group-hover:bg-[#2d7a15] transition-colors duration-200"></div>
                    <div className="w-1.5 h-1.5 bg-[#1f5a0e] rounded-full group-hover:bg-[#2d7a15] transition-colors duration-200"></div>
                  </motion.div>
                  
                  {/* Close Icon - X */}
                  <motion.div
                    variants={{
                      closed: { 
                        opacity: 0,
                        scale: 0,
                        rotate: -90
                      },
                      open: { 
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      }
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-0.5 bg-[#1f5a0e] rounded-full rotate-45 group-hover:bg-[#2d7a15] transition-colors duration-200"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-0.5 bg-[#1f5a0e] rounded-full -rotate-45 group-hover:bg-[#2d7a15] transition-colors duration-200"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#1f5a0e]/10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isMobileMenuOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        onQuoteClick={openQuoteModal}
        currentPath={pathname}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
};

export default Navbar;
