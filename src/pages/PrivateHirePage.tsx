import React, { useState } from 'react';
import { PageId } from '../types';
import { PRIVATE_HIRE_PACKAGES } from '../data/venueData';
import { Users, Calendar, DollarSign, CheckCircle2, Sparkles, Send, Clock, Wine, Mail, Phone, Info } from 'lucide-react';

const PRIVATE_IMAGE = '/src/assets/images/private_hire_space_1786202544546.jpg';

interface PrivateHirePageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivateHirePage: React.FC<PrivateHirePageProps> = ({ onNavigate }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('vault-alcove');
  const [guestsCount, setGuestsCount] = useState<number>(12);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['spritz-welcome']);
  
  // Enquiry form state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Birthday / Celebration',
    specialRequests: ''
  });

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Estimator logic
  const calculateEstimate = () => {
    let baseMinSpend = 500;
    if (selectedPackage === 'full-basement-buyout') baseMinSpend = 2200;
    if (selectedPackage === 'masterclass-package') baseMinSpend = guestsCount * 55;

    let addonTotal = 0;
    if (selectedAddons.includes('spritz-welcome')) addonTotal += guestsCount * 12;
    if (selectedAddons.includes('charcuterie-board')) addonTotal += Math.ceil(guestsCount / 4) * 26;
    if (selectedAddons.includes('vermouth-tasting')) addonTotal += guestsCount * 18;

    return Math.max(baseMinSpend, addonTotal + baseMinSpend);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">
          EXCLUSIVE EVENTS · SOHO LONDON
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#FDFBF7]">
          Private Hire & Subterranean Buyouts
        </h1>
        <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed">
          From candlelit wine vault alcoves for 14 guests to full basement buyouts for up to 60, host your private celebration or corporate evening in Frith Street's iconic basement cellar.
        </p>
      </div>

      {/* Hero Image Showcase */}
      <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[21/9]">
        <img
          src={PRIVATE_IMAGE}
          alt="Private hire lounge setup at London Aperitivo Club Soho"
          className="w-full h-full object-cover filter brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F0609] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-[#2C0A0E]/90 border border-[#C5A059]/40 backdrop-blur-md rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-[#C5A059] uppercase block">Subterranean Vault Buyout</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FDFBF7]">
              Bespoke Aperitivo Bars, Sommelier Tastings & DJ Setups
            </h3>
          </div>
          <span className="text-xs font-mono text-[#DFBE7B] bg-[#4A0E17] px-3 py-1.5 rounded border border-[#C5A059]/30">
            Capacity: Up to 60 Guests
          </span>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest">Tailored Spaces</span>
          <h2 className="font-serif text-3xl font-bold text-[#FDFBF7]">Hire Options & Spaces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRIVATE_HIRE_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#4A0E17] border-[#C5A059] shadow-2xl ring-1 ring-[#C5A059]'
                    : 'bg-[#1F0609] border-[#C5A059]/30 hover:border-[#C5A059]/60'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase">{pkg.capacity}</span>
                    {isSelected && (
                      <span className="px-2 py-0.5 text-[10px] bg-[#C5A059] text-[#2C0A0E] font-bold rounded">
                        SELECTED
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">{pkg.title}</h3>

                  <div className="p-2.5 bg-[#2C0A0E] rounded border border-[#C5A059]/20 text-xs text-[#DFBE7B] font-mono">
                    {pkg.minimumSpend}
                  </div>

                  <p className="text-xs text-[#FDFBF7]/80 leading-relaxed">{pkg.description}</p>

                  <div className="space-y-2 pt-2 border-t border-[#C5A059]/20">
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase block">Package Inclusions:</span>
                    <ul className="space-y-1.5 text-xs text-[#FDFBF7]/75">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#C5A059]/20 text-center">
                  <span className="text-xs text-[#C5A059] font-medium underline">
                    {isSelected ? 'Currently Selected' : 'Select This Space'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Estimator & Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#1F0609] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
        
        {/* Left Column: Interactive Estimator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1 border-b border-[#C5A059]/20 pb-3">
            <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Instant Event Estimator</span>
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Customise Your Package</h3>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-[#C5A059] font-mono uppercase mb-1">Expected Guests ({guestsCount})</label>
              <input
                type="range"
                min="6"
                max="60"
                value={guestsCount}
                onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#FDFBF7]/50 font-mono mt-1">
                <span>6 Guests</span>
                <span>30 Guests</span>
                <span>60 Guests</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="block text-[#C5A059] font-mono uppercase">Optional Hospitality Add-ons:</span>
              
              {[
                { id: 'spritz-welcome', name: 'Welcome Venetian Spritz Round (£12 / guest)' },
                { id: 'charcuterie-board', name: 'Soho Aperitivo Boards (£26 / board for 4 guests)' },
                { id: 'vermouth-tasting', name: 'Guided Sommelier Vermouth Tasting (£18 / guest)' },
              ].map((addon) => (
                <label
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${
                    selectedAddons.includes(addon.id)
                      ? 'bg-[#4A0E17] border-[#C5A059] text-[#DFBE7B]'
                      : 'bg-[#2C0A0E] border-[#C5A059]/20 text-[#FDFBF7]/70'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => {}}
                    className="accent-[#C5A059]"
                  />
                  <span>{addon.name}</span>
                </label>
              ))}
            </div>

            {/* Total Estimate Calculation Display */}
            <div className="p-5 bg-[#2C0A0E] border border-[#C5A059] rounded-lg space-y-2">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase block">Estimated Event Spend</span>
              <div className="font-serif text-3xl font-bold text-[#DFBE7B]">
                £{calculateEstimate().toLocaleString()}
              </div>
              <p className="text-[11px] text-[#FDFBF7]/60">
                Includes space hire, dedicated sommelier host, and selected F&B packages. Subject to VAT and service charge.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1 border-b border-[#C5A059]/20 pb-3">
            <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">Direct Inquiry</span>
            <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Submit Private Hire Request</h3>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-[#4A0E17] border border-[#C5A059] rounded-xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-[#FDFBF7]">Grazie! Request Received</h4>
              <p className="text-xs text-[#FDFBF7]/80 max-w-md mx-auto leading-relaxed">
                Our Events Director will review your date ({formData.eventDate || 'Requested Date'}) and respond within 24 hours with space confirmation and menu details.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 bg-[#C5A059] text-[#2C0A0E] font-bold text-xs uppercase tracking-wider rounded"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Matteo Rossi"
                    className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="matteo@example.com"
                    className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Preferred Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Event Type</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Birthday / Celebration">Birthday / Milestone Celebration</option>
                  <option value="Corporate Drinks">Corporate Evening / Product Launch</option>
                  <option value="Vermouth Masterclass">Vermouth Masterclass Group Session</option>
                  <option value="Private Tasting">Private Sommelier Wine Flight</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Special Requests / Branding Needs</label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Tell us about dietary needs, DJ equipment requirements, custom cocktail branding..."
                  className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Private Hire Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
