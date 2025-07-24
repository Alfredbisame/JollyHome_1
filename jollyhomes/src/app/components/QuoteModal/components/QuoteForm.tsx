import React from 'react';
import { FormData } from '../types';
import { PROJECT_TYPE_OPTIONS, BUDGET_OPTIONS, NEXT_STEPS_INFO } from '../constants';
import FormField from './FormField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import InfoBox from './InfoBox';
import ActionButtons from './ActionButtons';

interface QuoteFormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  onCancel,
  isSubmitting = false
}) => {
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={onInputChange}
          required
          placeholder="Enter your full name"
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={onInputChange}
          required
          placeholder="Enter your email address"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onInputChange}
          required
          placeholder="Enter your phone number"
        />

        <SelectField
          label="Project Type"
          name="projectType"
          value={formData.projectType}
          onChange={onInputChange}
          options={PROJECT_TYPE_OPTIONS}
          required
        />
      </div>

      <SelectField
        label="Estimated Budget"
        name="budget"
        value={formData.budget}
        onChange={onInputChange}
        options={BUDGET_OPTIONS}
      />

      <TextAreaField
        label="Project Details"
        name="message"
        value={formData.message}
        onChange={onInputChange}
        placeholder="Tell us more about your project, timeline, specific requirements, etc."
        rows={4}
      />

      {/* Info Box */}
      <InfoBox
        title="What happens next?"
        items={NEXT_STEPS_INFO}
      />

      {/* Action Buttons */}
      <ActionButtons
        onCancel={onCancel}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default QuoteForm;