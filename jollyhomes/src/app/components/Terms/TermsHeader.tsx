'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, fadeInUp } from '@/app/lib/animations';

const TermsHeader: React.FC = () => {
  return (
    <motion.header 
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="relative bg-gradient-to-r from-[#0f172a] via-[#2563eb] to-[#06b6d4] py-16 px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1 
          variants={fadeInUp}
          className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-cyan-100 italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Please read our terms and conditions carefully before using Jolly B Homes services.
        </motion.p>
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto mt-8"
        />
      </div>
    </motion.header>
  );
};

export default TermsHeader; 