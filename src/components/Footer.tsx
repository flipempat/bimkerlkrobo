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
    <footer id="main-footer" className="bg-[#072923] text-emerald-100 border-t border-emerald-900/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Box: Tokopedia Official Store Invitation */}
        <div className="bg-gradient-to-r from-[#0d443a] via-[#0f4e43] to-[#0d443a] rounded-2xl p-6 sm:p-8 border border-emerald-700/40 shadow-xl mb-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'id' ? 'Pemasaran Resmi Karya Warga Binaan' : 'Official Store for Inmate Creations'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {language === 'id' ? 'Dukung Kemandirian Warga Binaan Lewat Tokopedia' : 'Support Inmate Empowerment Through Tokopedia'}
              </h3>
              <p className="text-sm text-emerald-200/90 leading-relaxed">
                {language === 'id' 
                  ? 'Setiap rupiah dari pembelian Anda menjadi upah premi resmi bagi warga binaan dan modal tabungan bekal kembali ke masyarakat. Belanja aman, mudah, dan resmi dengan proteksi Tokopedia.'
                  : 'Every purchase provides official wage savings for inmates to rebuild their lives after release. Safe, nationwide shipping backed by Tokopedia protection.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#03AC0E] hover:bg-[#02970c] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{language === 'id' ? 'Kunjungi Tokopedia LKROBO' : 'Visit Tokopedia Store'}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
              <button
                onClick={() => handleNav('produk')}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white text-sm font-semibold border border-emerald-600/50 transition-colors"
              >
                {t.viewCatalog}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
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
                <p className="text-[11px] text-amber-300 font-medium">Lapas Kelas IIA Kerobokan Bali</p>
              </div>
            </div>
            <p className="text-sm text-emerald-200/80 leading-relaxed">
              {t.footerAbout}
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs italic text-amber-200/90 font-serif bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-amber-500/20">
                &ldquo;{t.brandTagline}&rdquo;
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-emerald-200/90">
              <li>
                <button onClick={() => handleNav('beranda')} className="hover:text-white transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tentang')} className="hover:text-white transition-colors">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program')} className="hover:text-white transition-colors">
                  {t.navPrograms}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{t.navProducts}</span>
                  <span className="text-[10px] bg-emerald-600/70 text-white px-1.5 py-0.2 rounded font-semibold">Tokopedia</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('berita')} className="hover:text-white transition-colors">
                  {t.navNews}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kemitraan')} className="hover:text-white transition-colors">
                  {t.navPartnership}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kontak')} className="hover:text-white transition-colors">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Skill Sectors */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {t.footerPrograms}
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-200/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Kerajinan Perak' : 'Silver Craft'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Dapur Bakery & Pastry Antaboga' : 'Antaboga Bakery & Pastry'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Garmen & Busana Tenun Endek' : 'Garments & Balinese Endek Apparel'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Greenhouse Sayur Hidroponik' : 'Hydroponic Vegetable Greenhouse'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Dupa Wangi Herbal Cempaka' : 'Herbal Aromatherapy Incense'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Pangkas Rambut Modern & Sablon' : 'Modern Barbershop & Screen Printing'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{language === 'id' ? 'Peternakan Unggas & Bioflok' : 'Poultry & Biofloc Aquaculture'}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {t.footerContact}
            </h4>
            <div className="space-y-3 text-xs text-emerald-200/90 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{TOKOPEDIA_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.officePhone}: {TOKOPEDIA_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{TOKOPEDIA_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{language === 'id' ? TOKOPEDIA_CONFIG.operatingHours : 'Mon - Fri: 08:00 - 15:00 WITA'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BIMKER LKROBO. {t.footerRights}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-300/90">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'id' ? 'Sistem Pembinaan Pemasyarakatan Humanis' : 'Humanist Correctional Rehabilitation'}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
