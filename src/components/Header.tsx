import React from 'react';
import { LuShoppingBag, LuSearch, LuMenu } from 'react-icons/lu';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="bg-gradient-to-tr from-brand-500 to-purple-600 p-2.5 rounded-xl text-white shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
            <LuShoppingBag size={24} />
          </div>
          <span className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            REBEL
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-semibold text-slate-300">
          {['Collections', 'Men', 'Women', 'Accessories'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors duration-200 relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 text-slate-300">
          <button className="hover:text-white transition-colors"><LuSearch size={22} /></button>
          <button className="hover:text-white transition-colors relative group">
            <LuShoppingBag size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">0</span>
          </button>
          <button className="md:hidden hover:text-white transition-colors"><LuMenu size={26} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
