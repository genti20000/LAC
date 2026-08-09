import React from 'react';
import { X, CheckCircle, Calendar, Clock, MapPin, Download, Share2, Users, Wine } from 'lucide-react';
import { BookingConfirmation } from '../types';

interface BookingConfirmationModalProps {
  confirmation: BookingConfirmation | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ confirmation, onClose }) => {
  if (!confirmation) return null;

  const { bookingId, formData, createdAt } = confirmation;

  // Generate simple ICS content for Add to Calendar
  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//London Aperitivo Club//EN
BEGIN:VEVENT
SUMMARY:Reservation at London Aperitivo Club Soho
DESCRIPTION:Table reservation for ${formData.guests} guests in ${formData.seatingArea}. Ref: ${bookingId}.
LOCATION:23 Frith Street, Soho, London W1D 4RR
DTSTART:${formData.date.replace(/-/g, '')}T180000Z
DTEND:${formData.date.replace(/-/g, '')}T200000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `London_Aperitivo_Club_Reservation_${bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#1F0609] border-2 border-[#C5A059] rounded-xl p-6 sm:p-8 text-[#FDFBF7] shadow-2xl overflow-hidden">
        
        {/* Top Metallic Border Decor */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9A7730]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FDFBF7]/60 hover:text-[#C5A059] p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A0E17] border border-[#C5A059] text-[#C5A059] shadow-lg mb-1">
            <CheckCircle className="w-6 h-6" />
          </div>
          <span className="block font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
            RESERVATION CONFIRMED · PASS #{bookingId}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
            Table Confirmed at London Aperitivo Club
          </h2>
          <p className="text-xs text-[#FDFBF7]/70">
            Grazie, {formData.name}. We look forward to welcoming you to Frith Street.
          </p>
        </div>

        {/* Pass Details Card */}
        <div className="bg-[#2C0A0E] border border-[#C5A059]/30 rounded-lg p-5 space-y-4 mb-6">
          
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#C5A059]/20">
            <div>
              <span className="text-[10px] text-[#C5A059] uppercase font-mono block">Date & Time</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FDFBF7] mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{formData.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#DFBE7B] mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{formData.timeSlot}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-[#C5A059] uppercase font-mono block">Party & Seating</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FDFBF7] mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{formData.guests} Guests</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#DFBE7B] mt-0.5">
                <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{formData.seatingArea}</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-[#FDFBF7]/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
              <span>London Aperitivo Club Soho, 23 Frith Street, London W1D 4RR</span>
            </div>
            {formData.dietaryNotes && (
              <p className="text-[11px] text-[#DFBE7B] bg-[#1F0609] p-2 rounded border border-[#C5A059]/20">
                <strong className="text-[#C5A059]">Dietary / Notes:</strong> {formData.dietaryNotes}
              </p>
            )}
          </div>

          {/* QR Code Graphic Simulation */}
          <div className="pt-2 flex items-center justify-between bg-[#1F0609] p-3 rounded border border-[#C5A059]/20">
            <div className="text-left">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase block">Digital Pass ID</span>
              <span className="font-mono text-xs text-[#FDFBF7] font-bold">{bookingId}</span>
              <span className="text-[10px] text-[#FDFBF7]/50 block mt-0.5">Show upon arrival at Frith St entrance</span>
            </div>
            
            {/* Simulated QR Pattern */}
            <div className="w-14 h-14 bg-[#FDFBF7] p-1.5 rounded flex flex-col justify-between">
              <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (i * 7) % 3 === 0 ? 'bg-[#2C0A0E]' : 'bg-[#C5A059]'
                    } w-full h-full`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={downloadCalendarFile}
            className="flex-1 py-3 bg-[#C5A059] hover:bg-[#DFBE7B] text-[#2C0A0E] font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Add To Calendar (.ics)</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-5 bg-[#2C0A0E] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#FDFBF7] text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors"
          >
            <span>Done</span>
          </button>
        </div>

        <p className="text-[10px] text-center text-[#FDFBF7]/40 mt-4">
          A confirmation email has also been dispatched to {formData.email}. Free cancellation up to 2 hours prior.
        </p>
      </div>
    </div>
  );
};
