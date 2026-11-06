import React, { useState } from 'react';
import { Scissors, Sparkles, Crown, HandHeart, Clock, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/salonData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'beauty' | 'makeup' | 'spa'>('all');

  const categories = [
    { key: 'all', label: 'All Services', icon: Sparkles },
    { key: 'hair', label: 'Hair & Styling', icon: Scissors },
    { key: 'beauty', label: 'Skin & Beauty', icon: Sparkles },
    { key: 'makeup', label: 'Bridal & Makeup', icon: Crown },
    { key: 'spa', label: 'Spa & Nails', icon: HandHeart },
  ];

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Crafted with Precision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Our Signature <span className="italic text-[#8F6D43]">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Indulge in our curated menu of hair therapies, dermatological skincare, and royal bridal couture. Every service is tailored to your unique beauty profile.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#F7F3EC] rounded-full max-w-2xl mx-auto border border-[#E8DEC8]">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key as any)}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#23201D] shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-semibold'
                      : 'text-[#6B655D] hover:text-[#23201D] hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8F6D43]' : 'text-[#8F6D43]/70'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-[#EFE8DE] shadow-[0_4px_20px_-4px_rgba(184,147,104,0.06)] hover:shadow-[0_12px_32px_-8px_rgba(184,147,104,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Category & Duration */}
                <div className="flex items-center justify-between text-xs text-[#8F6D43] mb-3">
                  <span className="uppercase tracking-wider font-semibold text-[11px]">
                    {service.category === 'hair'
                      ? 'Hair Care'
                      : service.category === 'beauty'
                      ? 'Skin Therapy'
                      : service.category === 'makeup'
                      ? 'Bridal & Glam'
                      : 'Nails & Spa'}
                  </span>
                  <div className="flex items-center gap-1 text-[#6B655D] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#B89368]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl font-bold text-[#23201D] group-hover:text-[#8F6D43] transition-colors mb-2.5">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#F5EFE6]">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6B655D]">
                      <Check className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom row: Pricing note & Book button */}
              <div className="pt-4 border-t border-[#F5EFE6] flex items-center justify-between gap-3">
                <div className="text-xs text-[#8F6D43] font-medium">
                  {service.priceNote}
                </div>
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF5EE] hover:bg-[#8F6D43] text-[#8F6D43] hover:text-white text-xs font-semibold tracking-wide border border-[#E8DEC8] hover:border-[#8F6D43] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing consultation notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#F7F3EC] border border-[#E8DEC8] text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
            <span className="font-semibold text-[#23201D]">Looking for a custom package?</span> We offer personalized bridal consultations, hair texture assessments, and group event packages. Prices may vary based on hair length, density, and customized styling needs.
          </p>
        </div>
      </div>
    </section>
  );
};
