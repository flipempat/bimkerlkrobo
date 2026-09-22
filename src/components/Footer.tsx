import React from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  ExternalLink,
  Shield,
  Award,
  Sparkles
} from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0B1C3D] text-slate-200 border-t border-[#10244C] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Box: Tokopedia Official Store Invitation */}
        <div className="bg-[#10244C] rounded-2xl p-6 sm:p-8 border border-[#D4A017]/30 shadow-2xl mb-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4A017]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1A7A4C]/25 text-emerald-300 border border-[#1A7A4C]/40 mb-3">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'id' ? 'Pemasaran Resmi Karya Warga Binaan' : 'Official Store for Inmate Creations'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {language === 'id' ? 'Dukung Kemandirian Warga Binaan Lewat Marketplace Resmi' : 'Support Inmate Empowerment Through Official Marketplaces'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'id' 
                  ? 'Setiap rupiah dari pembelian Anda menjadi upah premi resmi bagi warga binaan dan modal tabungan bekal kembali ke masyarakat. Belanja aman, mudah, dan resmi di Shopee & Tokopedia.'
                  : 'Every purchase provides official wage savings for inmates to rebuild their lives after release. Safe, nationwide shipping backed by Shopee and Tokopedia protection.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={TOKOPEDIA_CONFIG.shopeeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#D73211] text-white font-bold px-4 py-3 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Shopee LKROBO</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#03AC0E] hover:bg-[#028A0B] text-white font-bold px-4 py-3 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Tokopedia LKROBO</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <button
                onClick={() => handleNav('produk')}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                {t.viewCatalog}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#10244C]">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={TOKOPEDIA_CONFIG.logoUrl}
                alt="Logo BIMKER LKROBO"
                className="h-12 w-auto object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-bold text-lg text-white tracking-tight">BIMKER LKROBO</span>
                <p className="text-[11px] text-[#D4A017] font-semibold">Lapas Kelas IIA Kerobokan Bali</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.footerAbout}
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs italic text-[#E8C547] font-serif bg-[#07132B] px-3 py-1.5 rounded-lg border border-[#D4A017]/30">
                &ldquo;{t.brandTagline}&rdquo;
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A017]">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('beranda')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tentang')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navPrograms}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white hover:text-[#D4A017] transition-colors flex items-center gap-1.5">
                  <span>{t.navProducts}</span>
                  <span className="text-[10px] bg-[#1A7A4C] text-white px-1.5 py-0.2 rounded font-semibold">
                    {language === 'id' ? 'Katalog' : 'Catalog'}
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('berita')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navNews}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kemitraan')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navPartnership}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kontak')} className="hover:text-white hover:text-[#D4A017] transition-colors">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Skill Sectors */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A017]">
              {t.footerPrograms}
            </h4>
            
            {/* Sub-section: Program UMKM */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E8C547] uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                <span>{language === 'id' ? 'Program UMKM' : 'SME Programs'}</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300 pl-3 border-l border-slate-700/60">
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Art Gallery & Seni Lukis' : 'Art Gallery & Fine Arts'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Kerajinan Daur Ulang (Koran & Kemasan)' : 'Upcycling Crafts (Paper & Packs)'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Bakery & Pastry' : 'Bakery & Pastry'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Kerajinan Perak 925' : 'Silver Jewelry 925'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Pembuatan Dupa & Udeng' : 'Incense & Udeng Crafting'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Kerajinan Batik Tulis & Cap' : 'Hand-drawn & Stamped Batik'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Design Grafis & Sablon' : 'Graphic Design & Screen Printing'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left font-medium text-[#E8C547]">
                    {language === 'id' ? 'Pertukangan & Las' : 'Carpentry & Welding'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Barbershop & Pangkas Rambut' : 'Barbershop & Grooming'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-[#D4A017] transition-colors text-left">
                    {language === 'id' ? 'Laundry & Binatu' : 'Laundry & Linen Services'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Sub-section: Program Ketahanan Pangan */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{language === 'id' ? 'Ketahanan Pangan' : 'Food Security'}</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300 pl-3 border-l border-emerald-900/60">
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Aviary & Konservasi Satwa' : 'Aviary & Avian Conservation'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Peternakan Ayam Petelur' : 'Laying Hen Livestock'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Holtikultura Hidroponik' : 'Hydroponic Horticulture'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Perkebunan & Tanaman Pangan' : 'Plantation & Agro Crops'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Perikanan Kolam Bioflok' : 'Biofloc Aquaculture'}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('program')} className="hover:text-emerald-300 transition-colors text-left">
                    {language === 'id' ? 'Budidaya Maggot BSF (Pakan Alami)' : 'BSF Maggot Cultivation'}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A017]">
              {t.footerContact}
            </h4>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>{TOKOPEDIA_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>{t.officePhone}: {TOKOPEDIA_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span className="truncate">{TOKOPEDIA_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>{language === 'id' ? TOKOPEDIA_CONFIG.operatingHours : 'Mon - Fri: 08:00 - 15:00 WITA'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BIMKER LKROBO. {t.footerRights}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>{language === 'id' ? 'Sistem Pembinaan Pemasyarakatan Humanis' : 'Humanist Correctional Rehabilitation'}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
