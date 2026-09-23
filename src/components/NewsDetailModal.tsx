import React, { useState } from 'react';
import { X, Calendar, Clock, User, Share2, Tag, Check } from 'lucide-react';
import { NewsItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!news) return null;

  const displayTitle = language === 'en' && news.titleEn ? news.titleEn : news.title;
  const displayDate = language === 'en' && news.dateEn ? news.dateEn : news.date;
  const displayCategory = language === 'en' && news.categoryEn ? news.categoryEn : news.category;
  const displayAuthor = language === 'en' && news.authorEn ? news.authorEn : news.author;
  const displayReadTime = language === 'en' && news.readTimeEn ? news.readTimeEn : news.readTime;
  const displayExcerpt = language === 'en' && news.excerptEn ? news.excerptEn : news.excerpt;
  const displayContent = language === 'en' && news.contentEn && news.contentEn.length > 0 ? news.contentEn : news.content;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: displayTitle,
        text: displayExcerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

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
          <div className="relative aspect-16/9 bg-slate-100">
            <img 
              src={news.image} 
              alt={displayTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B1C3D]/90 text-[#E8C547] border border-[#D4A017]/30 backdrop-blur-sm">
                <Tag className="w-3 h-3 text-[#D4A017]" />
                <span>{displayCategory}</span>
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1A7A4C]" />
                  <span>{displayDate}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1A7A4C]" />
                  <span>{displayAuthor}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1A7A4C]" />
                  <span>{displayReadTime}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-tight">
                {displayTitle}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm text-[#1A1A1A]/90 leading-relaxed border-t border-slate-100 pt-4">
              {displayContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Event Photo Gallery if available */}
            {news.galleryImages && news.galleryImages.length > 1 && (
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                  {language === 'id' ? 'Dokumentasi Kegiatan' : 'Event Documentation'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {news.galleryImages.map((imgUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 group">
                      <img 
                        src={imgUrl} 
                        alt={`${displayTitle} - Foto ${i + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#6B7280]">
                {language === 'id' 
                  ? 'Publikasi Resmi Bimbingan Kerja Lapas Kerobokan' 
                  : 'Official Publication of Kerobokan Prison Vocational Guidance'}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F8F9FC] hover:bg-slate-200 text-[#1A1A1A] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1A7A4C]" />
                    <span className="text-[#1A7A4C] font-bold">{language === 'id' ? 'Tautan Disalin!' : 'Link Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#0B1C3D]" />
                    <span>{language === 'id' ? 'Bagikan' : 'Share'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
