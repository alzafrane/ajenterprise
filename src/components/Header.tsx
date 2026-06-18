import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center border-b border-gray-100">
          <div className="flex items-center">
            <span className="font-display font-black text-2xl tracking-tighter text-[#0f172a]">AJ <span className="text-primary">Enterprise</span></span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#home" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">Home</a>
            <a href="#laptops" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="tel:9601196085" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_5px_15px_rgba(249,115,22,0.3)] hover:-translate-y-0.5">
              <Phone size={16} />
              960 119 6085
            </a>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md font-medium">Home</a>
            <a href="#laptops" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md font-medium">Portfolio</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md font-medium">Testimonials</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
