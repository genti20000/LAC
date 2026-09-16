import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import FACADE_IMAGE from '../assets/images/amica_coming_soon_facade_1789584787756.jpg';

interface ComingSoonPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
  return (
    <div className="w-full min-h-screen bg-[#000000] text-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-[#150306] flex flex-col items-center justify-start">
      
      {/* Centered Column for both Mobile & Desktop surrounded by dark black */}
      <div className="w-full max-w-[560px] mx-auto bg-[#000000] flex flex-col shadow-2xl relative">
        
        {/* Semantic accessibility information */}
        <h1 className="sr-only">AMICA SOHO — Coming Soon — 23 Frith Street, London</h1>
        <p className="sr-only">Aperitivo • Music • Late. Some nights stay with you. Soho is calling.</p>

        {/* =========================================================================
            HERO FACADE WITH SUBTLE FADE-IN & FLICKERING SIDE SCONCE LIGHTS
           ========================================================================= */}
        <motion.div
          id="coming-soon-hero"
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative flex items-center justify-center bg-[#000000] overflow-hidden select-none"
        >
          {/* Main Facade Image */}
          <img
            src={FACADE_IMAGE}
            alt="AMICA SOHO 23 Frith Street Entrance Facade"
            className="w-full h-auto block select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* =====================================================================
              LEFT WALL SCONCE — SUBTLE CANDLE LIGHT FLICKER
              Coordinates locked to the left vintage fluted brass sconce:
              X: ~18.2%, Y: ~31.2%
             ===================================================================== */}
          <div
            id="left-sconce-light"
            className="absolute top-[31.25%] left-[18.15%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center"
            style={{ width: '8%', height: '10%' }}
          >
            {/* Soft Ambient Candle Glow */}
            <motion.div
              animate={{
                opacity: [0.22, 0.38, 0.25, 0.42, 0.3, 0.45, 0.24, 0.36, 0.22],
                scale: [0.97, 1.04, 0.96, 1.05, 0.98, 1.02, 0.95, 1.03, 0.97],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 185, 80, 0.35) 0%, rgba(240, 140, 40, 0.12) 50%, transparent 75%)',
                mixBlendMode: 'screen',
                filter: 'blur(2px)',
              }}
            />

            {/* Delicate Candle Flame Shimmer */}
            <motion.div
              animate={{
                opacity: [0.35, 0.55, 0.3, 0.6, 0.38, 0.52, 0.28, 0.48, 0.35],
                scaleY: [0.96, 1.06, 0.92, 1.08, 0.97, 1.03, 0.94, 1.02, 0.96],
                scaleX: [1.02, 0.96, 1.03, 0.95, 1.01, 0.97, 1.02, 0.98, 1.02],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-[45%] h-[65%] rounded-full absolute"
              style={{
                background: 'radial-gradient(ellipse at 50% 60%, rgba(255, 230, 160, 0.55) 0%, rgba(255, 165, 55, 0.28) 60%, transparent 85%)',
                mixBlendMode: 'screen',
                filter: 'blur(0.8px)',
              }}
            />
          </div>

          {/* =====================================================================
              RIGHT WALL SCONCE — SUBTLE CANDLE LIGHT FLICKER
              Coordinates locked to the right vintage fluted brass sconce:
              X: ~80.8%, Y: ~31.2%
              (Gently desynchronized for natural, organic ambiance)
             ===================================================================== */}
          <div
            id="right-sconce-light"
            className="absolute top-[31.25%] left-[80.75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center"
            style={{ width: '8%', height: '10%' }}
          >
            {/* Soft Ambient Candle Glow */}
            <motion.div
              animate={{
                opacity: [0.26, 0.44, 0.22, 0.36, 0.42, 0.24, 0.4, 0.28, 0.26],
                scale: [1, 0.96, 1.05, 0.98, 1.03, 0.95, 1.04, 0.97, 1],
              }}
              transition={{
                duration: 4.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 185, 80, 0.35) 0%, rgba(240, 140, 40, 0.12) 50%, transparent 75%)',
                mixBlendMode: 'screen',
                filter: 'blur(2px)',
              }}
            />

            {/* Delicate Candle Flame Shimmer */}
            <motion.div
              animate={{
                opacity: [0.38, 0.58, 0.32, 0.5, 0.62, 0.34, 0.54, 0.3, 0.38],
                scaleY: [0.95, 1.05, 0.98, 1.07, 0.93, 1.04, 0.96, 1.02, 0.95],
                scaleX: [0.98, 1.03, 0.96, 1.02, 0.97, 1.01, 0.95, 1.03, 0.98],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.25,
              }}
              className="w-[45%] h-[65%] rounded-full absolute"
              style={{
                background: 'radial-gradient(ellipse at 50% 60%, rgba(255, 230, 160, 0.55) 0%, rgba(255, 165, 55, 0.28) 60%, transparent 85%)',
                mixBlendMode: 'screen',
                filter: 'blur(0.8px)',
              }}
            />
          </div>
        </motion.div>

        {/* =========================================================================
            LOWER SECTION: SIGNATURE VELVET MAROON CANVAS WITH BRAND CREST
           ========================================================================= */}
        <motion.section
          id="coming-soon-creed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full bg-gradient-to-b from-[#140205] via-[#180307] to-[#0A0103] py-10 sm:py-14 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Subtle warm ambient glow in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#DFBE7B]/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center select-none">
            
            {/* Gold Cocktail Coupe Icon */}
            <div className="text-[#E8CCA0] mb-3">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M6 7 L26 7 L16 19 Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="9.5" y1="11" x2="22.5" y2="11" strokeWidth="0.8" opacity="0.8" />
                <line x1="16" y1="19" x2="16" y2="26" strokeWidth="1.2" />
                <line x1="10" y1="26" x2="22" y2="26" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* AMICA */}
            <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl tracking-[0.24em] sm:tracking-[0.28em] text-[#E8CCA0] uppercase font-light leading-none">
              AMICA
            </h2>

            {/* — SOHO — */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 text-[#E8CCA0]">
              <span className="w-8 sm:w-12 h-[1px] bg-[#DFBE7B]/80" />
              <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.36em] uppercase font-medium">
                SOHO
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#DFBE7B]/80" />
            </div>

            {/* APERITIVO • MUSIC • LATE */}
            <div className="flex items-center justify-center gap-2 mt-4 font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.32em] uppercase text-[#E8CCA0] font-medium">
              <span>APERITIVO</span>
              <span className="text-[6px] text-[#DFBE7B]">•</span>
              <span>MUSIC</span>
              <span className="text-[6px] text-[#DFBE7B]">•</span>
              <span>LATE</span>
            </div>

            {/* Horizontal Gold Line Divider */}
            <div className="w-12 h-[1px] bg-[#DFBE7B]/80 my-3.5" />

            {/* SOHO IS CALLING */}
            <p className="font-['Cormorant_Garamond',serif] text-[10.5px] sm:text-xs tracking-[0.38em] text-[#E8CCA0] uppercase font-light">
              SOHO IS CALLING
            </p>

          </div>

        </motion.section>

      </div>

    </div>
  );
};
