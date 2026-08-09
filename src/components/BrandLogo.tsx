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
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Crest Seal */}
      <div
        className={`${iconSizes[size]} rounded-full border-2 border-[#C5A059] bg-[#1F0609] relative flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5 text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="45" stroke="#C5A059" strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="40" stroke="#C5A059" strokeWidth="1.5" />
          
          {/* Central Stemmed Spritz Glass & Citrus Wheel */}
          <path d="M35 32 H65 L50 55 Z" fill="#4A0E17" stroke="#C5A059" strokeWidth="2" />
          <line x1="50" y1="55" x2="50" y2="72" stroke="#C5A059" strokeWidth="2.5" />
          <line x1="38" y1="72" x2="62" y2="72" stroke="#C5A059" strokeWidth="2.5" />
          
          {/* Liquid fill accent */}
          <path d="M39 37 H61 L50 52 Z" fill="#C5A059" opacity="0.85" />
          
          {/* Orange Slice Wheel */}
          <circle cx="60" cy="30" r="8" fill="#1F0609" stroke="#C5A059" strokeWidth="1.5" />
          <line x1="60" y1="22" x2="60" y2="38" stroke="#C5A059" strokeWidth="1" />
          <line x1="52" y1="30" x2="68" y2="30" stroke="#C5A059" strokeWidth="1" />

          {/* Stars */}
          <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="#C5A059" />
        </svg>
      </div>

      {/* Typography */}
      <div>
        <span
          className={`block font-serif ${titleSizes[size]} font-bold tracking-wider text-[#FDFBF7] uppercase group-hover:text-[#DFBE7B] transition-colors leading-none`}
        >
          London Aperitivo Club
        </span>
        {showSubtitle && (
          <span
            className={`block ${subtitleSizes[size]} tracking-[0.25em] text-[#C5A059] uppercase font-mono mt-1`}
          >
            SOHO · EST. LONDON
          </span>
        )}
      </div>
    </div>
  );
};
