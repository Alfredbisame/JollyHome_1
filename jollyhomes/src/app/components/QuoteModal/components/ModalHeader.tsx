import React from 'react';
import { CiCalculator1 } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#1f5a0e] to-[#2d7a15] p-6 rounded-t-2xl">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
        aria-label="Close"
        type="button"
      >
        <IoClose className="text-white text-sm" />
      </button>
      
      <div className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-xl">
          <CiCalculator1 size={20} className="text-white text-xl" />
        </div>
        <div>
          <h2 id="quote-modal-title" className="text-2xl font-bold text-white">Get Your Quote</h2>
          <p id="quote-modal-description" className="text-green-100 mt-1">Tell us about your dream home project</p>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;