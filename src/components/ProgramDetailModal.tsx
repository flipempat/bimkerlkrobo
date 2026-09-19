import React from 'react';
import { X, Award, Users, Clock, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Program } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onExploreProducts: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ 
  program, 
  onClose,
  onExploreProducts
}) => {
  const { language } = useLanguage();

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 my-8 animate-fadeIn max-h-[90vh] flex flex-col">
        {/* Header Close */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
            aria-label={language === 'id' ? "Tutup" : "Close"}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-0">
          <div className="relative aspect-16/9 bg-slate-900">
            <img 
              src={program.image} 
              alt={program.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div>
                <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 mb-2">
                  {program.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {program.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
                <Users className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
                <span className="block text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Kapasitas' : 'Capacity'}
                </span>
                <span className="font-bold text-sm text-emerald-900">
                  {program.participantsCount} {language === 'id' ? 'Peserta/Tahun' : 'Trainees/Yr'}
                </span>
              </div>
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
                <Clock className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
                <span className="block text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Durasi' : 'Duration'}
                </span>
                <span className="font-bold text-xs sm:text-sm text-emerald-900">{program.duration}</span>
              </div>
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
                <Award className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
                <span className="block text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Standarisasi' : 'Standard'}
                </span>
                <span className="font-bold text-xs sm:text-sm text-emerald-900 truncate">
                  {language === 'id' ? 'BNSP / Teruji' : 'Certified BNSP'}
                </span>
              </div>
            </div>

            {/* In-depth Description */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {language === 'id' ? 'Deskripsi & Silabus Pelatihan' : 'Description & Training Syllabus'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {program.fullDesc}
              </p>
            </div>

            {/* Program Highlights */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                {language === 'id' ? 'Keunggulan & Fasilitas' : 'Highlights & Workshop Facilities'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {program.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
              <Award className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  {language === 'id' ? 'Sertifikasi Resmi:' : 'Official Certification:'}
                </span>
                <span className="text-xs text-slate-600">{program.certification}</span>
              </div>
            </div>

            {/* Output Products */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {language === 'id' ? 'Produk Hasil Karya Program' : 'Program Output Creations'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {program.outputProducts.map((prod, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-900 border border-emerald-200">
                    {prod}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onExploreProducts();
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0f4c42] hover:bg-[#0c3e36] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>{language === 'id' ? 'Lihat Produk Karya Program Ini' : 'Explore Program Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
