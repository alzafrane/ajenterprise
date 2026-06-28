import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-slate-800 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="font-display font-extrabold text-3xl text-white tracking-tight">
              AJ <span className="text-primary">Enterprise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-[13px]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="hover:text-primary transition-colors text-[15px] text-slate-300"
              >
                Home
              </a>
              <a
                href="#laptops"
                className="hover:text-primary transition-colors text-[15px] text-slate-300"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors text-[15px] text-slate-300"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-[13px]">
              Our Services
            </h3>
            <div className="flex flex-col gap-4">
              <span className="text-[15px] text-slate-300">Used Laptops</span>
              <span className="text-[15px] text-slate-300">
                Refurbished Laptops
              </span>
              <span className="text-[15px] text-slate-300">Computer Sales</span>
              <span className="text-[15px] text-slate-300">
                Desktop Assembly
              </span>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-[13px]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-slate-400 mt-0.5 shrink-0" />
                <span className="text-[15px] text-slate-300 leading-relaxed">
                  G15, Circle, Al-Muqam,
                  <br />
                  Vishala, Sarkhej-Okaf,
                  <br />
                  Ahmedabad, Gujarat 380055
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-slate-400 shrink-0" />
                <span className="text-[15px] text-slate-300">960 119 6085</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-slate-400 shrink-0" />
                <span className="text-[15px] text-slate-300">
                  WhatsApp Chat
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AJ Enterprise. All rights
            reserved.
          </p>
          <p>Designed for premium local shopping experience.</p>
        </div>
      </div>
    </footer>
  );
}
