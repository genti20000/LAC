import React from 'react';

interface AmicaEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  tagline?: string;
  className?: string;
  onClick?: () => void;
}

export const AmicaEmblem: React.FC<AmicaEmblemProps> = ({
  size = 'md',
  showSubtitle = true,
  tagline,
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-9 h-9',
    xl: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-lg sm:text-xl tracking-[0.32em]',
    lg: 'text-2xl sm:text-4xl tracking-[0.38em]',
    xl: 'text-4xl sm:text-6xl tracking-[0.42em]',
  };

  const sohoSizes = {
    sm: 'text-[7px] tracking-[0.28em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.36em]',
    lg: 'text-[10px] sm:text-[12px] tracking-[0.4em]',
    xl: 'text-[12px] sm:text-[14px] tracking-[0.45em]',
  };

  const subSizes = {
    sm: 'text-[7px] tracking-[0.22em]',
    md: 'text-[8px] sm:text-[9.5px] tracking-[0.28em]',
    lg: 'text-[10px] sm:text-[11.5px] tracking-[0.34em]',
    xl: 'text-xs sm:text-sm tracking-[0.38em]',
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center text-center select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Cocktail Coupe Glass Icon */}
      <div className="text-gold-amica mb-1 transition-transform duration-300 group-hover:scale-110">
        <svg
          className={iconSizes[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        >
          {/* Coupe / Martini bowl */}
          <path d="M4 4.5 L20 4.5 L12 13.5 Z" stroke="currentColor" />
          {/* Vertical stem */}
          <line x1="12" y1="13.5" x2="12" y2="20" stroke="currentColor" />
          {/* Base */}
          <line x1="7.5" y1="20" x2="16.5" y2="20" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>

      {/* AMICA */}
      <h1
        className={`font-serif ${titleSizes[size]} font-light text-[#FDFBF7] uppercase leading-none drop-shadow-[0_2px_14px_rgba(74,14,23,0.7)] group-hover:text-[#DFBE7B] transition-colors`}
      >
        AMICA
      </h1>

      {/* — SOHO — */}
      <div className="flex items-center justify-center gap-2 mt-1 text-gold-amica">
        <span className="w-3 sm:w-5 h-[1px] bg-gradient-to-r from-transparent to-[#DFBE7B]" />
        <span className={`font-sans ${sohoSizes[size]} uppercase font-medium text-gold-amica`}>
          SOHO
        </span>
        <span className="w-3 sm:w-5 h-[1px] bg-gradient-to-l from-transparent to-[#DFBE7B]" />
      </div>

      {/* APERITIVO • MUSIC • LATE */}
      {showSubtitle && (
        <div
          className={`flex items-center justify-center gap-2 mt-2 font-sans ${subSizes[size]} uppercase text-gold-amica/90 font-light`}
        >
          <span>APERITIVO</span>
          <span className="text-[6px] text-[#DFBE7B]/60">•</span>
          <span>MUSIC</span>
          <span className="text-[6px] text-[#DFBE7B]/60">•</span>
          <span>LATE</span>
        </div>
      )}

      {/* Optional Tagline with Divider */}
      {tagline && (
        <>
          <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7B] to-transparent my-4 opacity-70" />
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.32em] text-[#FFEAA7] uppercase font-light drop-shadow-sm">
            {tagline}
          </p>
        </>
      )}
    </div>
  );
};
