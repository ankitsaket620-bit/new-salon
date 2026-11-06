import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/919179767000?text=${encodeURIComponent(
    'Hello Ideal Family Salon, I would like to book an appointment.'
  )}`;

  return (
    <aside
      aria-label="Quick appointment and contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8DEC8] px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white border border-[#E8DEC8] text-[#3D3730] text-xs font-semibold active:bg-[#F7F3EC] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#8F6D43]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] text-xs font-semibold active:bg-[#25D366]/20 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#B89368] to-[#9C7A4E] text-white text-xs font-semibold shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </aside>
  );
};
