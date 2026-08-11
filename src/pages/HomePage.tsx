import React from 'react';
import { PageId } from '../types';
import { Wine, Calendar, Clock, MapPin, Sparkles, ArrowRight, Music, ShieldCheck, Heart, Award, Disc } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { MENU_ITEMS } from '../data/menuData';
import { AnimatedHeroSlider } from '../components/AnimatedHeroSlider';
import { AnimatedPosterSlider } from '../components/AnimatedPosterSlider';

// Image assets for London Aperitivo Club Soho
import BAR_COUNTER_IMAGE from '../assets/images/lac_bar_counter_soho_1786315443098.jpg';
import SPRITZ_IMAGE from '../assets/images/aperitivo_spritz_plates_1786202515156.jpg';
import CICCHETTI_IMAGE from '../assets/images/lac_cicchetti_board_soho_1786315452773.jpg';
import VERMOUTH_POUR_IMAGE from '../assets/images/lac_vermouth_pour_soho_1786315461286.jpg';
import BOOTH_IMAGE from '../assets/images/lac_subterranean_booth_1786315472218.jpg';
import VINYL_IMAGE from '../assets/images/lac_vinyl_turntable_aperitivo_1786315480379.jpg';
import PRIVATE_IMAGE from '../assets/images/private_hire_space_1786202544546.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuiz }) => {
  const signatureItems = MENU_ITEMS.filter((item) => item.tags?.includes('Signature') || item.tags?.includes('Best Seller')).slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* ANIMATED HERO SLIDER SHOWCASE */}
      <AnimatedHeroSlider onNavigate={onNavigate} onOpenQuiz={onOpenQuiz} />

      {/* RITUAL & PHILOSOPHY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F0609] border border-[#C5A059]/30 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="space-y-6 z-10">
            <div className="flex items-center gap-2 text-[#C5A059] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>The London Aperitivo Hour</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7] leading-tight">
              An Evening Unhurried: The Golden Hour Ritual in Soho
            </h2>

            <p className="text-sm text-[#FDFBF7]/80 leading-relaxed">
              In Northern Italy, aperitivo is not merely a pre-dinner drink—it is a sacred pause between the urgency of the workday and the ease of the evening.
            </p>

            <p className="text-sm text-[#FDFBF7]/80 leading-relaxed">
              Every afternoon from 16:30 to 18:30, guests at London Aperitivo Club enjoy complimentary seasonal cicchetti—warm rosemary focaccia, marinated Castelvetrano olives, and artisan prosciutto—served alongside their first spritz or barrel-aged vermouth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuiz}
                className="px-5 py-3 bg-[#4A0E17] hover:bg-[#2C0A0E] border border-[#C5A059] text-[#DFBE7B] font-semibold text-xs tracking-wider uppercase rounded flex items-center gap-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Take Aperitivo Pairing Quiz</span>
              </button>

              <button
                onClick={() => onNavigate('venue')}
                className="text-xs text-[#C5A059] hover:text-[#DFBE7B] font-semibold underline underline-offset-4"
              >
                Read The Soho Club Story →
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl aspect-[4/3]">
              <img
                src={SPRITZ_IMAGE}
                alt="Venetian Spritz and Cicchetti small plates"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#2C0A0E]/90 border border-[#C5A059]/30 backdrop-blur-md rounded text-xs">
                <span className="font-serif font-bold text-[#DFBE7B] text-sm block">The Soho Venetian Spritz</span>
                <span className="text-[#FDFBF7]/70">Select Aperitivo 1920, Organic Prosecco DOCG & Castelvetrano Olive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID OF SOHO EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">Subterranean Hospitality</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FDFBF7]">
            Inside London Aperitivo Club
          </h2>
          <p className="text-xs sm:text-sm text-[#FDFBF7]/70 max-w-xl mx-auto">
            Explore our candlelit brick vaults, artisanal cicchetti boards, craft vermouth pours, and audiophile vinyl lounge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 group aspect-[4/3]">
            <img src={CICCHETTI_IMAGE} alt="Hand carved prosciutto and Venetian cicchetti board" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-serif text-[#DFBE7B]">
              <span className="block font-bold">Artisanal Cicchetti Boards</span>
              <span className="text-[10px] text-[#FDFBF7]/70 font-sans">Prosciutto di Parma 24-Month & Focaccia</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 group aspect-[4/3]">
            <img src={VERMOUTH_POUR_IMAGE} alt="Sommelier pouring cask-aged Vermouth di Torino" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-serif text-[#DFBE7B]">
              <span className="block font-bold">Cask-Aged Vermouth & Amari</span>
              <span className="text-[10px] text-[#FDFBF7]/70 font-sans">Poured over hand-carved clear ice</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 group aspect-[4/3]">
            <img src={VINYL_IMAGE} alt="Audiophile vinyl turntable and Negroni in Soho lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-serif text-[#DFBE7B]">
              <span className="block font-bold">Analog Vinyl & Italo Jazz</span>
              <span className="text-[10px] text-[#FDFBF7]/70 font-sans">Curated soundscapes on Frith Street</span>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED VINTAGE ITALIAN POSTER SLIDER SHOWCASE */}
      <AnimatedPosterSlider />

      {/* SIGNATURE DRINKS & CICCHETTI PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">Crafted For The Palate</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FDFBF7]">
            Signature Spritzes & Small Plates
          </h2>
          <p className="text-xs sm:text-sm text-[#FDFBF7]/70 max-w-xl mx-auto">
            Curated by our sommelier and culinary team, each pairing balances bitter botanical depth with rich Venetian flavours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1F0609] border border-[#C5A059]/30 rounded-xl p-6 space-y-4 hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase block">{item.italianName || item.category}</span>
                    <h3 className="font-serif text-xl font-bold text-[#FDFBF7] group-hover:text-[#DFBE7B] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="font-serif text-lg font-bold text-[#C5A059] bg-[#2C0A0E] px-3 py-1 rounded border border-[#C5A059]/30 shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs text-[#FDFBF7]/75 leading-relaxed">
                  {item.description}
                </p>

                {item.tastingNotes && (
                  <p className="text-[11px] text-[#DFBE7B] bg-[#2C0A0E] p-2.5 rounded border border-[#C5A059]/20 font-serif italic">
                    Tasting: "{item.tastingNotes}"
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-xs">
                {item.pairingRecommendation && (
                  <span className="text-[10px] text-[#C5A059] font-medium flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#C5A059]" />
                    <span>Pairs with: {item.pairingRecommendation}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('drinks-food')}
            className="px-8 py-3.5 bg-[#4A0E17] border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#2C0A0E] text-[#DFBE7B] font-bold text-xs tracking-widest uppercase rounded transition-all duration-300"
          >
            View Full Drinks & Food Menu
          </button>
        </div>
      </section>

      {/* VENUE AMBIANCE & SOHO HERITAGE */}
      <section className="bg-[#1F0609] border-y border-[#C5A059]/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[16/10]">
              <img
                src={BOOTH_IMAGE}
                alt="London Aperitivo Club subterranean leather booth lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#2C0A0E]/90 border border-[#C5A059]/40 backdrop-blur-md rounded">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase block">Subterranean Oxblood Booths</span>
                <p className="font-serif text-sm text-[#FDFBF7] italic">"An intimate sanctuary on Frith Street."</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-mono uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>23 Frith Street · Soho Basement</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FDFBF7] leading-tight">
                Step Down Into Frith Street’s Best-Kept Secret
              </h2>

              <p className="text-sm text-[#FDFBF7]/80 leading-relaxed">
                Beneath the vibrant neon glow of Soho lies an intimate sanctuary of oxblood leather banquettes, exposed subterranean brick arches, flickering candlelight, and rows of hand-selected wine vintages.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#2C0A0E] border border-[#C5A059]/20 rounded space-y-1">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  <h4 className="font-serif text-base font-bold text-[#DFBE7B]">Sommelier Roots</h4>
                  <p className="text-xs text-[#FDFBF7]/60">Curated by hospitality veterans with over 500 handpicked bottles.</p>
                </div>

                <div className="p-4 bg-[#2C0A0E] border border-[#C5A059]/20 rounded space-y-1">
                  <Music className="w-5 h-5 text-[#C5A059]" />
                  <h4 className="font-serif text-base font-bold text-[#DFBE7B]">Analog Sound</h4>
                  <p className="text-xs text-[#FDFBF7]/60">Italo-disco & rare jazz spins every Thursday evening.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('venue')}
                  className="px-6 py-3 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded transition-colors"
                >
                  Discover The Venue
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRIVATE HIRE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#1F0609] p-8 sm:p-14 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={PRIVATE_IMAGE}
              alt="Private hire event setup at London Aperitivo Club Soho"
              className="w-full h-full object-cover filter blur-[2px]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">Exclusive Vault Celebrations</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FDFBF7]">
              Host Your Private Event in the Heart of Soho
            </h2>
            <p className="text-sm text-[#FDFBF7]/85 leading-relaxed">
              From intimate private dining in our arched Wine Cellar Vault (up to 14 guests) to full subterranean venue buyouts (up to 60 guests), London Aperitivo Club offers bespoke cocktail setups and masterclass packages.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('private-hire')}
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded shadow-lg transition-colors"
              >
                View Private Hire Packages
              </button>

              <button
                onClick={() => onNavigate('visit')}
                className="px-6 py-3 bg-[#2C0A0E] border border-[#C5A059]/50 hover:border-[#C5A059] text-[#FDFBF7] text-xs font-semibold rounded transition-colors"
              >
                Contact Events Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS & QUOTES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-2">
          <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest">Praise & Recognition</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7]">What Insiders Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#1F0609] border border-[#C5A059]/30 rounded-lg text-left space-y-3">
            <div className="flex items-center text-[#C5A059] gap-1">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="font-serif text-base italic text-[#FDFBF7]/90 leading-relaxed">
              "An effortlessly stylish subterranean addition to Soho. The barrel-aged Negronis at London Aperitivo Club set the standard for aperitivo in London."
            </p>
            <span className="block text-xs text-[#C5A059] font-mono uppercase">— London Hospitality Digest</span>
          </div>

          <div className="p-6 bg-[#1F0609] border border-[#C5A059]/30 rounded-lg text-left space-y-3">
            <div className="flex items-center text-[#C5A059] gap-1">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="font-serif text-base italic text-[#FDFBF7]/90 leading-relaxed">
              "The golden hour ritual on Frith Street is unmatched. Free cicchetti, vinyl records, and candlelit brick vaults—it feels like Milan transposed to Soho."
            </p>
            <span className="block text-xs text-[#C5A059] font-mono uppercase">— West End Nightlife Guide</span>
          </div>
        </div>
      </section>

    </div>
  );
};
