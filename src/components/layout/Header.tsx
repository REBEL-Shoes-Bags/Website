import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, ChevronDown, X, ArrowRight } from 'lucide-react';
import Logo from '../../assets/logo.png';
import { navigationData } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

const Header = () => {
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subCategory.toLowerCase().includes(query) ||
      (product.itemType || '').toLowerCase().includes(query)
    ).slice(0, 4); // Premium limited results
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      // For now, redirect to a search page or simply clear it if no search page exists
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`); 
      // If no search page, we can just let them click the results.
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          <Link to="/#home" onClick={() => handleNavClick('home')} className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">Home</Link>

          <Link to="/#about" onClick={() => handleNavClick('about')} className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">About</Link>

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

          <Link to="/#contact" onClick={() => handleNavClick('contact')} className="hover:text-sage-green transition-colors py-2 font-headline font-bold uppercase tracking-widest text-[10px]">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 text-cream/70">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-sage-green transition-colors"><Search size={22} /></button>
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

      {/* Search Overlay - Premium Top Panel */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-[#121A1B]/95 backdrop-blur-xl" onClick={() => setIsSearchOpen(false)} />
          
          <div className="relative w-full max-w-[1920px] bg-[#121A1B] border-b border-[#EAE6D2]/10 shadow-2xl pb-16 animate-in slide-in-from-top duration-500">
            {/* Header part inside search */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
              <div className="w-22" /> {/* Spacer */}
              <div className="flex-1 max-w-2xl mx-auto">
                <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
                  <Search size={20} className="absolute left-0 text-[#A7AA63]" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    placeholder="Search for items, brands, or categories..."
                    className="w-full bg-transparent border-b border-[#EAE6D2]/20 text-[#EAE6D2] text-lg py-4 pl-10 pr-4 focus:outline-none focus:border-[#A7AA63] transition-colors placeholder:text-[#EAE6D2]/30 font-headline uppercase tracking-widest"
                  />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery('')} className="absolute right-0 text-[#EAE6D2]/40 hover:text-[#EAE6D2]">
                      <X size={16} />
                    </button>
                  )}
                </form>
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/50 hover:text-[#A7AA63] transition-colors"
              >
                Close <X size={16} />
              </button>
            </div>

            {/* Search Results Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
              {!searchQuery.trim() ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 mb-6">Trending Searches</h3>
                    <ul className="space-y-4">
                      {['Nike Air Max', 'Leather Tote Bags', 'Minimalist Sneakers', 'Office Luggage'].map((term) => (
                        <li key={term}>
                          <button 
                            onClick={() => setSearchQuery(term)}
                            className="text-[#EAE6D2] font-headline text-lg hover:text-[#A7AA63] transition-colors flex items-center gap-2 group"
                          >
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A7AA63]" />
                            {term}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 mb-6">Popular Categories</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Sneakers', 'Running', 'Backpacks', 'Jordan', 'Boots'].map((cat) => (
                        <button 
                          key={cat}
                          onClick={() => {
                            setIsSearchOpen(false);
                            // Normally navigate to category page
                            // navigate(`/${cat.toLowerCase()}`);
                          }}
                          className="px-6 py-3 border border-[#EAE6D2]/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/60 hover:text-[#121A1B] hover:bg-[#A7AA63] hover:border-[#A7AA63] transition-all"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40">
                      Results for "{searchQuery}"
                    </h3>
                    {filteredProducts.length > 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40">
                        Showing top {filteredProducts.length} results
                      </span>
                    )}
                  </div>
                  
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {filteredProducts.map(product => (
                        <Link 
                          to={`/product/${product.id}`} 
                          key={product.id}
                          onClick={() => setIsSearchOpen(false)}
                          className="group block"
                        >
                          <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-4 relative">
                            <img 
                              src={product.images[0]} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {product.isSale && (
                              <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded">
                                SALE
                              </div>
                            )}
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/50">{product.brand}</p>
                            <h4 className="text-[#EAE6D2] font-headline font-bold truncate group-hover:text-[#A7AA63] transition-colors">{product.name}</h4>
                            <p className="text-[#A7AA63] text-sm">LKR {product.price.toLocaleString()}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-[#EAE6D2]/50 font-headline text-xl">No results found for "{searchQuery}"</p>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#A7AA63] hover:text-[#EAE6D2] transition-colors border-b border-[#A7AA63] pb-1"
                      >
                        Clear Search
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;