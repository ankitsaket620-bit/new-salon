import React from 'react';
import { Star, Calendar, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, SALON_INFO } from '../data/salonData';

interface ReviewsProps {
  onOpenBooking: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onOpenBooking }) => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F7F3EC]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Client Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Cherished <span className="italic text-[#8F6D43]">Experiences</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Discover why generations of families across Bhopal choose Ideal Family Salon for their signature haircuts, skincare regimens, and wedding celebrations.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 rounded-full bg-white border border-[#E8DEC8] shadow-sm">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#23201D]">
              4.9 out of 5 stars
            </span>
            <span className="text-xs text-[#8F6D43] font-medium">
              &bull; 380+ Verified Google Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#EFE8DE] shadow-[0_4px_20px_-4px_rgba(184,147,104,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(184,147,104,0.14)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8DEC8]" />
                </div>

                <p className="text-sm sm:text-base text-[#4A453F] leading-relaxed italic mb-6">
                  “{rev.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif font-bold text-base text-[#23201D]">
                      {rev.name}
                    </h4>
                    <span title="Verified Client" className="inline-flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B89368]" aria-label="Verified Client" />
                    </span>
                  </div>
                  <span className="text-xs text-[#8F6D43] font-medium block">
                    {rev.service} &bull; {rev.location}
                  </span>
                </div>
                <span className="text-[11px] text-[#8F6D43]/80">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final Reviews CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#23201D] via-[#2F2B26] to-[#23201D] text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2 block">
              Begin Your Journey
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight mb-4 text-balance">
              Ready for Your Next <span className="italic text-[#E4D5C3]">Beauty Experience?</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Experience the pinnacle of individualized styling and skincare care in Arera Colony. Reserve your preferred slot online in just 60 seconds.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B89368] to-[#9C7A4E] hover:from-[#A88358] hover:to-[#8C6A3E] text-white font-medium text-sm shadow-[0_6px_20px_rgba(184,147,104,0.35)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
