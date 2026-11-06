import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, ThumbsUp } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const iconList = [
    <Award key="1" className="w-5 h-5 text-[#8F6D43]" />,
    <Sparkles key="2" className="w-5 h-5 text-[#8F6D43]" />,
    <HeartHandshake key="3" className="w-5 h-5 text-[#8F6D43]" />,
    <CheckCircle2 key="4" className="w-5 h-5 text-[#8F6D43]" />,
    <ShieldCheck key="5" className="w-5 h-5 text-[#8F6D43]" />,
    <ThumbsUp key="6" className="w-5 h-5 text-[#8F6D43]" />,
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Why Choose <span className="italic text-[#8F6D43]">Ideal Family Salon</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            We honor your trust by providing uncompromised service quality, dermatologically sound products, and genuine passion for every client.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-[#EFE8DE] shadow-[0_4px_16px_-4px_rgba(184,147,104,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(184,147,104,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center mb-5">
                {iconList[idx]}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#23201D] mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
