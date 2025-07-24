'use client';

import { motion } from 'framer-motion';
import AboutUsHeader from './AboutUsHeader';
import AboutUsContent from './AboutUsContent';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';

const AboutUsPage: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <AboutUsHeader />
      <motion.main 
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      >
        <AboutUsContent />
      </motion.main>
    </motion.div>
  );
};

export default AboutUsPage;
