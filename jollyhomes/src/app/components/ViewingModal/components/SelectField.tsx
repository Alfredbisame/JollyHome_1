import React from 'react';
import { SelectFieldProps } from '../types';

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  id
}) => {
  const fieldId = id || name;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && '*'}
      </label>
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5a0e] focus:border-transparent transition-all duration-200 text-gray-900"
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value} 
            className={option.value === "" ? "text-gray-600" : "text-gray-900"}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;