import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, ChevronDown } from 'lucide-react';
import Logo from '../../assets/logo.png';
import { navigationData } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { itemCount, openDrawer } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cream/10 bg-primary-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo Section */}
        <Link to="/" className="flex items-center cursor-pointer group">
          <div className="flex items-center justify-center w-22 h-22 overflow-hidden">
            <img
              src={Logo}
              alt="Rebel Logo"
              className="w-full h-full object-contain brightness-0 invert scale-150 transition-transform duration-300 group-hover:scale-[2.2] -mt-3"
            />
          </div>
        </Link>

        {/* Navigation Menu with Dropdowns */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-cream/70">
          <Link to="/#home" className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">Home</Link>

          <Link to="/#about" className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">About</Link>

          {navigationData.categories.map((category) => (
            <div
              key={category.name}
              className="relative group py-2 flex items-center gap-1 cursor-pointer hover:text-sage-green transition-colors font-headline font-bold uppercase tracking-widest text-[10px]"
            >
              <span>{category.name}</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />

              {/* Mega Menu Content */}
              <MegaMenu 
                subCategories={category.subCategories} 
                categoryPath={category.path} 
              />
            </div>
          ))}

          {/* Promo Sections */}
          <div className="relative group py-2 flex items-center gap-1 cursor-pointer text-sage-green hover:text-sage-green/80 transition-colors font-headline font-bold uppercase tracking-widest text-[10px]">
            <span>Promo</span>
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            
            <div className="absolute top-full left-0 w-56 bg-primary-dark border border-cream/10 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
              {navigationData.promos.map((promo) => (
                <Link
                  key={promo.name}
                  to={promo.path}
                  className="block px-6 py-2 text-[#EAE6D2]/60 hover:text-[#A7AA63] hover:bg-[#EAE6D2]/5 transition-colors font-sans text-xs lowercase first-letter:uppercase"
                >
                  {promo.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/#contact" className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 text-cream/70">
          <button className="hover:text-sage-green transition-colors"><Search size={22} /></button>
          <button 
            onClick={openDrawer}
            className="hover:text-sage-green transition-colors relative group"
          >
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-sage-green text-primary-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {itemCount}
              </span>
            )}
          </button>
          <button className="md:hidden hover:text-sage-green transition-colors"><Menu size={26} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;