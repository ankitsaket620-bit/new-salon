import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-between pt-28 pb-16 overflow-hidden">
      {/* Background Image: Matched Luxury Salon Interior */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_salon_reference_1793969068281.jpg"
          alt="Ideal Family Salon Luxury Interior with Wood Fluting and Halo Mirrors"
          className="w-full h-full object-cover object-center filter brightness-[0.88] scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Luxury Gradients: Darker on left for flawless contrast, letting mirrors shine on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col justify-between min-h-[82vh]">
        {/* Top spacer */}
        <div />

        {/* Center Content Row: Left Headline & Right Circular Stamp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
          {/* Left Column: Hero Content Matching Reference */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.25em] text-white/70 font-medium mb-4 flex items-center gap-2">
              <span>EST. 2014</span>
              <span className="text-[#C9A275]">•</span>
              <span>ARERA COLONY, BHOPAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-tight text-white leading-[1.05] mb-6">
              Where beauty <br />
              <span className="italic font-normal text-[#C9A275] font-serif">meets elegance.</span>
            </h1>

            {/* Subheadline matching reference */}
            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed mb-9 max-w-xl font-light">
              A considered beauty experience for hair, skin and occasion — delivered with warmth, precision and a little ceremony.
            </p>

            {/* Two Action Buttons Matching Reference */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#23201D] hover:bg-black text-white text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-xl hover:border-[#C9A275] transition-all cursor-pointer group whitespace-nowrap"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A275] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-white hover:text-[#C9A275] text-xs font-semibold tracking-wider uppercase border-b border-white/60 pb-1 hover:border-[#C9A275] transition-all cursor-pointer group whitespace-nowrap"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Luxury Circular Seal / Stamp & Vertical Ribbon */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center relative">
            <div className="relative flex items-center justify-center p-4">
              {/* Rotating Circular Text SVG */}
              <svg
                className="w-36 h-36 xl:w-40 xl:h-40 animate-[spin_26s_linear_infinite]"
                viewBox="0 0 160 160"
              >
                <defs>
                  <path
                    id="heroSealPath"
                    d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                  />
                </defs>
                <text className="text-[8.5px] uppercase tracking-[0.24em] fill-white/80 font-medium">
                  <textPath href="#heroSealPath" startOffset="0%">
                    PROFESSIONAL CARE · PREMIUM EXPERIENCE · PERSONALIZED SERVICE ·
                  </textPath>
                </text>
              </svg>

              {/* Inner Center Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="font-serif italic text-2xl xl:text-3xl text-white font-normal leading-none mb-0.5">
                  I
                </span>
                <span className="text-[8px] uppercase tracking-[0.24em] text-white/95 font-bold leading-tight">
                  IDEAL
                </span>
                <span className="text-[6.5px] uppercase tracking-[0.2em] text-[#C9A275] font-semibold">
                  FAMILY SALON
                </span>
              </div>
            </div>

            {/* Subtle Vertical Text Ribbon along the right edge */}
            <div className="mt-8 flex items-center gap-4 text-[9px] tracking-[0.26em] text-white/40 uppercase [writing-mode:vertical-rl] select-none">
              <span>PROFESSIONAL CARE</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A275]" />
              <span>PREMIUM EXPERIENCE</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A275]" />
              <span>PERSONALIZED SERVICE</span>
            </div>
          </div>
        </div>

        {/* Bottom Left: Scroll To Discover Indicator */}
        <div className="pt-8">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors group cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-[#C9A275] transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
