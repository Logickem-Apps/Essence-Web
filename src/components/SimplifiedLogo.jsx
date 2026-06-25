import React from 'react';

export default function SimplifiedLogo({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 460 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Essence Rabinal Logo"
    >
      {/* Symbol Group (0 to 100 width) */}
      <g transform="translate(10, 10)">
        {/* Orange Sun/Accent (#F28B1A) */}
        <circle cx="40" cy="40" r="24" fill="#F28B1A" opacity="0.9" />
        
        {/* Colonial Church Silhouette (#234126) */}
        <path 
          d="M22 80 V42 L40 24 L58 42 V80 H22 Z" 
          fill="#234126" 
        />
        {/* Church Door */}
        <path 
          d="M34 80 V62 A6 6 0 0 1 46 62 V80 H34 Z" 
          fill="#FFFFFF" 
        />
        {/* Church Window */}
        <circle cx="40" cy="46" r="4" fill="#FFFFFF" />
        
        {/* Cross */}
        <path 
          d="M40 8 V20 M34 14 H46" 
          stroke="#234126" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        
        {/* Green Leaves (#234126) */}
        {/* Left Leaf */}
        <path 
          d="M12 80 C -2 60 15 45 22 52 C 18 65 18 75 12 80 Z" 
          fill="#234126" 
        />
        {/* Right Leaf */}
        <path 
          d="M68 80 C 82 60 65 45 58 52 C 62 65 62 75 68 80 Z" 
          fill="#234126" 
        />
        
        {/* Base Line */}
        <rect x="5" y="80" width="70" height="3" rx="1.5" fill="#234126" />
      </g>

      {/* Text Group (110 to 460 width) */}
      <text 
        x="105" 
        y="64" 
        fontFamily="Montserrat, system-ui, sans-serif" 
        fontSize="42" 
        fontWeight="700" 
        fill="#234126" 
        letterSpacing="-0.02em"
      >
        Essence Rabinal
      </text>
    </svg>
  );
}