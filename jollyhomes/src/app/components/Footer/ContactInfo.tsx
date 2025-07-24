'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { itemVariants } from './animations';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: MapPinIcon,
      text: 'Oyarifa, Accra - Ghana',
      href: 'https://maps.google.com/?q=Oyarifa,Accra,Ghana'
    },
    {
      icon: PhoneIcon,
      text: '0532370448 || 0594571292',
      href: 'tel:+233532370448'
    },
    {
      icon: EnvelopeIcon,
      text: 'info@jollybghana.com',
      href: 'mailto:info@jollybghana.com'
    }
  ];

  return (
    <motion.div 
      className="space-y-4"
      variants={itemVariants}
    >
      <motion.h3 
        className="text-white font-semibold text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h3>
      
      {contactItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="flex items-center group hover:text-white transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ x: 5 }}
          viewport={{ once: true }}
        >
          <item.icon className="w-4 h-4 mr-3 text-[#8a8f9f] group-hover:text-white transition-colors duration-300" />
          <span className="text-sm">{item.text}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export { ContactInfo };
