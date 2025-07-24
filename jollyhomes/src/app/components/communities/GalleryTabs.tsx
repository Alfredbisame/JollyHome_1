'use client';

import { motion } from 'framer-motion';
import { GalleryTabsProps } from './types';
import { MapPinIcon, HomeIcon, CalendarIcon } from '@heroicons/react/24/outline';

const GalleryTabs: React.FC<GalleryTabsProps> = ({ activeTab, onTabChange, projects }) => {
  const getTabIcon = (slug: string) => {
    switch (slug) {
      case 'oyarifa-cottage':
        return <HomeIcon className="w-5 h-5" />;
      case 'oyarifa-cottage-annex':
        return <MapPinIcon className="w-5 h-5" />;
      case 'lake-view-estate':
        return <CalendarIcon className="w-5 h-5" />;
      default:
        return <HomeIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => onTabChange(project.slug)}
              className={`relative flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                activeTab === project.slug
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {getTabIcon(project.slug)}
              <span className="font-semibold">{project.name}</span>
              
              {/* Active indicator */}
              {activeTab === project.slug && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryTabs;
