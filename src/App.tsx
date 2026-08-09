/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, BookingConfirmation } from './types';
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

