import React, { useState } from 'react';
import { PageId, EventItem } from '../types';
import { EVENTS_DATA } from '../data/eventsData';
import { Music, Calendar, Clock, Sparkles, Filter, Wine, ArrowRight, Ticket } from 'lucide-react';

import VAULT_IMAGE from '../assets/images/wine_vault_ambiance_1786202528861.jpg';

interface WhatsOnPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhatsOnPage: React.FC<WhatsOnPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Live Music & Cabaret', 'Aperitivo Hours', 'Vinyl & Beats', 'Masterclass', 'Tasting'];

  const filteredEvents = activeCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">
          CURATED PROGRAMME · SOHO LONDON
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#FDFBF7]">
          What’s On & Vault Sessions
        </h1>
        <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed">
          From analog vinyl disco nights and daily golden hour cicchetti to intimate sommelier vermouth masterclasses, experience London Aperitivo Club in motion.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 border-b border-[#C5A059]/20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-[#C5A059] text-[#2C0A0E] shadow-md'
                : 'bg-[#1F0609] border border-[#C5A059]/30 text-[#FDFBF7]/80 hover:text-[#DFBE7B]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#1F0609] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[#C5A059] transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 bg-[#4A0E17] border border-[#C5A059]/30 text-[#DFBE7B] text-[10px] font-mono uppercase tracking-wider rounded-full">
                  {event.category}
                </span>
                <span className="text-xs font-mono text-[#C5A059] font-bold">
                  {event.priceInfo}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#C5A059] font-mono block">{event.subtitle}</span>
                <h3 className="font-serif text-2xl font-bold text-[#FDFBF7] group-hover:text-[#DFBE7B] transition-colors mt-0.5">
                  {event.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#FDFBF7]/80 font-mono pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{event.time}</span>
                </div>
              </div>

              <p className="text-xs text-[#FDFBF7]/75 leading-relaxed">
                {event.description}
              </p>

              <div className="p-3 bg-[#2C0A0E] rounded border border-[#C5A059]/20 text-xs text-[#DFBE7B] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Highlight:</strong> {event.highlight}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#FDFBF7]/50 uppercase">23 Frith St · Soho</span>
              <button
                onClick={() => onNavigate('book')}
                className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs uppercase tracking-wider rounded flex items-center gap-1.5 transition-colors"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>Reserve Entry</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Vinyl Night Banner */}
      <div className="bg-[#4A0E17] border-2 border-[#C5A059] rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <Music className="w-10 h-10 text-[#C5A059] mx-auto animate-pulse" />
          <span className="text-xs font-mono text-[#DFBE7B] uppercase tracking-widest block">Analog Sound System</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7]">
            Vinyl & Vermouth Thursdays
          </h2>
          <p className="text-xs sm:text-sm text-[#FDFBF7]/85 leading-relaxed">
            Every Thursday evening, our resident selectors spin rare 70s Italo-disco, obscure jazz funk, and cosmic lounge vinyl on our custom analog sound system. No loud club noise—just pure warm music engineered for conversation.
          </p>
          <button
            onClick={() => onNavigate('book')}
            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs uppercase tracking-widest rounded shadow-lg"
          >
            Reserve Table For Thursday Night
          </button>
        </div>
      </div>

    </div>
  );
};
