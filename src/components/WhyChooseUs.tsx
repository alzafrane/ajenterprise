import { Check, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#C17F59] font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-4">Why AJ Enterprise</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Built on trust. <br className="hidden sm:block" />Backed by proof.
          </h3>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Every laptop goes through rigorous inspection, comes with our dedicated support, and is priced to feel like a smart upgrade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          
          {/* Row 1 */}
          {/* Box 1: Bulk Orders (Dark 1 col) */}
          <div className="bg-[#111111] rounded-[24px] p-5 lg:p-6 text-white flex flex-col h-full lg:col-span-1 md:col-span-1 shadow-md">
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Trusted By</span>
            <h4 className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
              <CountUp end={500} suffix="+" />
            </h4>
            <h5 className="text-sm font-semibold mb-1">Happy businesses</h5>
            <p className="text-gray-400 text-sm leading-relaxed mt-auto">
              Special solutions for offices, students, startups, and bulk orders buying refurbished.
            </p>
          </div>

          {/* Box 2: Why AJ? (Light 1 col) */}
          <div className="bg-white rounded-[24px] p-5 lg:p-6 border border-gray-200 flex flex-col h-full lg:col-span-1 md:col-span-1 shadow-sm">
            <span className="text-[#C17F59] text-[10px] font-bold tracking-widest uppercase mb-2">Our Promise</span>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">Why<br/>AJ Enterprise?</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Every laptop is tested, fully functional, and priced to deliver maximum value.
            </p>
            <div className="mt-auto flex">
              <span className="inline-block border border-[#C17F59]/30 text-[#C17F59] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                Better Value, Lower Risk
              </span>
            </div>
          </div>

          {/* Box 3: Quality Tested (Light 2 cols) */}
          <div className="bg-[#F4FBFA] rounded-[24px] p-5 lg:p-6 border border-[#E5F4F2] flex flex-col sm:flex-row gap-4 sm:gap-6 lg:col-span-2 md:col-span-2 items-start sm:items-center shadow-sm">
             <div className="flex-1 order-2 sm:order-1">
                <span className="block text-[#00A67E] text-[10px] font-bold tracking-widest uppercase mb-2">Quality Certified</span>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 tracking-tight">31-Category</h4>
                <h5 className="text-gray-900 font-semibold mb-1 text-sm">Inspection on every device</h5>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Battery, keyboard, ports, display, thermals, and overall performance are checked before delivery.
                </p>
             </div>
             <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#00A67E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00A67E]/20 order-1 sm:order-2">
                <Check size={24} strokeWidth={3} />
             </div>
          </div>

          {/* Row 2 */}
          {/* Box 4: Ratings (Light 1 col) */}
          <div className="bg-white rounded-[24px] p-5 lg:p-6 border border-gray-200 flex flex-col h-full lg:col-span-1 md:col-span-1 shadow-sm">
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-2">Rated On Google</span>
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 tracking-tight">4.8</h4>
            <p className="text-gray-500 text-[13px] leading-relaxed mt-auto mb-2">From satisfied customer reviews</p>
            <div className="flex text-[#D4AF37] gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </div>

          {/* Box 5: Best Price (Dark with glow 1 col) */}
          <div className="bg-[#111111] rounded-[24px] p-5 lg:p-6 text-white flex flex-col h-full lg:col-span-1 md:col-span-1 relative overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2a1300]/80 to-[#4a2200] pointer-events-none" />
            <div className="mb-2 relative z-10 flex">
               <span className="border border-[#C17F59]/40 text-[#C17F59] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                 Pocket Friendly
               </span>
            </div>
            <h4 className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight relative z-10">
              <CountUp end={60} suffix="%" />
            </h4>
            <h5 className="text-sm font-semibold mb-1 relative z-10 text-gray-200">Savings vs retail</h5>
            <p className="text-gray-400 text-sm leading-relaxed mt-auto relative z-10">
              Flagship performance and business-grade machines at a much smarter price point.
            </p>
          </div>

          {/* Box 6: Fast Support (Light 2 cols) */}
          <div className="bg-[#F5F8FF] rounded-[24px] p-5 lg:p-6 border border-[#E5EDFF] flex flex-col sm:flex-row gap-4 sm:gap-6 lg:col-span-2 md:col-span-2 items-start sm:items-center shadow-sm">
             <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                <Check size={24} strokeWidth={2.5} />
             </div>
             <div className="flex-1">
                <span className="block text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-1">Full Coverage</span>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 tracking-tight">Fast Support</h4>
                <h5 className="text-gray-900 font-semibold mb-1 text-sm">Assistance included</h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Hardware defect or query? We handle repairs or replacements with quick support via Call and WhatsApp.
                </p>
             </div>
          </div>

          {/* Row 3 */}
          {/* Box 7: Inventory (Dark 1 col) */}
          <div className="bg-[#111111] rounded-[24px] p-5 lg:p-6 text-white flex flex-col h-full lg:col-span-1 md:col-span-1 shadow-md">
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Diverse Inventory</span>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight">
              <CountUp end={100} suffix="+" />
            </h4>
            <h5 className="text-sm font-semibold mb-1">Laptops in stock</h5>
            <p className="text-gray-400 text-sm leading-relaxed mt-auto">
              Always ready to deliver exactly what you need quickly across Ahmedabad.
            </p>
          </div>
          
          {/* Box 8: Custom Upgrades (Light 1 col) */}
          <div className="bg-white rounded-[24px] p-5 lg:p-6 border border-gray-200 flex flex-col h-full lg:col-span-1 md:col-span-1 shadow-sm">
            <span className="text-[#00A67E] text-[10px] font-bold tracking-widest uppercase mb-2">Performance</span>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 tracking-tight">Upgrades</h4>
            <h5 className="text-sm font-semibold mb-1 text-gray-700">RAM & SSD Options</h5>
            <p className="text-gray-500 text-sm leading-relaxed mt-auto">
              Custom configurations available as per customer requirements for extended product life.
            </p>
          </div>

          {/* Box 9: Top Brands (Light 2 cols) */}
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-[24px] p-5 lg:p-6 border border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:col-span-2 md:col-span-2 items-start sm:items-center shadow-sm">
            <div className="flex-1">
               <span className="block text-[#C17F59] text-[10px] font-bold tracking-widest uppercase mb-1">Huge Selection</span>
               <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 tracking-tight">Top Brands</h4>
               <h5 className="text-gray-700 font-semibold mb-1 text-sm">Multiple configurations</h5>
               <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                 Dell, HP, Lenovo, and Apple MacBook available across student, business, and creator needs. Second Hand Laptop Ahmedabad.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
