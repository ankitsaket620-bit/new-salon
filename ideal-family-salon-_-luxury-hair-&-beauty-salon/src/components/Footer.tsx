import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, ExternalLink, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1C19] text-[#E8DEC8] pt-16 pb-24 lg:pb-16 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#38332E]">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B89368] to-[#D4B58E] flex items-center justify-center text-white text-xs font-serif font-bold">
                IFS
              </span>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Ideal Family Salon
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#B3A99B] leading-relaxed mb-6 max-w-sm">
              Arera Colony’s esteemed luxury beauty sanctuary. Dedicated to precision hair styling, bespoke color transformations, clinical facial therapies, and royal bridal couture.
            </p>

            <div className="text-xs text-[#D4AF37] italic font-serif mb-6">
              “Designed with elegance. Created for confidence.”
            </div>

            {/* Social & Maps Links */}
            <div className="flex items-center gap-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2E2A25] hover:bg-[#B89368] text-white flex items-center justify-center transition-colors"
                title="Google Maps Listing"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/919179767000`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2E2A25] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#2E2A25] hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#2E2A25] hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B3A99B]">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About the Salon
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D4AF37] transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  Salon Gallery
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D4AF37] transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#D4AF37] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Featured Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B3A99B]">
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  French Balayage & Ombré Color
                </span>
              </li>
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Keratin & Hair Botox Infusion
                </span>
              </li>
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Medical-Grade Hydra Radiance Facial
                </span>
              </li>
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Couture Bridal Airbrush Makeover
                </span>
              </li>
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Rose Petal Luxury Manicure & Pedicure
                </span>
              </li>
              <li>
                <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Precision Styling & Beard Sculpting
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Salon Location
            </h4>
            <div className="space-y-3 text-xs text-[#B3A99B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:text-white tabular-nums">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-white">
                  {SALON_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p>{SALON_INFO.hours.days}</p>
                  <p className="text-[#D4AF37]">{SALON_INFO.hours.timing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#857B6E]">
          <div>
            &copy; {currentYear} {SALON_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>&bull;</span>
            <span className="text-[#A3998D]">Arera Colony, Bhopal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
