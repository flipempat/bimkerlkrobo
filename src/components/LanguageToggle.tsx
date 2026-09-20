import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'navbar' | 'topbar' | 'mobile';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '',
  variant = 'navbar'
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl bg-[#07132B]/80 border border-[#D4A017]/30 ${className}`}>
        <div className="flex items-center gap-2 text-slate-200 text-xs font-semibold">
          <Globe className="w-4 h-4 text-[#D4A017]" />
          <span>{language === 'id' ? 'Bahasa / Language:' : 'Language / Bahasa:'}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#0B1C3D] p-1 rounded-xl border border-slate-700/60">
          <button
            onClick={() => setLanguage('id')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              language === 'id'
                ? 'bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🇮🇩 ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center bg-[#07132B]/90 hover:bg-[#07132B] p-1 rounded-xl border border-[#D4A017]/40 text-xs shadow-xs transition-colors ${className}`}
      role="group"
      aria-label="Pilih Bahasa / Select Language"
    >
      <Globe className="w-3.5 h-3.5 text-[#D4A017] ml-1.5 mr-1 shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        className={`px-2 py-0.5 rounded-lg font-bold text-[11px] transition-all ${
          language === 'id'
            ? 'bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] shadow-xs'
            : 'text-slate-300 hover:text-white'
        }`}
        title="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2 py-0.5 rounded-lg font-bold text-[11px] transition-all ${
          language === 'en'
            ? 'bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] shadow-xs'
            : 'text-slate-300 hover:text-white'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};

