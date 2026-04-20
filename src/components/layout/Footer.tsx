import React from 'react';
import { LuShoppingBag, LuFacebook, LuTwitter, LuInstagram, LuYoutube, LuSend } from 'react-icons/lu';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-primary-dark border-t border-cream/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="bg-sage-green p-2 rounded-xl text-primary-dark shadow-lg">
                <LuShoppingBag size={20} />
              </div>
              <span className="text-xl font-black tracking-widest text-cream">
                REBEL
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Redefining premium footwear since 2026. We combine earth-toned aesthetics with unparalleled craftsmanship.
            </p>
            <div className="flex gap-4">
              {[LuFacebook, LuTwitter, LuInstagram, LuYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/40 hover:bg-sage-green hover:text-primary-dark transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sage-green font-bold mb-6">Collections</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/50">
              {['New Arrivals', 'Best Sellers', 'Men Collection', 'Women Collection', 'Limited Edition'].map((item) => (
                <li key={item}><a href="#" className="hover:text-sage-green transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sage-green font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/50">
              {['About Us', 'Sustainability', 'Terms of Service', 'Privacy Policy', 'Affiliate Program'].map((item) => (
                <li key={item}><a href="#" className="hover:text-sage-green transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sage-green font-bold mb-6">Newsletter</h4>
            <p className="text-cream/50 text-sm mb-6">Subscribe to get special offers and first look at new drops.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-cream/5 border border-cream/10 rounded-xl py-3 px-4 text-sm text-cream focus:outline-none focus:border-sage-green transition-colors"
              />
              <button className="absolute right-2 top-2 bg-sage-green text-primary-dark p-1.5 rounded-lg hover:bg-sage-green/80 transition-colors">
                <LuSend size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30 font-medium">
          <p>© 2026 REBEL Shoes & Bags. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cream/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream/50 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
