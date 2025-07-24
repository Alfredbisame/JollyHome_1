'use client';

import { motion } from 'framer-motion';
import { GalleryProject } from './types';
import { fadeInUp } from './animations';

interface GalleryStatsProps {
  project: GalleryProject;
}

const GalleryStats: React.FC<GalleryStatsProps> = ({ project }) => {
  const stats = [
    {
      label: 'Total Images',
      value: project.images.length,
      icon: '📸'
    },
    {
      label: 'Completion Year',
      value: project.completionYear,
      icon: '📅'
    },
    {
      label: 'Total Units',
      value: project.totalUnits,
      icon: '🏠'
    },
    {
      label: 'Location',
      value: project.location,
      icon: '📍'
    }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryStats;
