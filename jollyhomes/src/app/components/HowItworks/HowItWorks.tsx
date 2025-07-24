'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HowItWorksProps, Step } from './types';
import HowItWorksHeader from './HowItWorksHeader';
import StepCard from './StepCard';

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Evaluate Property",
    description: "Browse through our curated selection of premium properties and find the perfect home that matches your needs and budget.",
    icon: "https://storage.googleapis.com/a1aa/image/a7fd78a4-5d87-4483-d37e-dd6845d048e1.jpg",
    bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
    iconColor: "text-emerald-600"
  },
  {
    id: 2,
    title: "Meet Your Agent",
    description: "Connect with our experienced real estate professionals who will guide you through every step of your home buying journey.",
    icon: "https://storage.googleapis.com/a1aa/image/f38f439c-37fd-460a-f02f-745cfd669e92.jpg",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    id: 3,
    title: "Close The Deal",
    description: "Finalize your purchase with our secure and transparent process, and get the keys to your dream home with flexible payment options.",
    icon: "https://storage.googleapis.com/a1aa/image/55e8cc71-2ff6-4351-c874-7b9b3e14ba53.jpg",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconColor: "text-blue-600"
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({ 
  steps = defaultSteps,
  className = ""
}) => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/gallery');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className={`bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <HowItWorksHeader />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4"
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={handleCTAClick}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
