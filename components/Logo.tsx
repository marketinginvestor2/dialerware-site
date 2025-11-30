
import React from 'react';
import { BRAND_COLORS } from '../constants';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {/* Phone Handset */}
        <path
          d="M25 65C25 65 20 80 40 90C60 100 80 90 80 90"
          stroke="#0F172A"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
           d="M25 65C20 60 15 50 25 40"
           stroke="#0F172A"
           strokeWidth="8"
           strokeLinecap="round"
        />

        {/* Robot Head Bubble */}
        <path
          d="M40 20H80C88.2843 20 95 26.7157 95 35V65C95 73.2843 88.2843 80 80 80H70L60 90L55 80H40C31.7157 80 25 73.2843 25 65V35C25 26.7157 31.7157 20 40 20Z"
          fill={BRAND_COLORS.primary}
        />
        
        {/* Antenna */}
        <line x1="60" y1="20" x2="60" y2="10" stroke="#0F172A" strokeWidth="4" />
        <circle cx="60" cy="8" r="4" fill="#0F172A" />

        {/* Face */}
        <circle cx="50" cy="45" r="5" fill="#FFFFFF" />
        <circle cx="70" cy="45" r="5" fill="#FFFFFF" />
        <path d="M50 60Q60 68 70 60" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        
        {/* Headsets / Ears */}
        <rect x="22" y="40" width="6" height="20" rx="2" fill="#0F172A" />
        <rect x="92" y="40" width="6" height="20" rx="2" fill="#0F172A" />
      </svg>
      <span className="font-bold text-xl tracking-tight text-slate-900">
        Dialer<span className="text-blue-600">Ware</span>
      </span>
    </div>
  );
};
