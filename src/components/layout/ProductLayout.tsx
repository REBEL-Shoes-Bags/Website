import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';
import FilterSidebar from '../products/FilterSidebar';

interface ProductLayoutProps {
  children: React.ReactNode;
  title: string;
  category: string;
  subCategory?: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children, title, category, subCategory }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#121A1B]">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-[#A7AA63]/5 blur-[120px] rounded-full animate-blob" />
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-[#A7AA63]/5 blur-[120px] rounded-full animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header / Breadcrumbs */}
        <div className="mb-12 space-y-4">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EAE6D2]/40">
            <span className="hover:text-[#A7AA63] cursor-pointer transition-colors">Home</span>
            <ArrowRight size={10} />
            <span className="hover:text-[#A7AA63] cursor-pointer transition-colors">{category}</span>
            {subCategory && (
              <>
                <ArrowRight size={10} />
                <span className="text-[#A7AA63]">{subCategory}</span>
              </>
            )}
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter text-[#EAE6D2] leading-[0.8]">
              {title}
            </h1>
            
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2] hover:border-[#A7AA63] transition-all"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <FilterSidebar 
              isOpen={isFilterOpen} 
              onClose={() => setIsFilterOpen(false)} 
            />
          </div>

          {/* Main Content - Product Grid */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
