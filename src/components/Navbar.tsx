import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  ExternalLink 
} from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: t.navHome },
    { id: 'tentang', label: t.navAbout },
    { id: 'program', label: t.navPrograms },
    { id: 'produk', label: t.navProducts },
    { id: 'berita', label: t.navNews },
    { id: 'kemitraan', label: t.navPartnership },
    { id: 'kontak', label: t.navContact },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice - Hidden on mobile */}
      <div className="hidden md:block bg-[#07132B] text-slate-300 text-xs py-1.5 px-4 border-b border-[#10244C]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#D4A017]/20 text-[#D4A017] border border-[#D4A017]/40">
              {language === 'id' ? 'RESMI' : 'OFFICIAL'}
            </span>
            <span className="text-slate-300">
              {language === 'id' 
                ? 'Kementerian Imigrasi & Pemasyarakatan RI • Lapas Kelas IIA Kerobokan Bali' 
                : 'Ministry of Immigration & Corrections RI • Kerobokan Class IIA Prison Bali'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(TOKOPEDIA_CONFIG.whatsappDefaultMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#D4A017] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#D4A017]" />
              <span>{t.hotline}</span>
              <span className="font-medium text-white">{TOKOPEDIA_CONFIG.whatsappDisplay}</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            {/* Topbar Language Toggle (Desktop only) */}
            <div className="hidden lg:flex items-center">
              <LanguageToggle variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B1C3D]/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-[#D4A017]/30 py-2.5' 
            : 'bg-[#0B1C3D] border-b border-[#10244C] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Emblem */}
            <button 
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none min-w-0"
              aria-label={language === 'id' ? "Kembali ke Beranda" : "Back to Home"}
            >
              <img
                src={TOKOPEDIA_CONFIG.logoUrl}
                alt="Logo BIMKER LKROBO"
                className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-xl font-bold tracking-tight text-white group-hover:text-[#D4A017] transition-colors whitespace-nowrap">
                    BIMKER LKROBO
                  </span>
                  <span className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#1A7A4C]/25 text-emerald-300 border border-[#1A7A4C]/40">
                    BALI
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#D4A017] group-hover:text-[#E8C547] font-semibold tracking-wide whitespace-nowrap transition-colors">
                  Lapas Kelas IIA Kerobokan
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white bg-[#10244C] shadow-inner font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-[#10244C]/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4A017] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Actions: Language Toggle & Burger Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Language Toggle next to burger menu */}
              <LanguageToggle variant="navbar" className="shrink-0" />

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#10244C] focus:outline-none shrink-0"
                aria-label={language === 'id' ? "Buka Menu Navigasi" : "Open Navigation Menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07132B] border-t border-[#10244C] px-4 pt-3 pb-6 mt-2 space-y-2 shadow-2xl animate-fadeIn">
            <div className="pb-2 mb-2 border-b border-[#10244C]">
              <p className="text-xs text-[#D4A017] font-semibold px-2 mb-1">
                {t.footerQuickLinks}
              </p>
            </div>
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-[#10244C] text-white font-semibold border-l-2 border-[#D4A017]'
                      : 'text-slate-200 hover:bg-[#10244C]/50 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D4A017]' : 'text-slate-500'}`} />
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#10244C] mt-3 space-y-2">
              <a
                href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(TOKOPEDIA_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1A7A4C] hover:bg-[#2E9B6A] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>
                  {language === 'id' 
                    ? `Konsultasi Hotline WhatsApp (${TOKOPEDIA_CONFIG.whatsappDisplay})` 
                    : `WhatsApp Hotline Consultation (${TOKOPEDIA_CONFIG.whatsappDisplay})`}
                </span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
