import React from 'react';
import { PageId } from '../types';
import ENTRANCE_IMAGE from '../assets/images/amica_hero_entrance_1789519211124.jpg';

interface ComingSoonPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
  return (
    <div className="w-full bg-[#050507] text-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-[#150306]">
      
      {/* =========================================================================
          HERO SECTION: ENTRANCE FACADE WITH "COMING SOON" OVERLAY
          Faithfully matches the user's provided picture:
          - Deep velvet maroon dome awning with gold embroidery
          - Glowing brass sconces on left and right
          - Centered text over double doors:
              APERITIVO  •  MUSIC  •  LATE
              COMING SOON
              ——————
              SOME NIGHTS STAY WITH YOU
          - Wet reflective pavement at base
         ========================================================================= */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[58vh] sm:min-h-[65vh] md:min-h-[72vh]">
        
        {/* Background Facade Image */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={ENTRANCE_IMAGE}
            alt="AMICA SOHO 23 Frith Street Entrance Facade"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle cinematic vignette gradient overlay to match lighting */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103] via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_90%)] pointer-events-none" />
        </div>

        {/* Centered Overlay on Doors */}
        <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-16 sm:py-24 text-center flex flex-col items-center justify-center">
          
          {/* APERITIVO • MUSIC • LATE */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#E8CCA0] font-sans text-[10px] sm:text-[11.5px] tracking-[0.32em] sm:tracking-[0.38em] uppercase font-medium mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <span>APERITIVO</span>
            <span className="text-[6px] sm:text-[7px] text-[#DFBE7B]">•</span>
            <span>MUSIC</span>
            <span className="text-[6px] sm:text-[7px] text-[#DFBE7B]">•</span>
            <span>LATE</span>
          </div>

          {/* COMING SOON */}
          <h1 className="font-['Cinzel',serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] sm:tracking-[0.22em] font-light text-[#F2D8A7] uppercase leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] mb-4 sm:mb-6 text-gold-amica-glow">
            COMING SOON
          </h1>

          {/* Slender horizontal gold accent rule */}
          <div className="w-14 sm:w-20 h-[1.2px] bg-[#DFBE7B] opacity-85 mb-4 sm:mb-6 shadow-[0_0_8px_rgba(223,190,123,0.6)]" />

          {/* SOME NIGHTS STAY WITH YOU */}
          <p className="font-['Cormorant_Garamond',serif] text-xs sm:text-sm md:text-base tracking-[0.32em] sm:tracking-[0.4em] text-[#FFEAA7] uppercase font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            SOME NIGHTS STAY WITH YOU
          </p>

        </div>

      </section>

      {/* =========================================================================
          LOWER SECTION: SIGNATURE VELVET MAROON CANVAS WITH BRAND CREST
          Faithfully matches the user's provided picture:
          - Deep velvet maroon / dark burgundy background
          - Gold Coupe Glass Icon
          - ΛMICΛ
          - — SOHO —
          - APERITIVO  •  MUSIC  •  LATE
          - ——————
          - SOHO IS CALLING
          Nothing else.
         ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#140205] via-[#200408] to-[#0A0103] py-20 sm:py-28 md:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Subtle velvet ambient glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DFBE7B]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
          
          {/* Gold Cocktail Coupe Icon */}
          <div className="text-[#E8CCA0] mb-4 sm:mb-5">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor">
              {/* Coupe / Martini bowl */}
              <path d="M6 7 L26 7 L16 19 Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Liquid line inside bowl */}
              <line x1="9.5" y1="11" x2="22.5" y2="11" strokeWidth="0.8" opacity="0.8" />
              {/* Vertical stem */}
              <line x1="16" y1="19" x2="16" y2="26" strokeWidth="1.2" />
              {/* Slender base */}
              <line x1="10" y1="26" x2="22" y2="26" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* ΛMICΛ */}
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl md:text-6xl tracking-[0.24em] sm:tracking-[0.28em] text-[#E8CCA0] uppercase font-light leading-none">
            ΛMICΛ
          </h2>

          {/* — SOHO — */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2.5 sm:mt-3 text-[#E8CCA0]">
            <span className="w-8 sm:w-14 h-[1px] bg-[#DFBE7B]/80" />
            <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.36em] uppercase font-medium">
              SOHO
            </span>
            <span className="w-8 sm:w-14 h-[1px] bg-[#DFBE7B]/80" />
          </div>

          {/* APERITIVO • MUSIC • LATE */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 font-sans text-[9.5px] sm:text-[11.5px] tracking-[0.32em] sm:tracking-[0.38em] uppercase text-[#E8CCA0] font-medium">
            <span>APERITIVO</span>
            <span className="text-[6px] sm:text-[7px] text-[#DFBE7B]">•</span>
            <span>MUSIC</span>
            <span className="text-[6px] sm:text-[7px] text-[#DFBE7B]">•</span>
            <span>LATE</span>
          </div>

          {/* Horizontal slender gold accent rule */}
          <div className="w-12 sm:w-16 h-[1px] bg-[#DFBE7B]/80 my-5 sm:my-6" />

          {/* SOHO IS CALLING */}
          <p className="font-['Cormorant_Garamond',serif] text-[11px] sm:text-xs md:text-sm tracking-[0.36em] sm:tracking-[0.42em] text-[#E8CCA0] uppercase font-light">
            SOHO IS CALLING
          </p>

        </div>

      </section>

    </div>
  );
};
