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
  Star,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { STATS, PRODUCTS, PROGRAMS, TESTIMONIALS } from '../data/mockData';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { ProductCard } from '../components/ProductCard';
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
  // Highlight top 4 programs
  const highlightPrograms = PROGRAMS.slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0a3a32] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium shadow-inner">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{t.heroBadge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.heroTitle}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  {language === 'id' ? 'Membangun Harapan' : 'Building Hope'}
                </span>{' '}
                {language === 'id' ? 'Melalui Keterampilan' : 'Through Skills'}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.heroDesc}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                {/* Tokopedia Primary CTA */}
                <a
                  href={TOKOPEDIA_CONFIG.officialStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#03AC0E] hover:bg-[#02950c] text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-black/25 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base group"
                >
                  <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>{t.visitTokopediaStore}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                {/* Explore Catalog */}
                <button
                  onClick={() => setActiveTab('produk')}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-800/80 hover:bg-emerald-700/90 text-white font-semibold px-5 py-4 rounded-xl border border-emerald-600/50 shadow-sm transition-all text-sm sm:text-base"
                >
                  <span>{t.heroExploreBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-emerald-200/90">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>100% Produk Karya Warga Binaan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Sertifikasi Standar BNSP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Premi Hasil Kerja Transparan</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Collage Card */}
            <div className="lg:col-span-5 relative pb-8 sm:pb-6 lg:pb-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Featured Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-600/30 bg-emerald-950/60 aspect-4/3 sm:aspect-1/1">
                  <img
                    src="https://images.unsplash.com/photo-1611591475879-16a7504a5e3e?auto=format&fit=crop&w=900&q=80"
                    alt="Kriya Perak Lapas Kerobokan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-6 pb-20 sm:pb-24">
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                        {language === 'id' ? 'Karya Unggulan' : 'Featured Masterpiece'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {language === 'id' ? 'Kerajinan Perak' : 'Silver Craft'}
                    </h3>
                    <p className="text-xs text-emerald-200 mt-1 sm:mt-1.5 line-clamp-2">
                      {language === 'id' 
                        ? 'Kriya perak murni hasil tempaan filigree presisi oleh warga binaan terlatih Lapas Kerobokan.'
                        : 'Pure 925 sterling silver forged with precision filigree craftsmanship by trained inmates.'}
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge: Tokopedia Guaranteed */}
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white text-slate-900 rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/90 max-w-[230px] sm:max-w-[250px] flex items-center gap-3 z-10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 shadow-xs">
                    <ShoppingBag className="w-5 h-5 text-[#03AC0E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {language === 'id' ? 'Toko Resmi' : 'Official Store'}
                    </span>
                    <span className="text-xs font-bold text-slate-900 leading-tight block">
                      BIMKER LKROBO
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Rating 4.9 • Tokopedia
                    </span>
                  </div>
                </div>

                {/* Floating Micro Badge: Capacity */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#0f4c42]/95 backdrop-blur-sm text-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-emerald-500/40 hidden sm:flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">
                      {language === 'id' ? '8 Bidang Keterampilan' : '8 Vocational Fields'}
                    </span>
                    <span className="text-[10px] text-emerald-200 block">
                      {language === 'id' ? 'Kriya, Bakery, Garmen & Tani' : 'Crafts, Bakery, Garment & Agro'}
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
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f4c42] mb-1 font-serif">380+</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{t.statsParticipants}</div>
              <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">
                {language === 'id' ? 'Lulusan siap kerja & mandiri' : 'Job-ready & independent alumni'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f4c42] mb-1 font-serif">8</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{t.statsPrograms}</div>
              <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">
                {language === 'id' ? 'Kriya, boga, manufaktur & tani' : 'Crafts, culinary, textiles & farm'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f4c42] mb-1 font-serif">4.800+</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{t.statsSold}</div>
              <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">
                {language === 'id' ? 'Rating kepuasan pembeli 4.9' : '4.9 buyer satisfaction rating'}
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f4c42] mb-1 font-serif">28+</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{t.statsPartners}</div>
              <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">
                {language === 'id' ? 'Kafe, hotel, asosiasi & UMKM' : 'Cafes, hotels, brands & SMEs'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUK TERBAIK & TERLARIS (TOKOPEDIA SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'id' ? 'Karya Terbaik Warga Binaan' : 'Inmate Masterpieces'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.featuredProductsTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {t.featuredProductsDesc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('produk')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <span>{t.seeAll}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={TOKOPEDIA_CONFIG.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#03AC0E] hover:bg-[#02950c] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{language === 'id' ? 'Toko Tokopedia' : 'Tokopedia Store'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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
        <div className="mt-12 bg-gradient-to-r from-emerald-50 via-emerald-100/60 to-emerald-50 rounded-2xl p-6 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#03AC0E] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Ingin melihat seluruh koleksi kerajinan & kuliner?
              </h4>
              <p className="text-xs text-slate-600">
                Kunjungi etalase resmi kami di Tokopedia dengan puluhan varian produk siap kirim ke seluruh Indonesia.
              </p>
            </div>
          </div>
          <a
            href={TOKOPEDIA_CONFIG.officialStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#03AC0E] hover:bg-[#02950c] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md shrink-0 transition-transform hover:scale-105"
          >
            <span>Kunjungi Toko Resmi Tokopedia</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 4. HIGHLIGHT PROGRAM UNGGULAN */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Pilar Kemandirian
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Program Keterampilan Berdaya Saing
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Kurikulum bimbingan kerja dirancang bersama praktisi dan lembaga sertifikasi agar warga binaan memiliki keahlian yang relevan dengan kebutuhan pasar nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightPrograms.map((program) => (
              <div
                key={program.id}
                onClick={() => onOpenProgramDetail(program)}
                className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-200 backdrop-blur-xs">
                      {program.categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                    {program.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span>Lihat Silabus & Karya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setActiveTab('program')}
              className="inline-flex items-center gap-2 bg-[#0f4c42] hover:bg-[#0c3e36] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <span>Jelajahi Semua 10+ Bidang Program Keterampilan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. INSPIRING QUOTE / SOCIAL REINTEGRATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f4c42] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-emerald-800/80 text-amber-300 flex items-center justify-center mx-auto border border-emerald-600/40">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-emerald-50 leading-relaxed">
              &ldquo;Setiap insan berhak atas kesempatan kedua. Di balik tembok pembinaan ini, tidak ada rasa putus asa yang dibiarkan menetap—yang ada adalah tekad untuk mengasah diri, merajut karya, dan kembali menjadi pribadi yang bermanfaat bagi bangsa.&rdquo;
            </blockquote>

            <div className="pt-2">
              <p className="font-bold text-amber-300 text-sm tracking-wide">
                BIMKER LAPAS KELAS IIA KEROBOKAN BALI
              </p>
              <p className="text-xs text-emerald-300">
                Membangun Kemandirian, Memanusiakan Manusia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONI & CERITA PERUBAHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Kisah Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Cerita Perubahan & Suara Mitra
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Bagaimana program bimbingan kerja memberikan harapan baru bagi warga binaan dan manfaat nyata bagi para mitra usaha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-600/30"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{testi.name}</h4>
                  <p className="text-xs text-emerald-800 font-medium">{testi.role}</p>
                  <p className="text-[11px] text-slate-400">{testi.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION KEMITRAAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0a352d] to-[#0e483e] text-white rounded-3xl p-8 sm:p-12 border border-emerald-700/50 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs font-bold text-amber-300 uppercase tracking-wider bg-emerald-950/80 px-3 py-1 rounded-full border border-amber-500/20">
              Kolaborasi & Kemitraan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Buka Peluang Bisnis & Berdayakan Sesama Bersama Kami
            </h2>
            <p className="text-sm text-emerald-200/90 leading-relaxed">
              Kami membuka kemitraan bagi pelaku industri, UMKM, hotel, restoran, dan ritel di Bali untuk maklon produksi pakaian, furnitur, suplai bakery, sayur hidroponik, atau kerajinan perak.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setActiveTab('kemitraan')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Ajukan Kerja Sama</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent("Halo Admin BIMKER LKROBO, saya tertarik untuk mendiskusikan peluang kemitraan usaha.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold px-5 py-3.5 rounded-xl border border-emerald-600/50 transition-colors text-sm"
            >
              <span>Konsultasi Cepat via WA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
