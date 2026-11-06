import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/919179767000?text=${encodeURIComponent(
    'Hello Ideal Family Salon, I would like to inquire about your services and appointment availability.'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F3EC]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Find Us in <span className="italic text-[#8F6D43]">Arera Colony</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Conveniently situated on Main Road E-5, our doors are open seven days a week to welcome you into an ambiance of refined tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8DEC8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#23201D] mb-1">
                    Salon Address
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed mb-3">
                    {SALON_INFO.address.full}
                  </p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F6D43] hover:text-[#5C4221] underline underline-offset-4"
                  >
                    <span>Get Directions via Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Direct WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8DEC8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif font-bold text-base text-[#23201D] mb-1">
                    Direct Appointments & Inquiries
                  </h4>
                  <p className="text-xs text-[#6B655D] mb-3">
                    Speak directly with our front desk concierge:
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${SALON_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5EE] hover:bg-[#8F6D43] text-[#8F6D43] hover:text-white border border-[#E8DEC8] hover:border-[#8F6D43] text-xs font-semibold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{SALON_INFO.phone}</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] text-xs font-semibold transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8DEC8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center text-[#8F6D43] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#23201D] mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5349] font-medium">
                    {SALON_INFO.hours.days}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8F6D43] font-semibold mt-0.5">
                    {SALON_INFO.hours.timing}
                  </p>
                  <span className="text-[11px] text-[#7A7268] block mt-1">
                    Walk-ins welcome &bull; Advance booking recommended for bridal & color
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map with Pin Accent */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-[#E8DEC8] shadow-[0_12px_36px_-6px_rgba(184,147,104,0.15)] overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#FAF7F2]">
                <iframe
                  title="Ideal Family Salon Location Map"
                  src={SALON_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter saturate-[0.9] contrast-[1.05]"
                />

                {/* Floating Map Navigation Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8DEC8] shadow-lg flex items-center justify-between sm:justify-start gap-4">
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#23201D]">
                      Ideal Family Salon
                    </h5>
                    <p className="text-[11px] text-[#6B655D]">
                      Main Road, E-5 Arera Colony, Bhopal
                    </p>
                  </div>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8F6D43] text-white text-xs font-semibold hover:bg-[#785934] transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Navigate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
