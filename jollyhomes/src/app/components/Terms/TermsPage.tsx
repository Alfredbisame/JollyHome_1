'use client';

import { motion } from 'framer-motion';
import TermsHeader from './TermsHeader';
import TermsContent from './TermsContent';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';

const TermsPage: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50"
    >
      <TermsHeader />
      <motion.main 
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      >
        <TermsContent />
      </motion.main>
    </motion.div>
  );
};

export default TermsPage; 