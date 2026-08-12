import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showIcon?: boolean;
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  showIcon = false,
  className = '',
  layout = 'horizontal',
}) => {
  const titleSizes = {
    sm: 'text-xs sm:text-sm tracking-[0.12em]',
    md: 'text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.12em] sm:tracking-[0.15em]',
    lg: 'text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.12em] sm:tracking-[0.16em]',
    xl: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.14em]',
  };

  const sub1Sizes = {
    sm: 'text-[6.5px] tracking-[0.20em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.22em]',
    lg: 'text-xs tracking-[0.25em]',
    xl: 'text-sm sm:text-base tracking-[0.28em]',
  };

  const sub2Sizes = {
    sm: 'text-[5.5px] tracking-[0.20em]',
    md: 'text-[7.5px] sm:text-[8.5px] tracking-[0.22em]',
    lg: 'text-[10px] tracking-[0.25em]',
    xl: 'text-xs sm:text-sm tracking-[0.28em]',
  };

  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'} gap-2.5 sm:gap-3.5 ${className}`}>
      {showIcon && (
        <div className="shrink-0 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 100 100"
            className="w-12 h-12 filter drop-shadow-[0_3px_10px_rgba(197,160,89,0.45)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lacGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEAA7" />
                <stop offset="45%" stopColor="#DFBE7B" />
                <stop offset="100%" stopColor="#C5A059" />
              </linearGradient>
              <linearGradient id="lacLiquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7A30" />
                <stop offset="50%" stopColor="#E65100" />
                <stop offset="100%" stopColor="#800020" />
              </linearGradient>
              <linearGradient id="lacPeelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#F57C00" />
              </linearGradient>
            </defs>
            <path d="M 12 25 C 12 58, 88 58, 88 25 Z" fill="#2A080C" stroke="url(#lacGoldGrad)" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M 16 32 C 18 52, 82 52, 84 32 Z" fill="url(#lacLiquidGrad)" opacity="0.95" />
            <ellipse cx="50" cy="32" rx="34" ry="4" fill="#FFB74D" opacity="0.85" />
            <ellipse cx="50" cy="25" rx="38" ry="4.5" stroke="url(#lacGoldGrad)" strokeWidth="2.8" fill="none" />
            <line x1="50" y1="56" x2="50" y2="84" stroke="url(#lacGoldGrad)" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="50" cy="85" rx="26" ry="4" fill="url(#lacGoldGrad)" />
            <ellipse cx="50" cy="85" rx="26" ry="4" stroke="#FFEAA7" strokeWidth="1" fill="none" />
            <path d="M 76 22 C 82 10, 94 12, 89 22 C 84 31, 95 32, 89 42" stroke="url(#lacPeelGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 76 22 C 82 10, 94 12, 89 22 C 84 31, 95 32, 89 42" stroke="#FFEAA7" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
          </svg>
        </div>
      )}

      {/* Typography Stack */}
      <div className={`flex flex-col ${layout === 'vertical' ? 'items-center text-center' : 'items-start text-left'} justify-center`}>
        <span
          className={`block font-serif ${titleSizes[size]} font-bold gold-shimmer-text uppercase transition-colors leading-none drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)] whitespace-nowrap`}
        >
          London Aperitivo Club
        </span>
        {showSubtitle && (
          <>
            <span
              className={`block font-serif ${sub1Sizes[size]} font-medium text-[#DFBE7B] uppercase leading-tight mt-1 opacity-90`}
            >
              Soho · Est. London
            </span>
            <span
              className={`block font-serif ${sub2Sizes[size]} font-normal text-[#C5A059] uppercase leading-none mt-0.5 opacity-80`}
            >
              Basement of Frith Street
            </span>
          </>
        )}
      </div>
    </div>
  );
};


