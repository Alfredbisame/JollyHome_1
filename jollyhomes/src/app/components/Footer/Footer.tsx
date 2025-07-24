'use client';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';
import { FooterSection } from './FooterSection';
import { Newsletter } from './Newsletter';
import { footerVariants, containerVariants } from './animations';
import { useCurrentYear } from '../../Hooks/useCurrentYear';

const Footer: React.FC = () => {
  const aboutLinks = [
    { label: 'About us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' }
  ];
  
  const propertyLinks = [
    { label: 'All properties', href: '/gallery' },
    { label: 'Houses for sale', href: '/gallery' },
    { label: 'Houses for rent', href: '/gallery' }
  ];
  
  const newsLinks = [
    { label: 'Latest news', href: '/news' },
    { label: 'House architecture', href: '/news/architecture' },
    { label: 'House design', href: '/news/design' },
    { label: 'Building materials', href: '/news/materials' }
  ];

  // Get current year using custom hook
  const currentYear = useCurrentYear();

  return (
    <motion.footer
      className="bg-[#2c314b] text-[#8a8f9f]"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* About Section */}
          <div className="lg:col-span-1">
            <FooterSection
              title="About"
              links={aboutLinks}
              delay={0.1}
            />
          </div>

          {/* Properties Section */}
          <div className="lg:col-span-1">
            <FooterSection
              title="More Information"
              links={propertyLinks}
              isUppercase
              delay={0.2}
            />
          </div>

          {/* News Section */}
          <div className="lg:col-span-1">
            <FooterSection
              title="News"
              links={newsLinks}
              isUppercase
              delay={0.3}
            />
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <Newsletter delay={0.4} />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-[#3a4056] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">
            © {currentYear} JollyHomes. All rights reserved. | Designed with ❤️ in Ghana
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export { Footer };
