import React from 'react';
import { LuShoppingBag, LuSearch, LuMenu, LuArrowRight, LuStar } from 'react-icons/lu';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>

      {/* Navbar */}
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

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-8 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-brand-100 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              New Collection 2026
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-sm leading-[1.1]">
              Step Into <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-purple-400">The Future.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
              Discover the latest trends in premium footwear and accessories. Redefine your style with Rebel’s exclusive meticulously crafted designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold transition-all hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Shop Now <LuArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-bold text-white backdrop-blur-md transition-all active:scale-95 text-lg">
                Explore Lookbook
              </button>
            </div>
            
            <div className="pt-10 flex items-center gap-6 w-full mt-4 border-t border-white/10">
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
                ].map((src, i) => (
                  <img key={i} src={src} alt="User avatar" className="w-12 h-12 rounded-full border-2 border-slate-950 object-cover" />
                ))}
              </div>
              <div className="flex flex-col text-sm">
                <div className="flex text-amber-400 mb-1">
                  {[1,2,3,4,5].map(i => <LuStar key={i} fill="currentColor" size={16} />)}
                </div>
                <span className="text-slate-400 font-medium"><strong className="text-white text-base">4.9/5</strong> from 2k+ reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group shadow-2xl backdrop-blur-sm">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"></div>
             
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
             
             {/* Floating UI Elements */}
             <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-xs text-brand-200 font-semibold uppercase tracking-wider mb-1">Trending</span>
                <span className="text-xl font-black text-white">#1</span>
             </div>
             
             <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex justify-between items-center">
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Nike Air Max</h3>
                      <p className="text-brand-100 font-medium tracking-wide text-sm uppercase">Cyber Running Collection</p>
                   </div>
                   <div className="text-3xl font-black text-white">$199</div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
