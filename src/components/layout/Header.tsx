import { LuShoppingBag, LuSearch, LuMenu } from 'react-icons/lu';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cream/10 bg-primary-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center cursor-pointer group">
          <div className="flex items-center justify-center w-18 h-18 overflow-hidden">
            <img
              src={Logo}
              alt="Rebel Logo"
              /* brightness-0 invert එකෙන් logo එක සුදු වෙනවා, scale එකෙන් size එක ලොකු වෙනවා */
              className="w-full h-full object-contain brightness-0 invert scale-150 transition-transform duration-300 group-hover:scale-[1.9] -mt-3"
            />
          </div>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-semibold text-cream/70">
          {['Home', 'About Us', 'Men', 'Women', 'Brands', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-sage-green transition-colors duration-200 relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

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
