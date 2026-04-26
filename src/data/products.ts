import type { Product } from '../types';

export const products: Product[] = [
  // MENS
  {
    id: 'm-s-1',
    name: 'REBEL Stealth Sneakers',
    price: 125,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    category: 'MENS',
    subCategory: 'SHOES',
    brand: 'REBEL Elite',
    isNew: true
  },
  {
    id: 'm-s-2',
    name: 'Urban Canvas Low',
    price: 85,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop',
    category: 'MENS',
    subCategory: 'SHOES',
    brand: 'REBEL Core'
  },
  {
    id: 'm-b-1',
    name: 'Executive Office Luggage',
    price: 180,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1974&auto=format&fit=crop',
    category: 'MENS',
    subCategory: 'BAGS',
    brand: 'REBEL Pro'
  },
  {
    id: 'm-sk-1',
    name: 'Elite Football Kit',
    price: 95,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop',
    category: 'MENS',
    subCategory: 'SPORTS KITS',
    brand: 'REBEL Sport'
  },

  // WOMENS
  {
    id: 'w-s-1',
    name: 'Luna Active Sneakers',
    price: 110,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop',
    category: 'WOMENS',
    subCategory: 'SHOES',
    brand: 'REBEL Elite'
  },
  {
    id: 'w-b-1',
    name: 'Avenue Leather Tote',
    price: 145,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop',
    category: 'WOMENS',
    subCategory: 'BAGS',
    brand: 'REBEL Luxe'
  },

  // BRANDS
  {
    id: 'b-s-1',
    name: 'Heritage Classic Loafers',
    price: 210,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1930&auto=format&fit=crop',
    category: 'BRANDS',
    subCategory: 'BRANDS FOR SHOES',
    brand: 'Heritage Brand'
  }
];
