export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'MENS' | 'WOMENS' | 'BRANDS';
  subCategory: string;
  brand?: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export type CategoryType = 'MENS' | 'WOMENS' | 'BRANDS';
