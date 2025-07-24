import React from 'react';
import { IoIosSend } from 'react-icons/io';

interface ActionButtonsProps {
  onCancel: () => void;
  isSubmitting?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCancel, isSubmitting = false }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <button
        type="button"
        onClick={onCancel}
        className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold cursor-pointer"
        disabled={isSubmitting}
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] text-white rounded-lg hover:from-[#2d7a15] hover:to-[#1f5a0e] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? 'Sending...' : 'Send Quote Request'}
        {!isSubmitting && <IoIosSend className="text-lg ml-2" />}
      </button>
    </div>
  );
};

export default ActionButtons;