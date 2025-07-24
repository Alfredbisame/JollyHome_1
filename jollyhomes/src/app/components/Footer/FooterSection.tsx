'use client';

import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
  isUppercase?: boolean;
  delay?: number;
}

const FooterSection: React.FC<FooterSectionProps> = ({ 
  title, 
  links, 
  isUppercase = false,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="space-y-4"
      variants={itemVariants}
      custom={delay}
    >
      <motion.h3 
        className={`text-white font-semibold mb-6 ${
          isUppercase ? 'uppercase text-xs tracking-wide' : 'text-lg'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + (index * 0.1), duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={link.href}
              className="text-sm hover:text-white transition-colors duration-300 cursor-pointer block"
              whileHover={{ x: 5 }}
            >
              {link.label}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export { FooterSection };
