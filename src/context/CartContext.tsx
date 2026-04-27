import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';
import { FREE_SHIPPING_THRESHOLD } from '../data/products';

interface CartContextType {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorName: string) => void;
  updateQuantity: (productId: string, size: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  freeShippingProgress: number;
  amountToFreeShipping: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const addToCart = useCallback((product: Product, size: string, color: { name: string; hex: string }, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor.name === color.name
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + quantity };
        return updated;
      }
      return [...prev, { product, quantity, selectedSize: size, selectedColor: color }];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string, size: string, colorName: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedSize === size && item.selectedColor.name === colorName)
    ));
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, colorName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, colorName);
      return;
    }
    setItems(prev => prev.map(item =>
      item.product.id === productId && item.selectedSize === size && item.selectedColor.name === colorName
        ? { ...item, quantity }
        : item
    ));
  }, [removeFromCart]);

  const clearCart = useCallback(() => setItems([]), []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  }, []);

  const isInWishlist = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  return (
    <CartContext.Provider value={{
      items, isDrawerOpen, openDrawer, closeDrawer, addToCart, removeFromCart,
      updateQuantity, clearCart, itemCount, subtotal, freeShippingProgress,
      amountToFreeShipping, wishlist, toggleWishlist, isInWishlist,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
