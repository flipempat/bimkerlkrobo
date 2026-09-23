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
    { id: 'Pemberdayaan & Premi', label: 'Pemberdayaan & Premi' },
    { id: 'Pameran & Prestasi', label: 'Pameran & Prestasi' },
    { id: 'Pelatihan & Sertifikasi', label: 'Pelatihan & Sertifikasi' },
    { id: 'Agribisnis & Panen', label: 'Agribisnis & Panen' },
    { id: 'Kemitraan', label: 'Kemitraan' }
  ] : [
    { id: 'all', label: 'All News' },
    { id: 'Pemberdayaan & Premi', label: 'Empowerment & Wages' },
    { id: 'Pameran & Prestasi', label: 'Exhibitions & Awards' },
    { id: 'Pelatihan & Sertifikasi', label: 'Training & Certification' },
    { id: 'Agribisnis & Panen', label: 'Agribusiness & Harvest' },
    { id: 'Kemitraan', label: 'Partnerships' }
  ];

  const filteredNews = selectedTag === 'all'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter(n => n.category === selectedTag || (selectedTag === 'Kemitraan' && n.category.includes('Kemitraan')));

  return (
    <div className="space-y-14 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white py-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
            {t.newsHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.newsHeaderTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
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
                    ? 'bg-[#0B1C3D] text-[#D4A017] border border-[#D4A017]/40 shadow-xs'
                    : 'bg-white hover:bg-[#F8F9FC] text-[#1A1A1A] border border-slate-200'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((news) => {
            const displayTitle = language === 'en' && news.titleEn ? news.titleEn : news.title;
            const displayDate = language === 'en' && news.dateEn ? news.dateEn : news.date;
            const displayCategory = language === 'en' && news.categoryEn ? news.categoryEn : news.category;
            const displayReadTime = language === 'en' && news.readTimeEn ? news.readTimeEn : news.readTime;
            const displayExcerpt = language === 'en' && news.excerptEn ? news.excerptEn : news.excerpt;

            return (
              <article
                key={news.id}
                onClick={() => onOpenNewsDetail(news)}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#D4A017]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                    <img
                      src={news.image}
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0B1C3D]/90 text-[#E8C547] border border-[#D4A017]/30 backdrop-blur-xs">
                        <Tag className="w-3 h-3 text-[#D4A017]" />
                        <span>{displayCategory}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#1A7A4C]" />
                        <span>{displayDate}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#1A7A4C]" />
                        <span>{displayReadTime}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#0B1C3D] transition-colors mb-3 leading-snug">
                      {displayTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                      {displayExcerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs sm:text-sm text-[#1A7A4C] group-hover:text-[#2E9B6A] font-semibold">
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
