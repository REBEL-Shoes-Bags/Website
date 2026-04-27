import type { Product } from '../types';

export const products: Product[] = [
  // ═══════════════════════════════════════
  // MENS - SHOES
  // ═══════════════════════════════════════
  {
    id: 'm-snk-1',
    name: 'REBEL Stealth Runner',
    price: 18500,
    originalPrice: 22000,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'SHOES', itemType: 'SNEAKERS',
    brand: 'Nike',
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'White', hex: '#f5f5f5' }, { name: 'Red', hex: '#c0392b' }],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'Engineered for speed with a breathable mesh upper and responsive cushioning. The REBEL Stealth Runner delivers elite performance with street-ready style.',
    features: ['Breathable mesh upper', 'Responsive foam midsole', 'Rubber outsole', 'Reflective details'],
    isNew: true, isSale: true, salePercent: 16, inStock: true, stockCount: 24, rating: 4.8, reviewCount: 156, sku: 'RBL-M-SNK-001'
  },
  {
    id: 'm-snk-2',
    name: 'Urban Canvas Low',
    price: 12500,
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'SHOES', itemType: 'CANVAS',
    brand: 'Converse',
    colors: [{ name: 'Navy', hex: '#2c3e50' }, { name: 'Cream', hex: '#EAE6D2' }],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description: 'Classic canvas construction meets modern comfort. A timeless silhouette re-imagined for the contemporary wardrobe.',
    features: ['Canvas upper', 'Vulcanized rubber sole', 'Cushioned insole', 'Metal eyelets'],
    inStock: true, stockCount: 38, rating: 4.5, reviewCount: 89, sku: 'RBL-M-CNV-001'
  },
  {
    id: 'm-snd-1',
    name: 'Drift Leather Sandals',
    price: 7800,
    images: [
      'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1974&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'SHOES', itemType: 'SANDALS',
    brand: 'REBEL Core',
    colors: [{ name: 'Brown', hex: '#8B4513' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['40', '41', '42', '43', '44'],
    description: 'Premium leather sandals crafted for all-day comfort. Adjustable straps with cushioned footbed.',
    inStock: true, stockCount: 15, rating: 4.3, reviewCount: 42, sku: 'RBL-M-SND-001'
  },
  // MENS - BAGS
  {
    id: 'm-bp-1',
    name: 'Executive Office Luggage',
    price: 28500,
    originalPrice: 34000,
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'BAGS', itemType: 'OFFICE LUGGAGE',
    brand: 'REBEL Pro',
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'Olive', hex: '#505039' }],
    sizes: ['S', 'M', 'L'],
    description: 'Professional-grade office luggage with padded laptop compartment and organizational pockets.',
    features: ['15.6" laptop compartment', 'Water-resistant fabric', 'TSA-friendly design', 'Ergonomic straps'],
    isSale: true, salePercent: 16, inStock: true, stockCount: 12, rating: 4.7, reviewCount: 78, sku: 'RBL-M-BAG-001'
  },
  {
    id: 'm-bp-2',
    name: 'Summit Backpack',
    price: 15900,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'BAGS', itemType: 'BACKPACKS',
    brand: 'REBEL Sport',
    colors: [{ name: 'Grey', hex: '#7f8c8d' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['M', 'L'],
    description: 'Versatile backpack with multiple compartments, built for urban commuters and weekend adventurers alike.',
    features: ['Padded back panel', 'Side water bottle pockets', 'Hidden anti-theft pocket'],
    isNew: true, inStock: true, stockCount: 20, rating: 4.6, reviewCount: 55, sku: 'RBL-M-BAG-002'
  },
  // MENS - SPORTS
  {
    id: 'm-sp-1',
    name: 'Blaze Running Pro',
    price: 21000,
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'SPORTS SHOES', itemType: 'RUNNING',
    brand: 'Adidas',
    colors: [{ name: 'Neon Green', hex: '#A7AA63' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'High-performance running shoes with energy-return technology and ultra-lightweight construction.',
    features: ['Boost midsole', 'Continental rubber outsole', 'Primeknit upper', 'Torsion system'],
    isNew: true, inStock: true, stockCount: 30, rating: 4.9, reviewCount: 210, sku: 'RBL-M-SPR-001'
  },
  {
    id: 'm-sp-2',
    name: 'Strike Football Boots',
    price: 24500,
    images: [
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1964&auto=format&fit=crop',
    ],
    category: 'MENS', subCategory: 'SPORTS SHOES', itemType: 'FOOTBALL',
    brand: 'Nike',
    colors: [{ name: 'White', hex: '#f5f5f5' }, { name: 'Volt', hex: '#cddc39' }],
    sizes: ['40', '41', '42', '43', '44'],
    description: 'Precision-engineered football boots with FlyKnit collar and stud configuration for firm ground play.',
    inStock: true, stockCount: 18, rating: 4.7, reviewCount: 96, sku: 'RBL-M-SPF-001'
  },

  // ═══════════════════════════════════════
  // WOMENS - SHOES
  // ═══════════════════════════════════════
  {
    id: 'w-snk-1',
    name: 'Luna Active Sneakers',
    price: 16500,
    originalPrice: 19500,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'SHOES', itemType: 'SNEAKERS',
    brand: 'New Balance',
    colors: [{ name: 'Pink', hex: '#e91e8c' }, { name: 'White', hex: '#f5f5f5' }, { name: 'Sage', hex: '#A7AA63' }],
    sizes: ['36', '37', '38', '39', '40', '41'],
    description: 'Lightweight and stylish sneakers designed for active women who value both comfort and aesthetics.',
    features: ['FRESH FOAM midsole', 'Synthetic/mesh upper', 'NB comfort insert', 'Rubber outsole'],
    isSale: true, salePercent: 15, inStock: true, stockCount: 32, rating: 4.6, reviewCount: 134, sku: 'RBL-W-SNK-001'
  },
  {
    id: 'w-snk-2',
    name: 'Aura Platform Canvas',
    price: 11200,
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'SHOES', itemType: 'CANVAS',
    brand: 'Vans',
    colors: [{ name: 'Cream', hex: '#EAE6D2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['36', '37', '38', '39', '40'],
    description: 'Classic platform canvas with a modern twist. Elevated sole adds height without sacrificing comfort.',
    isNew: true, inStock: true, stockCount: 22, rating: 4.4, reviewCount: 67, sku: 'RBL-W-CNV-001'
  },
  // WOMENS - BAGS
  {
    id: 'w-bg-1',
    name: 'Avenue Leather Tote',
    price: 22500,
    originalPrice: 27000,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1970&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'BAGS', itemType: 'LEATHER BAGS',
    brand: 'Coach',
    colors: [{ name: 'Tan', hex: '#d2b48c' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Burgundy', hex: '#800020' }],
    sizes: ['S', 'M', 'L'],
    description: 'Luxurious full-grain leather tote with gold-tone hardware. Spacious interior with multiple organizational pockets.',
    features: ['Full-grain leather', 'Gold-tone hardware', 'Interior zip pocket', 'Detachable crossbody strap'],
    isSale: true, salePercent: 17, inStock: true, stockCount: 8, rating: 4.8, reviewCount: 203, sku: 'RBL-W-BAG-001'
  },
  {
    id: 'w-bg-2',
    name: 'Stella Crossbody',
    price: 14800,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1970&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'BAGS', itemType: 'CROSSBODY',
    brand: 'Guess',
    colors: [{ name: 'Blush', hex: '#f5c6c6' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M'],
    description: 'Compact yet spacious crossbody bag with adjustable chain strap. Perfect for day-to-night transitions.',
    isNew: true, inStock: true, stockCount: 14, rating: 4.5, reviewCount: 88, sku: 'RBL-W-BAG-002'
  },
  {
    id: 'w-bg-3',
    name: 'Elegant Shoulder Bag',
    price: 19500,
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2071&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'BAGS', itemType: 'SHOULDER BAGS',
    brand: 'Michael Kors',
    colors: [{ name: 'Ivory', hex: '#FFFFF0' }, { name: 'Olive', hex: '#505039' }],
    sizes: ['M', 'L'],
    description: 'Structured shoulder bag in signature pebbled leather. A timeless investment piece for the modern woman.',
    inStock: true, stockCount: 10, rating: 4.7, reviewCount: 145, sku: 'RBL-W-BAG-003'
  },
  // WOMENS - SPORTS
  {
    id: 'w-sp-1',
    name: 'Velocity Gym Trainer',
    price: 17500,
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop',
    ],
    category: 'WOMENS', subCategory: 'SPORTS SHOES', itemType: 'GYM',
    brand: 'Under Armour',
    colors: [{ name: 'Coral', hex: '#FF6F61' }, { name: 'White', hex: '#f5f5f5' }],
    sizes: ['36', '37', '38', '39', '40'],
    description: 'Lightweight gym trainer with enhanced lateral support and flexible sole for multi-directional training.',
    inStock: true, stockCount: 25, rating: 4.6, reviewCount: 72, sku: 'RBL-W-SPG-001'
  },

  // ═══════════════════════════════════════
  // BRANDS
  // ═══════════════════════════════════════
  {
    id: 'b-nk-1',
    name: 'Air Max Heritage',
    price: 32000,
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1930&auto=format&fit=crop',
    ],
    category: 'BRANDS', subCategory: 'BRANDS FOR SHOES', itemType: 'NIKE',
    brand: 'Nike',
    colors: [{ name: 'White', hex: '#f5f5f5' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'Iconic Air Max silhouette with visible Air cushioning and premium materials throughout.',
    isNew: true, inStock: true, stockCount: 15, rating: 4.9, reviewCount: 320, sku: 'RBL-B-NK-001'
  },
  {
    id: 'b-jd-1',
    name: 'Jordan Retro Classic',
    price: 45000,
    originalPrice: 52000,
    images: [
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1974&auto=format&fit=crop',
    ],
    category: 'BRANDS', subCategory: 'BRANDS FOR SHOES', itemType: 'JORDAN',
    brand: 'Jordan',
    colors: [{ name: 'Chicago Red', hex: '#c0392b' }, { name: 'Royal Blue', hex: '#2980b9' }],
    sizes: ['40', '41', '42', '43', '44'],
    description: 'The legendary silhouette returns. Premium leather construction with encapsulated Air-Sole unit.',
    isSale: true, salePercent: 13, inStock: true, stockCount: 6, rating: 4.9, reviewCount: 445, sku: 'RBL-B-JD-001'
  },
  {
    id: 'b-zr-1',
    name: 'Zara City Tote',
    price: 18900,
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop',
    ],
    category: 'BRANDS', subCategory: 'BRANDS FOR BAGS', itemType: 'ZARA',
    brand: 'Zara',
    colors: [{ name: 'Camel', hex: '#C19A6B' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['M', 'L'],
    description: 'Minimalist city tote crafted from high-quality vegan leather. Clean lines meet practical design.',
    isNew: true, inStock: true, stockCount: 20, rating: 4.4, reviewCount: 112, sku: 'RBL-B-ZR-001'
  },
];

export const FREE_SHIPPING_THRESHOLD = 25000; // LKR
