"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { QuoteModalProps } from './types';
import { overlayVariants, modalVariants } from './animations';
import { useQuoteForm, useBodyScrollLock } from './hooks';
import { ModalHeader, QuoteForm } from './components';

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useQuoteForm();
  
  // Prevent body scroll when modal is open
  useBodyScrollLock(isOpen);

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e, onClose);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <ModalHeader onClose={onClose} />

              {/* Form */}
              <QuoteForm
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={onSubmit}
                onCancel={onClose}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;