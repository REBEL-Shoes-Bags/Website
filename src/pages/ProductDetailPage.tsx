import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Minus, Plus, ShoppingCart, Zap, Shield, Truck, RotateCcw, Star, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = useMemo(() => products.find(p => p.id === productId), [productId]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center bg-[#121A1B]">
        <div className="text-center">
          <p className="text-[#EAE6D2]/40 font-headline font-bold text-xl uppercase tracking-widest mb-4">Product Not Found</p>
          <Link to="/" className="text-[#A7AA63] hover:underline text-sm">Return Home</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => `LKR ${price.toLocaleString('en-LK')}`;
  const wishlisted = isInWishlist(product.id);
  const effectiveColor = selectedColor || product.colors[0];

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addToCart(product, selectedSize, effectiveColor, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addToCart(product, selectedSize, effectiveColor, quantity);
    window.location.href = '/checkout';
  };

  const catPath = product.category.toLowerCase();
  const subPath = product.subCategory.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#121A1B]">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EAE6D2]/40 flex-wrap">
          <Link to="/" className="hover:text-[#A7AA63] transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to={`/${catPath}/${subPath}`} className="hover:text-[#A7AA63] transition-colors">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="hover:text-[#A7AA63] transition-colors">{product.subCategory}</span>
          <ChevronRight size={10} />
          <span className="text-[#A7AA63]">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-[#A7AA63] text-[#121A1B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">New</span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">-{product.salePercent}%</span>
                )}
              </div>
              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 p-3 bg-[#121A1B]/40 backdrop-blur-md rounded-full hover:bg-[#121A1B]/60 transition-all"
              >
                <Heart size={20} className={wishlisted ? 'fill-red-500 text-red-500' : 'text-white'} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-white ${selectedImage === idx ? 'border-[#A7AA63] shadow-[0_0_15px_rgba(167,170,99,0.3)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-[#A7AA63] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{product.brand}</p>
              <h1 className="font-headline font-black text-3xl md:text-4xl uppercase tracking-tight text-[#EAE6D2] leading-tight">{product.name}</h1>
            </div>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating!) ? 'fill-[#A7AA63] text-[#A7AA63]' : 'text-[#EAE6D2]/20'} />
                  ))}
                </div>
                <span className="text-[#EAE6D2]/50 text-xs">({product.reviewCount} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="font-headline font-black text-3xl text-[#EAE6D2]">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-[#EAE6D2]/30 line-through text-lg">{formatPrice(product.originalPrice)}</span>
              )}
              {product.isSale && (
                <span className="bg-red-500/10 text-red-400 text-[10px] font-bold uppercase px-3 py-1 rounded-full">Save {formatPrice(product.originalPrice! - product.price)}</span>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              <span className={`text-xs font-semibold ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {product.inStock ? `In Stock${product.stockCount ? ` — ${product.stockCount} left` : ''}` : 'Out of Stock'}
              </span>
            </div>

            <div className="w-full h-px bg-[#EAE6D2]/5" />

            {/* Description */}
            <p className="text-[#EAE6D2]/60 text-sm leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/70 mb-3 block">
                Color: <span className="text-[#A7AA63]">{effectiveColor.name}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 relative ${effectiveColor.name === color.name ? 'border-[#A7AA63] scale-110 shadow-[0_0_12px_rgba(167,170,99,0.4)]' : 'border-[#EAE6D2]/10 hover:border-[#EAE6D2]/30'}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {effectiveColor.name === color.name && (
                      <Check size={14} className="absolute inset-0 m-auto text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/70 mb-3 flex items-center justify-between">
                <span>Size {selectedSize && <span className="text-[#A7AA63]">— {selectedSize}</span>}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                    className={`min-w-[48px] h-12 px-4 rounded-xl font-headline font-bold text-sm uppercase transition-all duration-300 ${selectedSize === size ? 'bg-[#A7AA63] text-[#121A1B] shadow-[0_0_20px_rgba(167,170,99,0.3)]' : 'bg-[#EAE6D2]/5 text-[#EAE6D2]/60 border border-[#EAE6D2]/10 hover:border-[#A7AA63]/50 hover:text-[#EAE6D2]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && <p className="text-red-400 text-xs mt-2 animate-pulse">Please select a size</p>}
            </div>

            {/* Quantity */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/70 mb-3 block">Quantity</label>
              <div className="flex items-center border border-[#EAE6D2]/10 rounded-xl overflow-hidden w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-[#EAE6D2]/50 hover:text-[#A7AA63] hover:bg-[#EAE6D2]/5 transition-colors"><Minus size={16} /></button>
                <span className="px-6 font-headline font-bold text-[#EAE6D2]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-[#EAE6D2]/50 hover:text-[#A7AA63] hover:bg-[#EAE6D2]/5 transition-colors"><Plus size={16} /></button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-3 bg-[#A7AA63] text-[#121A1B] py-4 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#EAE6D2] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {addedFeedback ? <><Check size={16} /> Added!</> : <><ShoppingCart size={16} /> Add to Cart</>}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-3 bg-[#121A1B] text-[#EAE6D2] py-4 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] border-2 border-[#A7AA63] transition-all duration-300 hover:bg-[#A7AA63] hover:text-[#121A1B] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Zap size={16} /> Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EAE6D2]/5">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Over LKR 25,000' },
                { icon: Shield, label: 'Secure Payment', sub: '100% Protected' },
                { icon: RotateCcw, label: 'Easy Returns', sub: '30-Day Policy' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <Icon size={18} className="text-[#A7AA63] mx-auto mb-1.5" />
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#EAE6D2]/70">{label}</p>
                  <p className="text-[9px] text-[#EAE6D2]/30">{sub}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="pt-4 border-t border-[#EAE6D2]/5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/70 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#EAE6D2]/50">
                      <Check size={12} className="text-[#A7AA63] flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SKU */}
            {product.sku && (
              <p className="text-[10px] text-[#EAE6D2]/20 pt-2">SKU: {product.sku}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
