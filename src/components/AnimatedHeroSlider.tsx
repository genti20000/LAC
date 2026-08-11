import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Wine } from 'lucide-react';
import { PageId } from '../types';

import burlesquePerfImg from '../assets/images/burlesque_singer_perf_1786331553709.jpg';
import burlesquePosterImg from '../assets/images/burlesque_poster_art_1786331567078.jpg';
import milanoLoungeImg from '../assets/images/milano_ny_aperitivo_lounge_1786331418627.jpg';
import milanoPosterImg from '../assets/images/milano_ny_poster_art_1786331429944.jpg';
import vaultsImg from '../assets/images/lac_hero_subterranean_vaults_1786330130388.jpg';
import spritzPosterImg from '../assets/images/lac_vintage_poster_spritz_1786330104445.jpg';
import entranceImg from '../assets/images/lac_soho_frith_street_entrance_1786330142680.jpg';
import vermouthPosterImg from '../assets/images/lac_vintage_poster_vermouth_1786330118529.jpg';
import barCounterImg from '../assets/images/lac_bar_counter_soho_1786315443098.jpg';
import campariPosterImg from '../assets/images/lac_poster_campari_30s_1786330308931.jpg';
import boothImg from '../assets/images/lac_subterranean_booth_1786315472218.jpg';
import cicchettiPosterImg from '../assets/images/lac_poster_cicchetti_40s_1786330322410.jpg';
import pourImg from '../assets/images/lac_vermouth_pour_soho_1786315461286.jpg';
import vinylImg from '../assets/images/lac_vinyl_turntable_aperitivo_1786315480379.jpg';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  type: 'poster' | 'venue';
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'burlesque-live',
    image: burlesquePerfImg,
    title: 'Live Music & Burlesque Nights · Subterranean Stage',
    type: 'venue',
    subtitle: 'Glamorous live jazz vocals, vintage burlesque performances, and midnight aperitivo',
  },
  {
    id: 'burlesque-poster',
    image: burlesquePosterImg,
    title: '1930s La Bella Cabaret & Burlesque Vintage Poster',
    type: 'poster',
    subtitle: 'Original Art Deco cabaret lithograph artwork',
  },
  {
    id: 'milano-ny-lounge',
    image: milanoLoungeImg,
    title: 'Milano Fashion Week Meets Soho New York Loft Bar',
    type: 'venue',
    subtitle: 'Polished terrazzo marble, Campari Sbagliato, and Manhattan industrial soul',
  },
  {
    id: 'milano-ny-poster',
    image: milanoPosterImg,
    title: 'Milano x Soho New York Aperitivo Vintage Poster',
    type: 'poster',
    subtitle: 'Crimson gold leaf Art Deco artwork combining Duomo and Manhattan skyline',
  },
  {
    id: 'vaults',
    image: vaultsImg,
    title: 'London Aperitivo Club · Subterranean Soho Vaults',
    type: 'venue',
    subtitle: 'Candlelit brick vaults and oxblood velvet booths on Frith Street',
  },
  {
    id: 'poster-spritz',
    image: spritzPosterImg,
    title: '1950s Il Spritz Veneziano Vintage Poster',
    type: 'poster',
    subtitle: 'Original mid-century Italian graphic art print',
  },
  {
    id: 'entrance',
    image: entranceImg,
    title: '23 Frith Street Soho Entrance',
    type: 'venue',
    subtitle: 'Behind the vintage polished brass wall lantern',
  },
  {
    id: 'poster-vermouth',
    image: vermouthPosterImg,
    title: '1920s Art Deco Vermouth di Torino Poster',
    type: 'poster',
    subtitle: 'Framed above the main bar counter',
  },
  {
    id: 'bar-counter',
    image: barCounterImg,
    title: 'Soho Bar Counter & Hand-Carved Ice',
    type: 'venue',
    subtitle: 'Rested oak-barrel Negronis and Venetian Spritzes',
  },
  {
    id: 'poster-campari',
    image: campariPosterImg,
    title: '1930s Italian Futurist Bitter Campari Poster',
    type: 'poster',
    subtitle: 'Display artwork at entrance vestibule',
  },
  {
    id: 'booths',
    image: boothImg,
    title: 'Oxblood Velvet Vault Booths',
    type: 'venue',
    subtitle: 'Intimate seating surrounded by vintage prints',
  },
  {
    id: 'poster-campari-cicchetti',
    image: cicchettiPosterImg,
    title: '1940s Vino e Cicchetti Bacaro Poster',
    type: 'poster',
    subtitle: 'Venetian tavern heritage lithograph',
  },
  {
    id: 'pour',
    image: pourImg,
    title: 'Cask-Aged House Vermouth Pour',
    type: 'venue',
    subtitle: 'Infused with alpine wormwood and citrus peel',
  },
  {
    id: 'vinyl',
    image: vinylImg,
    title: '1950s Vinyl Sound System',
    type: 'venue',
    subtitle: 'Italo-jazz spinning softly into the night',
  },
];

interface AnimatedHeroSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const AnimatedHeroSlider: React.FC<AnimatedHeroSliderProps> = ({
  onNavigate,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[88vh] sm:h-[92vh] flex items-center justify-center overflow-hidden bg-[#100305]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Vivid Animated Image or Poster */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          {/* Image Display: Full screen object-cover for photos, cropped on entrance in portrait for 1st slide, contained fit for poster art */}
          {activeSlide.type === 'poster' ? (
            <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-8 bg-[#100305]">
              {/* Ambient blurred backdrop */}
              <img
                src={activeSlide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-35 pointer-events-none scale-105"
              />
              {/* Contained poster artwork */}
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="relative z-10 max-h-[76vh] sm:max-h-[82vh] max-w-[88vw] sm:max-w-full object-contain rounded-xl border border-[#C5A059]/40 shadow-2xl animate-hero-fade-in transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] animate-hero-fade-in transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>
      </AnimatePresence>





      {/* Slider Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1F0609]/80 border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#2C0A0E] transition-all flex items-center justify-center shadow-2xl backdrop-blur-md cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Slider Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1F0609]/80 border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#2C0A0E] transition-all flex items-center justify-center shadow-2xl backdrop-blur-md cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>



    </section>
  );
};

