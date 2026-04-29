import React from 'react';
import { Send } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-primary-dark border-t border-white/5 pt-16 md:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 bg-white/5 p-2 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-sage-green group-hover:border-sage-green transition-all duration-500">
                <img src={Logo} alt="Rebel Logo" className="w-8 h-8 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" />
              </div>
              <span className="text-xl font-black tracking-[0.2em] text-cream uppercase font-headline">
                REBEL
              </span>
            </div>
            <p className="text-cream/50 text-xs md:text-sm leading-relaxed max-w-xs">
              Redefining premium footwear since 2026. We combine earth-toned aesthetics with unparalleled craftsmanship for the rebellious spirit.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/30 hover:bg-sage-green hover:text-primary-dark transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-[10px] font-black text-sage-green uppercase tracking-widest mb-6 md:mb-8">Collections</h4>
            <ul className="flex flex-col gap-4 text-xs md:text-sm text-cream/40">
              <li><Link to="/#categories" className="hover:text-sage-green transition-colors uppercase tracking-wider">Men's Pursuit</Link></li>
              <li><Link to="/#categories" className="hover:text-sage-green transition-colors uppercase tracking-wider">Women's Edition</Link></li>
              <li><Link to="/#categories" className="hover:text-sage-green transition-colors uppercase tracking-wider">Premium Bags</Link></li>
              <li><Link to="/#categories" className="hover:text-sage-green transition-colors uppercase tracking-wider">Sports Tech</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-left">
            <h4 className="text-[10px] font-black text-sage-green uppercase tracking-widest mb-6 md:mb-8">Support</h4>
            <ul className="flex flex-col gap-4 text-xs md:text-sm text-cream/40">
              <li><Link to="/shipping" className="hover:text-sage-green transition-colors uppercase tracking-wider">Shipping</Link></li>
              <li><Link to="/refunds" className="hover:text-sage-green transition-colors uppercase tracking-wider">Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-sage-green transition-colors uppercase tracking-wider">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-sage-green transition-colors uppercase tracking-wider">Terms</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1 text-left">
            <h4 className="text-[10px] font-black text-sage-green uppercase tracking-widest mb-6 md:mb-8">Newsletter</h4>
            <p className="text-cream/40 text-xs md:text-sm mb-6 max-w-xs">Join the rebellion. Get exclusive drops and architectural insights.</p>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-xs text-cream focus:outline-none focus:border-sage-green transition-colors placeholder:text-white/10 tracking-widest"
              />
              <button className="absolute right-2 top-2 bg-sage-green text-primary-dark p-2 rounded-lg hover:bg-white transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-cream/20">
          <p>© 2026 REBEL ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-sage-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-sage-green transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
