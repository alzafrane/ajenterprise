import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-12">
          <div className="lg:w-1/2 space-y-6 z-10 lg:pr-8 xl:pr-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold shadow-sm text-gray-800">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Ahmedabad's Premium Tech Showroom
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold leading-[1.1] text-[#0f172a] tracking-tight">
              <span className="block sm:whitespace-nowrap">Premium Laptops</span>
              <span className="block">at</span>
              <span className="text-primary block font-black sm:whitespace-nowrap">Unbeatable Prices</span>
            </h1>
            
            <p className="text-base lg:text-lg text-gray-500 max-w-xl font-medium leading-relaxed mt-4">
              Discover a curated selection of fully tested, professional-grade laptops and desktops. Trusted by businesses and students for reliable performance.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
              <a href="#laptops" className="inline-flex justify-center items-center gap-2 bg-[#0f172a] hover:bg-gray-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                Get Best Deal <ArrowRight size={18} />
              </a>
              <a href="#laptops" className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm w-full sm:w-auto">
                View Available Stock
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4 lg:max-w-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                <CheckCircle2 size={18} className="text-primary" />
                Quality Checked & Tested
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                <CheckCircle2 size={18} className="text-primary" />
                Affordable Pricing
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                <CheckCircle2 size={18} className="text-primary" />
                Trusted in Ahmedabad
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                <CheckCircle2 size={18} className="text-primary" />
                Fast Customer Support
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full mt-10 lg:mt-0">
            {/* The main image slider */}
            <div className="relative rounded-[2rem] overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[460px] xl:h-[500px]">
              {IMAGES.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Premium Refurbished Laptop ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Slider indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Overlay gradient to ensure indicators and image contrast looks good */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />
            </div>
            
            {/* Floating Shield Card */}
            <div className="absolute top-4 left-4 sm:-top-6 sm:-left-10 bg-white p-3 sm:p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center gap-3 sm:gap-4 animate-bounce z-30" style={{ animationDuration: '3s' }}>
              <div className="text-primary bg-orange-50 p-2 sm:p-2.5 rounded-xl border border-orange-100">
                <ShieldCheck size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#0f172a]">A-Grade Quality</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium">100% Certified</div>
              </div>
            </div>

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-orange-200/40 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
