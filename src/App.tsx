/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, BookingConfirmation } from './types';
import { Calendar, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AperitivoQuizModal } from './components/AperitivoQuizModal';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { DrinksFoodPage } from './pages/DrinksFoodPage';
import { VenuePage } from './pages/VenuePage';
import { PrivateHirePage } from './pages/PrivateHirePage';
import { WhatsOnPage } from './pages/WhatsOnPage';
import { VisitPage } from './pages/VisitPage';
import { BookPage } from './pages/BookPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [activeConfirmation, setActiveConfirmation] = useState<BookingConfirmation | null>(null);

  // Saved pairings state in localStorage
  const [savedPairings, setSavedPairings] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('lac_saved_pairings');
      return stored ? JSON.parse(stored) : ['lac-signature-spritz', 'focaccia-rosemary'];
    } catch {
      return ['lac-signature-spritz', 'focaccia-rosemary'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lac_saved_pairings', JSON.stringify(savedPairings));
    } catch (e) {
      console.error(e);
    }
  }, [savedPairings]);

  const handleToggleSavedPairing = (id: string) => {
    setSavedPairings((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookingComplete = (confirmation: BookingConfirmation) => {
    setActiveConfirmation(confirmation);
  };

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#2C0A0E] text-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-[#2C0A0E]">
      
      {/* Header Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        savedPairingsCount={savedPairings.length}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuiz={() => setQuizOpen(true)}
          />
        )}

        {currentPage === 'drinks-food' && (
          <DrinksFoodPage
            onNavigate={navigateTo}
            savedPairings={savedPairings}
            onToggleSavedPairing={handleToggleSavedPairing}
            onOpenQuiz={() => setQuizOpen(true)}
          />
        )}

        {currentPage === 'venue' && (
          <VenuePage onNavigate={navigateTo} />
        )}

        {currentPage === 'private-hire' && (
          <PrivateHirePage onNavigate={navigateTo} />
        )}

        {currentPage === 'whats-on' && (
          <WhatsOnPage onNavigate={navigateTo} />
        )}

        {currentPage === 'visit' && (
          <VisitPage onNavigate={navigateTo} />
        )}

        {currentPage === 'book' && (
          <BookPage
            onNavigate={navigateTo}
            onBookingComplete={handleBookingComplete}
            savedPairingsCount={savedPairings.length}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky Mobile Bottom CTA Bar for Instant Conversions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A0507]/95 backdrop-blur-lg border-t border-[#C5A059]/40 p-2.5 px-4 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-xs text-[#E8D5C4]">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
          <span className="font-serif font-bold text-[#FDFBF7] tracking-wide">London Aperitivo Club</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuizOpen(true)}
            className="px-3 py-2 bg-[#4A0E17] border border-[#C5A059]/60 text-[#DFBE7B] font-semibold text-[11px] rounded flex items-center gap-1 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quiz</span>
          </button>

          <button
            onClick={() => navigateTo('book')}
            className="px-4 py-2 bg-[#C5A059] text-[#2C0A0E] font-bold text-xs uppercase tracking-wider rounded shadow-md flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>
      </div>

      {/* Interactive Aperitivo Finder Quiz Modal */}
      <AperitivoQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onBookTable={() => navigateTo('book')}
      />

      {/* Digital Booking Confirmation Modal */}
      <BookingConfirmationModal
        confirmation={activeConfirmation}
        onClose={() => setActiveConfirmation(null)}
      />

    </div>
  );
}

