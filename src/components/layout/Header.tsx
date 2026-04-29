import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, ChevronDown, X } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen, isSearchOpen]);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setExpandedMobileCategory(null);
  }, [location.pathname]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subCategory.toLowerCase().includes(query) ||
      (product.itemType ?? '').toLowerCase().includes(query)
    ).slice(0, 4);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
    }
  };

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-primary-dark/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-[60]">
            <img
              src={Logo}
              alt="Rebel"
              className="w-12 h-12 md:w-20 md:h-20 object-contain brightness-0 invert scale-[1.5] transition-transform duration-500 group-hover:scale-[1.7] -mt-1"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'About'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/#home' : '/#about'} 
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50 hover:text-sage-green transition-all relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sage-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {navigationData.categories.map((category) => (
              <div key={category.name} className="relative group py-8 cursor-pointer">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50 group-hover:text-sage-green transition-all">
                  <span>{category.name}</span>
                  <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <MegaMenu subCategories={category.subCategories} categoryPath={category.path} />
              </div>
            ))}

            <Link 
              to="/#contact" 
              onClick={() => handleNavClick('contact')}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50 hover:text-sage-green transition-all relative group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sage-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 relative z-[60]">
            <button onClick={() => setIsSearchOpen(true)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-cream/50 hover:text-sage-green transition-all">
              <Search size={20} />
            </button>
            <button onClick={openDrawer} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-cream/50 hover:text-sage-green transition-all relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-sage-green text-primary-dark text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(167,170,99,0.5)]">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-cream/50 hover:text-sage-green transition-all"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible delay-500'}`}>
        <div 
          className={`absolute inset-0 bg-[#050808]/90 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-[400px] bg-primary-dark border-l border-white/5 transform transition-transform duration-500 ease-out flex flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6">
            <span className="font-headline font-black text-cream text-lg tracking-widest uppercase">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-cream/40"><X size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 text-left">
             {['Home', 'About', 'Contact'].map(item => (
                <Link key={item} to={`/#${item.toLowerCase()}`} onClick={() => handleNavClick(item.toLowerCase())} className="block py-4 border-b border-white/5 text-cream font-headline font-bold text-sm uppercase tracking-widest">{item}</Link>
             ))}
             
             {navigationData.categories.map(category => (
                <div key={category.name} className="border-b border-white/5">
                   <button 
                     onClick={() => setExpandedMobileCategory(expandedMobileCategory === category.name ? null : category.name)}
                     className="w-full flex items-center justify-between py-4 text-cream font-headline font-bold text-sm uppercase tracking-widest"
                   >
                     {category.name}
                     <ChevronDown size={16} className={`transition-transform duration-300 ${expandedMobileCategory === category.name ? 'rotate-180' : ''}`} />
                   </button>
                   <div className={`overflow-hidden transition-all duration-500 ${expandedMobileCategory === category.name ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}>
                      <div className="grid gap-6 pl-4">
                         {category.subCategories.map(sub => (
                            <div key={sub.name} className="space-y-3">
                               <h4 className="text-[10px] font-black text-sage-green uppercase tracking-widest">{sub.name}</h4>
                               <div className="flex flex-col gap-2">
                                  {sub.items.length > 0 ? sub.items.map(i => (
                                    <Link key={i} to={`${category.path}/${sub.name.toLowerCase().replace(/\s+/g, '-')}/${i.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-cream/40 text-[11px] font-medium lowercase first-letter:uppercase tracking-widest py-1">{i}</Link>
                                  )) : (
                                    <Link to={`${category.path}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-cream/40 text-[11px] font-medium tracking-widest py-1">View All</Link>
                                  )}
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col gap-6">
             <div className="flex justify-center gap-6">
                <FaInstagram size={20} className="text-cream/20 hover:text-sage-green transition-colors cursor-pointer" />
                <FaFacebook size={20} className="text-cream/20 hover:text-sage-green transition-colors cursor-pointer" />
                <FaTwitter size={20} className="text-cream/20 hover:text-sage-green transition-colors cursor-pointer" />
             </div>
             <button onClick={() => { setIsMobileMenuOpen(false); openDrawer(); }} className="w-full bg-sage-green text-primary-dark py-4 rounded-xl font-headline font-black text-xs uppercase tracking-widest shadow-lg">Checkout ({itemCount})</button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[110] bg-[#050808]/98 backdrop-blur-2xl animate-in fade-in duration-300">
           <div className="max-w-4xl mx-auto px-6 pt-24 sm:pt-40">
              <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-cream/40 hover:text-sage-green transition-all"><X size={32} /></button>
              <form onSubmit={handleSearchSubmit} className="relative group">
                <Search size={32} className="absolute left-0 top-1/2 -translate-y-1/2 text-sage-green" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  placeholder="SEARCH REBEL..."
                  className="w-full bg-transparent border-b-2 border-white/10 text-cream text-3xl sm:text-6xl py-8 pl-14 focus:outline-none focus:border-sage-green transition-all placeholder:text-white/5 font-headline font-black uppercase"
                />
              </form>
              <div className="mt-20">
                 {!searchQuery.trim() ? (
                    <div className="grid grid-cols-2 gap-20">
                       <div className="space-y-6 text-left">
                          <h3 className="text-[10px] font-black text-sage-green uppercase tracking-widest">Trending</h3>
                          <div className="flex flex-col gap-4">
                             {['Nike', 'Jordan', 'Bags', 'Sale'].map(t => <button key={t} onClick={() => setSearchQuery(t)} className="text-left text-cream/30 hover:text-cream text-xl font-headline font-black uppercase transition-all">{t}</button>)}
                          </div>
                       </div>
                    </div>
                 ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                       {filteredProducts.map(p => (
                         <Link key={p.id} to={`/product/${p.id}`} onClick={() => setIsSearchOpen(false)} className="group space-y-4 text-left">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white"><img src={p.images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-110" /></div>
                            <div className="space-y-1">
                               <p className="text-[9px] font-black text-sage-green uppercase">{p.brand}</p>
                               <h4 className="text-cream text-sm font-bold uppercase truncate">{p.name}</h4>
                               <p className="text-cream/20 text-xs">LKR {p.price.toLocaleString()}</p>
                            </div>
                         </Link>
                       ))}
                    </div>
                 )}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;