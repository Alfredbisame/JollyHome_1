'use client';

import { motion, Variants } from 'framer-motion';
import { 
  HomeIcon, 
  UsersIcon, 
  MapIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

interface CommunityStatsProps {
  className?: string;
}

const CommunityStats: React.FC<CommunityStatsProps> = ({
  className = ""
}) => {
  const stats: StatItem[] = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      value: "200+",
      label: "Homes Built",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      value: "500+",
      label: "Happy Families",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      value: "15",
      label: "Acres",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      value: "Award",
      label: "Winning Design",
      color: "from-orange-500 to-orange-600"
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`py-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Community by the Numbers
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover what makes Oyarifa Cottage a premier residential community
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </div>
    </motion.section>
  );
};

export default CommunityStats;
