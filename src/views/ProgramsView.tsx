import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Filter,
  Layers,
  ShoppingBag
} from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProgramsViewProps {
  onOpenProgramDetail: (program: Program) => void;
  setActiveTab: (tab: string) => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ 
  onOpenProgramDetail,
  setActiveTab
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'kriya', label: t.craftsCategory },
    { id: 'kuliner', label: t.culinaryCategory },
    { id: 'manufaktur', label: t.manufacturingCategory },
    { id: 'agribisnis', label: t.agribusinessCategory },
    { id: 'jasa', label: t.servicesCategory }
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#0a3a32] text-white py-14 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900/90 px-3 py-1 rounded-full border border-amber-500/20">
            {t.programsHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.programsHeaderTitle}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-3 leading-relaxed">
            {t.programsHeaderDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <Filter className="w-4 h-4 text-emerald-800 shrink-0 mr-1" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#0f4c42] text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-emerald-900 border border-slate-200/80 shadow-xs">
                      {prog.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-5">
                    {prog.shortDesc}
                  </p>

                  {/* Highlights Meta */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {t.programCapacity}:
                      </span>
                      <span className="font-bold text-slate-800">
                        {prog.participantsCount} {language === 'id' ? 'Peserta' : 'Trainees'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {t.programCertification}:
                      </span>
                      <span className="font-bold text-emerald-800 truncate block">
                        {language === 'id' ? 'Standar BNSP' : 'BNSP Standard'}
                      </span>
                    </div>
                  </div>

                  {/* Output Samples */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      {t.programFeaturedOutputs}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.outputProducts.slice(0, 3).map((prod, i) => (
                        <span key={i} className="text-[11px] bg-emerald-50 text-emerald-900 font-medium px-2 py-0.5 rounded-md border border-emerald-200/60">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <button
                  onClick={() => onOpenProgramDetail(prog)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-emerald-800 hover:text-white text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all"
                >
                  <span>{t.viewSyllabusBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 via-[#0f4c42] to-emerald-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              {t.collaborateOfferTitle}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 max-w-xl">
              {t.collaborateOfferDesc}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('kemitraan')}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shrink-0 transition-transform hover:scale-105"
          >
            <span>{t.collaborateOfferBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
