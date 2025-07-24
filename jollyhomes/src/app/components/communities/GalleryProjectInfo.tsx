'use client';

import { motion } from 'framer-motion';
import { GalleryProject } from './types';
import { fadeInUp } from './animations';
import { Badge } from '@/app/components/ui/Badge';

interface GalleryProjectInfoProps {
  project: GalleryProject;
}

const GalleryProjectInfo: React.FC<GalleryProjectInfoProps> = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-blue-100"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-emerald-500">
            Featured Project
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {project.name}
          </h2>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed text-lg">
        {project.description}
      </p>
    </motion.div>
  );
};

export default GalleryProjectInfo;
