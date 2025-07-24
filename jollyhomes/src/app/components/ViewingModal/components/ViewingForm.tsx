import React from 'react';
import { ViewingFormData } from '../types';
import { 
  PROPERTY_TYPE_OPTIONS, 
  TIME_SLOT_OPTIONS, 
  NUMBER_OF_PEOPLE_OPTIONS, 
  VIEWING_PROCESS_INFO,
  getMinDate,
  getMaxDate
} from '../constants';
import FormField from './FormField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import InfoBox from './InfoBox';
import ActionButtons from './ActionButtons';

interface ViewingFormProps {
  formData: ViewingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const ViewingForm: React.FC<ViewingFormProps> = ({
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
          label="Property Type"
          name="propertyType"
          value={formData.propertyType}
          onChange={onInputChange}
          options={PROPERTY_TYPE_OPTIONS}
          required
        />
      </div>

      {/* Preferred Viewing Schedule */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Preferred Viewing Schedule
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={onInputChange}
            required
            min={getMinDate()}
            max={getMaxDate()}
          />

          <SelectField
            label="Preferred Time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={onInputChange}
            options={TIME_SLOT_OPTIONS}
            required
          />
        </div>
      </div>

      {/* Alternative Schedule */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Alternative Schedule (Optional)
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            label="Alternative Date"
            name="alternativeDate"
            type="date"
            value={formData.alternativeDate}
            onChange={onInputChange}
            min={getMinDate()}
            max={getMaxDate()}
          />

          <SelectField
            label="Alternative Time"
            name="alternativeTime"
            value={formData.alternativeTime}
            onChange={onInputChange}
            options={TIME_SLOT_OPTIONS}
          />
        </div>
      </div>

      {/* Additional Details */}
      <SelectField
        label="Number of People"
        name="numberOfPeople"
        value={formData.numberOfPeople}
        onChange={onInputChange}
        options={NUMBER_OF_PEOPLE_OPTIONS}
        required
      />

      <TextAreaField
        label="Special Requests or Questions"
        name="specialRequests"
        value={formData.specialRequests}
        onChange={onInputChange}
        placeholder="Any specific areas you'd like to focus on, accessibility needs, or questions about the property..."
        rows={3}
      />

      {/* Info Box */}
      <InfoBox
        title="What to expect during your viewing:"
        items={VIEWING_PROCESS_INFO}
      />

      {/* Action Buttons */}
      <ActionButtons
        onCancel={onCancel}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default ViewingForm;