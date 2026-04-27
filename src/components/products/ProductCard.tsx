import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Eye, Heart } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);

  const formatPrice = (price: number) => `LKR ${price.toLocaleString('en-LK')}`;

  return (
    <div className="group relative bg-[#121A1B]/40 border border-[#EAE6D2]/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#A7AA63]/30 hover:shadow-[0_0_30px_rgba(167,170,99,0.15)] flex flex-col h-full">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="aspect-[4/5] overflow-hidden relative block">
        <img
          src={product.images[0]}
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
          {product.isSale && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Hover Actions - Glassmorphism */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#121A1B]/20 backdrop-blur-[2px]">
          <Link 
            to={`/product/${product.id}`}
            className="p-3 bg-[#EAE6D2]/10 backdrop-blur-md border border-[#EAE6D2]/20 rounded-full text-[#EAE6D2] hover:bg-[#A7AA63] hover:text-[#121A1B] hover:border-[#A7AA63] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <Eye size={20} />
          </Link>
          <button 
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className={`p-3 bg-[#EAE6D2]/10 backdrop-blur-md border border-[#EAE6D2]/20 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 ${wishlisted ? 'bg-red-500/20 text-red-500 border-red-500/30' : 'text-[#EAE6D2] hover:bg-red-500 hover:text-white hover:border-red-500'}`}
          >
            <Heart size={20} className={wishlisted ? 'fill-current' : ''} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 space-y-4 bg-gradient-to-t from-[#121A1B] to-transparent flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="min-w-0">
            <p className="text-[#A7AA63] text-[10px] font-bold uppercase tracking-widest mb-1 truncate">
              {product.brand}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-[#EAE6D2] font-headline text-lg font-bold uppercase leading-tight group-hover:text-[#A7AA63] transition-colors truncate">
                {product.name}
              </h3>
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[#EAE6D2] font-headline font-black text-xl">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[#EAE6D2]/30 text-xs line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <Link 
            to={`/product/${product.id}`}
            className="bg-[#A7AA63]/10 text-[#A7AA63] p-3 rounded-xl transition-all duration-300 hover:bg-[#A7AA63] hover:text-[#121A1B] border border-[#A7AA63]/20"
          >
            <Plus size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
