'use client';

import { motion, Variants } from 'framer-motion';
import { ContactHeaderProps } from './types';

const ContactHeader: React.FC<ContactHeaderProps> = ({
  title = "Contact Us",
  subtitle = "Get in touch with us"
}) => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-[#2645B1] via-[#1e3a8a] to-[#2645B1] py-16 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ContactHeader;
