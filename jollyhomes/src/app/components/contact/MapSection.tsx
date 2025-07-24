'use client';

import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-[#26405B] mb-6 text-center">
          Find Us Here
        </h3>
        
        <div className="w-full h-[450px] rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.399055827918!2d-0.1787663542919142!3d5.756316826904203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf77579c093c2f%3A0x895d76562bcd3b79!2sTeiman%20Chief%20Palace!5e0!3m2!1sen!2sgh!4v1750943079623!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="object-cover"
            title="Location Map"
            aria-label="Google Map of Teiman Chief Palace location"
          ></iframe>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Oyarifa, Accra - Ghana</p>
        </div>
      </div>
    </motion.section>
  );
}