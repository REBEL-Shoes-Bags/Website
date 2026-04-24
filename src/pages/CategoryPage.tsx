import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductLayout from '../components/layout/ProductLayout';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';

const CategoryPage: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

  const displayCategory = useMemo(() => {
    if (!category) return '';
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [category]);

  const displaySubcategory = useMemo(() => {
    if (!subcategory) return '';
    return subcategory
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [subcategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = p.category.toLowerCase() === category?.toLowerCase();
      const matchSub = p.subCategory.toLowerCase() === displaySubcategory.toLowerCase();
      return matchCategory && matchSub;
    });
  }, [category, displaySubcategory]);

  return (
    <ProductLayout 
      title={displaySubcategory} 
      category={displayCategory} 
      subCategory={displaySubcategory}
    >
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-[#EAE6D2]/40 font-headline font-bold text-xl uppercase tracking-widest mb-4">
            No products found
          </p>
          <p className="text-[#EAE6D2]/20 text-sm max-w-md">
            We are updating our {displaySubcategory} collection. Stay tuned!
          </p>
        </div>
      )}
    </ProductLayout>
  );
};

export default CategoryPage;
