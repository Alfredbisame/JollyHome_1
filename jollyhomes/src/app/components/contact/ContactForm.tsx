'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ContactFormProps, ContactFormData } from './types';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const inputClasses = (fieldName: keyof ContactFormData) => `
    bg-[#F3F5F8] rounded-lg border-2 transition-all duration-300 px-4 py-3 text-sm text-[#26405B] placeholder-gray-400
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
      : 'border-transparent focus:border-[#2645B1] focus:ring-2 focus:ring-blue-200'
    }
    hover:bg-gray-50 focus:bg-white focus:outline-none
  `;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-[#26405B] font-bold text-2xl mb-2 text-center md:text-left">
          Send us a Message
        </h3>
        <p className="text-gray-600 mb-8 text-center md:text-left">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="flex flex-col">
          <label className="text-[#26405B] font-semibold text-sm mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            className={inputClasses('name')}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.name}
            </motion.span>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col">
          <label className="text-[#26405B] font-semibold text-sm mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            className={inputClasses('email')}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.email}
            </motion.span>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col">
          <label className="text-[#26405B] font-semibold text-sm mb-2" htmlFor="subject">
            Subject *
          </label>
          <input
            className={inputClasses('subject')}
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What&apos;s this about?"
          />
          {errors.subject && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.subject}
            </motion.span>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col">
          <label className="text-[#26405B] font-semibold text-sm mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            className={inputClasses('phone')}
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.phone}
            </motion.span>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:col-span-2">
          <label className="text-[#26405B] font-semibold text-sm mb-2" htmlFor="message">
            Message *
          </label>
          <textarea
            className={`${inputClasses('message')} resize-none`}
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.message}
            </motion.span>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg px-8 py-4 text-sm font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <PaperAirplaneIcon className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.section>
  );
};

export default ContactForm;
