import React, { useState, useEffect } from 'react';
import {
  LuTruck,
  LuUndo2,
  LuShieldCheck,
  LuHeadphones
} from 'react-icons/lu';
import H1 from '../../assets/h1.webp';
import H2 from '../../assets/h2.webp';
import H3 from '../../assets/h3.avif';
import H4 from '../../assets/h4.webp';
import H5 from '../../assets/h5.webp';
import H6 from '../../assets/h6.avif';

const slides = [
  {
    url: H1,
    alt: "High-fashion minimalist earth-toned photography"
  },
  {
    url: H2,
    alt: "Premium fashion editorial with earth tones"
  },
  {
    url: H3,
    alt: "High-fashion minimalist earth-toned photography"
  },
  {
    url: H4,
    alt: "Premium fashion editorial with earth tones"
  },
  {
    url: H5,
    alt: "High-fashion minimalist earth-toned photography"
  },
  {
    url: H6,
    alt: "High-fashion minimalist earth-toned photography"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="relative h-[921px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]"
              alt={slide.alt}
              src={slide.url}
            />
            <div className="absolute inset-0 bg-primary-dark/30"></div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="font-headline text-5xl md:text-8xl font-extrabold text-cream tracking-tighter leading-none mb-8 editorial-text-shadow">
              DISCOVER YOUR <br />UNIQUE STYLE
            </h1>

            <button className="relative group overflow-hidden bg-sage-green/20 backdrop-blur-md border border-cream/20 text-cream px-12 py-5 font-headline font-bold text-sm tracking-[0.2em] transition-all duration-300 hover:bg-sage-green hover:text-primary-dark active:scale-95 shadow-2xl">
              SHOP NOW
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </button>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-[2px] cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-sage-green' : 'bg-cream/30'
                }`}
            ></div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-deep-olive/10 px-8">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center gap-4 group cursor-default">
            <div className="p-4 rounded-full bg-sage-green/10 text-sage-green group-hover:bg-sage-green group-hover:text-primary-dark transition-all duration-300">
              <LuTruck className="text-3xl" />
            </div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cream">Free shipping</span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center gap-4 group cursor-default">
            <div className="p-4 rounded-full bg-sage-green/10 text-sage-green group-hover:bg-sage-green group-hover:text-primary-dark transition-all duration-300">
              <LuUndo2 className="text-3xl" />
            </div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cream">Free returns</span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center gap-4 group cursor-default">
            <div className="p-4 rounded-full bg-sage-green/10 text-sage-green group-hover:bg-sage-green group-hover:text-primary-dark transition-all duration-300">
              <LuShieldCheck className="text-3xl" />
            </div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cream">Secured payments</span>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center gap-4 group cursor-default">
            <div className="p-4 rounded-full bg-sage-green/10 text-sage-green group-hover:bg-sage-green group-hover:text-primary-dark transition-all duration-300">
              <LuHeadphones className="text-3xl" />
            </div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cream">Customer service</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
