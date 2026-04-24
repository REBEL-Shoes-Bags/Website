export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Men' | 'Women' | 'Brands';
  subCategory: string;
  brand?: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export type CategoryType = 'Men' | 'Women' | 'Brands';
