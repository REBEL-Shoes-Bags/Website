import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const brands = [
  "NIKE", "ADIDAS", "NEW BALANCE", "ON", "JORDAN", "VANS", "CONVERSE", 
  "UNDER ARMOUR", "LACOSTE", "POLO RALPH", "CALVIN KLEIN", "TOMMY HILFIGER", 
  "JACK & JONES", "ZARA", "BERSHKA", "H&M", "COACH", "MICHAEL KORS", 
  "LONG CHAMP", "GUESS"
];

const BrandMarquee: React.FC = () => {
  // Duplicate the list multiple times for a truly seamless loop
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];
  const controls = useAnimationControls();

  const startAnimation = () => {
    controls.start({
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    });
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="relative w-full bg-primary-dark py-12 sm:py-24 overflow-hidden border-y border-white/5 group">
      {/* Premium Glassmorphic Side Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-l from-primary-dark via-primary-dark/90 to-transparent z-20 pointer-events-none" />

      {/* Background Brand Text (Watermark style) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none overflow-hidden select-none">
        <span className="font-headline font-black text-[30vw] tracking-tighter leading-none">REBEL</span>
      </div>

      <div className="relative z-10 flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 sm:gap-40 items-center"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAnimation()}
        >
          {marqueeBrands.map((brand, index) => (
            <div key={index} className="flex items-center gap-16 sm:gap-40 group/item">
              <span className="font-headline font-black text-4xl sm:text-7xl text-cream/10 tracking-[0.25em] uppercase transition-all duration-500 hover:text-sage-green hover:scale-110 cursor-pointer editorial-text-shadow-sm select-none">
                {brand}
              </span>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-sage-green/10 group-hover/item:bg-sage-green/40 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-30">
        <div className="flex items-center gap-4">
           <div className="w-12 h-px bg-cream/20" />
           <span className="text-[9px] font-bold text-cream uppercase tracking-[0.6em] whitespace-nowrap">Curated Selection</span>
           <div className="w-12 h-px bg-cream/20" />
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
