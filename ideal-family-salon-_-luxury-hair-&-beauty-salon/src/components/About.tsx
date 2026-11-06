import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F3EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Frame Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(184,147,104,0.2)] border border-[#E8DEC8]">
              <img
                src="/src/assets/images/about_salon_styling_1793967891392.jpg"
                alt="Master Stylist at Ideal Family Salon providing bespoke consultation"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Luxury Philosophy Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-[#E8DEC8] shadow-[0_12px_30px_rgba(0,0,0,0.08)] max-w-xs hidden sm:block">
              <div className="flex items-center gap-2.5 mb-1.5 text-[#8F6D43]">
                <Sparkles className="w-4 h-4 text-[#B89368]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Our Philosophy</span>
              </div>
              <p className="font-serif text-sm font-semibold text-[#23201D] leading-snug">
                “Beauty is not created—it is revealed through precision, care, and art.”
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Salon Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F6D43] font-semibold mb-3">
              <span>Established in Arera Colony, Bhopal</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-6 leading-tight">
              A Refined Sanctuary <br />
              <span className="italic text-[#8F6D43]">for Bespoke Hair & Beauty</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C5349] leading-relaxed mb-6 font-normal">
              At <strong className="text-[#23201D] font-semibold">{SALON_INFO.name}</strong>, we believe every guest deserves an unhurried, private, and elevated salon experience. Located in the heart of E-5 Arera Colony, we blend world-class styling techniques with attentive hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed mb-8">
              Whether you are preparing for your royal bridal moment, renewing your locks with restorative Keratin therapies, or seeking an impeccable precision haircut, our seasoned master artists craft outcomes customized to your aesthetic individuality.
            </p>

            {/* 3 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 pt-4 border-t border-[#E8DEC8]">
              <div className="flex flex-col gap-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43]">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#23201D]">Master Artists</h4>
                <p className="text-xs text-[#6B655D] leading-relaxed">
                  Certified technicians trained in high-fashion cuts, color blending, and advanced skincare.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#23201D]">Hospital-Grade Hygiene</h4>
                <p className="text-xs text-[#6B655D] leading-relaxed">
                  Autoclaved tools, single-use sanitary disposables, and spotless styling stations.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#23201D]">Tailored Consultation</h4>
                <p className="text-xs text-[#6B655D] leading-relaxed">
                  Detailed diagnosis before every treatment to guarantee healthy and lasting results.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#23201D] hover:bg-[#3D3730] text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
              >
                Experience Our Hospitality
              </button>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[#8F6D43] hover:text-[#5C4221] underline underline-offset-4 transition-colors"
              >
                Visit Us at E-5 Arera Colony &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
