import React from 'react';
import { GiInfo } from 'react-icons/gi';

interface InfoBoxProps {
  title: string;
  items: string[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, items }) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <div className="bg-[#1f5a0e] p-2 rounded-full flex-shrink-0">
          <GiInfo size={20} className="text-white text-xs" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <ul className="text-sm text-gray-700 space-y-1 font-medium">
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;