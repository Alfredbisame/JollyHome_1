'use client';

import { motion, Variants } from 'framer-motion';
import { PropertyListingHeaderProps } from './types';

const PropertyListingHeader: React.FC<PropertyListingHeaderProps> = ({
  title = "JOLLY HOMES PROPERTIES FOR SALE",
  subtitle = "Discover Your Dream Home",
  propertyCount = 0
}) => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="text-center mb-12">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-slate-800 font-bold text-2xl md:text-3xl lg:text-4xl mb-4 tracking-tight">
          {title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6 rounded-full" />
      </motion.div>

      <motion.div
        variants={subtitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-2"
      >
        <p className="text-slate-600 text-lg font-medium">
          {subtitle}
        </p>
        {propertyCount > 0 && (
          <p className="text-slate-500 text-sm">
            Showing {propertyCount} premium properties
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PropertyListingHeader;
