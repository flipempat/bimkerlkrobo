import React from 'react';
import { ShoppingBag, ExternalLink, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

const CATEGORY_NAMES_EN: Record<string, string> = {
  perak: '925 Silver Jewelry',
  bakery: 'Bakery & Pastry',
  garmen: 'Garment & Textiles',
  hidroponik: 'Fresh Hydroponics',
  dupa: 'Incense & Cultural',
  sablon: 'Screen Printing & Canvas',
  lukisan: 'Art Gallery & Paintings',
  daur_ulang: 'Upcycled Crafts',
  batik: 'Batik Creations',
  perkebunan: 'Agro & Crops',
  peternakan: 'Livestock Farm',
  perikanan: 'Biofloc Fishery',
  pertukangan: 'Carpentry & Metal',
  kayu: 'Woodcraft'
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const { t, language } = useLanguage();

  const displayCategory = language === 'en' && CATEGORY_NAMES_EN[product.category]
    ? CATEGORY_NAMES_EN[product.category]
    : product.categoryLabel;

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#0B1C3D] border border-slate-200/80 shadow-xs">
          {displayCategory}
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
          referrerPolicy="no-referrer"
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

          {/* Shopee Action Button */}
          <div>
            {product.shopeeUrl ? (
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#D73211] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all hover:shadow-md text-center active:scale-95 group"
                title={language === 'id' ? 'Beli Sekarang di Shopee' : 'Buy Now on Shopee'}
              >
                <ShoppingBag className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{t.buyOnShopee}</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                onClick={(e) => e.stopPropagation()}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-400 text-xs font-medium py-2.5 px-4 rounded-xl border border-slate-200 cursor-not-allowed opacity-60 text-center"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>{t.buyOnShopee}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
