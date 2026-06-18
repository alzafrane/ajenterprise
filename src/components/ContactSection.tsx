import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-bold tracking-wider uppercase text-xs mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Contact AJ Enterprise</h2>
          <p className="text-gray-500 text-lg">Visit our store in Ahmedabad or reach out to us via phone or WhatsApp.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-8 md:p-10 space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-primary shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Store Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    G15, Circle, Al-Muqam, Vishala,<br />
                    Sarkhej-Okaf, Ahmedabad,<br />
                    Gujarat 380055
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-primary shrink-0 mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone & WhatsApp</h4>
                  <a href="tel:9601196085" className="text-gray-500 hover:text-primary text-sm transition-colors">
                    9601196085
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-primary shrink-0 mt-1">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-64 w-full bg-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=al%20muqam%20vishala%20circle%20ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AJ Enterprise Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => { 
                e.preventDefault(); 
                const fd = new FormData(e.currentTarget);
                const name = fd.get('name');
                const phone = fd.get('phone');
                const message = fd.get('message');
                const text = `Hi, I am ${name} (${phone}). ${message}`;
                window.open('https://wa.me/919601196085?text=' + encodeURIComponent(text), '_blank'); 
              }}>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a] outline-none transition-all placeholder:text-gray-400" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a] outline-none transition-all placeholder:text-gray-400" 
                  placeholder="+91 98765 43210" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a] outline-none transition-all resize-none placeholder:text-gray-400" 
                  placeholder="I am looking for a laptop for..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0f172a] hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 mt-4">
                <span>Send via WhatsApp</span>
                <MessageSquare size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
