'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CommunityContentProps } from './types';
import { 
  MapPinIcon, 
  HomeIcon, 
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CommunityContent: React.FC<CommunityContentProps> = ({
  community,
}) => {
  const router = useRouter();

  const handleViewProperties = () => {
    router.push('/gallery');
  };

  const handleContactSales = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-2xl"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8"
      >
        <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-4">
          <MapPinIcon className="w-5 h-5 text-emerald-500" />
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wide">
            {community.location}
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
        >
          {community.title}
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-slate-600 ml-2 text-sm">4.9 (127 reviews)</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 mb-8"
      >
        {community.description.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="text-slate-700 leading-relaxed text-lg font-serif italic"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* Features */}
      {community.features && community.features.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-xl font-semibold text-slate-900 mb-4"
          >
            Key Features
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {community.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Price Range */}
      {community.priceRange && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 mb-8 border border-emerald-100"
        >
          <div className="flex items-center space-x-2 mb-2">
            <HomeIcon className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-semibold">Starting From</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: community.priceRange.currency,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(community.priceRange.min)}
            {community.priceRange.max && (
              <span className="text-lg text-slate-600 font-normal">
                {' '}- {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: community.priceRange.currency,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(community.priceRange.max)}
              </span>
            )}
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.button
          variants={itemVariants}
          onClick={handleViewProperties}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center space-x-2 bg-emerald-500 text-white font-semibold py-4 px-8 rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-lg group cursor-pointer"
        >
          <span>View Properties</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
        
        <motion.button
          variants={itemVariants}
          onClick={handleLearnMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center space-x-2 border-2 border-emerald-500 text-emerald-600 font-semibold py-4 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200 cursor-pointer"
        >
          <span>Learn More</span>
        </motion.button>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200"
      >
        <p className="text-slate-600 text-sm text-center">
          Need more information? 
          <button 
            onClick={handleContactSales}
            className="text-emerald-600 font-semibold hover:text-emerald-700 ml-1 cursor-pointer"
          >
            Contact our sales team
          </button>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CommunityContent;
