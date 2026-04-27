import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isDrawerOpen, closeDrawer, removeFromCart, updateQuantity, itemCount, subtotal, freeShippingProgress, amountToFreeShipping } = useCart();

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  const formatPrice = (price: number) => `LKR ${price.toLocaleString('en-LK')}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#121A1B]/80 backdrop-blur-sm z-[998] transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[440px] bg-[#121A1B] border-l border-[#EAE6D2]/10 z-[999] transform transition-transform duration-500 ease-out flex flex-col ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EAE6D2]/10">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#A7AA63]" />
            <h2 className="font-headline font-black text-lg uppercase tracking-wider text-[#EAE6D2]">
              Your Cart
            </h2>
            <span className="bg-[#A7AA63] text-[#121A1B] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          </div>
          <button onClick={closeDrawer} className="p-2 text-[#EAE6D2]/50 hover:text-[#A7AA63] transition-colors rounded-lg hover:bg-[#EAE6D2]/5">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="px-6 py-4 border-b border-[#EAE6D2]/5">
          <div className="flex items-center gap-2 mb-2">
            <Truck size={14} className="text-[#A7AA63]" />
            <p className="text-[11px] text-[#EAE6D2]/60">
              {freeShippingProgress >= 100
                ? <span className="text-[#A7AA63] font-semibold">You've unlocked FREE shipping! 🎉</span>
                : <>Add <span className="text-[#A7AA63] font-bold">{formatPrice(amountToFreeShipping)}</span> more for free shipping</>
              }
            </p>
          </div>
          <div className="w-full h-1.5 bg-[#EAE6D2]/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A7AA63] to-[#c4c777] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#EAE6D2]/5 flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="text-[#EAE6D2]/20" />
              </div>
              <p className="text-[#EAE6D2]/40 font-headline font-bold text-sm uppercase tracking-widest mb-2">Your cart is empty</p>
              <p className="text-[#EAE6D2]/20 text-xs mb-6">Discover our premium collection</p>
              <button onClick={closeDrawer} className="bg-[#A7AA63] text-[#121A1B] px-8 py-3 rounded-xl font-headline font-bold text-xs uppercase tracking-widest hover:bg-[#EAE6D2] transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`} className="flex gap-4 p-3 bg-[#EAE6D2]/[0.02] border border-[#EAE6D2]/5 rounded-xl group hover:border-[#A7AA63]/20 transition-all">
                {/* Image */}
                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="text-[#A7AA63] text-[9px] font-bold uppercase tracking-widest">{item.product.brand}</p>
                      <h4 className="text-[#EAE6D2] font-headline font-bold text-sm truncate">{item.product.name}</h4>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor.name)} className="p-1 text-[#EAE6D2]/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] text-[#EAE6D2]/40 border border-[#EAE6D2]/10 px-2 py-0.5 rounded">{item.selectedSize}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full border border-[#EAE6D2]/20" style={{ backgroundColor: item.selectedColor.hex }} />
                      <span className="text-[10px] text-[#EAE6D2]/40">{item.selectedColor.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#EAE6D2]/10 rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)} className="p-1.5 text-[#EAE6D2]/50 hover:text-[#A7AA63] hover:bg-[#EAE6D2]/5 transition-colors">
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#EAE6D2] min-w-[28px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)} className="p-1.5 text-[#EAE6D2]/50 hover:text-[#A7AA63] hover:bg-[#EAE6D2]/5 transition-colors">
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="font-headline font-bold text-sm text-[#EAE6D2]">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#EAE6D2]/10 p-6 space-y-4 bg-[#121A1B]">
            <div className="flex items-center justify-between">
              <span className="text-[#EAE6D2]/60 text-sm">Subtotal</span>
              <span className="font-headline font-black text-xl text-[#EAE6D2]">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[10px] text-[#EAE6D2]/30">Shipping & taxes calculated at checkout</p>
            <Link to="/checkout" onClick={closeDrawer} className="block w-full bg-[#A7AA63] text-[#121A1B] py-4 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#EAE6D2] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Checkout
              <ArrowRight size={14} className="inline ml-2" />
            </Link>
            <button onClick={closeDrawer} className="w-full text-center text-[#EAE6D2]/40 text-xs hover:text-[#A7AA63] transition-colors py-1">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
