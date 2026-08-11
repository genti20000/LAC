import React from 'react';
import { PageId } from '../types';
import { VENUE_INFO } from '../data/venueData';
import { MapPin, Wine, Music, Calendar, Clock, Award, Compass, Sparkles, BookOpen } from 'lucide-react';

import HERO_IMAGE from '../assets/images/lac_bar_counter_soho_1786315443098.jpg';
import VAULT_IMAGE from '../assets/images/wine_vault_ambiance_1786202528861.jpg';
import BOOTH_IMAGE from '../assets/images/lac_subterranean_booth_1786315472218.jpg';
import VINYL_IMAGE from '../assets/images/lac_vinyl_turntable_aperitivo_1786315480379.jpg';

interface VenuePageProps {
  onNavigate: (page: PageId) => void;
}

export const VenuePage: React.FC<VenuePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#1F0609] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="London Aperitivo Club Soho subterranean wine bar interior"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C0A0E] via-[#2C0A0E]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4 pt-12 pb-12">
          <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">
            HISTORIC SUBTERRANEAN CELLAR · FRITH STREET SOHO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#FDFBF7]">
            The Soho Venue
          </h1>
          <p className="text-sm sm:text-base text-[#FDFBF7]/85 max-w-2xl mx-auto font-light leading-relaxed">
            A sanctuary beneath Soho’s pavement where oxblood leather banquettes, exposed brick arches, and centuries of wine heritage converge.
          </p>
        </div>
      </section>

      {/* Main Editorial Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">Subterranean Atmosphere</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7] leading-tight">
              An Intimate Soho Cellar Born for Unhurried Evenings
            </h2>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed">
              Step off Frith Street and descend into our candlelit basement. The air carries the rich aroma of aged oak, roasted coffee, and bitter botanical infusions.
            </p>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed">
              Designed as a refuge from the clamour of the West End, London Aperitivo Club takes residence within historic brick wine vaults. With dim amber sconces, custom oxblood leather seating, and aged brass counters, every corner invites relaxed conversation and lingering over a second spritz.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#C5A059]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>23 Frith Street, Soho W1D 4RR</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/3]">
            <img
              src={BOOTH_IMAGE}
              alt="Wine cellar vault alcove at London Aperitivo Club Soho"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#2C0A0E]/90 border border-[#C5A059]/30 backdrop-blur-md rounded text-xs text-[#DFBE7B] font-serif italic">
              "The wine vault alcoves offer complete privacy for intimate gatherings."
            </div>
          </div>
        </div>

        {/* Three Pillars of the Venue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#1F0609] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#4A0E17] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">The Wine Vaults</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed">
              Housing over 500 hand-selected wine labels from volcanic Sicilian terroirs to rare old-world vintages, maintained under precise cellar temperature control.
            </p>
          </div>

          <div className="bg-[#1F0609] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#4A0E17] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Analog Vinyl Acoustics</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed">
              Curated analog sound system playing warm 70s Italo-disco, afro-jazz, and ambient lounge vinyl seamlessly integrated into the space acoustics.
            </p>
          </div>

          <div className="bg-[#1F0609] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#4A0E17] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Sommelier Hospitality</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed">
              Founded by veteran sommeliers who believe hospitality should feel personal, unpretentious, and deeply welcoming to all.
            </p>
          </div>

        </div>

        {/* Sommelier Philosophy Callout */}
        <div className="p-8 sm:p-12 bg-[#4A0E17] border-2 border-[#C5A059]/40 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <BookOpen className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
              The Soho Club Philosophy
            </h3>
            <p className="font-serif text-lg sm:text-xl italic text-[#DFBE7B] leading-relaxed">
              "Great wine and aperitivo should not be restricted to formal white-cloth dining. At London Aperitivo Club, we bring the best bottles in the world down into a cozy Soho basement, paired with Venetian cicchetti and great music."
            </p>
            <span className="block text-xs font-mono text-[#C5A059] uppercase tracking-widest pt-2">
              — Sommelier Founders, London Aperitivo Club
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Experience London Aperitivo Club Firsthand</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book')}
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded shadow-lg transition-colors"
            >
              Reserve A Table
            </button>
            <button
              onClick={() => onNavigate('private-hire')}
              className="px-8 py-3.5 bg-[#1F0609] border border-[#C5A059]/50 hover:border-[#C5A059] text-[#FDFBF7] font-semibold text-xs tracking-widest uppercase rounded transition-colors"
            >
              Inquire About Private Hire
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
