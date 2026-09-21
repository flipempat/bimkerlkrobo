import React, { useState } from 'react';
import { X, Award, Users, Clock, CheckCircle2, ShoppingBag, ArrowRight, Image as ImageIcon } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  React.useEffect(() => {
    setSelectedImage(null);
  }, [program?.id]);

  if (!program) return null;

  const isUmkm = program.category === 'umkm';
  const displayTitle = language === 'en' && program.titleEn ? program.titleEn : program.title;
  const displayCategory = language === 'en' && program.categoryLabelEn ? program.categoryLabelEn : program.categoryLabel;
  const displayDuration = language === 'en' && program.durationEn ? program.durationEn : program.duration;
  
  const currentImage = selectedImage || program.image;
  const gallery = program.galleryImages && program.galleryImages.length > 0 ? program.galleryImages : [program.image];

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
              src={currentImage} 
              alt={displayTitle}
              className="w-full h-full object-cover opacity-85 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6">
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${
                  isUmkm
                    ? 'bg-[#0B1C3D] text-[#D4A017] border border-[#D4A017]/40'
                    : 'bg-[#1A7A4C] text-white border border-[#2E9B6A]/50'
                }`}>
                  {displayCategory}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {displayTitle}
                </h2>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails if multiple images exist */}
          {gallery.length > 1 && (
            <div className="px-6 sm:px-8 pt-4 pb-2 bg-[#F8F9FC] border-b border-slate-200/80 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold shrink-0">
                <ImageIcon className="w-4 h-4 text-[#D4A017]" />
                <span>{language === 'id' ? 'Galeri Unit:' : 'Unit Gallery:'}</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      currentImage === imgUrl 
                        ? 'border-[#D4A017] shadow-md scale-105' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#F8F9FC] p-3 rounded-xl border border-slate-200 text-center">
                <Users className="w-5 h-5 text-[#0B1C3D] mx-auto mb-1" />
                <span className="block text-xs text-[#6B7280] font-medium">
                  {language === 'id' ? 'Kapasitas' : 'Capacity'}
                </span>
                <span className="font-bold text-sm text-[#0B1C3D]">
                  {program.participantsCount} {language === 'id' ? 'Peserta' : 'Trainees'}
                </span>
              </div>
              <div className="bg-[#F8F9FC] p-3 rounded-xl border border-slate-200 text-center">
                <Clock className="w-5 h-5 text-[#0B1C3D] mx-auto mb-1" />
                <span className="block text-xs text-[#6B7280] font-medium">
                  {language === 'id' ? 'Durasi' : 'Duration'}
                </span>
                <span className="font-bold text-xs sm:text-sm text-[#0B1C3D]">{displayDuration}</span>
              </div>
              <div className="bg-[#F8F9FC] p-3 rounded-xl border border-slate-200 text-center">
                <Award className="w-5 h-5 text-[#D4A017] mx-auto mb-1" />
                <span className="block text-xs text-[#6B7280] font-medium">
                  {language === 'id' ? 'Standarisasi' : 'Standard'}
                </span>
                <span className="font-bold text-xs sm:text-sm text-[#1A7A4C] truncate">
                  {language === 'id' ? 'Standar BNSP/Dinas' : 'Certified Standard'}
                </span>
              </div>
            </div>

            {/* In-depth Description */}
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                {language === 'id' ? 'Deskripsi & Silabus Pelatihan' : 'Description & Training Syllabus'}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {program.fullDesc}
              </p>
            </div>

            {/* Program Highlights */}
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
                {language === 'id' ? 'Keunggulan & Fasilitas' : 'Highlights & Workshop Facilities'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1A1A1A]">
                {program.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div className="bg-[#F8F9FC] p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
              <Award className="w-6 h-6 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#0B1C3D] block">
                  {language === 'id' ? 'Sertifikasi Resmi:' : 'Official Certification:'}
                </span>
                <span className="text-xs text-[#6B7280]">{program.certification}</span>
              </div>
            </div>

            {/* Output Products */}
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                {language === 'id' ? 'Produk Hasil Karya Program' : 'Program Output Creations'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {program.outputProducts.map((prod, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-lg bg-[#1A7A4C]/10 text-[#1A7A4C] border border-[#1A7A4C]/30">
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
                className="flex-1 flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-sm font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
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
