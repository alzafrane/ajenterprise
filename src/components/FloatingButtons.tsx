import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a 
        href="tel:9601196085" 
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        aria-label="Call Us"
      >
        <Phone size={20} className="animate-pulse" />
      </a>
      <a 
        href="https://wa.me/919601196085" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all duration-300 relative group"
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
