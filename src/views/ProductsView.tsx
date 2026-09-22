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
    { id: 'lukisan', label: language === 'id' ? 'Art Gallery & Seni Lukis' : 'Art Gallery & Paintings' },
    { id: 'batik', label: language === 'id' ? 'Kerajinan Batik' : 'Batik Crafts' },
    { id: 'daur_ulang', label: language === 'id' ? 'Kriya Daur Ulang' : 'Upcycled Crafts' },
    { id: 'perkebunan', label: language === 'id' ? 'Perkebunan & Pangan' : 'Plantation & Produce' },
    { id: 'perak', label: t.categorySilver },
    { id: 'bakery', label: t.categoryBakery },
    { id: 'garmen', label: t.categoryGarment },
    { id: 'dupa', label: t.categoryIncense },
    { id: 'hidroponik', label: t.categoryHydroponic },
    { id: 'peternakan', label: language === 'id' ? 'Peternakan & Hasil Ternak' : 'Livestock & Fresh Produce' },
    { id: 'perikanan', label: language === 'id' ? 'Perikanan & Kolam Bioflok' : 'Fishery & Biofloc Produce' },
    { id: 'sablon', label: language === 'id' ? 'Sablon & Kanvas' : 'Screen Printing & Canvas' },
    { id: 'pertukangan', label: language === 'id' ? 'Pertukangan & Las' : 'Carpentry & Metalwork' }
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
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white pt-12 pb-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
              {language === 'id' ? 'Etalase Resmi Warga Binaan' : 'Official Inmate Showcase'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.productsHeaderTitle}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {t.productsHeaderDesc}
            </p>
          </div>

          {/* Big Prominent Official Marketplace Store Buttons (Shopee & Tokopedia) */}
          <div className="mt-8 max-w-4xl mx-auto bg-[#0B1C3D] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-[#D4A017]/40 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4A017]/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10244C] text-[#E8C547] border border-[#D4A017]/30 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>{language === 'id' ? 'Toko Resmi Terverifikasi (Official Store)' : 'Verified Official Store'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {language === 'id' ? 'Kunjungi Toko Resmi BIMKER LKROBO' : 'Visit BIMKER LKROBO Official Stores'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {language === 'id' 
                      ? 'Dukung kemandirian warga binaan Lapas Kelas IIA Kerobokan dengan berbelanja langsung di platform marketplace pilihan Anda:' 
                      : 'Support the empowerment of inmates by shopping directly on your preferred marketplace platform:'}
                  </p>
                </div>
              </div>

              {/* Two Large Buttons for Shopee & Tokopedia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Tombol Besar Shopee (Oranye #EE4D2D) */}
                <a
                  id="shopee-official-store-header-btn"
                  href={TOKOPEDIA_CONFIG.shopeeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-[#EE4D2D] hover:bg-[#D73211] text-white p-5 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] uppercase tracking-wider text-orange-200 font-semibold">
                        Shopee Official Shop
                      </span>
                      <span className="block text-base sm:text-lg font-extrabold leading-tight">
                        {t.visitShopeeStore}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 shrink-0 text-white/80 group-hover:text-white transition-colors" />
                </a>

                {/* 2. Tombol Besar Tokopedia (Hijau #03AC0E) */}
                <a
                  id="tokopedia-official-store-header-btn"
                  href={TOKOPEDIA_CONFIG.tokopediaStoreUrl || TOKOPEDIA_CONFIG.officialStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-[#03AC0E] hover:bg-[#028A0B] text-white p-5 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] uppercase tracking-wider text-emerald-100 font-semibold">
                        Tokopedia Official Store
                      </span>
                      <span className="block text-base sm:text-lg font-extrabold leading-tight">
                        {t.visitTokopediaStore}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 shrink-0 text-white/80 group-hover:text-white transition-colors" />
                </a>
              </div>
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
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] text-[#1A1A1A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] hover:text-[#1A1A1A]"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-[#6B7280] font-medium hidden sm:inline">
                {language === 'id' ? 'Urutkan:' : 'Sort by:'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs sm:text-sm bg-[#F8F9FC] border border-slate-200 rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#D4A017]"
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
                      ? 'bg-[#0B1C3D] text-[#D4A017] border border-[#D4A017]/40 shadow-xs'
                      : 'bg-[#F8F9FC] hover:bg-slate-200/70 text-[#1A1A1A]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Notice */}
        <div className="flex items-center justify-between mt-4 text-xs text-[#6B7280] px-2">
          <span>
            {language === 'id' 
              ? <>Menampilkan <strong>{filteredProducts.length}</strong> produk karya warga binaan</>
              : <>Showing <strong>{filteredProducts.length}</strong> inmate-crafted products</>}
          </span>
          <span className="text-[#1A7A4C] font-semibold">
            {language === 'id' ? 'Karya Asli Warga Binaan Lapas Kerobokan' : 'Authentic Inmate Works of Kerobokan'}
          </span>
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
            <ShoppingBag className="w-12 h-12 text-[#6B7280]/40 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#1A1A1A] mb-1">
              {t.productNotFound}
            </h3>
            <p className="text-xs text-[#6B7280] max-w-sm mx-auto mb-4">
              {language === 'id'
                ? `Tidak ada produk yang cocok dengan pencarian “${searchQuery}”. Coba gunakan kata kunci lain atau reset filter.`
                : `No products matched “${searchQuery}”. Try another search term or reset filters.`}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#0B1C3D] hover:bg-[#10244C] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              {t.resetFilter}
            </button>
          </div>
        )}
      </section>

      {/* 4. MEKANISME PEMBELIAN MARKETPLACE & DAMPAK SOSIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F9FC] rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30">
              {language === 'id' ? 'Sistem Belanja Aman & Resmi' : 'Safe & Official Shopping System'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C3D] mt-2">
              {t.howTokopediaHelps}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              {t.howTokopediaHelpsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5 text-[#D4A017]" />
              </div>
              <h4 className="font-bold text-sm text-[#1A1A1A] mb-1.5">
                {t.secureTransactionTitle}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {t.secureTransactionDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center mb-3">
                <Truck className="w-5 h-5 text-[#D4A017]" />
              </div>
              <h4 className="font-bold text-sm text-[#1A1A1A] mb-1.5">
                {t.fastShippingTitle}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {t.fastShippingDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1A7A4C]/15 text-[#1A7A4C] flex items-center justify-center mb-3">
                <HeartHandshake className="w-5 h-5 text-[#1A7A4C]" />
              </div>
              <h4 className="font-bold text-sm text-[#1A1A1A] mb-1.5">
                {t.inmateWageTitle}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {t.inmateWageDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
