export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'MENS' | 'WOMENS' | 'BRANDS';
  subCategory: string;
  itemType?: string;
  brand: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  features?: string[];
  isNew?: boolean;
  isSale?: boolean;
  salePercent?: number;
  inStock: boolean;
  stockCount?: number;
  rating?: number;
  reviewCount?: number;
  sku?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
}

export interface CheckoutFormData {
  // Step 1: Contact
  email: string;
  phone: string;
  // Step 2: Shipping
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  // Step 3: Payment
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  saveInfo: boolean;
}

export type CategoryType = 'MENS' | 'WOMENS' | 'BRANDS';

export type CheckoutStep = 1 | 2 | 3;

export interface WishlistItem {
  productId: string;
  addedAt: Date;
}
