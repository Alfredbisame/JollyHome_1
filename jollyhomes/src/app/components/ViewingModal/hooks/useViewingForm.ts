import { useState } from 'react';
import { ViewingFormData } from '../types';
import { INITIAL_VIEWING_FORM_DATA } from '../constants';

export const useViewingForm = () => {
  const [formData, setFormData] = useState<ViewingFormData>(INITIAL_VIEWING_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent, onClose: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement API call to submit viewing appointment request
      // const response = await submitViewingRequest(formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onClose();
      resetForm();
    } catch (error) {
      // TODO: Implement proper error handling and user notification
      console.error('Error submitting viewing appointment request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_VIEWING_FORM_DATA);
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};