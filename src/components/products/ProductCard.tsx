import React from 'react';
import { LuPlus, LuEye } from 'react-icons/lu';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-[#121A1B]/40 border border-[#EAE6D2]/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#A7AA63]/30 hover:shadow-[0_0_30px_rgba(167,170,99,0.15)]">
      {/* Product Image */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#A7AA63] text-[#121A1B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {/* Hover Actions - Glassmorphism */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#121A1B]/20 backdrop-blur-[2px]">
          <button className="p-3 bg-[#EAE6D2]/10 backdrop-blur-md border border-[#EAE6D2]/20 rounded-full text-[#EAE6D2] hover:bg-[#A7AA63] hover:text-[#121A1B] hover:border-[#A7AA63] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <LuEye size={20} />
          </button>
          <button className="p-3 bg-[#EAE6D2]/10 backdrop-blur-md border border-[#EAE6D2]/20 rounded-full text-[#EAE6D2] hover:bg-[#A7AA63] hover:text-[#121A1B] hover:border-[#A7AA63] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
            <LuPlus size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-2 bg-gradient-to-t from-[#121A1B] to-transparent">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#A7AA63] text-[10px] font-bold uppercase tracking-widest mb-1">
              {product.brand || product.subCategory}
            </p>
            <h3 className="text-[#EAE6D2] font-headline text-lg font-bold uppercase leading-tight group-hover:text-[#A7AA63] transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-[#EAE6D2] font-headline font-bold text-lg">
            ${product.price}
          </p>
        </div>
        
        <div className="pt-2">
          <button className="w-full bg-[#A7AA63] text-[#121A1B] py-3 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#EAE6D2] hover:scale-[1.02] active:scale-[0.98]">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
