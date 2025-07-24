'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { ContactFormData } from '../components/contact/types';
import { contactInfoItems } from '../components/contact/data';
import MapSection from '../components/contact/MapSection';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form or show success message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <ContactHeader 
        title="Contact Us"
        subtitle="We're here to help you find your perfect home. Get in touch with our expert team today."
      />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Success/Error Messages */}
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-8 p-4 rounded-lg text-center ${
              submitStatus === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus === 'success' 
              ? '✅ Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
              : '❌ Sorry, there was an error sending your message. Please try again.'
            }
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <ContactForm 
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <ContactInfo items={contactInfoItems} />
          </div>
        </div>

        {/* Map Section */}
        <MapSection />
      </main>
    </div>
  );
};

export default ContactPage;
