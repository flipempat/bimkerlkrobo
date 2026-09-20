import React from 'react';
import { ShoppingBag, ExternalLink, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const { t, language } = useLanguage();

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#0B1C3D] border border-slate-200/80 shadow-xs">
          {product.categoryLabel}
        </span>
        {product.isBestSeller && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4A017] text-[#1A1A1A] shadow-xs">
            <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
            <span>{t.bestSeller}</span>
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
          <button
            onClick={() => onOpenDetail(product)}
            className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#1A1A1A] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-xs transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#1A7A4C]" />
            <span>{t.viewDetails}</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Made by attribution */}
          <div className="flex items-center gap-1 text-[11px] text-[#1A7A4C] font-medium mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A7A4C] shrink-0" />
            <span className="truncate">{product.madeBy}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-bold text-base text-[#1A1A1A] group-hover:text-[#0B1C3D] transition-colors line-clamp-1 cursor-pointer mb-1.5"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[11px] text-[#6B7280] font-medium">
              {language === 'id' ? 'Harga Resmi:' : 'Official Price:'}
            </span>
            <span className="text-base font-extrabold text-[#0B1C3D]">
              {product.formattedPrice}
            </span>
          </div>

          {/* Marketplace Dual Action Buttons (Shopee & Tokopedia Side-by-Side) */}
          <div className="grid grid-cols-2 gap-2">
            {/* Tombol Beli di Shopee (Oranye #EE4D2D) */}
            {product.shopeeUrl ? (
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-1.5 bg-[#EE4D2D] hover:bg-[#D73211] text-white text-[11px] sm:text-xs font-bold py-2.5 px-2 rounded-xl shadow-xs transition-all hover:shadow-md text-center active:scale-95"
                title={language === 'id' ? 'Beli di Shopee' : 'Buy on Shopee'}
              >
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.buyOnShopee}</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-1.5 bg-slate-100 text-slate-400 text-[11px] sm:text-xs font-medium py-2.5 px-2 rounded-xl border border-slate-200 cursor-not-allowed opacity-60 text-center"
                title={language === 'id' ? 'Belum tersedia di Shopee' : 'Not available on Shopee'}
              >
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.buyOnShopee}</span>
              </button>
            )}

            {/* Tombol Beli di Tokopedia (Hijau #03AC0E) */}
            {product.tokopediaUrl ? (
              <a
                href={product.tokopediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-1.5 bg-[#03AC0E] hover:bg-[#028A0B] text-white text-[11px] sm:text-xs font-bold py-2.5 px-2 rounded-xl shadow-xs transition-all hover:shadow-md text-center active:scale-95"
                title={language === 'id' ? 'Beli di Tokopedia' : 'Buy on Tokopedia'}
              >
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.buyOnTokopedia}</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-1.5 bg-slate-100 text-slate-400 text-[11px] sm:text-xs font-medium py-2.5 px-2 rounded-xl border border-slate-200 cursor-not-allowed opacity-60 text-center"
                title={language === 'id' ? 'Belum tersedia di Tokopedia' : 'Not available on Tokopedia'}
              >
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.buyOnTokopedia}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
