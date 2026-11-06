import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, ArrowRight, Check } from 'lucide-react';

interface TransformationsProps {
  onBookService: (serviceName: string) => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onBookService }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#F7F3EC]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Real Results
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Dramatic <span className="italic text-[#8F6D43]">Transformations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Drag the slider below to witness how our specialized hair reconstruction and balayage technique breathes life, luster, and dimension into dull strands.
          </p>
        </div>

        {/* Featured Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-[0_16px_40px_-10px_rgba(184,147,104,0.15)] border border-[#E8DEC8] mb-12">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
          >
            {/* After Image (Full background) */}
            <img
              src="/src/assets/images/salon_transformation_hair_1793967908048.jpg"
              alt="After Balayage and Keratin Treatment"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/salon_hair_before_1793967941253.jpg"
                alt="Before Hair Treatment"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Divider Line and Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-[#8F6D43] flex items-center justify-center text-[#8F6D43]">
                <Sliders className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Tags */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-[#8F6D43]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase">
              After: Balayage & Botox
            </div>

            {/* Mobile tip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/90 px-4 py-1 rounded-full text-[11px] pointer-events-none">
              Drag left or right to compare
            </div>
          </div>

          {/* Transformation Breakdown Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#F0E8DC]">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#23201D]">
                Multi-Dimensional Balayage & Botox Repair
              </h4>
              <p className="text-xs text-[#6B655D] mt-0.5">
                Client transformation conducted over a 3.5-hour session using ammonia-free color and intensive protein therapy.
              </p>
            </div>
            <button
              onClick={() => onBookService('French Balayage & Ombré Color')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8F6D43] hover:bg-[#785934] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shrink-0"
            >
              <span>Book This Transformation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2 Additional Transformation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Bridal Glamour */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8DEC8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#8F6D43] font-semibold">
                <span className="uppercase tracking-wider">Couture Bridal</span>
                <span>Airbrush HD Finish</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#23201D] mb-2">
                Royal Wedding Glow & Hair Ornamentation
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed mb-4">
                Full-coverage yet breathable airbrush makeup paired with traditional jewelry placement and bespoke floral hair braiding.
              </p>
              <ul className="space-y-1.5 text-xs text-[#6B655D] mb-4">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#B89368]" />
                  <span>16-Hour Tear-proof and Humidity-resistant seal</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#B89368]" />
                  <span>Includes dupatta draping & personalized bridal trial</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onBookService('Couture Signature Bridal Makeover')}
              className="text-xs font-semibold text-[#8F6D43] hover:text-[#5C4221] underline underline-offset-4 text-left cursor-pointer"
            >
              Book Bridal Consultation &rarr;
            </button>
          </div>

          {/* Card 2: Hydra Facial Radiance */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8DEC8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#8F6D43] font-semibold">
                <span className="uppercase tracking-wider">Skin Therapy</span>
                <span>Glass Skin Radiance</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#23201D] mb-2">
                Hydra-Dermabrasion Deep Cellular Glow
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed mb-4">
                Targeting congested pores and hyperpigmentation with micro-bubble vacuum exfoliation and hyaluronic acid booster infusion.
              </p>
              <ul className="space-y-1.5 text-xs text-[#6B655D] mb-4">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#B89368]" />
                  <span>Immediate dewy hydration without downtime</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#B89368]" />
                  <span>Includes cold alginate collagen peel-off mask</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onBookService('Medical-Grade Hydra Radiance Facial')}
              className="text-xs font-semibold text-[#8F6D43] hover:text-[#5C4221] underline underline-offset-4 text-left cursor-pointer"
            >
              Book Hydra Facial Session &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
