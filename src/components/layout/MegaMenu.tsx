import React from 'react';
import { Link } from 'react-router-dom';

interface SubCategory {
  name: string;
  items: string[];
}

interface MegaMenuProps {
  subCategories: SubCategory[];
  categoryPath: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ subCategories, categoryPath }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[850px] bg-[#121A1B]/95 backdrop-blur-2xl border border-[#EAE6D2]/10 rounded-2xl p-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 mt-4">
      <div className="grid grid-cols-4 gap-10">
        {subCategories.map((sub, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h3 className="text-sage-green font-headline font-bold text-[10px] uppercase tracking-[0.2em] border-b border-cream/5 pb-2">
              {sub.name}
            </h3>
            <div className="flex flex-col gap-2">
              {sub.items.length > 0 ? (
                sub.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    to={`${categoryPath}/${sub.name.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-cream/50 hover:text-cream transition-all duration-300 font-sans text-[11px] lowercase first-letter:uppercase tracking-wider hover:translate-x-1"
                  >
                    {item}
                  </Link>
                ))
              ) : (
                <Link
                  to={`${categoryPath}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-cream/50 hover:text-cream transition-all duration-300 font-sans text-[11px] lowercase first-letter:uppercase tracking-wider hover:translate-x-1"
                >
                  View All {sub.name}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
        <span className="font-headline font-black text-6xl italic text-cream uppercase select-none">
          REBEL
        </span>
      </div>
    </div>
  );
};

export default MegaMenu;
