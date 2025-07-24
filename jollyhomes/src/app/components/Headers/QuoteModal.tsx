"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CiCalculator1 } from 'react-icons/ci';
import { GiInfo } from 'react-icons/gi';
import { IoIosSend } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote request:', formData);
    // You can add API call here
    onClose();
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
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

  const modalVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] p-6 rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                   <IoClose className="text-white text-sm" />
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <CiCalculator1 size={20}  className="text-white text-xl"></CiCalculator1>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Get Your Quote</h2>
                    <p className="text-green-100 mt-1">Tell us about your dream home project</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-600 placeholder:font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-600 placeholder:font-medium"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-600 placeholder:font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-800 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900"
                    >
                      <option value="" className="text-gray-600">Select project type</option>
                      <option value="new-construction" className="text-gray-900">New Construction</option>
                      <option value="renovation" className="text-gray-900">Home Renovation</option>
                      <option value="extension" className="text-gray-900">Home Extension</option>
                      <option value="custom-design" className="text-gray-900">Custom Design</option>
                      <option value="consultation" className="text-gray-900">Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-800 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900"
                  >
                    <option value="" className="text-gray-600">Select budget range</option>
                    <option value="under-50k" className="text-gray-900">Under $50,000</option>
                    <option value="50k-100k" className="text-gray-900">$50,000 - $100,000</option>
                    <option value="100k-250k" className="text-gray-900">$100,000 - $250,000</option>
                    <option value="250k-500k" className="text-gray-900">$250,000 - $500,000</option>
                    <option value="500k-1m" className="text-gray-900">$500,000 - $1,000,000</option>
                    <option value="over-1m" className="text-gray-900">Over $1,000,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-600 placeholder:font-medium"
                    placeholder="Tell us more about your project, timeline, specific requirements, etc."
                  />
                </div>

                {/* Info Box */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#1f5a0e] p-2 rounded-full flex-shrink-0">
                      <GiInfo size={20} className="text-white text-xs"></GiInfo>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">What happens next?</h4>
                      <ul className="text-sm text-gray-700 space-y-1 font-medium">
                        <li>• We&apos;ll review your request within 24 hours</li>
                        <li>• Schedule a free consultation call</li>
                        <li>• Provide a detailed project estimate</li>
                        <li>• Discuss timeline and next steps</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] text-white rounded-lg hover:from-[#2d7a15] hover:to-[#1f5a0e] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer flex items-center justify-center"
                  >
                    Send Quote Request
                    <IoIosSend className="text-lg ml-2" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
