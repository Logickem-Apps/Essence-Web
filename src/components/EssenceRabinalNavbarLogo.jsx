import React from 'react';

export default function EssenceRabinalNavbarLogo({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 480 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Essence Rabinal Logo"
    >
      {/* Symbol Group (Left Side - approx 35-40% visual weight) */}
      <g transform="translate(10, 5)">
        {/* Orange Sun/Accent (#F28B1A) */}
        <circle cx="45" cy="45" r="28" fill="#F28B1A" opacity="0.95" />
        
        {/* Colonial Church Silhouette (#234126) */}
        <path 
          d="M25 85 V45 L45 25 L65 45 V85 H25 Z" 
          fill="#234126" 
        />
        {/* Church Door */}
        <path 
          d="M37 85 V65 A8 8 0 0 1 53 65 V85 H37 Z" 
          fill="#FFFFFF" 
        />
        {/* Church Window */}
        <circle cx="45" cy="50" r="5" fill="#FFFFFF" />
        
        {/* Cross */}
        <path 
          d="M45 8 V22 M37 15 H53" 
          stroke="#234126" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        
        {/* Green Leaves (#234126) */}
        {/* Left Leaf */}
        <path 
          d="M10 85 C -5 60 15 45 25 55 C 20 70 20 80 10 85 Z" 
          fill="#234126" 
        />
        {/* Right Leaf */}
        <path 
          d="M80 85 C 95 60 75 45 65 55 C 70 70 70 80 80 85 Z" 
          fill="#234126" 
        />
        
        {/* Base Line (Dorado #C6A867) */}
        <rect x="5" y="85" width="80" height="4" rx="2" fill="#C6A867" />
      </g>

      {/* Text Group (Right Side - approx 60-65% visual weight) */}
      <g transform="translate(120, 0)">
        <text 
          x="0" 
          y="62" 
          fontFamily="Playfair Display, serif" 
          fontSize="46" 
          fontWeight="700" 
          fill="#234126" 
          letterSpacing="-0.01em"
        >
          Essence Rabinal
        </text>
        <text 
          x="4" 
          y="82" 
          fontFamily="Montserrat, sans-serif" 
          fontSize="14" 
          fontWeight="600" 
          fill="#C6A867" 
          letterSpacing="0.2em"
        >
          TOUR OPERADORA
        </text>
      </g>
    </svg>
  );
}