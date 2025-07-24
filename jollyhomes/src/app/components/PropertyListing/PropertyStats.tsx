'use client';

import { motion, Variants } from 'framer-motion';
import { 
  HomeIcon, 
  CurrencyDollarIcon, 
  MapPinIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

interface PropertyStatsProps {
  totalProperties?: number;
  averagePrice?: number;
  locations?: number;
  rating?: number;
  className?: string;
}

const PropertyStats: React.FC<PropertyStatsProps> = ({
  totalProperties = 150,
  averagePrice = 105000,
  locations = 12,
  rating = 4.8,
  className = ""
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const stats: StatItem[] = [
    {
      label: 'Properties Available',
      value: `${totalProperties}+`,
      icon: <HomeIcon className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      label: 'Average Price',
      value: formatPrice(averagePrice),
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Locations',
      value: `${locations}+`,
      icon: <MapPinIcon className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      label: 'Customer Rating',
      value: `${rating}/5`,
      icon: <StarIcon className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${className}`}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow duration-300"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {stat.icon}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
            {stat.value}
          </h3>
          <p className="text-slate-600 text-sm font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PropertyStats;
