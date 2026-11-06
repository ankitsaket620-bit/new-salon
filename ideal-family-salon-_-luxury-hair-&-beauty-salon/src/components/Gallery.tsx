import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'hair' | 'makeup' | 'treatments'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Photos' },
    { key: 'interior', label: 'Salon Ambience' },
    { key: 'hair', label: 'Hair & Styling' },
    { key: 'makeup', label: 'Bridal & Makeup' },
    { key: 'treatments', label: 'Treatments & Spa' },
  ];

  const visibleItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, visibleItems]);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : visibleItems.length - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! < visibleItems.length - 1 ? prev! + 1 : 0));
  };

  const currentItem = selectedImageIndex !== null ? visibleItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Atmosphere & <span className="italic text-[#8F6D43]">Artistry</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
            Take a glimpse inside our serene salon interior, master hair sculpting, and breathtaking bridal makeovers.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key as any);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-[#8F6D43] text-white shadow-sm'
                    : 'bg-[#F7F3EC] text-[#6B655D] hover:text-[#23201D] hover:bg-[#EFE8DE] border border-[#E8DEC8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_-4px_rgba(184,147,104,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(184,147,104,0.22)] border border-[#EFE8DE] bg-[#F7F3EC] aspect-[4/3] transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1 block">
                {currentItem.category} • {selectedImageIndex + 1} of {visibleItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
