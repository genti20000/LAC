import React, { useState } from 'react';
import { PageId } from '../types';
import CLASSIC_FACADE from '../assets/images/amica_hero_entrance_1789519211124.jpg';
import OPTION_1_MINIMALIST from '../assets/images/minimalist_flat_facade_1789539081585.jpg';
import OPTION_2_MODERN_CANOPY from '../assets/images/luxury_canopy_facade_1789539100951.jpg';

interface ComingSoonPageProps {
  onNavigate?: (page: PageId) => void;
}

type FacadeVariant = 'option-2' | 'option-1' | 'classic';

interface FacadeOption {
  id: FacadeVariant;
  label: string;
  badge: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
}

const FACADE_OPTIONS: FacadeOption[] = [
  {
    id: 'option-2',
    label: 'Option 2: Modern Luxury Canopy',
    badge: 'Modern Geometric',
    title: 'Modern Luxury Canopy & Fluted Sconces',
    image: OPTION_2_MODERN_CANOPY,
    description: 'Low-profile geometric dark burgundy awning with razor-thin brass edge detailing, minimalist gold sans-serif typography, fluted cylindrical brass sconces, and matte black doors with vertical brass pull handles.',
    highlights: ['Geometric burgundy canopy', 'Razor-thin brass trim', 'Fluted warm sconces', 'Brushed brass bar handles']
  },
  {
    id: 'option-1',
    label: 'Option 1: Ultra-Minimalist Flat Facade',
    badge: 'Sleek & Contemporary',
    title: 'Ultra-Minimalist Flat Steel & Concealed Glow',
    image: OPTION_1_MINIMALIST,
    description: 'Sharp, ultra-thin matte black metal flat awning with concealed under-lighting, sleek floor-to-ceiling glass & steel framework, minimal gold typography, and slender brass vertical bar sconces.',
    highlights: ['Ultra-thin flat metal awning', 'Concealed linear downlight', 'Refined sans-serif branding', 'Minimalist vertical bar sconces']
  },
  {
    id: 'classic',
    label: 'Classic: Curved Velvet Dome',
    badge: 'Historic Soho',
    title: 'Classic Curved Burgundy Velvet Awning',
    image: CLASSIC_FACADE,
    description: 'The iconic rounded dome canopy in rich burgundy velvet with traditional lantern sconces, brass mail slot, and candlelit bistro table on wet Soho flagstones.',
    highlights: ['Curved dome awning', 'Warm box sconces', 'Traditional paneled doors', 'Outdoor candlelit table']
  }
];

export const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
  const [selectedVariant, setSelectedVariant] = useState<FacadeVariant>('option-2');

  const activeOption = FACADE_OPTIONS.find(opt => opt.id === selectedVariant) || FACADE_OPTIONS[0];

  return (
    <div className="w-full bg-[#050507] text-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-[#150306]">
      
      {/* =========================================================================
          FACADE DESIGN SELECTOR BAR
          Allows instant switching and architectural review between:
          - Option 2: Modern Luxury Canopy (Sleek Geometric)
          - Option 1: Ultra-Minimalist Flat Facade (Sleek & Contemporary)
          - Classic: Curved Velvet Dome
         ========================================================================= */}
      <section className="w-full bg-[#0A0103] border-b border-[#25080E] px-4 py-3 sm:py-3.5 z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#DFBE7B] animate-pulse shadow-[0_0_8px_#DFBE7B]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#DFBE7B] font-medium">
              Architectural Concept Studio:
            </span>
            <span className="text-[11px] sm:text-xs text-[#FDFBF7]/70 font-serif italic hidden md:inline">
              Compare Modernized Entrance Facades
            </span>
          </div>

          {/* Interactive Pill Tabs */}
          <div className="inline-flex rounded-lg bg-[#140206] p-1 border border-[#DFBE7B]/25 shadow-inner">
            {FACADE_OPTIONS.map((opt) => {
              const isActive = selectedVariant === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedVariant(opt.id)}
                  type="button"
                  className={`px-3 sm:px-4 py-1.5 rounded-md text-[10.5px] sm:text-[11.5px] tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DFBE7B] to-[#C5A059] text-[#0E0204] font-semibold shadow-[0_2px_10px_rgba(223,190,123,0.35)]'
                      : 'text-[#DFBE7B]/70 hover:text-[#FDFBF7] hover:bg-[#1F040A]'
                  }`}
                >
                  {opt.label.split(':')[0]}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          HERO SECTION: SOHO ENTRANCE FACADE
          Displays the currently selected architectural facade in full resolution.
         ========================================================================= */}
      <section className="relative w-full bg-[#050507] overflow-hidden select-none">
        
        {/* Semantic accessibility information */}
        <h1 className="sr-only">{activeOption.title} — AMICA SOHO — 23 Frith Street, London</h1>
        <p className="sr-only">{activeOption.description}</p>

        {/* Facade Image Display with smooth transition */}
        <div className="w-full relative flex items-center justify-center bg-[#050507]">
          <img
            key={activeOption.id}
            src={activeOption.image}
            alt={`AMICA SOHO — ${activeOption.title}`}
            className="w-full h-auto block select-none transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Architectural Badge (bottom right over image) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-10 hidden sm:flex items-center gap-2 bg-[#0C0204]/85 backdrop-blur-md border border-[#DFBE7B]/30 px-3.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DFBE7B]" />
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#DFBE7B] font-medium">
            {activeOption.badge} · 23 Frith Street
          </span>
        </div>

      </section>

      {/* =========================================================================
          DESIGN HIGHLIGHTS & ARCHITECTURAL SUMMARY BAND
         ========================================================================= */}
      <section className="w-full bg-[#0E0204] border-y border-[#26070E] py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#DFBE7B] font-medium">
                Active Architectural Concept
              </span>
              <span className="text-[#DFBE7B]/40 text-xs">•</span>
              <span className="text-[10px] text-[#FDFBF7]/60 font-sans uppercase tracking-wider">
                {activeOption.badge}
              </span>
            </div>
            <h3 className="font-['Cinzel',serif] text-base sm:text-lg text-[#F2D8A7] font-light">
              {activeOption.title}
            </h3>
            <p className="text-xs text-[#E8CCA0]/75 font-sans leading-relaxed">
              {activeOption.description}
            </p>
          </div>

          {/* Key Feature Chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 max-w-md">
            {activeOption.highlights.map((h, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-[#1A0307] border border-[#DFBE7B]/20 text-[10px] text-[#DFBE7B] tracking-wider uppercase font-sans"
              >
                {h}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          LOWER SECTION: SIGNATURE VELVET MAROON CANVAS WITH BRAND CREST
          - Deep velvet maroon / dark burgundy background
          - Gold Coupe Glass Icon
          - AMICA
          - — SOHO —
          - SOHO IS CALLING
         ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#140205] via-[#1E0408] to-[#0A0103] py-10 sm:py-14 md:py-16 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Subtle velvet ambient glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DFBE7B]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center select-none">
          
          {/* Gold Cocktail Coupe Icon */}
          <div className="text-[#E8CCA0] mb-3 sm:mb-3.5">
            <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor">
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

          {/* AMICA */}
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl tracking-[0.24em] sm:tracking-[0.28em] text-[#E8CCA0] uppercase font-light leading-none">
            AMICA
          </h2>

          {/* — SOHO — */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-2.5 text-[#E8CCA0]">
            <span className="w-8 sm:w-14 h-[1px] bg-[#DFBE7B]/80" />
            <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.36em] uppercase font-medium">
              SOHO
            </span>
            <span className="w-8 sm:w-14 h-[1px] bg-[#DFBE7B]/80" />
          </div>

          {/* Mobile-Only Aperitivo Line & Divider */}
          <div className="md:hidden flex items-center justify-center gap-2.5 mt-4 font-sans text-[9px] tracking-[0.32em] uppercase text-[#E8CCA0] font-medium">
            <span>APERITIVO</span>
            <span className="text-[6px] text-[#DFBE7B]">•</span>
            <span>MUSIC</span>
            <span className="text-[6px] text-[#DFBE7B]">•</span>
            <span>LATE</span>
          </div>

          {/* Mobile-Only Horizontal Divider */}
          <div className="md:hidden w-12 h-[1px] bg-[#DFBE7B]/80 my-3.5" />

          {/* SOHO IS CALLING */}
          <p className="font-['Cormorant_Garamond',serif] text-[11px] sm:text-xs md:text-sm tracking-[0.36em] sm:tracking-[0.42em] text-[#E8CCA0] uppercase font-light mt-2 sm:mt-3">
            SOHO IS CALLING
          </p>

        </div>

      </section>

    </div>
  );
};
