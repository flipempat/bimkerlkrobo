import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  ExternalLink, 
  Search, 
  Filter, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Truck, 
  CreditCard,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductsViewProps {
  onOpenProductDetail: (product: Product) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onOpenProductDetail }) => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const categories = [
    { id: 'all', label: t.categoryAll },
    { id: 'perak', label: t.categorySilver },
    { id: 'bakery', label: t.categoryBakery },
    { id: 'garmen', label: t.categoryGarment },
    { id: 'dupa', label: t.categoryIncense },
    { id: 'hidroponik', label: t.categoryHydroponic },
    { id: 'sablon', label: language === 'id' ? 'Sablon & Kanvas' : 'Screen Printing & Canvas' }
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // 'featured'
      if (a.isBestSeller && !b.isBestSeller) return -1;
      if (!a.isBestSeller && b.isBestSeller) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. TOP HEADER & TOKOPEDIA OFFICIAL BANNER */}
      <section className="bg-[#0a3a32] text-white pt-12 pb-14 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900/90 px-3 py-1 rounded-full border border-amber-500/20">
              {language === 'id' ? 'Etalase Resmi Warga Binaan' : 'Official Inmate Showcase'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.productsHeaderTitle}
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              {t.productsHeaderDesc}
            </p>
          </div>

          {/* Big Prominent Official Tokopedia Store Button Box */}
          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#03AC0E] via-[#02970c] to-[#03AC0E] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-emerald-400/40 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'id' ? 'Official Store Terverifikasi' : 'Verified Official Store'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {language === 'id' ? 'Toko Resmi BIMKER LKROBO di Tokopedia' : 'Official BIMKER LKROBO Store on Tokopedia'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-50">
                  {language === 'id' 
                    ? 'Nikmati kemudahan transaksi, proteksi pembeli, dan aneka promo bebas ongkir langsung di aplikasi Tokopedia Anda.' 
                    : 'Enjoy secure transactions, buyer protection, and free shipping promos directly on your Tokopedia app.'}
                </p>
              </div>

              <a
                id="main-tokopedia-store-link"
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#028a0a] font-extrabold px-6 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0 text-sm sm:text-base group"
              >
                <ShoppingBag className="w-5 h-5 text-[#03AC0E] transition-transform group-hover:scale-110" />
                <span>{t.visitTokopediaStore}</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 space-y-4">
          {/* Search bar & Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                {language === 'id' ? 'Urutkan:' : 'Sort by:'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-700 focus:outline-none focus:border-emerald-600"
              >
                <option value="featured">{language === 'id' ? 'Pilihan & Terlaris' : 'Featured & Bestseller'}</option>
                <option value="price-asc">{language === 'id' ? 'Harga Terendah' : 'Lowest Price'}</option>
                <option value="price-desc">{language === 'id' ? 'Harga Tertinggi' : 'Highest Price'}</option>
                <option value="name">{language === 'id' ? 'Nama Produk (A-Z)' : 'Product Name (A-Z)'}</option>
              </select>
            </div>
          </div>

          {/* Category Chips Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar border-t border-slate-100">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-[#0f4c42] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Notice */}
        <div className="flex items-center justify-between mt-4 text-xs text-slate-500 px-2">
          <span>Menampilkan <strong>{filteredProducts.length}</strong> produk karya warga binaan</span>
          <span className="text-emerald-700 font-medium">Klik &ldquo;Beli di Tokopedia&rdquo; untuk langsung memesan</span>
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenProductDetail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Tidak ada produk yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;. Coba gunakan kata kunci lain atau reset filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#0f4c42] text-white text-xs font-semibold px-4 py-2 rounded-xl"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </section>

      {/* 4. MEKANISME PEMBELIAN TOKOPEDIA & DAMPAK SOSIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Sistem Belanja Aman & Resmi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Bagaimana Transaksi Tokopedia Mendukung Warga Binaan?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Membeli karya warga binaan di Tokopedia memberikan dampak langsung dan terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5 text-emerald-700" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                1. Transaksi Mudah & Terproteksi
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Anda bertransaksi menggunakan platform Tokopedia dengan metode pembayaran lengkap (QRIS, VA Bank, GoPay) serta jaminan uang kembali bila barang tidak sesuai.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                2. Pengemasan & Pengiriman Cepat
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Produk dikemas rapi dengan bubble wrap dan perlindungan khusus langsung dari bimbingan kerja Lapas Kerobokan Badung Bali menuju alamat Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
                <HeartHandshake className="w-5 h-5 text-emerald-700" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                3. Hak Premi Tabungan Warga Binaan
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sesuai regulasi Ditjen Pemasyarakatan, bagian keuntungan disalurkan sebagai premi upah warga binaan yang ditabung untuk kebutuhan hidup pasca bebas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
