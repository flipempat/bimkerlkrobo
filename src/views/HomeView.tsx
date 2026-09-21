import React from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Users, 
  Award, 
  Package, 
  TrendingUp,
  Quote,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { STATS, PRODUCTS, PROGRAMS, TESTIMONIALS } from '../data/mockData';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { ProductCard } from '../components/ProductCard';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Product, Program } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenProgramDetail: (program: Program) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  setActiveTab, 
  onOpenProductDetail,
  onOpenProgramDetail 
}) => {
  const { t, language } = useLanguage();

  // Top 4 featured/bestseller products
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  
  // Highlight programs from both categories (UMKM & Ketahanan Pangan)
  const highlightPrograms = [
    PROGRAMS.find(p => p.id === 'prog-art-gallery'),
    PROGRAMS.find(p => p.id === 'prog-perak'),
    PROGRAMS.find(p => p.id === 'prog-perikanan'),
    PROGRAMS.find(p => p.id === 'prog-peternakan')
  ].filter(Boolean) as Program[];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#07132B] text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Real Documentation Background: Apel Pagi Warga Binaan */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/slefyi8iuwrmleiwhg37.webp"
            alt="Apel Pagi Kegiatan Bimbingan Kerja Lapas Kerobokan"
            className="w-full h-[160%] sm:h-full object-cover object-[78%_center] sm:object-center -translate-y-[35%] sm:translate-y-0"
            referrerPolicy="no-referrer"
          />
          {/* Balanced gradient: solid on text side (left), light & translucent on photo side (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/90 via-[#07132B]/65 to-[#07132B]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/40" />
        </div>

        {/* Subtle documentation origin credit tag at bottom-left */}
        <div className="absolute bottom-3 left-4 sm:left-8 z-10 hidden sm:block">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-300/85 bg-[#07132B]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span>{language === 'id' ? 'Dokumentasi: Apel Pagi Bimbingan Kemandirian Lapas Kerobokan' : 'Documentation: Inmate Morning Assembly, Kerobokan Prison'}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10244C] border border-[#D4A017]/40 text-[#E8C547] text-xs sm:text-sm font-medium shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
                <span>{t.heroBadge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.heroTitle}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] via-[#E8C547] to-[#D4A017]">
                  {language === 'id' ? 'Membangun Harapan' : 'Building Hope'}
                </span>{' '}
                {language === 'id' ? 'Melalui Keterampilan' : 'Through Skills'}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.heroDesc}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                {/* Explore Catalog Primary CTA - Gold */}
                <button
                  onClick={() => setActiveTab('produk')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] font-bold px-6 py-4 rounded-xl shadow-lg shadow-black/25 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base group"
                >
                  <Package className="w-5 h-5 text-[#1A1A1A] transition-transform group-hover:scale-110" />
                  <span>{t.heroExploreBtn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Partnership Secondary CTA - Emerald */}
                <button
                  onClick={() => setActiveTab('kemitraan')}
                  className="inline-flex items-center justify-center gap-2 bg-[#1A7A4C] hover:bg-[#2E9B6A] text-white font-semibold px-5 py-4 rounded-xl border border-[#2E9B6A]/50 shadow-sm transition-all text-sm sm:text-base"
                >
                  <HeartHandshake className="w-4 h-4 text-emerald-200" />
                  <span>{t.navPartnership}</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                  <span>{language === 'id' ? '100% Produk Karya Warga Binaan' : '100% Inmate-Crafted Creations'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D4A017]" />
                  <span>{language === 'id' ? 'Sertifikasi Standar BNSP' : 'BNSP Certified Standard'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#D4A017]" />
                  <span>{language === 'id' ? 'Premi Hasil Kerja Transparan' : 'Transparent Inmate Wage Savings'}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Collage Card */}
            <div className="lg:col-span-5 relative lg:self-end pb-6 sm:pb-4 lg:pb-0">
              <div className="relative mx-auto max-w-md lg:max-w-none translate-y-3 sm:translate-y-4 lg:translate-y-12">
                {/* Main Featured Image Card (Height reduced by 40% to aspect-16/10) */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4A017]/30 bg-[#0B1C3D] aspect-16/10">
                  <img
                    src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789958503/d5sw4j0cjgpqimoapz7r.webp"
                    alt="Kriya Perak Lapas Kerobokan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5 pb-12 sm:pb-14">
                    <div className="mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D4A017] text-[#1A1A1A] shadow-md">
                        <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                        {language === 'id' ? 'Karya Unggulan' : 'Featured Masterpiece'}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {language === 'id' ? 'Kerajinan Perak' : 'Silver Craft'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-200 mt-1 line-clamp-1 sm:line-clamp-2">
                      {language === 'id' 
                        ? 'Kriya perak murni hasil tempaan filigree presisi oleh warga binaan terlatih Lapas Kerobokan.'
                        : 'Pure 925 sterling silver forged with precision filigree craftsmanship by trained inmates.'}
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge: Certified Craftsmanship */}
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white text-[#1A1A1A] rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/90 max-w-[230px] sm:max-w-[250px] flex items-center gap-3 z-10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1A7A4C]/15 flex items-center justify-center shrink-0 shadow-xs">
                    <Award className="w-5 h-5 text-[#1A7A4C]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#1A7A4C] uppercase tracking-wider block">
                      {language === 'id' ? 'Karya Mandiri' : 'Vocational Hub'}
                    </span>
                    <span className="text-xs font-bold text-[#0B1C3D] leading-tight block">
                      BIMKER LKROBO
                    </span>
                    <span className="text-[11px] text-[#6B7280] block">
                      {language === 'id' ? '100% Produk Terverifikasi' : '100% Verified Quality'}
                    </span>
                  </div>
                </div>

                {/* Floating Micro Badge: Capacity */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#0B1C3D]/95 backdrop-blur-sm text-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-[#D4A017]/40 hidden sm:flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-xl bg-[#D4A017]/20 text-[#D4A017] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">
                      {PROGRAMS.length} {language === 'id' ? 'Program Pembinaan' : 'Vocational Programs'}
                    </span>
                    <span className="text-[10px] text-slate-300 block">
                      {language === 'id' ? 'UMKM & Ketahanan Pangan' : 'SME & Food Security'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTIK PENCAPAIAN BIMKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-4 sm:pt-0 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3D] mb-1 font-serif">380+</div>
              <div className="text-sm font-bold text-[#1A1A1A] mb-1">{t.statsParticipants}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed hidden sm:block">
                {language === 'id' ? 'Lulusan siap kerja & mandiri' : 'Job-ready & independent alumni'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3D] mb-1 font-serif">13</div>
              <div className="text-sm font-bold text-[#1A1A1A] mb-1">{t.statsPrograms}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed hidden sm:block">
                {language === 'id' ? 'UMKM & Ketahanan Pangan' : 'SME & Food Security'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3D] mb-1 font-serif">4.800+</div>
              <div className="text-sm font-bold text-[#1A1A1A] mb-1">{t.statsSold}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed hidden sm:block">
                {language === 'id' ? 'Rating kepuasan pembeli 4.9' : '4.9 buyer satisfaction rating'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3D] mb-1 font-serif">28+</div>
              <div className="text-sm font-bold text-[#1A1A1A] mb-1">{t.statsPartners}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed hidden sm:block">
                {language === 'id' ? 'Kafe, hotel, asosiasi & UMKM' : 'Cafes, hotels, brands & SMEs'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUK TERBAIK & TERLARIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#D4A017]/15 text-[#D4A017] border border-[#D4A017]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>{language === 'id' ? 'Karya Terbaik Warga Binaan' : 'Inmate Masterpieces'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
              {t.featuredProductsTitle}
            </h2>
            <p className="text-sm text-[#6B7280] mt-1 max-w-xl">
              {t.featuredProductsDesc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('produk')}
              className="inline-flex items-center gap-2 bg-[#1A7A4C] hover:bg-[#2E9B6A] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <span>{t.seeAll}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenProductDetail}
            />
          ))}
        </div>

        {/* Banner bawah produk */}
        <div className="mt-12 bg-[#F8F9FC] rounded-2xl p-6 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center shrink-0 shadow-md">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0B1C3D] text-base">
                {language === 'id' ? 'Ingin melihat seluruh koleksi kerajinan & kuliner?' : 'Want to explore our complete artisan & culinary collection?'}
              </h4>
              <p className="text-xs text-[#6B7280]">
                {language === 'id'
                  ? 'Jelajahi etalase katalog lengkap kami dengan puluhan varian produk karya warga binaan.'
                  : 'Browse our complete catalog showcase with dozens of productive inmate handcrafted products.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('produk')}
            className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-sm font-bold px-6 py-3 rounded-xl shadow-md shrink-0 transition-transform hover:scale-105"
          >
            <span>{language === 'id' ? 'Buka Katalog Lengkap' : 'Open Full Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. HIGHLIGHT PROGRAM UNGGULAN - Section Off-White */}
      <section className="bg-[#F8F9FC] py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30">
              {language === 'id' ? 'Pilar Kemandirian' : 'Independence Pillars'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight mt-2">
              {language === 'id' ? 'Program Keterampilan Berdaya Saing' : 'Competitive Vocational Programs'}
            </h2>
            <p className="text-sm text-[#6B7280] mt-2">
              {language === 'id'
                ? 'Kurikulum bimbingan kerja dirancang bersama praktisi dan lembaga sertifikasi agar warga binaan memiliki keahlian yang relevan dengan kebutuhan pasar nyata.'
                : 'Vocational guidance curriculum designed alongside industry practitioners and national certification bodies to equip inmates with market-ready skills.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightPrograms.map((program) => {
              const isUmkm = program.category === 'umkm';
              const displayTitle = language === 'en' && program.titleEn ? program.titleEn : program.title;
              const displayDesc = language === 'en' && program.shortDescEn ? program.shortDescEn : program.shortDesc;
              const displayCategory = language === 'en' && program.categoryLabelEn ? program.categoryLabelEn : program.categoryLabel;

              return (
                <div
                  key={program.id}
                  onClick={() => onOpenProgramDetail(program)}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#D4A017]/50 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src={program.image}
                        alt={displayTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs ${
                        isUmkm
                          ? 'bg-[#0B1C3D]/90 text-[#D4A017] border border-[#D4A017]/40'
                          : 'bg-[#1A7A4C]/90 text-white border border-[#2E9B6A]/50'
                      }`}>
                        {displayCategory}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#1A1A1A] group-hover:text-[#0B1C3D] transition-colors mb-2">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3 mb-4">
                      {displayDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#1A7A4C] font-semibold">
                    <span>{language === 'id' ? 'Lihat Silabus & Karya' : 'View Syllabus & Works'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setActiveTab('program')}
              className="inline-flex items-center gap-2 bg-[#0B1C3D] hover:bg-[#10244C] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm hover:scale-102"
            >
              <span>{language === 'id' ? 'Jelajahi Seluruh 12 Program UMKM & Ketahanan Pangan' : 'Explore All 12 SME & Food Security Programs'}</span>
              <ArrowRight className="w-4 h-4 text-[#D4A017]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. INSPIRING QUOTE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1C3D] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-[#D4A017]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#10244C] text-[#D4A017] flex items-center justify-center mx-auto border border-[#D4A017]/40">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-slate-100 leading-relaxed">
              {language === 'id' 
                ? '“Setiap insan berhak atas kesempatan kedua. Di balik tembok pembinaan ini, tidak ada rasa putus asa yang dibiarkan menetap—yang ada adalah tekad untuk mengasah diri, merajut karya, dan kembali menjadi pribadi yang bermanfaat bagi bangsa.”'
                : '“Every human being deserves a second chance. Behind these correctional walls, despair is not allowed to dwell—what remains is the determination to hone oneself, craft works of value, and return as a meaningful person to the nation.”'}
            </blockquote>

            <div className="pt-2">
              <p className="font-bold text-[#D4A017] text-sm tracking-wide">
                BIMKER LAPAS KELAS IIA KEROBOKAN BALI
              </p>
              <p className="text-xs text-slate-300">
                {language === 'id' ? 'Membangun Kemandirian, Memanusiakan Manusia' : 'Building Independence, Restoring Dignity'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONI & CERITA PERUBAHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30">
            {language === 'id' ? 'Kisah Nyata' : 'Real Stories'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight mt-2">
            {t.storiesTitle}
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            {t.storiesDesc}
          </p>
        </div>

        <TestimonialSlider testimonials={TESTIMONIALS} />
      </section>

      {/* 7. TRANSPARANSI PREMI & DAMPAK SOSIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1A7A4C]/15 text-[#1A7A4C] border border-[#1A7A4C]/30">
                <HeartHandshake className="w-3.5 h-3.5 text-[#1A7A4C]" />
                <span>{language === 'id' ? 'Dampak Sosial Nyata' : 'Real Social Impact'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
                {language === 'id'
                  ? 'Dari Setiap Pesanan, Mengalir Hak Upah Premi Warga Binaan'
                  : 'From Every Purchase, Real Wage Premiums Reach Inmates'}
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {language === 'id'
                  ? 'Di Lapas Kelas IIA Kerobokan, hasil karya tidak hanya dipajang—tetapi memberikan imbalan nyata. Setiap rupiah keuntungan penjualan produk di Tokopedia disalurkan secara transparan sebagai premi hasil kerja yang dicatatkan di buku rekening tabungan mandiri warga binaan.'
                  : 'At Kerobokan Prison, craftworks generate genuine livelihoods. Proceeds from official marketplace orders are transparently shared as legitimate wage premiums deposited directly into inmates’ official savings passbooks.'}
              </p>

              <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#1A1A1A]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0" />
                  <span>{language === 'id' ? 'Sesuai regulasi resmi Permenkumham RI No. 29/2017' : 'Complies strictly with Indonesian Ministerial Regulation No. 29/2017'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0" />
                  <span>{language === 'id' ? 'Buku tabungan mandiri untuk bekal keluarga & modal pasca bebas' : 'Individual passbook savings for family support & post-release capital'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0" />
                  <span>{language === 'id' ? 'Transparansi penuh tanpa potongan liar' : 'Full financial transparency and zero illegal deductions'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('tentang')}
                  className="inline-flex items-center gap-2 bg-[#0B1C3D] hover:bg-[#10244C] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-xs"
                >
                  <span>{language === 'id' ? 'Lihat Dokumentasi & SOP' : 'View Documentation & SOP'}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A017]" />
                </button>
                <button
                  onClick={() => setActiveTab('berita')}
                  className="inline-flex items-center gap-2 bg-[#F8F9FC] hover:bg-slate-100 text-[#0B1C3D] text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-slate-200 transition-colors"
                >
                  <span>{language === 'id' ? 'Baca Berita Penyaluran' : 'Read Distribution News'}</span>
                </button>
              </div>
            </div>

            {/* Right Images (Dual Photo Grid) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 bg-slate-100 group">
                  <img
                    src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/l5zuxuucvytsxjfbpsuk.webp"
                    alt="Pembagian Premi Warga Binaan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#0B1C3D] block">
                    {language === 'id' ? 'Seremoni Penyerahan Premi' : 'Wage Handover Ceremony'}
                  </span>
                  <span className="text-[10px] text-[#6B7280]">
                    {language === 'id' ? 'Diterima perwakilan warga binaan' : 'Handed to inmate artisans'}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 bg-slate-100 group">
                  <img
                    src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/th1goquoqx8l0cbpnypi.webp"
                    alt="Buku Rekening Tabungan Warga Binaan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#1A7A4C] block">
                    {language === 'id' ? 'Buku Tabungan Mandiri' : 'Individual Passbook'}
                  </span>
                  <span className="text-[10px] text-[#6B7280]">
                    {language === 'id' ? 'Bekal finansial pasca bebas' : 'Reintegration capital'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION KEMITRAAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#07132B] via-[#0B1C3D] to-[#10244C] text-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs font-bold text-[#D4A017] uppercase tracking-wider bg-[#07132B] px-3 py-1 rounded-full border border-[#D4A017]/30">
              {language === 'id' ? 'Kolaborasi & Kemitraan' : 'Collaboration & Partnership'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.partnerCtaTitle}
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              {t.partnerCtaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            {/* Primary CTA - Gold */}
            <button
              onClick={() => setActiveTab('kemitraan')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>{t.partnerCtaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* Secondary CTA - Emerald */}
            <a
              href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(language === 'id' ? "Halo Admin BIMKER LKROBO, saya tertarik untuk mendiskusikan peluang kemitraan usaha." : "Hello Admin BIMKER LKROBO, I am interested in discussing business partnership opportunities.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A7A4C] hover:bg-[#2E9B6A] text-white font-semibold px-5 py-3.5 rounded-xl border border-[#2E9B6A]/50 transition-colors text-sm"
            >
              <span>{language === 'id' ? 'Konsultasi Cepat via WA' : 'Quick WA Consultation'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
