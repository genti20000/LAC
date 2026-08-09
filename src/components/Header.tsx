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

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'drinks-food', label: 'Drinks & Food' },
    { id: 'venue', label: 'The Venue' },
    { id: 'private-hire', label: 'Private Hire' },
    { id: 'whats-on', label: 'What’s On' },
    { id: 'visit', label: 'Visit' },
    { id: 'book', label: 'Book' },
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
        <span>Aperitivo Golden Hour: 16:30 – 18:30 Daily | Free Cicchetti with your first Spritz</span>
        <button 
          onClick={() => handleNavClick('book')} 
          className="underline font-semibold hover:text-white transition-colors ml-2 hidden sm:inline"
        >
          Reserve Now
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo / Typography */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="group text-left focus:outline-none"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-[#FDFBF7]/80 hover:text-[#DFBE7B]'
                  }`}
                >
                  {item.label}
                  {item.id === 'drinks-food' && savedPairingsCount > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-[#C5A059] text-[#2C0A0E] font-bold rounded-full">
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-semibold text-xs tracking-widest uppercase rounded transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#FDFBF7] hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F0609] border-b border-[#C5A059]/30 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-serif tracking-wide rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#4A0E17] text-[#C5A059] font-bold border-l-4 border-[#C5A059]'
                      : 'text-[#FDFBF7]/90 hover:bg-[#2C0A0E] hover:text-[#DFBE7B]'
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

          <div className="pt-4 border-t border-[#C5A059]/20 space-y-3">
            <button
              onClick={() => handleNavClick('book')}
              className="w-full py-3 bg-[#C5A059] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Table</span>
            </button>

            <div className="text-xs text-[#FDFBF7]/60 flex items-center justify-center gap-4 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> 23 Frith St, Soho</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Tue-Sat from 16:00</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
