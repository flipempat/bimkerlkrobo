import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck,
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
  const { t } = useLanguage();
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
    { id: 'produk', label: t.navProducts, isBadge: 'Tokopedia' },
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
      {/* Top Banner Notice */}
      <div className="bg-[#09352e] text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              RESMI
            </span>
            <span className="hidden sm:inline text-slate-300">
              Kementerian Imigrasi & Pemasyarakatan RI • Lapas Kelas IIA Kerobokan Bali
            </span>
            <span className="sm:hidden text-slate-300">
              Lapas Kelas IIA Kerobokan Bali
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(TOKOPEDIA_CONFIG.whatsappDefaultMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span className="hidden md:inline">{t.hotline}</span>
              <span className="font-medium">{TOKOPEDIA_CONFIG.whatsappDisplay}</span>
            </a>
            <span className="text-emerald-700 hidden md:inline">|</span>
            <a 
              href={TOKOPEDIA_CONFIG.officialStoreUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-300 hover:text-amber-300 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.officialTokopedia}</span>
            </a>
            <span className="text-emerald-700 hidden sm:inline">|</span>
            {/* Topbar Language Toggle */}
            <div className="flex items-center">
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
            ? 'bg-[#0b3d35]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-emerald-800/40 py-2.5' 
            : 'bg-[#0f4c42] border-b border-emerald-800/30 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Emblem */}
            <button 
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-3 text-left group focus:outline-none"
              aria-label="Kembali ke Beranda"
            >
              <img
                src={TOKOPEDIA_CONFIG.logoUrl}
                alt="Logo BIMKER LKROBO"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    BIMKER LKROBO
                  </span>
                  <span className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    BALI
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200/90 font-medium tracking-wide">
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
                        ? 'text-white bg-emerald-800/80 shadow-inner'
                        : 'text-emerald-100/90 hover:text-white hover:bg-emerald-800/40'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isBadge && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-slate-950">
                        {link.isBadge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Tokopedia Direct Button */}
            <div className="hidden sm:flex items-center">
              <a
                id="navbar-tokopedia-cta"
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#03AC0E] hover:bg-[#029b0c] text-white text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all group"
                title="Beli produk resmi warga binaan di Tokopedia"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{t.buyOnTokopedia}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button & Compact Tokopedia Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#03AC0E] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg sm:hidden"
                aria-label="Tokopedia"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Tokopedia</span>
              </a>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/60 focus:outline-none"
                aria-label="Buka Menu Navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#09352e] border-t border-emerald-800/60 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-xl animate-fadeIn">
            {/* Language Switcher in Drawer */}
            <LanguageToggle variant="mobile" className="mb-2" />

            <div className="pb-2 mb-2 border-b border-emerald-800/40">
              <p className="text-xs text-emerald-300 font-medium px-2 mb-1">
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
                      ? 'bg-emerald-800 text-white font-semibold'
                      : 'text-emerald-100/90 hover:bg-emerald-800/40 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.isBadge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-950">
                        {link.isBadge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-emerald-600'}`} />
                </button>
              );
            })}

            <div className="pt-3 border-t border-emerald-800/40 mt-3 space-y-2">
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#03AC0E] hover:bg-[#029b0c] text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Kunjungi Tokopedia Resmi LKROBO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(TOKOPEDIA_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 text-xs font-medium py-2 px-3 rounded-lg"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Konsultasi Hotline WhatsApp ({TOKOPEDIA_CONFIG.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
