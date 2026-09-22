import React, { useState } from 'react';
import { 
  Palette, 
  Newspaper, 
  Package, 
  UtensilsCrossed, 
  Gem, 
  Flame, 
  Printer, 
  Bird, 
  Egg, 
  Sprout, 
  Trees, 
  Fish, 
  Bug,
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Filter,
  Store,
  Wheat,
  Layers,
  Scissors,
  Shirt,
  Hammer
} from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProgramsViewProps {
  onOpenProgramDetail: (program: Program) => void;
  setActiveTab: (tab: string) => void;
}

// Icon mapper helper
export const renderProgramIcon = (iconName: string, className = "w-5 h-5") => {
  switch (iconName) {
    case 'Palette':
      return <Palette className={className} />;
    case 'Newspaper':
      return <Newspaper className={className} />;
    case 'Package':
      return <Package className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Gem':
      return <Gem className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Printer':
      return <Printer className={className} />;
    case 'Bird':
      return <Bird className={className} />;
    case 'Egg':
      return <Egg className={className} />;
    case 'Sprout':
      return <Sprout className={className} />;
    case 'Trees':
      return <Trees className={className} />;
    case 'Fish':
      return <Fish className={className} />;
    case 'Bug':
      return <Bug className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    case 'Shirt':
      return <Shirt className={className} />;
    case 'Hammer':
      return <Hammer className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export const ProgramsView: React.FC<ProgramsViewProps> = ({ 
  onOpenProgramDetail,
  setActiveTab
}) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'umkm' | 'ketahanan_pangan'>('all');

  const umkmPrograms = PROGRAMS.filter(p => p.category === 'umkm');
  const foodSecurityPrograms = PROGRAMS.filter(p => p.category === 'ketahanan_pangan');

  const filterTabs = [
    { 
      id: 'all' as const, 
      label: t.allProgramsTab || (language === 'id' ? 'Semua Program' : 'All Programs'),
      count: PROGRAMS.length,
      icon: Layers
    },
    { 
      id: 'umkm' as const, 
      label: t.umkmProgramTab || (language === 'id' ? 'Program UMKM' : 'SME Programs'),
      count: umkmPrograms.length,
      icon: Store
    },
    { 
      id: 'ketahanan_pangan' as const, 
      label: t.foodSecurityProgramTab || (language === 'id' ? 'Program Ketahanan Pangan' : 'Food Security Programs'),
      count: foodSecurityPrograms.length,
      icon: Wheat
    }
  ];

  const renderProgramCard = (prog: Program) => {
    const isUmkm = prog.category === 'umkm';
    const displayTitle = language === 'en' && prog.titleEn ? prog.titleEn : prog.title;
    const displayDesc = language === 'en' && prog.shortDescEn ? prog.shortDescEn : prog.shortDesc;
    const displayCategoryLabel = language === 'en' && prog.categoryLabelEn ? prog.categoryLabelEn : prog.categoryLabel;

    return (
      <div
        key={prog.id}
        id={`program-card-${prog.id}`}
        className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#D4A017]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Card Image Banner with dynamic tag & icon overlay */}
          <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
            <img
              src={prog.image}
              alt={displayTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            {/* Top Category Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-xs ${
                isUmkm 
                  ? 'bg-[#0B1C3D]/90 text-[#D4A017] border border-[#D4A017]/40' 
                  : 'bg-[#1A7A4C]/90 text-white border border-[#2E9B6A]/50'
              }`}>
                {renderProgramIcon(prog.icon, "w-3.5 h-3.5")}
                <span>{displayCategoryLabel}</span>
              </span>
            </div>

            {/* Bottom title overlay on hover / image corner */}
            <div className="absolute bottom-3 right-3">
              <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#0B1C3D] flex items-center justify-center shadow-xs group-hover:bg-[#D4A017] group-hover:text-white transition-colors">
                {renderProgramIcon(prog.icon, "w-4 h-4")}
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg text-[#0B1C3D] group-hover:text-[#1A7A4C] transition-colors leading-snug">
                {displayTitle}
              </h3>
            </div>

            {/* Short Description (1-2 sentences, positive and inspiring) */}
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5 min-h-[42px]">
              {displayDesc}
            </p>

            {/* Program Specs / Highlights */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-[#F8F9FC] p-3 rounded-xl border border-slate-100 mb-4">
              <div>
                <span className="text-[10px] text-[#6B7280] block font-medium">
                  {language === 'id' ? 'Kapasitas Binaan' : 'Capacity'}:
                </span>
                <span className="font-bold text-[#1A1A1A]">
                  {prog.participantsCount} {language === 'id' ? 'Peserta' : 'Trainees'}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B7280] block font-medium">
                  {language === 'id' ? 'Sertifikasi' : 'Certification'}:
                </span>
                <span className="font-bold text-[#1A7A4C] truncate block">
                  {language === 'id' ? 'Standar BNSP/Dinas' : 'BNSP / Agency Standard'}
                </span>
              </div>
            </div>

            {/* Sample Outputs */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-semibold text-[#6B7280] block uppercase tracking-wider">
                {language === 'id' ? 'Karya & Hasil Nyata' : 'Key Outputs'}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {prog.outputProducts.slice(0, 3).map((prod, i) => (
                  <span 
                    key={i} 
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                      isUmkm
                        ? 'bg-amber-50/80 text-amber-900 border-amber-200'
                        : 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
                    }`}
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-6 pt-0 border-t border-slate-100 mt-2">
          <button
            id={`btn-detail-${prog.id}`}
            onClick={() => onOpenProgramDetail(prog)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F8F9FC] hover:bg-[#0B1C3D] text-[#0B1C3D] hover:text-[#D4A017] text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-200 group-hover:border-[#D4A017]"
          >
            <span>{t.viewSyllabusBtn || (language === 'id' ? 'Lihat Detail & Silabus' : 'View Details & Syllabus')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-14 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white py-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
            {t.programsHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.programsHeaderTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
            {t.programsHeaderDesc}
          </p>
        </div>
      </section>

      {/* SOP Kedisiplinan & Apel K3 Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-52 lg:w-60 aspect-16/10 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200 shadow-xs">
            <img
              src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/slefyi8iuwrmleiwhg37.webp"
              alt="Apel Pagi Pengarahan Kerja Warga Binaan Lapas Kerobokan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1A7A4C] bg-[#1A7A4C]/10 px-2.5 py-0.5 rounded-full border border-[#1A7A4C]/25">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1A7A4C]" />
              {language === 'id' ? 'Standar Operasional Prosedur (SOP)' : 'Standard Operating Procedures'}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0B1C3D]">
              {language === 'id' 
                ? 'Seluruh Program Dimulai dengan Apel Pagi & Pengarahan K3' 
                : 'All Programs Commence with Morning Roll Call & Safety Briefing'}
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed max-w-3xl">
              {language === 'id'
                ? 'Sebelum memasuki workshop perak, bakery, garmen, maupun budidaya pangan, seluruh warga binaan wajib mengikuti apel pagi bersama instruktur guna pembekalan kedisiplinan, keselamatan kerja (K3), penggunaan APD, dan penetapan target mutu.'
                : 'Prior to entering silvercraft, bakery, garment, or agricultural workshops, inmates participate in morning roll call assemblies covering occupational safety (OHS), discipline, and quality targets.'}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-[#0B1C3D] text-[#D4A017] border-2 border-[#D4A017] shadow-lg shadow-black/10 scale-102'
                    : 'bg-white hover:bg-slate-50 text-[#4B5563] hover:text-[#0B1C3D] border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#D4A017]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                  isSelected 
                    ? 'bg-[#D4A017] text-[#0B1C3D]' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION A: PROGRAM UMKM */}
        {(activeFilter === 'all' || activeFilter === 'umkm') && (
          <section id="section-umkm" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4A017]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1C3D]">
                    {language === 'id' ? 'Kategori A' : 'Category A'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
                  {t.umkmSectionTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  {t.umkmSectionDesc}
                </p>
              </div>
              <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl self-start sm:self-end">
                {umkmPrograms.length} {language === 'id' ? 'Bidang Kriya & Jasa' : 'Craft & Creative Units'}
              </div>
            </div>

            {/* Grid of 7 UMKM Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {umkmPrograms.map((prog) => renderProgramCard(prog))}
            </div>
          </section>
        )}

        {/* SECTION B: PROGRAM KETAHANAN PANGAN */}
        {(activeFilter === 'all' || activeFilter === 'ketahanan_pangan') && (
          <section id="section-ketahanan-pangan" className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1A7A4C]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C]">
                    {language === 'id' ? 'Kategori B' : 'Category B'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
                  {t.foodSecuritySectionTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  {t.foodSecuritySectionDesc}
                </p>
              </div>
              <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-end">
                {foodSecurityPrograms.length} {language === 'id' ? 'Sektor Swasembada Pangan' : 'Food Security Sectors'}
              </div>
            </div>

            {/* Grid of 5 Ketahanan Pangan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {foodSecurityPrograms.map((prog) => renderProgramCard(prog))}
            </div>
          </section>
        )}

        {/* Bottom Banner */}
        <div className="bg-[#0B1C3D] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4A017]/30">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#D4A017] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'id' ? 'Sinergi & Kemitraan Produksi' : 'Production Synergy & Partnership'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.collaborateOfferTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              {t.collaborateOfferDesc}
            </p>
          </div>
          <button
            id="btn-programs-partner"
            onClick={() => setActiveTab('kemitraan')}
            className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shrink-0 transition-transform hover:scale-105"
          >
            <span>{t.collaborateOfferBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
