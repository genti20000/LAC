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
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg sm:text-xl md:text-2xl tracking-[0.22em]',
    lg: 'text-xl sm:text-2xl md:text-3xl tracking-[0.24em]',
    xl: 'text-3xl sm:text-4xl md:text-5xl tracking-[0.26em]',
  };

  const sub1Sizes = {
    sm: 'text-[7px] tracking-[0.25em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.28em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.3em]',
    xl: 'text-xs sm:text-sm tracking-[0.32em]',
  };

  const sub2Sizes = {
    sm: 'text-[6px] tracking-[0.2em]',
    md: 'text-[7.5px] sm:text-[8px] tracking-[0.22em]',
    lg: 'text-[9.5px] sm:text-[10px] tracking-[0.25em]',
    xl: 'text-[11px] sm:text-xs tracking-[0.26em]',
  };

  const emblemSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 sm:w-10 sm:h-10 text-sm sm:text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-2xl',
  };

  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'} gap-2.5 sm:gap-3.5 ${className}`}>
      {showIcon && (
        <div className="shrink-0 relative group-hover:scale-105 transition-transform duration-300">
          {/* Architectural Brass Plaque Emblem with "23" */}
          <div
            className={`${emblemSizes[size]} rounded-lg bg-gradient-to-b from-[#1E1E24] via-[#121215] to-[#0A0A0C] border border-[#DFBE7B]/80 flex flex-col items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(223,190,123,0.4)] relative overflow-hidden`}
          >
            {/* Subtle inner border */}
            <div className="absolute inset-[1.5px] rounded-[6px] border border-[#C5A059]/30 pointer-events-none" />
            <span className="font-display font-black text-[#DFBE7B] leading-none drop-shadow-[0_1px_4px_rgba(223,190,123,0.6)]">
              23
            </span>
          </div>
        </div>
      )}

      {/* Typography Stack */}
      <div className={`flex flex-col ${layout === 'vertical' ? 'items-center text-center' : 'items-start text-left'} justify-center`}>
        <div className="flex items-center gap-2">
          <span
            className={`block font-display ${titleSizes[size]} font-extrabold gold-shimmer-text uppercase transition-colors leading-none drop-shadow-[0_2px_12px_rgba(197,160,89,0.35)] whitespace-nowrap`}
          >
            23 SOHO
          </span>
        </div>

        {showSubtitle && (
          <div className="space-y-0.5 mt-1">
            <span
              className={`block font-display ${sub1Sizes[size]} font-semibold text-[#DFBE7B] uppercase leading-tight opacity-95`}
            >
              COCKTAILS · MUSIC · LATE
            </span>
            <span
              className={`block font-sans ${sub2Sizes[size]} font-medium text-[#C5A059]/80 uppercase leading-none opacity-80`}
            >
              23 Frith Street · London W1
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
