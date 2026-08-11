import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-[17px] sm:text-[18px]',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Crest Seal / Aperitivo Logo Emblem */}
      <div
        className={`${iconSizes[size]} rounded-full border-2 border-[#C5A059] bg-[#1F0609] relative flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden group-hover:border-[#DFBE7B]`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-0.5 text-[#C5A059]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aperitifGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="50%" stopColor="#E53935" />
              <stop offset="100%" stopColor="#800020" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D782" />
              <stop offset="100%" stopColor="#C5A059" />
            </linearGradient>
          </defs>

          {/* Stemmed Aperitivo Spritz Glass (Pure Glass Vector) */}
          {/* Glass Bowl Base Contour */}
          <path
            d="M26 24 C24 56, 76 56, 74 24 Z"
            fill="#2A080C"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Aperitivo Cocktail Liquid Fill */}
          <path
            d="M28 30 C29 52, 71 52, 72 30 Z"
            fill="url(#aperitifGrad)"
            opacity="0.95"
          />

          {/* Glass Rim Oval Top */}
          <ellipse cx="50" cy="24" rx="24" ry="3" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />

          {/* Ice Cubes inside Glass */}
          <rect x="38" y="32" width="9" height="9" rx="1.5" fill="#FFFFFF" opacity="0.65" transform="rotate(12 42.5 36.5)" />
          <rect x="52" y="35" width="8" height="8" rx="1.5" fill="#FFFFFF" opacity="0.55" transform="rotate(-15 56 39)" />

          {/* Effervescent Champagne/Spritz Bubbles */}
          <circle cx="36" cy="38" r="1.5" fill="#FFF" opacity="0.85" />
          <circle cx="48" cy="44" r="1.2" fill="#FFF" opacity="0.75" />
          <circle cx="60" cy="40" r="1.8" fill="#FFF" opacity="0.9" />

          {/* Slender Glass Stem */}
          <line x1="50" y1="53" x2="50" y2="80" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" />

          {/* Curved Glass Base Foot */}
          <path d="M30 81 Q50 78 70 81" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Orange Slice Wheel Garnish on Rim */}
          <circle cx="68" cy="18" r="11" fill="#1F0609" stroke="url(#goldGrad)" strokeWidth="2" />
          <line x1="68" y1="7" x2="68" y2="29" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <line x1="57" y1="18" x2="79" y2="18" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <circle cx="68" cy="18" r="8.5" fill="#FF8C00" opacity="0.85" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`block font-['Oxygen',sans-serif] ${titleSizes[size]} font-bold tracking-wider text-[#FDFBF7] uppercase group-hover:text-[#DFBE7B] transition-colors leading-none`}
        >
          London Aperitivo Club
        </span>
      </div>
    </div>
  );
};

