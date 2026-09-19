import React from 'react';
import { 
  X, 
  ShoppingBag, 
  ExternalLink, 
  ShieldCheck, 
  HeartHandshake, 
  MessageCircle, 
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

  const waQuestionUrl = `https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Halo Admin BIMKER LKROBO, saya ingin menanyakan tentang produk "${product.name}" (${product.formattedPrice}).`
  )}`;

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
                <span className="bg-emerald-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  {product.categoryLabel}
                </span>
                {product.isBestSeller && (
                  <span className="bg-amber-500 text-slate-950 font-bold px-2.5 py-1 rounded-lg">
                    {t.bestSeller}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Official Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'id' ? 'Karya Binaan Lapas Kerobokan' : 'Inmate Crafted at Kerobokan Prison'}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-extrabold text-emerald-900">
                    {product.formattedPrice}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ pcs di Tokopedia</span>
                </div>

                {/* Made By & Unit */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1 mb-4">
                  <p className="text-slate-500">
                    <span className="font-semibold text-slate-700">
                      {language === 'id' ? 'Dibuat oleh:' : 'Crafted by:'}
                    </span> {product.madeBy}
                  </p>
                  {product.material && (
                    <p className="text-slate-500">
                      <span className="font-semibold text-slate-700">
                        {language === 'id' ? 'Bahan Baku:' : 'Raw Material:'}
                      </span> {product.material}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2 text-sm text-slate-600 leading-relaxed mb-6">
                  <p>{product.fullDescription}</p>
                </div>

                {/* Specifications List */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>{language === 'id' ? 'Spesifikasi Produk' : 'Product Specifications'}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {product.specifications.map((spec, i) => (
                        <div key={i} className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                          <span className="text-slate-400 block text-[10px]">{spec.label}</span>
                          <span className="font-semibold text-slate-800">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Impact Note */}
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                  <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {language === 'id' 
                      ? 'Pembelian Anda memberikan hak upah premi kerja mandiri yang ditabung untuk masa depan warga binaan pasca bebas.' 
                      : 'Your purchase directly funds inmate labor allowances and savings for their post-release rehabilitation.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {/* Big Tokopedia Primary Button */}
                <a
                  href={product.tokopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#03AC0E] hover:bg-[#02950c] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{t.buyOnTokopedia}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                {/* WhatsApp Bulk / Custom Inquiry */}
                <a
                  href={waQuestionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'id' ? 'Tanya Info Custom / Pesanan Khusus via WhatsApp' : 'Inquire Custom / Bulk Orders via WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
