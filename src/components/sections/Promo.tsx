import React, { useState, useEffect } from 'react';
import { LuTimer, LuTag, LuArrowRight, LuActivity, LuFlame } from 'react-icons/lu';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimerUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center px-4 py-2 bg-white/5 backdrop-blur-lg border border-cream/10 rounded-lg min-w-[70px]">
    <span className="font-headline text-2xl font-black text-sage-green leading-none">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="font-label text-[8px] tracking-[0.2em] text-cream/50 uppercase mt-1">
      {label}
    </span>
  </div>
);

const Promo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <section id="promo" className="bg-primary-dark py-24 px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-[600px]">
          
          {/* Left Side: Promo of the Moment (lg:col-span-7) */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl h-[600px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop" 
              alt="Promo of the Moment"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2000ms] group-hover:scale-110"
            />
            {/* Dark Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-green text-primary-dark rounded-full animate-pulse-subtle mb-6">
                  <LuFlame className="text-sm" />
                  <span className="font-label text-[10px] font-black tracking-widest uppercase">Promo of the Moment</span>
                </div>
                
                <h2 className="font-headline text-6xl md:text-8xl font-black text-cream tracking-tighter leading-tight uppercase editorial-text-shadow">
                  FLASH <br />SALE
                </h2>
              </div>
              
              <div className="space-y-8">
                {/* Countdown Timer */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-cream/70 mb-2 w-full">
                    <LuTimer className="text-sage-green animate-pulse" />
                    <span className="font-label text-xs tracking-widest uppercase">Ends In:</span>
                  </div>
                  <TimerUnit value={timeLeft.days} label="Days" />
                  <TimerUnit value={timeLeft.hours} label="Hours" />
                  <TimerUnit value={timeLeft.minutes} label="Mins" />
                  <TimerUnit value={timeLeft.seconds} label="Secs" />
                </div>
                
                <button className="relative group/btn inline-flex items-center gap-4 bg-sage-green text-primary-dark px-10 py-5 font-headline font-black text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:translate-y-[-4px] hover-glow-sage overflow-hidden">
                  <span className="relative z-10">Shop the Drop</span>
                  <LuArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Sports Wear Deals (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Top Card: Running & Gym */}
            <div className="relative flex-1 group overflow-hidden rounded-2xl min-h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym & Running Wear"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/20 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/5 backdrop-blur-lg border border-cream/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <LuActivity className="text-sage-green text-sm" />
                    <span className="font-label text-[10px] font-bold text-sage-green tracking-[0.2em] uppercase">Performance Wear</span>
                  </div>
                  <h3 className="font-headline text-3xl font-black text-cream uppercase mb-4">Gym & Running</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cream/10 rounded text-[8px] font-label text-cream uppercase tracking-widest">Running</span>
                    <span className="px-2 py-1 bg-cream/10 rounded text-[8px] font-label text-cream uppercase tracking-widest">Gym</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Football Kits */}
            <div className="relative flex-1 group overflow-hidden rounded-2xl min-h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1510298811502-bd9042b55444?q=80&w=2069&auto=format&fit=crop" 
                alt="Football Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/20 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/5 backdrop-blur-lg border border-cream/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <LuTag className="text-sage-green text-sm" />
                    <span className="font-label text-[10px] font-bold text-sage-green tracking-[0.2em] uppercase">Football Kits</span>
                  </div>
                  <h3 className="font-headline text-3xl font-black text-cream uppercase mb-4">Elite Football</h3>
                  <div className="flex items-center gap-4 group/link cursor-pointer">
                    <span className="font-headline text-xs font-bold text-cream uppercase tracking-[0.2em] border-b border-sage-green pb-1 group-hover/link:text-sage-green transition-colors">Explore All</span>
                    <LuArrowRight className="text-sage-green group-hover/link:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Promo;
