import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-primary-dark py-24 px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border-[0.5px] border-cream/20 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img 
            className="relative w-full aspect-[4/5] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl" 
            alt="Editorial high fashion photography in earth tones" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxcbLiityIe8uTCtxLVlKgI3yok-Y6WPty5zFR-W_VYICgU_756y-WWOvsq8YPgRTcdsvRxdcXI1110ShcbAJdzXmo7IGJ6GMHKPQv2I-X8u2_bW9DbVtnQD1VKO4QVb2Hp3CGozKmsYnmaTRw9gNR75H1bViPJcEm67094ibEThMuCBiOlvPZ_hmecRpztSXmNfQTooeRLrHzhEA3kljJQSbcZ7WkRYWrkvnG-F6VsS0rSHp04Ldq2nL3LsTDU1HblQ_1Dw7nj2g"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-sage-green font-bold">About us</span>
            <div className="w-12 h-[1px] bg-sage-green"></div>
          </div>
          
          <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter leading-tight text-cream">
            EXPRESS YOURSELF <br/>THROUGH FASHION
          </h2>
          
          <p className="font-sans text-cream/70 leading-relaxed max-w-lg text-lg">
            REBEL is more than a brand; it's a statement of individuality. Our curated collection of shoes and bags is designed for those who refuse to follow the grain. Every piece is an intersection of architectural precision and street-ready rebellion.
          </p>
          
          <button className="relative group overflow-hidden border-b border-sage-green py-2 font-headline font-bold text-xs tracking-widest text-cream hover:text-sage-green transition-colors inline-flex items-center gap-4">
            READ MORE
            <span className="w-8 h-[1px] bg-sage-green transition-all duration-300 group-hover:w-12"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
