import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTop: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        id="scroll-to-top-btn"
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0B1C3D] text-[#D4A017] hover:text-white hover:bg-[#152e5d] border-2 border-[#D4A017]/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
        aria-label={language === 'id' ? 'Scroll otomatis ke atas' : 'Scroll to top'}
        title={language === 'id' ? 'Kembali ke atas' : 'Back to top'}
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5" />

        {/* Desktop Tooltip */}
        <span className="absolute right-15 top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap bg-[#0B1C3D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-[#D4A017]/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {language === 'id' ? 'Kembali ke atas' : 'Back to top'}
        </span>
      </button>
    </div>
  );
};
