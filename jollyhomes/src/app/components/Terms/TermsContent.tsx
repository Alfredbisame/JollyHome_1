'use client';

import { motion } from 'framer-motion';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/app/lib/animations';

const TermsContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Title */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-400">
          Legal Notice
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Terms & Conditions of Use
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
      </motion.div>

      {/* Main Content Section */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Card Section */}
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-none shadow-xl">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By accessing or using Jolly B Homes services, you agree to be bound by these terms and all applicable laws and regulations. If you do not agree, please do not use our services.
            </p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-none shadow-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">User Responsibilities</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Respect the rights and privacy of other users.</li>
              <li>Do not misuse or abuse the platform.</li>
            </ul>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-none shadow-xl">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Intellectual Property</h3>
            <p className="text-gray-700">
              All content, trademarks, and data on this site are the property of Jolly B Homes or its licensors. Unauthorized use is strictly prohibited.
            </p>
          </Card>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600 mb-2">Privacy</div>
            <div className="text-gray-600">Your data is handled with utmost care. See our Privacy Policy for details.</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 mb-2">Updates</div>
            <div className="text-gray-600">Terms may change. Continued use means acceptance of any updates.</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600 mb-2">Contact</div>
            <div className="text-gray-600">Questions? Contact us at <a href="mailto:info@jollybhomes.com" className="text-blue-600 underline">info@jollybhomes.com</a></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsContent; 