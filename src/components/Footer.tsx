import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowRight } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { BrandLogo } from './BrandLogo';
import { JazzAmbientAudio } from './JazzAmbientAudio';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0B0B0C] border-t border-[#C5A059]/30 text-[#FDFBF7] pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ambient 1950s Jazz Cafe Audio Soundscape Bar */}
        <div className="w-full">
          <JazzAmbientAudio />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo size="md" showSubtitle={true} showIcon={true} />
            <p className="text-xs text-[#DFBE7B]/80 leading-relaxed pt-2 font-sans">
              An intimate subterranean sanctuary behind the black awning at 23 Frith Street in Soho celebrating bespoke cocktails, fine wines, artisanal cicchetti, and late-night vinyl soundscapes in candlelit brick vaults.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-[#C5A059]">
              <a href={`https://instagram.com`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs font-display">
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>{VENUE_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-display text-base font-bold text-[#DFBE7B] tracking-widest uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              Guest Pages
            </h4>
            <ul className="space-y-3 text-xs text-[#E8D5C4]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">Home & Atmosphere</button>
              </li>
              <li>
                <button onClick={() => onNavigate('drinks-food')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">Drinks, Spritz & Food Menu</button>
              </li>
              <li>
                <button onClick={() => onNavigate('venue')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">The 23 Soho Venue</button>
              </li>
              <li>
                <button onClick={() => onNavigate('private-hire')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">Private Hire & Vault Buyouts</button>
              </li>
              <li>
                <button onClick={() => onNavigate('whats-on')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">What’s On & Vinyl Sessions</button>
              </li>
              <li>
                <button onClick={() => onNavigate('visit')} className="hover:text-[#C5A059] transition-colors py-1 text-left cursor-pointer font-sans">Visit, Hours & Directions</button>
              </li>
              <li>
                <button onClick={() => onNavigate('book')} className="text-[#DFBE7B] font-display font-bold hover:underline py-1 text-left cursor-pointer tracking-wider">Book A Table Online →</button>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div>
            <h4 className="font-display text-base font-bold text-[#DFBE7B] tracking-widest uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              Visit & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#E8D5C4] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{VENUE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{VENUE_INFO.contactEmail}</span>
              </div>

              <div className="pt-2 border-t border-[#C5A059]/20 space-y-1">
                <div className="flex items-center gap-2 text-[#DFBE7B] font-display font-semibold text-xs tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Aperitivo Golden Hour</span>
                </div>
                <p className="text-[11px] text-[#FDFBF7]">Tuesday – Saturday: 16:30 – 18:30</p>
                <p className="text-[10px] text-[#E8D5C4]/70">Late Lounge Open Tue–Thu until 23:30 / Fri–Sat until Late</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-display text-base font-bold text-[#DFBE7B] tracking-widest uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              The 23 Soho Dispatch
            </h4>
            <p className="text-xs text-[#DFBE7B]/80 mb-4 leading-relaxed font-sans">
              Subscribe for invitations to secret vault tastings, seasonal releases, and early access to late-night vinyl bookings.
            </p>
            {emailSubmitted ? (
              <div className="p-3 bg-[#1C1C22] border border-[#C5A059]/40 text-[#DFBE7B] text-xs rounded text-center font-display">
                Grazie! You’ve been added to the guest register.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#141418] border border-[#C5A059]/40 rounded text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="btn-brass absolute right-1 top-1 bottom-1 px-3 text-xs rounded flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="block text-[10px] text-[#FDFBF7]/40">We respect your inbox. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/50 gap-4 font-sans">
          <p>© {new Date().getFullYear()} 23 SOHO. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>23 Frith Street, London W1D 4RR</span>
            <span>·</span>
            <button onClick={() => onNavigate('visit')} className="hover:text-[#C5A059]">House Rules & Dress Code</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
