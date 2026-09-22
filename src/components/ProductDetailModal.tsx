import React from 'react';
import { 
  X, 
  ShoppingBag, 
  ExternalLink, 
  ShieldCheck, 
  HeartHandshake, 
  Mail, 
  Sparkles,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { t, language } = useLanguage();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8 animate-fadeIn max-h-[90vh] flex flex-col">
        {/* Header Close */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Image */}
            <div className="relative aspect-4/3 md:aspect-auto md:h-full bg-slate-100 min-h-[300px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="bg-[#0B1C3D]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#D4A017]/30 text-[#D4A017] font-semibold">
                  {product.categoryLabel}
                </span>
                {product.isBestSeller && (
                  <span className="bg-[#D4A017] text-[#1A1A1A] font-bold px-2.5 py-1 rounded-lg">
                    {t.bestSeller}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Official Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A7A4C]/10 text-[#1A7A4C] text-xs font-semibold border border-[#1A7A4C]/30 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#1A7A4C]" />
                  <span>{language === 'id' ? 'Karya Binaan Lapas Kerobokan' : 'Inmate Crafted at Kerobokan Prison'}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-extrabold text-[#0B1C3D]">
                    {product.formattedPrice}
                  </span>
                  <span className="text-xs text-[#6B7280] font-medium">/ pcs di Tokopedia</span>
                </div>

                {/* Made By & Unit */}
                <div className="bg-[#F8F9FC] rounded-xl p-3 border border-slate-200/80 text-xs space-y-1 mb-4">
                  <p className="text-[#6B7280]">
                    <span className="font-semibold text-[#1A1A1A]">
                      {language === 'id' ? 'Dibuat oleh:' : 'Crafted by:'}
                    </span> {product.madeBy}
                  </p>
                  {product.material && (
                    <p className="text-[#6B7280]">
                      <span className="font-semibold text-[#1A1A1A]">
                        {language === 'id' ? 'Bahan Baku:' : 'Raw Material:'}
                      </span> {product.material}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2 text-sm text-[#6B7280] leading-relaxed mb-6">
                  <p>{product.fullDescription}</p>
                </div>

                {/* Specifications List */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>{language === 'id' ? 'Spesifikasi Produk' : 'Product Specifications'}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {product.specifications.map((spec, i) => (
                        <div key={i} className="bg-[#F8F9FC] px-3 py-2 rounded-lg border border-slate-200/80">
                          <span className="text-[#6B7280] block text-[10px]">{spec.label}</span>
                          <span className="font-semibold text-[#1A1A1A]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Impact Note */}
                <div className="bg-[#F8F9FC] border border-[#D4A017]/40 rounded-xl p-3 text-xs text-[#1A1A1A] flex items-start gap-2.5">
                  <HeartHandshake className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {language === 'id' 
                      ? 'Pembelian Anda memberikan hak upah premi kerja mandiri yang ditabung untuk masa depan warga binaan pasca bebas.' 
                      : 'Your purchase directly funds inmate labor allowances and savings for their post-release rehabilitation.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {/* Dual Marketplace Purchase Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Shopee Button (#EE4D2D) */}
                  {product.shopeeUrl ? (
                    <a
                      href={product.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#D73211] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm group"
                    >
                      <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{t.buyOnShopee}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-medium py-3.5 px-4 rounded-xl border border-slate-200 cursor-not-allowed opacity-60 text-xs sm:text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.buyOnShopee} (Belum Tersedia)</span>
                    </button>
                  )}

                  {/* Tokopedia Button (#03AC0E) */}
                  {product.tokopediaUrl ? (
                    <a
                      href={product.tokopediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#03AC0E] hover:bg-[#028A0B] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm group"
                    >
                      <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{t.buyOnTokopedia}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-medium py-3.5 px-4 rounded-xl border border-slate-200 cursor-not-allowed opacity-60 text-xs sm:text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.buyOnTokopedia} (Belum Tersedia)</span>
                    </button>
                  )}
                </div>

                {/* Official Email Custom / Bulk Inquiry */}
                <a
                  href={`mailto:${TOKOPEDIA_CONFIG.email}?subject=${encodeURIComponent(
                    language === 'id'
                      ? `Tanya Info Produk / Pemesanan Khusus - ${product.name}`
                      : `Inquiry Product / Custom Order - ${product.name}`
                  )}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#F8F9FC] hover:bg-slate-100 text-[#0B1C3D] font-semibold py-2.5 px-4 rounded-xl border border-slate-200 transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 text-[#D4A017]" />
                  <span>{language === 'id' ? 'Tanya Info Custom / Pesanan Khusus via Email' : 'Inquire Custom / Bulk Orders via Email'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
