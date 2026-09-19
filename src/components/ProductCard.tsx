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
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-emerald-900 border border-slate-200/80 shadow-xs">
          {product.categoryLabel}
        </span>
        {product.isBestSeller && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 shadow-xs">
            <Sparkles className="w-3 h-3 text-slate-950" />
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
            className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-xs transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.viewDetails}</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Made by attribution */}
          <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{product.madeBy}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1 cursor-pointer mb-1.5"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Tokopedia Action Section */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[11px] text-slate-400 font-medium">
              {language === 'id' ? 'Harga Resmi:' : 'Official Price:'}
            </span>
            <span className="text-base font-extrabold text-emerald-900">
              {product.formattedPrice}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Detail Trigger */}
            <button
              onClick={() => onOpenDetail(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-2 rounded-xl transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.viewDetails}</span>
            </button>

            {/* Direct Tokopedia Button */}
            <a
              href={product.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#03AC0E] hover:bg-[#02950c] text-white text-xs font-bold py-2.5 px-2 rounded-xl shadow-xs hover:shadow transition-all group/btn"
              title="Beli produk ini langsung di Tokopedia resmi BIMKER LKROBO"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Tokopedia</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
