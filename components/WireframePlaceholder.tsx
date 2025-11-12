import React from 'react';

const WireframePlaceholder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
      <svg
        className="w-1/4 h-1/4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
  );
};

export default WireframePlaceholder;
