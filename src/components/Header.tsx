import React, { useState } from 'react';
import { PageId } from '../types';
import { Wine, Calendar, Menu, X, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  savedPairingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, savedPairingsCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter out redundant 'book' link from main bar since we have a dedicated prominent BOOK TABLE button
  const desktopNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'drinks-food', label: 'Drinks & Food' },
    { id: 'venue', label: 'The Venue' },
    { id: 'private-hire', label: 'Private Hire' },
    { id: 'whats-on', label: 'What’s On' },
    { id: 'visit', label: 'Visit' },
  ];

  const mobileNavItems: { id: PageId; label: string }[] = [
    ...desktopNavItems,
    { id: 'book', label: 'Book A Table' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1F0609]/95 backdrop-blur-md border-b border-[#C5A059]/30 transition-all duration-300">
      {/* Top Banner - Soho Golden Hour Notice */}
      <div className="bg-[#4A0E17] text-[#DFBE7B] text-xs font-medium py-1.5 px-4 text-center border-b border-[#C5A059]/20 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
        <span>Aperitivo Golden Hour: Tue – Sat 16:30 – 18:30 | Free Cicchetti with your first Spritz</span>
        <button 
          onClick={() => handleNavClick('book')} 
          className="underline font-semibold text-[#DFBE7B] hover:text-white transition-colors ml-2 hidden sm:inline cursor-pointer"
        >
          Reserve Table
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo / Typography */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="group text-left focus:outline-none cursor-pointer"
          >
            <BrandLogo size="lg" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {desktopNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative inline-flex items-center cursor-pointer ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-[#FDFBF7]/90 hover:text-[#DFBE7B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'drinks-food' && savedPairingsCount > 0 && (
                    <span className="inline-flex items-center justify-center align-middle text-[10px] bg-[#C5A059] text-[#2C0A0E] font-bold rounded-full h-4 min-w-[18px] px-1 ml-1.5 shadow-sm">
                      {savedPairingsCount}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('book')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            {/* Mobile Hamburger Button (Minimum 44x44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-lg border border-[#C5A059]/40 bg-[#2C0A0E] text-[#FDFBF7] hover:text-[#C5A059] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F0609] border-b border-[#C5A059]/40 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl">
          <div className="pt-1 pb-2 space-y-1">
            {mobileNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-serif tracking-wide rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#4A0E17] text-[#C5A059] font-bold border-l-4 border-[#C5A059]'
                      : 'text-[#FDFBF7] hover:bg-[#2C0A0E] hover:text-[#DFBE7B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'drinks-food' && savedPairingsCount > 0 && (
                    <span className="px-2 py-0.5 text-xs bg-[#C5A059] text-[#2C0A0E] font-bold rounded-full">
                      {savedPairingsCount} saved
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#C5A059]/20 space-y-3">
            <button
              onClick={() => handleNavClick('book')}
              className="w-full py-3.5 bg-[#C5A059] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Table</span>
            </button>

            <div className="text-xs text-[#E8D5C4] flex items-center justify-center gap-4 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> 23 Frith St, Soho</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Tue–Sat from 16:30</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
