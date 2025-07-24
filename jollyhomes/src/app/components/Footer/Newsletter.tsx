'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { itemVariants } from './animations';

interface NewsletterProps {
  delay?: number;
}

const Newsletter: React.FC<NewsletterProps> = ({ delay = 0 }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <motion.div 
      className="space-y-4"
      variants={itemVariants}
      custom={delay}
    >
      <motion.h3 
        className="text-white font-semibold text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Stay Updated
      </motion.h3>
      
      <motion.p 
        className="text-sm mb-4 text-[#8a8f9f]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Subscribe to get the latest property updates and news.
      </motion.p>

      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-[#3a4056] text-white placeholder-[#8a8f9f] 
                     focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300
                     border border-transparent focus:border-white/10"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting || isSubscribed}
          className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 
                     flex items-center justify-center gap-2 cursor-pointer ${
            isSubscribed 
              ? 'bg-green-600 text-white' 
              : 'bg-white text-[#2c314b] hover:bg-gray-100'
          } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          whileHover={!isSubmitting && !isSubscribed ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting && !isSubscribed ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-[#2c314b] border-t-transparent rounded-full animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : isSubscribed ? (
            <span>✓ Subscribed!</span>
          ) : (
            <>
              <span>Subscribe</span>
              <PaperAirplaneIcon className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export { Newsletter };
