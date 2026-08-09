import React, { useState } from 'react';
import { PageId, BookingFormData, BookingConfirmation } from '../types';
import { Calendar as CalendarIcon, Clock, Users, Wine, Sparkles, Check, Info, ShieldCheck } from 'lucide-react';

interface BookPageProps {
  onNavigate: (page: PageId) => void;
  onBookingComplete: (confirmation: BookingConfirmation) => void;
  savedPairingsCount: number;
}

export const BookPage: React.FC<BookPageProps> = ({ onNavigate, onBookingComplete, savedPairingsCount }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    date: todayStr,
    timeSlot: '17:00 – Golden Hour Aperitivo',
    guests: 2,
    seatingArea: 'Vault Booth',
    name: '',
    email: '',
    phone: '',
    dietaryNotes: '',
    specialOccasion: 'None / Casual Aperitivo'
  });

  const timeSlots = [
    { slot: '16:30 – Soho Golden Hour', status: 'Complimentary Cicchetti' },
    { slot: '17:00 – Golden Hour Aperitivo', status: 'Complimentary Cicchetti' },
    { slot: '18:00 – Prime Aperitivo Session', status: 'High Demand' },
    { slot: '19:00 – Evening Wine & Cicchetti', status: 'Limited Vault Booths' },
    { slot: '20:15 – Late Aperitivo & Digestivi', status: 'Available' },
    { slot: '21:30 – Late Night Vault Lounge', status: 'Available' },
  ];

  const seatingAreas = [
    {
      id: 'Vault Booth',
      title: 'Arched Wine Vault Booth',
      desc: 'Atmospheric subterranean brick alcoves for 2-6 guests.'
    },
    {
      id: 'High Bar',
      title: 'High Marble Aperitivo Bar',
      desc: 'Interactive bar seats facing our sommelier & bartenders.'
    },
    {
      id: 'Lounge Banquette',
      title: 'Oxblood Leather Lounge',
      desc: 'Comfortable banquettes near the vinyl acoustic setup.'
    },
    {
      id: 'No Preference',
      title: 'First Available Table',
      desc: 'We will seat you in the best available spot on arrival.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    const bookingId = 'LAC-' + Math.floor(100000 + Math.random() * 900000);
    const confirmation: BookingConfirmation = {
      bookingId,
      formData,
      createdAt: new Date().toISOString(),
      qrCodeValue: `LAC-BOOKING-${bookingId}-${formData.date}`
    };

    onBookingComplete(confirmation);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Title Header */}
      <div className="text-center space-y-4">
        <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block">
          ONLINE TABLE RESERVATION · SOHO LONDON
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#FDFBF7]">
          Reserve Your Aperitivo Table
        </h1>
        <p className="text-xs sm:text-sm text-[#FDFBF7]/80 max-w-xl mx-auto leading-relaxed">
          Bookings available for 1 to 8 guests. Instant confirmation pass generated upon completion.
        </p>

        {savedPairingsCount > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A0E17] border border-[#C5A059] text-[#DFBE7B] text-xs rounded-full">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>You have {savedPairingsCount} saved menu pairing{savedPairingsCount > 1 ? 's' : ''} attached to your session!</span>
          </div>
        )}
      </div>

      {/* Main Reservation Form Card */}
      <form onSubmit={handleSubmit} className="bg-[#1F0609] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Step 1: Party & Date */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-2">
            <span className="w-6 h-6 rounded-full bg-[#C5A059] text-[#2C0A0E] text-xs font-bold flex items-center justify-center">1</span>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Party Size & Date</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-2">Number of Guests</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: num })}
                    className={`flex-1 py-2.5 rounded font-mono text-sm font-bold border transition-all ${
                      formData.guests === num
                        ? 'bg-[#C5A059] text-[#2C0A0E] border-[#C5A059]'
                        : 'bg-[#2C0A0E] text-[#FDFBF7] border-[#C5A059]/30 hover:border-[#C5A059]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-2">Reservation Date</label>
              <input
                type="date"
                min={todayStr}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/40 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
                required
              />
            </div>
          </div>
        </div>

        {/* Step 2: Time Slot Selector */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-2">
            <span className="w-6 h-6 rounded-full bg-[#C5A059] text-[#2C0A0E] text-xs font-bold flex items-center justify-center">2</span>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Select Time Slot</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots.map((ts) => {
              const isSelected = formData.timeSlot === ts.slot;
              return (
                <button
                  key={ts.slot}
                  type="button"
                  onClick={() => setFormData({ ...formData, timeSlot: ts.slot })}
                  className={`p-3.5 rounded border text-left transition-all ${
                    isSelected
                      ? 'bg-[#4A0E17] border-[#C5A059] shadow-lg'
                      : 'bg-[#2C0A0E] border-[#C5A059]/20 hover:border-[#C5A059]/50'
                  }`}
                >
                  <span className="block font-serif text-sm font-bold text-[#FDFBF7]">{ts.slot}</span>
                  <span className="block text-[10px] font-mono text-[#DFBE7B] mt-1">{ts.status}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Seating Preference */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-2">
            <span className="w-6 h-6 rounded-full bg-[#C5A059] text-[#2C0A0E] text-xs font-bold flex items-center justify-center">3</span>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Seating Area Preference</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {seatingAreas.map((area) => {
              const isSelected = formData.seatingArea === area.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, seatingArea: area.id as any })}
                  className={`p-4 rounded border text-left transition-all ${
                    isSelected
                      ? 'bg-[#4A0E17] border-[#C5A059] shadow-lg'
                      : 'bg-[#2C0A0E] border-[#C5A059]/20 hover:border-[#C5A059]/50'
                  }`}
                >
                  <span className="block font-serif text-base font-bold text-[#DFBE7B]">{area.title}</span>
                  <span className="block text-xs text-[#FDFBF7]/70 mt-1">{area.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-2">
            <span className="w-6 h-6 rounded-full bg-[#C5A059] text-[#2C0A0E] text-xs font-bold flex items-center justify-center">4</span>
            <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">Guest Details</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sofia Loren"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="sofia@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Mobile Phone *</label>
              <input
                type="tel"
                required
                placeholder="+44 7987 654321"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Special Occasion</label>
              <select
                value={formData.specialOccasion}
                onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="None / Casual Aperitivo">None / Casual Drinks</option>
                <option value="Birthday">Birthday Celebration</option>
                <option value="Anniversary">Anniversary / Date Night</option>
                <option value="Business Drinks">Business Aperitivo</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#C5A059] uppercase mb-1">Dietary Requirements / Allergies</label>
            <input
              type="text"
              placeholder="e.g. 1 Vegan, 1 Gluten-Free, Nut Allergy..."
              value={formData.dietaryNotes}
              onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#2C0A0E] border border-[#C5A059]/30 rounded text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </div>

        {/* Submit CTA */}
        <div className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <button
            type="submit"
            className="w-full py-4 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>Confirm Reservation & Generate Digital Pass</span>
          </button>

          <p className="text-[10px] text-center text-[#FDFBF7]/50 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>No booking fee or deposit required. Free instant cancellation up to 2 hours prior.</span>
          </p>
        </div>

      </form>
    </div>
  );
};
