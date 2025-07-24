'use client';

import { motion, Variants } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  PlayIcon,
  ShieldCheckIcon,
  WifiIcon,
  SunIcon,
  HeartIcon,
  TruckIcon
} from '@heroicons/react/24/solid';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CommunityAmenitiesProps {
  // amenities?: string[];
  className?: string;
}

const CommunityAmenities: React.FC<CommunityAmenitiesProps> = ({
  // amenities,
  className = ""
}) => {
  const defaultAmenities: Amenity[] = [
    {
      icon: <PlayIcon className="w-6 h-6" />,
      title: "Indoor Games Centre",
      description: "Modern recreational facility for all ages"
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: "Children's Playground",
      description: "Safe and fun outdoor play area"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security and surveillance"
    },
    {
      icon: <WifiIcon className="w-6 h-6" />,
      title: "High-Speed Internet",
      description: "Fiber optic connectivity throughout"
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: "Ample Parking",
      description: "Dedicated parking spaces for residents"
    },
    {
      icon: <SunIcon className="w-6 h-6" />,
      title: "Solar Power",
      description: "Eco-friendly renewable energy solutions"
    },
    {
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      title: "Community Center",
      description: "Multipurpose hall for events and gatherings"
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Healthcare Access",
      description: "Nearby medical facilities and services"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`py-16 bg-gradient-to-br from-slate-50 to-emerald-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of community amenities designed for your comfort and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultAmenities.map((amenity) => (
            <motion.div
              key={amenity.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <div className="text-emerald-600">
                  {amenity.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CommunityAmenities;
