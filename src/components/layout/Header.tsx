import { LuShoppingBag, LuSearch, LuMenu, LuChevronDown } from 'react-icons/lu';
import Logo from '../../assets/logo.png';

const Header = () => {
  // const [activeDropdown, setActiveDropdown] = useState(null);

  // PDF දත්ත අනුව සකස් කළ Menu Items
  const menuItems = {
    Men: ['Shoes', 'Bags', 'Sports Shoes', 'Sports Kits'], // [cite: 8, 9, 10, 11]
    Women: ['Shoes', 'Bags', 'Sports Shoes', 'Sports Kits'], // [cite: 38, 39, 40, 41]
    Brands: ['Shoes Brands', 'Bags Brands'], // 
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cream/10 bg-primary-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo Section */}
        <div className="flex items-center cursor-pointer group">
          <div className="flex items-center justify-center w-22 h-22 overflow-hidden">
            <img
              src={Logo}
              alt="Rebel Logo"
              className="w-full h-full object-contain brightness-0 invert scale-150 transition-transform duration-300 group-hover:scale-[2.2] -mt-3"
            />
          </div>
        </div>

        {/* Navigation Menu with Dropdowns */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-cream/70">
          <a href="#home" className="hover:text-sage-green transition-colors py-2">Home</a>

          <a href="#about" className="hover:text-sage-green transition-colors py-2">About Us</a>

          {Object.keys(menuItems).map((category) => (
            <div
              key={category}
              className="relative group py-2 flex items-center gap-1 cursor-pointer hover:text-sage-green transition-colors"
            >
              <span>{category}</span>
              <LuChevronDown size={14} className="group-hover:rotate-180 transition-transform" />

              {/* Dropdown Menu Content */}
              <div className="absolute top-full left-0 w-48 bg-primary-dark border border-cream/10 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                {menuItems[category].map((subItem) => (
                  <a
                    key={subItem}
                    href="#categories"
                    className="block px-6 py-2 text-cream/60 hover:text-sage-green hover:bg-cream/5 transition-colors"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Promo Sections - Highlighted  */}
          <a href="#promo" className="text-sage-green hover:text-sage-green/80 transition-colors py-2">
            Promo
          </a>

          <a href="#contact" className="hover:text-sage-green transition-colors py-2">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 text-cream/70">
          <button className="hover:text-sage-green transition-colors"><LuSearch size={22} /></button>
          <button className="hover:text-sage-green transition-colors relative group">
            <LuShoppingBag size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-sage-green text-primary-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">0</span>
          </button>
          <button className="md:hidden hover:text-sage-green transition-colors"><LuMenu size={26} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;