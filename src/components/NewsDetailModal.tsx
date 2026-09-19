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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
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
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 backdrop-blur-sm">
                <Tag className="w-3 h-3 text-amber-400" />
                <span>{news.category}</span>
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{news.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{news.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{news.readTime}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {news.title}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
              {news.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {language === 'id' 
                  ? 'Publikasi Resmi Bimbingan Kerja Lapas Kerobokan' 
                  : 'Official Publication of Kerobokan Prison Vocational Guidance'}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">{language === 'id' ? 'Tautan Disalin!' : 'Link Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-emerald-700" />
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
