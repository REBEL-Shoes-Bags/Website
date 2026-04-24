import React from 'react';
import { LuX, LuChevronDown } from 'react-icons/lu';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  const filters = [
    { name: 'Size', options: ['38', '39', '40', '41', '42', '43', '44', '45'] },
    { name: 'Color', options: ['Black', 'White', 'Sage', 'Navy', 'Brown', 'Cream'] },
    { name: 'Brand', options: ['REBEL Elite', 'REBEL Core', 'REBEL Sport', 'Heritage'] },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#121A1B]/80 backdrop-blur-sm z-[60] lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-fit w-[280px] lg:w-full 
        bg-[#121A1B] lg:bg-transparent border-r lg:border-none border-[#EAE6D2]/10 
        z-[70] lg:z-10 transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        p-6 lg:p-0
      `}>
        <div className="flex items-center justify-between lg:hidden mb-8">
          <h2 className="font-headline font-black text-2xl uppercase tracking-tighter text-[#EAE6D2]">Filters</h2>
          <button onClick={onClose} className="p-2 text-[#EAE6D2] hover:text-[#A7AA63] transition-colors">
            <LuX size={24} />
          </button>
        </div>

        <div className="space-y-8">
          {filters.map((filter) => (
            <div key={filter.name} className="border-b border-[#EAE6D2]/5 pb-6 last:border-0">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-[#EAE6D2]/90 group-hover:text-[#A7AA63] transition-colors">
                  {filter.name}
                </h3>
                <LuChevronDown size={14} className="text-[#EAE6D2]/40 group-hover:text-[#A7AA63] transition-colors" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {filter.options.map((option) => (
                  <button 
                    key={option}
                    className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider border border-[#EAE6D2]/10 rounded-lg text-[#EAE6D2]/50 hover:border-[#A7AA63] hover:text-[#A7AA63] transition-all duration-300 text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 lg:hidden bg-[#A7AA63] text-[#121A1B] py-4 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em]">
          Apply Filters
        </button>
      </aside>
    </>
  );
};

export default FilterSidebar;
