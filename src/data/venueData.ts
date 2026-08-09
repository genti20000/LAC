import { PrivateHirePackage } from '../types';

export const VENUE_INFO = {
  name: 'London Aperitivo Club',
  locationName: 'Soho, London',
  address: '23 Frith Street, Soho, London W1D 4RR',
  neighbourhood: 'Soho, West End',
  nearestTubes: ['Tottenham Court Road (3 mins)', 'Leicester Square (4 mins)', 'Piccadilly Circus (6 mins)'],
  openingHours: [
    { days: 'Tuesday – Thursday', hours: '16:30 – 23:30' },
    { days: 'Friday & Saturday', hours: '16:00 – 00:30' },
    { days: 'Sunday', hours: '16:00 – 22:30' },
    { days: 'Monday', hours: 'Closed for Private Masterclasses' }
  ],
  contactEmail: 'ciao@londonaperitivoclub.com',
  phone: '+44 (0)20 7439 1234',
  instagram: '@londonaperitivoclub',
  description: 'Nestled beneath the vibrant surface of Frith Street in the beating heart of Soho, London Aperitivo Club resides in candlelit subterranean brick vaults. Intimate oxblood leather banquettes, flickering candlelight, warm aged brass accents, and an unmatched sommelier cellar create London’s premier sanctuary for the timeless Italian aperitivo ritual.',
  heritageNotes: 'London Aperitivo Club was born in Soho out of a deep reverence for Northern Italy’s golden aperitivo hour. By bringing together rare cask-aged vermouths, artisanal spritzes, analog vinyl jazz, and hand-carved Venetian cicchetti, we offer an effortless sanctuary where time slows down and genuine conversation flourishes.',
};

export const PRIVATE_HIRE_PACKAGES: PrivateHirePackage[] = [
  {
    id: 'vault-alcove',
    title: 'The Wine Vault Alcove',
    capacity: 'Up to 14 Guests (Seated / Semi-Private)',
    minimumSpend: 'From £500',
    description: 'An intimate arched brick vault lined with rare wine bottles and soft leather seating. Perfect for birthday aperitivi, team celebrations, or private wine flights.',
    includes: [
      'Dedicated Sommelier host',
      'Welcome round of Soho Venetian Spritzes',
      'Artisanal Charcuterie & Cicchetti Sharing Boards',
      'Custom vinyl background music playback'
    ],
    recommendedFor: 'Intimate birthdays, wine lovers & small gatherings'
  },
  {
    id: 'full-basement-buyout',
    title: 'Full Basement Buyout',
    capacity: 'Up to 60 Standing / 40 Seated',
    minimumSpend: 'From £2,000 (Weekdays) / £3,500 (Weekends)',
    description: 'Exclusive hire of the entire subterranean London Aperitivo Club venue. Complete access to the main bar, oxblood lounge, vault alcoves, DJ setup, and dedicated staff team.',
    includes: [
      'Exclusive private venue entry on Frith Street',
      'Custom aperitivo cocktail bar setup',
      'Unlimited seasonal cicchetti, hot small plates & dessert bites',
      'DJ vinyl setup & sound system access',
      'Bespoke menu printing with corporate or personal branding'
    ],
    recommendedFor: 'Corporate launch parties, milestone celebrations & wedding receptions'
  },
  {
    id: 'masterclass-package',
    title: 'Aperitivo & Vermouth Masterclass Experience',
    capacity: '10 to 25 Guests',
    minimumSpend: '£55.00 per person',
    description: 'A 90-minute interactive workshop guided by Head Sommelier. Guests blend their own barrel-aged vermouth bottle to take home.',
    includes: [
      'Guided tasting of 5 rare vermouths & amari',
      'Hands-on cocktail mixing workstation',
      'Take-home personalized 200ml vermouth bottle',
      'Paired artisan cheese & prosciutto platters'
    ],
    recommendedFor: 'Team building, stag/hen celebrations & cocktail enthusiasts'
  }
];
