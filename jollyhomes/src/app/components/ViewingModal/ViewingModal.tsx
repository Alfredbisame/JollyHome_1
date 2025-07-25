"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ViewingModalProps } from './types';
import { overlayVariants, modalVariants } from './animations';
import { useViewingForm, useBodyScrollLock, useFocusTrap } from './hooks';
import { ModalHeader, ViewingForm } from './components';

const ViewingModal: React.FC<ViewingModalProps> = ({ isOpen, onClose }) => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useViewingForm();
  
  // Prevent body scroll when modal is open
  useBodyScrollLock(isOpen);
  
  // Focus management and keyboard navigation
  const modalRef = useFocusTrap(isOpen, onClose);

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
              ref={modalRef}
              variants={modalVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="viewing-modal-title"
              aria-describedby="viewing-modal-description"
              tabIndex={-1}
            >
              {/* Header */}
              <ModalHeader onClose={onClose} />

              {/* Form */}
              <ViewingForm
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

export default ViewingModal;