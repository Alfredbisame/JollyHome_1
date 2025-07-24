'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryHeader from './GalleryHeader';
import GalleryTabs from './GalleryTabs';
import GalleryProjectInfo from './GalleryProjectInfo';
import GalleryStats from './GalleryStats';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';
import { galleryProjects } from './data';
import { GalleryImage } from './types';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(galleryProjects.length > 0 ? galleryProjects[0].slug : "");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = galleryProjects.find(project => project.slug === activeTab) || galleryProjects[0];

  const handleImageClick = (image: GalleryImage) => {
    const imageIndex = currentProject.images.findIndex(img => img.id === image.id);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentProject.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentProject.images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? currentProject.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentProject.images[prevIndex]);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Close modal if open when switching tabs
    if (isModalOpen) {
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Header */}
      <GalleryHeader />

      {/* Tabs */}
      <GalleryTabs 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        projects={galleryProjects}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Info */}
        <GalleryProjectInfo project={currentProject} />

        {/* Stats */}
        <GalleryStats project={currentProject} />

        {/* Gallery Grid */}
        <motion.div
          key={activeTab} // Re-animate when tab changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Project Gallery
            </h3>
            <p className="text-gray-600">
              Explore {currentProject.images.length} images from {currentProject.name}
            </p>
          </div>

          <GalleryGrid 
            images={currentProject.images}
            onImageClick={handleImageClick}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Interested in Our Projects?
            </h3>
            <p className="text-slate-600 mb-6">
              Get in touch with our team to learn more about available properties and upcoming developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-500 text-emerald-600 font-semibold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200 cursor-pointer"
              >
                View Properties
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
        images={currentProject.images}
        currentIndex={currentImageIndex}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </div>
  );
};

export default Gallery;
