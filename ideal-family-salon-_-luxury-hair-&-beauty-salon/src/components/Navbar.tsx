import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'THE EXPERIENCE', href: '#experience' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#181614]/92 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Zone 1: Reference Wordmark Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group whitespace-nowrap shrink-0"
              aria-label="Ideal Family Salon Home"
            >
              <span className="font-serif italic text-2xl sm:text-3xl font-normal text-[#C9A275] leading-none select-none">
                I
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold tracking-[0.24em] text-white uppercase group-hover:text-[#C9A275] transition-colors leading-none">
                  IDEAL
                </span>
                <span className="text-[8.5px] sm:text-[9px] tracking-[0.24em] text-white/60 uppercase font-medium mt-1 leading-none">
                  FAMILY SALON · BHOPAL
                </span>
              </div>
            </a>

            {/* Zone 2: Reference Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-[0.2em] text-white/80">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A275] hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Reference Dark Pill Button & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase bg-[#23201D] hover:bg-black rounded-full border border-white/25 shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0 group hover:border-[#C9A275]"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A275]" />
              </button>

              {/* Mobile hamburger toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus:outline-none cursor-pointer shadow-sm"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1A1815] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif italic text-2xl text-[#C9A275]">I</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-[0.22em] text-white uppercase">
                      IDEAL
                    </span>
                    <span className="text-[8px] tracking-[0.2em] text-white/60 uppercase">
                      FAMILY SALON · BHOPAL
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-xs font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-white hover:bg-white/5 transition-colors text-left"
                  >
                    <span>{link.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-[#C9A275] text-[#1A1815] font-semibold text-xs tracking-wider uppercase text-center shadow-md hover:bg-[#B89368] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-full border border-white/20 text-white/80 font-medium text-xs text-center flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A275]" />
                <span className="tabular-nums">Call +91 9179767000</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
