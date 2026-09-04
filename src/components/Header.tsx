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
    <header className="sticky top-0 z-40 bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#C5A059]/30 transition-all duration-300">
      {/* Top Banner - 23 Soho Facade Notice */}
      <div className="bg-[#121215] text-[#DFBE7B] text-[10px] sm:text-xs font-display tracking-widest uppercase py-1.5 px-4 text-center border-b border-[#C5A059]/20 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
        <span>23 SOHO · COCKTAILS · MUSIC · LATE · APERITIVO TUE–SAT 16:30–18:30</span>
        <button 
          onClick={() => handleNavClick('book')} 
          className="underline font-semibold text-[#FFEAA7] hover:text-white transition-colors ml-2 hidden sm:inline cursor-pointer"
        >
          Reserve Table
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Logo / Typography */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="group text-left focus:outline-none cursor-pointer"
            aria-label="23 SOHO Home"
          >
            <BrandLogo size="md" showSubtitle={true} showIcon={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {desktopNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs font-display tracking-widest uppercase transition-all duration-200 relative inline-flex items-center cursor-pointer ${
                    isActive
                      ? 'text-[#FFEAA7] font-bold'
                      : 'text-[#FDFBF7]/85 hover:text-[#DFBE7B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'drinks-food' && savedPairingsCount > 0 && (
                    <span className="inline-flex items-center justify-center align-middle text-[10px] bg-[#C5A059] text-[#0B0B0C] font-bold rounded-full h-4 min-w-[18px] px-1 ml-1.5 shadow-sm">
                      {savedPairingsCount}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('book')}
              className="btn-brass hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Hamburger Button (Minimum 44x44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-lg border border-[#C5A059]/40 bg-[#121215] text-[#FDFBF7] hover:text-[#DFBE7B] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121215] border-b border-[#C5A059]/40 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl">
          <div className="pt-1 pb-2 space-y-1">
            {mobileNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-display tracking-wider uppercase rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1C22] text-[#FFEAA7] font-bold border-l-4 border-[#C5A059]'
                      : 'text-[#FDFBF7] hover:bg-[#18181D] hover:text-[#DFBE7B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'drinks-food' && savedPairingsCount > 0 && (
                    <span className="px-2 py-0.5 text-xs bg-[#C5A059] text-[#0B0B0C] font-bold rounded-full">
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
              className="btn-brass w-full py-3.5 text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Table</span>
            </button>

            <div className="text-xs text-[#DFBE7B] flex items-center justify-center gap-4 pt-1 font-sans">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> 23 Frith St, Soho</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Tue–Sat from 16:30</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
