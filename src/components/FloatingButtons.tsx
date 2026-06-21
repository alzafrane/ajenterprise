import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsEl = document.getElementById('testimonials');
      
      if (testimonialsEl) {
        // Show button when the testimonials section starts coming into view
        const targetScroll = testimonialsEl.offsetTop - window.innerHeight / 2;
        if (window.scrollY > targetScroll) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      } else {
        // Fallback
        if (window.scrollY > 300) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 mx-auto"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <a 
        href="tel:9601196085" 
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:scale-110 transition-all duration-300 mx-auto"
        aria-label="Call Us"
      >
        <Phone size={20} className="animate-pulse" />
      </a>
      <a 
        href="https://wa.me/919601196085" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all duration-300 relative group mx-auto"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-border-y-[6px] border-y-transparent border-l-[6px] border-l-gray-900"></span>
        </span>
      </a>
    </div>
  );
}
