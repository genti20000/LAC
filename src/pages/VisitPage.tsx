import React, { useState } from 'react';
import { PageId } from '../types';
import { VENUE_INFO } from '../data/venueData';
import { MapPin, Clock, Phone, Mail, Navigation, HelpCircle, ShieldAlert, ChevronDown, ChevronUp, Wine } from 'lucide-react';

interface VisitPageProps {
  onNavigate: (page: PageId) => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a reservation, or do you take walk-ins?',
      a: 'We welcome both walk-ins and reservations! During our Golden Hour (16:30 – 18:30) and on weekend evenings, reservations are strongly recommended to guarantee seating in our vault alcoves or brass cocktail bar.'
    },
    {
      q: 'What is the dress code at 23 SOHO?',
      a: 'Smart casual / relaxed elegance. We encourage style that fits Soho’s evening culture, but there is no strict jacket requirement. Tracksuits and sportswear are politely discouraged.'
    },
    {
      q: 'Are dogs permitted in the venue?',
      a: 'Well-behaved dogs on leads are welcome in the lounge area during early evening hours (until 19:00).'
    },
    {
      q: 'Do you cater to dietary requirements and vegans?',
      a: 'Sì! Our menu features extensive vegan (VG), vegetarian (V), and gluten-free (GF) options including plant-based cicchetti, dairy-free pestos, and gluten-free sourdough focaccia.'
    },
    {
      q: 'Is the basement venue wheelchair accessible?',
      a: 'Due to the historic subterranean architecture of our 18th-century Frith Street building, access is via a flight of stairs. Please contact our team prior to arrival so we can assist with entry arrangements.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#DFBE7B] text-xs font-display uppercase tracking-widest block">
          LOCATION & GUEST INFORMATION
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#FDFBF7] tracking-wide">
          Visit & House Rules
        </h1>
        <p className="text-xs sm:text-sm text-[#DFBE7B]/80 leading-relaxed font-sans">
          Everything you need to know before stepping beneath the black curved awning at 23 Frith Street, Soho.
        </p>
      </div>

      {/* Grid: Address & Opening Hours Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Hours & Location Card */}
        <div className="bg-[#121215] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#C5A059]/20 pb-4">
            <div className="w-10 h-10 rounded bg-[#1C1C22] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#FDFBF7]">23 SOHO</h3>
              <p className="text-xs text-[#DFBE7B] font-display tracking-wider">{VENUE_INFO.address}</p>
            </div>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div className="space-y-2">
              <span className="text-[#DFBE7B] font-display uppercase tracking-wider block text-[10px]">Weekly Opening Times</span>
              <div className="space-y-1.5">
                {VENUE_INFO.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-[#C5A059]/10 text-[#FDFBF7]/80">
                    <span className="font-medium">{h.days}</span>
                    <span className="font-display text-[#FFEAA7]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-[#DFBE7B] font-display uppercase tracking-wider block text-[10px]">Nearest Underground Stations</span>
              <ul className="space-y-1 text-[#FDFBF7]/75">
                {VENUE_INFO.nearestTubes.map((t, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Navigation className="w-3 h-3 text-[#C5A059]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/20 flex flex-wrap gap-4 text-[#DFBE7B] font-display tracking-wider text-[11px]">
              <a href={`tel:${VENUE_INFO.phone}`} className="flex items-center gap-1.5 hover:underline">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VENUE_INFO.phone}</span>
              </a>
              <a href={`mailto:${VENUE_INFO.contactEmail}`} className="flex items-center gap-1.5 hover:underline">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VENUE_INFO.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Representation / Directions */}
        <div className="bg-[#121215] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#C5A059]/20 pb-4">
              <div className="w-10 h-10 rounded bg-[#1C1C22] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#FDFBF7]">Frith Street Soho Map</h3>
                <p className="text-xs text-[#DFBE7B] font-display tracking-wider">Heart of London’s Hospitality Quarter</p>
              </div>
            </div>

            {/* Styled Map Graphic Simulation */}
            <div className="relative w-full h-48 bg-[#181820] border border-[#C5A059]/30 rounded-lg p-4 overflow-hidden flex flex-col justify-between">
              {/* Map grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05915_1px,transparent_1px),linear-gradient(to_bottom,#C5A05915_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-display tracking-wider text-[#DFBE7B] bg-[#121215] px-2 py-1 rounded border border-[#C5A059]/30">
                  SOHO W1D
                </span>
                <span className="text-[10px] font-display text-[#FDFBF7]/60">Shaftesbury Avenue ↑</span>
              </div>

              <div className="relative z-10 text-center py-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141418] border-2 border-[#C5A059] text-[#FFEAA7] font-display text-xs rounded-full shadow-xl">
                  <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>23 Frith St · 23 SOHO Basement</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-display text-[#FDFBF7]/60">
                <span>← Old Compton St</span>
                <span>Romilly St →</span>
              </div>
            </div>

            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed font-sans">
              Located on Frith Street between Old Compton Street and Romilly Street, seconds from Ronnie Scott's Jazz Club and Soho Square. Look for our signature black curved awning and brass plaque at number 23, then step downstairs.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=23+Frith+Street+Soho+London+W1D+4RR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 btn-brass text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>

      </div>

      {/* House Rules & Etiquette */}
      <div className="p-8 bg-[#121215] border border-[#C5A059]/30 rounded-2xl space-y-6 shadow-xl">
        <div className="flex items-center gap-2 text-[#DFBE7B] text-xs font-display uppercase tracking-widest">
          <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
          <span>House Etiquette</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FDFBF7]">The 23 Soho Protocol</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#FDFBF7]/80 font-sans">
          <div className="p-4 bg-[#181820] rounded border border-[#C5A059]/20 space-y-2">
            <h4 className="font-display text-sm font-bold text-[#DFBE7B]">The Unhurried Pace</h4>
            <p>We believe cocktails and aperitivo are an exercise in slowing down. Take your time over drinks and cicchetti—there are no rushed table turnarounds during Golden Hour.</p>
          </div>

          <div className="p-4 bg-[#181820] rounded border border-[#C5A059]/20 space-y-2">
            <h4 className="font-display text-sm font-bold text-[#DFBE7B]">Smart Casual Attire</h4>
            <p>Soho evening attire encouraged. Please refrain from wearing athletic tracksuits or beachwear in the cellar.</p>
          </div>

          <div className="p-4 bg-[#181820] rounded border border-[#C5A059]/20 space-y-2">
            <h4 className="font-display text-sm font-bold text-[#DFBE7B]">Conversational Volume</h4>
            <p>Our vinyl sound system is tuned for warm acoustic acoustics. Please keep mobile phone conversations discreet.</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#DFBE7B] text-xs font-display uppercase tracking-widest">Common Questions</span>
          <h2 className="font-display text-3xl font-bold text-[#FDFBF7]">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#121215] border border-[#C5A059]/30 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-display text-base font-bold text-[#FDFBF7] flex items-center justify-between gap-4 hover:text-[#DFBE7B] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#C5A059]" /> : <ChevronDown className="w-4 h-4 text-[#C5A059]" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#FDFBF7]/80 leading-relaxed border-t border-[#C5A059]/10 pt-3 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
