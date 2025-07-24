'use client';

import { motion, Variants } from 'framer-motion';

interface HowItWorksHeaderProps {
  title?: string;
  description?: string;
}

const HowItWorksHeader: React.FC<HowItWorksHeaderProps> = ({
  title = "How It Works?",
  description = "Jolly Homes is bringing you the simplest and most affordable way to own a house in Ghana. The Jolly Homes payment plan is the first of its kind with the lowest prices you'll find for a house and community of this quality."
}) => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOut cubic-bezier
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOut cubic-bezier
      }
    }
  };

  return (
    <div className="text-center mb-16">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 via-emerald-600 to-gray-800 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8 rounded-full" />
      </motion.div>

      <motion.div
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {description}
        </p>
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100">
          <p className="text-gray-700 font-medium">
            At Jolly Homes, we want to <span className="text-emerald-600 font-bold">Make Life Better for YOU</span>.
            <br />
            You are the centre of our discussions to help you own a house and pay for it conveniently without any struggles or compromising on your usual spending.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorksHeader;
