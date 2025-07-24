import React from 'react';
import { FormFieldProps } from '../types';

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
  type = 'text',
  id
}) => {
  const fieldId = id || name;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-600 placeholder:font-medium"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;