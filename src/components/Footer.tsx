import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowRight } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { BrandLogo } from './BrandLogo';

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
    <footer className="bg-[#1F0609] border-t border-[#C5A059]/30 text-[#FDFBF7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed pt-2">
              An intimate subterranean sanctuary on Frith Street in Soho celebrating the timeless ritual of the Italian Aperitivo, fine wines, and artisanal cicchetti in candlelit brick vaults.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-[#C5A059]">
              <a href={`https://instagram.com`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                <Instagram className="w-4 h-4" />
                <span>{VENUE_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wider uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              Guest Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FDFBF7]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#C5A059] transition-colors">Home & Atmosphere</button>
              </li>
              <li>
                <button onClick={() => onNavigate('drinks-food')} className="hover:text-[#C5A059] transition-colors">Drinks, Spritz & Food Menu</button>
              </li>
              <li>
                <button onClick={() => onNavigate('venue')} className="hover:text-[#C5A059] transition-colors">The Soho Venue</button>
              </li>
              <li>
                <button onClick={() => onNavigate('private-hire')} className="hover:text-[#C5A059] transition-colors">Private Hire & Vault Buyouts</button>
              </li>
              <li>
                <button onClick={() => onNavigate('whats-on')} className="hover:text-[#C5A059] transition-colors">What’s On & Vinyl Sessions</button>
              </li>
              <li>
                <button onClick={() => onNavigate('visit')} className="hover:text-[#C5A059] transition-colors">Visit, Hours & Directions</button>
              </li>
              <li>
                <button onClick={() => onNavigate('book')} className="text-[#C5A059] font-semibold hover:underline">Book A Table Online</button>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wider uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#FDFBF7]/80">
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

              <div className="pt-2 border-t border-[#C5A059]/20">
                <div className="flex items-center gap-2 text-[#C5A059] font-medium mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Aperitivo Golden Hour</span>
                </div>
                <p className="text-[11px] text-[#FDFBF7]/70">Tuesday – Saturday: 16:30 – 18:30</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wider uppercase mb-4 border-b border-[#C5A059]/20 pb-2">
              The Aperitivo Dispatch
            </h4>
            <p className="text-xs text-[#FDFBF7]/70 mb-4 leading-relaxed">
              Subscribe for invitations to secret vault tastings, seasonal Vermouth releases, and early access to vinyl night reservations.
            </p>
            {emailSubmitted ? (
              <div className="p-3 bg-[#4A0E17] border border-[#C5A059]/40 text-[#DFBE7B] text-xs rounded text-center">
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
                    className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/40 rounded text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs rounded flex items-center justify-center transition-colors"
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
        <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/50 gap-4">
          <p>© {new Date().getFullYear()} London Aperitivo Club Soho. All rights reserved.</p>
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
