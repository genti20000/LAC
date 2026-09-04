import React from 'react';
import { PageId } from '../types';
import { VENUE_INFO } from '../data/venueData';
import { MapPin, Wine, Music, Calendar, Clock, Award, Compass, Sparkles, BookOpen } from 'lucide-react';

import HERO_IMAGE from '../assets/images/soho_23_facade_night_1788541352970.jpg';
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
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0B0B0C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="23 SOHO exterior facade and subterranean cocktail haven on 23 Frith Street"
            className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4 pt-16 pb-12">
          <span className="text-[#DFBE7B] text-xs font-display uppercase tracking-widest block">
            HISTORIC SUBTERRANEAN SANCTUARY · 23 FRITH STREET SOHO
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#FDFBF7] tracking-wide">
            The 23 Soho Venue
          </h1>
          <p className="text-sm sm:text-base text-[#DFBE7B]/85 max-w-2xl mx-auto font-sans leading-relaxed">
            Marked by the iconic black curved awning and warm golden lanterns of 23 Frith Street, where plush banquettes, exposed brick vaults, and analog music converge.
          </p>
        </div>
      </section>

      {/* Main Editorial Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#DFBE7B] text-xs font-display uppercase tracking-widest block">Subterranean Atmosphere</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FDFBF7] leading-tight">
              An Intimate Soho Cellar Born for Unhurried Evenings
            </h2>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed font-sans">
              Step past the brass plaque on Frith Street and descend into our candlelit basement. The air carries the rich aroma of aged oak, roasted espresso, and bitter botanical infusions.
            </p>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed font-sans">
              Designed as a refuge from the clamour of the West End, 23 SOHO takes residence within historic brick vaults. With dim amber sconces, custom leather seating, and aged brass fixtures, every corner invites relaxed conversation and lingering over a bespoke cocktail.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2 text-xs font-display text-[#DFBE7B]">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>23 Frith Street, Soho London W1D 4RR</span>
              </div>

              <div className="p-4 rounded-xl bg-[#121215] border border-[#C5A059]/40 space-y-2 text-xs font-sans">
                <div className="flex items-center gap-2 text-[#DFBE7B] font-display font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Opening Schedule</span>
                </div>
                <p className="text-[#FDFBF7] font-medium">
                  • Aperitivo Golden Hour: <span className="text-[#DFBE7B]">Tuesday – Saturday 16:30 – 18:30</span>
                </p>
                <p className="text-[#FDFBF7]/80 text-[11px]">
                  • Main Bar & Vault Lounge: Tue–Thu 16:30 – 23:30 · Fri–Sat 16:30 – Late
                </p>
                <p className="text-[#DFBE7B]/70 text-[10px] italic">
                  Closed Sundays & Mondays for private masterclasses and vault buyouts.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/3]">
            <img
              src={BOOTH_IMAGE}
              alt="Wine cellar vault alcove at 23 SOHO"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#121215]/90 border border-[#C5A059]/30 backdrop-blur-md rounded text-xs text-[#DFBE7B] font-serif italic">
              "The vault alcoves offer complete privacy for intimate gatherings and late-night toasts."
            </div>
          </div>
        </div>

        {/* Three Pillars of the Venue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#121215] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1C1C22] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#FDFBF7]">The Wine & Spirit Vaults</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed font-sans">
              Housing over 500 hand-selected wine labels from volcanic Sicilian terroirs to rare old-world vintages and small-batch amari, maintained under precise cellar temperature control.
            </p>
          </div>

          <div className="bg-[#121215] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1C1C22] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#FDFBF7]">Analog Vinyl Acoustics</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed font-sans">
              Curated analog sound system playing warm 70s Italo-disco, afro-jazz, and ambient lounge vinyl seamlessly integrated into the space acoustics.
            </p>
          </div>

          <div className="bg-[#121215] border border-[#C5A059]/30 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1C1C22] border border-[#C5A059] text-[#C5A059] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#FDFBF7]">Bespoke Hospitality</h3>
            <p className="text-xs text-[#FDFBF7]/75 leading-relaxed font-sans">
              Founded by veteran hospitality masters who believe late-night service should feel personal, discerning, and deeply welcoming to all.
            </p>
          </div>

        </div>

        {/* Sommelier Philosophy Callout */}
        <div className="p-8 sm:p-12 bg-[#141418] border-2 border-[#C5A059]/40 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <BookOpen className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
              The 23 Soho Philosophy
            </h3>
            <p className="font-serif text-lg sm:text-xl italic text-[#DFBE7B] leading-relaxed">
              "Great cocktails and fine wine should not be restricted to formal white-cloth dining. At 23 SOHO, we bring the best spirits in the world down into a candlelit Soho basement, paired with Italian cicchetti and great music."
            </p>
            <span className="block text-xs font-display text-[#DFBE7B] uppercase tracking-widest pt-2">
              — 23 SOHO Founders, 23 Frith Street
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4 space-y-4">
          <h3 className="font-display text-2xl font-bold text-[#FDFBF7]">Experience 23 SOHO Firsthand</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book')}
              className="btn-brass px-8 py-3.5 text-xs tracking-widest uppercase rounded cursor-pointer"
            >
              Reserve A Table
            </button>
            <button
              onClick={() => onNavigate('private-hire')}
              className="btn-brass-outline px-8 py-3.5 text-xs tracking-widest uppercase rounded cursor-pointer"
            >
              Inquire About Private Hire
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
