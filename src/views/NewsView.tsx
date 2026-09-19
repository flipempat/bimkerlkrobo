import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { NEWS_ITEMS } from '../data/mockData';
import { NewsItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NewsViewProps {
  onOpenNewsDetail: (news: NewsItem) => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onOpenNewsDetail }) => {
  const { t, language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = language === 'id' ? [
    { id: 'all', label: 'Semua Berita' },
    { id: 'Pameran & Prestasi', label: 'Pameran & Prestasi' },
    { id: 'Pelatihan & Sertifikasi', label: 'Pelatihan & Sertifikasi' },
    { id: 'Agribisnis & Panen', label: 'Agribisnis & Panen' },
    { id: 'Kemitraan', label: 'Kemitraan' }
  ] : [
    { id: 'all', label: 'All News' },
    { id: 'Pameran & Prestasi', label: 'Exhibitions & Awards' },
    { id: 'Pelatihan & Sertifikasi', label: 'Training & Certification' },
    { id: 'Agribisnis & Panen', label: 'Agribusiness & Harvest' },
    { id: 'Kemitraan', label: 'Partnerships' }
  ];

  const filteredNews = selectedTag === 'all'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter(n => n.category === selectedTag);

  return (
    <div className="space-y-14 pb-16">
      {/* Header Banner */}
      <section className="bg-[#0a3a32] text-white py-14 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900/90 px-3 py-1 rounded-full border border-amber-500/20">
            {t.newsHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.newsHeaderTitle}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-3 leading-relaxed">
            {t.newsHeaderDesc}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tags.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#0f4c42] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              onClick={() => onOpenNewsDetail(news)}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 backdrop-blur-xs">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{news.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{news.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{news.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-emerald-800 transition-colors mb-3 leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs sm:text-sm text-emerald-800 font-semibold">
                <span>{t.readMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
