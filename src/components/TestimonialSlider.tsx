import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play slide effect (every 4.5 seconds)
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, total, currentIndex]);

  // Touch handlers for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full">
      {/* MOBILE ONLY: Auto-sliding Carousel (md:hidden) */}
      <div 
        className="block md:hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider viewport */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testi, idx) => {
              const displayQuote = language === 'en' && testi.quoteEn ? testi.quoteEn : testi.quote;
              const displayRole = language === 'en' && testi.roleEn ? testi.roleEn : testi.role;
              const displayYear = language === 'en' && testi.yearEn ? testi.yearEn : testi.year;

              return (
                <div
                  key={testi.id}
                  className="w-full shrink-0 px-1"
                >
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[290px] relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-[#D4A017]/15 pointer-events-none">
                      <Quote className="w-12 h-12" />
                    </div>

                    <div className="space-y-3 mb-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#D4A017]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#D4A017]" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-[#6B7280] bg-slate-100 px-2 py-0.5 rounded-full">
                          {idx + 1} / {total}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed italic line-clamp-6">
                        &ldquo;{displayQuote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100 relative z-10">
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D4A017]/40 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-[#0B1C3D] truncate">{testi.name}</h4>
                        <p className="text-[11px] text-[#1A7A4C] font-semibold truncate">{displayRole}</p>
                        <p className="text-[10px] text-[#6B7280] truncate">{displayYear}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Controls & Dots */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            aria-label={language === 'id' ? "Cerita Sebelumnya" : "Previous Story"}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#0B1C3D] flex items-center justify-center shadow-xs active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={language === 'id' ? `Lihat cerita ke-${i + 1}` : `View story ${i + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentIndex === i
                    ? 'w-6 bg-[#D4A017]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            aria-label={language === 'id' ? "Cerita Berikutnya" : "Next Story"}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#0B1C3D] flex items-center justify-center shadow-xs active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP & TABLET: 2-Column Grid (hidden md:grid) */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {testimonials.map((testi) => {
          const displayQuote = language === 'en' && testi.quoteEn ? testi.quoteEn : testi.quote;
          const displayRole = language === 'en' && testi.roleEn ? testi.roleEn : testi.role;
          const displayYear = language === 'en' && testi.yearEn ? testi.yearEn : testi.year;

          return (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-1 text-[#D4A017]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A017]" />
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A] leading-relaxed italic">
                  &ldquo;{displayQuote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D4A017]/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1C3D]">{testi.name}</h4>
                  <p className="text-xs text-[#1A7A4C] font-semibold">{displayRole}</p>
                  <p className="text-[11px] text-[#6B7280]">{displayYear}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
