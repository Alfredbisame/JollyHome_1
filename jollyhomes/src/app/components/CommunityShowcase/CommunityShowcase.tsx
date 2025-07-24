'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CommunityShowcaseProps } from './types';
import CommunityImage from './CommunityImage';
import CommunityContent from './CommunityContent';
import CommunityStats from './CommunityStats';
import CommunityAmenities from './CommunityAmenities';
import ScheduleVisitModal from './ScheduleVisitModal';

const CommunityShowcase: React.FC<CommunityShowcaseProps> = ({
  community,
  className = "",
  onLearnMore,
  onViewProperties
}) => {
  const router = useRouter();
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const handleViewProperties = () => {
    router.push('/gallery');
  };

  const handleScheduleVisit = () => {
    setIsScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Hero Section */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 max-w-2xl">
              <CommunityImage
                src={community.image}
                alt={community.imageAlt}
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <CommunityContent
                community={community}
                onLearnMore={onLearnMore}
                onViewProperties={onViewProperties}
              />
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"
            />
          </div>
        </div>
      </motion.main>

      {/* Community Stats Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CommunityStats className="bg-white" />
      </motion.div>

      {/* Community Amenities Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CommunityAmenities />
      </motion.div>

      {/* Optional: Call to Action Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Ready to Make {community.name} Your Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of families who have already chosen to call our community home. 
            Experience the perfect blend of comfort, luxury, and affordability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleViewProperties}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 font-semibold py-4 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200 shadow-lg cursor-pointer"
            >
              View Available Properties
            </motion.button>
            <motion.button
              onClick={handleScheduleVisit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-emerald-600 transition-colors duration-200 cursor-pointer"
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        isOpen={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
      />
    </div>
  );
};

export default CommunityShowcase;
