import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Coffee } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/salonData';

export const Experience: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Sparkles className="w-5 h-5 text-[#8F6D43]" />,
    '02': <ShieldCheck className="w-5 h-5 text-[#8F6D43]" />,
    '03': <HeartHandshake className="w-5 h-5 text-[#8F6D43]" />,
    '04': <Coffee className="w-5 h-5 text-[#8F6D43]" />,
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F3EDE2]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            The Ideal Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            More Than a Salon. <br />
            <span className="italic text-[#8F6D43]">It's Your Beauty Experience.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Every appointment is crafted as a tranquil escape. From welcome refreshments to personalized diagnoses, our standard of care redefines beauty wellness in Bhopal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-[#E8DEC8] shadow-[0_4px_20px_-4px_rgba(184,147,104,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(184,147,104,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-[#D4AF37]/50 tracking-wider">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center">
                    {iconMap[pillar.number]}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#23201D] mb-1">
                  {pillar.title}
                </h3>
                <span className="text-xs uppercase tracking-wider text-[#8F6D43] font-medium block mb-3">
                  {pillar.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                <span className="text-[11px] text-[#8F6D43] font-semibold tracking-wide flex items-center gap-1">
                  Verified Standard &bull; Arera Colony
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
