import { ExternalLink, Tag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Dell Latitude / OptiPlex Series',
    desc: 'Business-class durability with robust performance. Ideal for everyday office work and heavy multitasking.',
    specs: ['Intel Core i5 / i7', '8GB / 16GB RAM', '256GB / 512GB SSD', 'Windows 10/11 Pro'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 2,
    name: 'HP EliteBook / ProBook',
    desc: 'Sleek design paired with absolute performance and enterprise security features.',
    specs: ['Intel Core i5 / Ryzen 5', '8GB / 16GB RAM', '256GB / 512GB SSD', '14" / 15.6" FHD Display'],
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad',
    desc: 'The gold standard for typing experience and legendary reliability for programmers and pros.',
    specs: ['Intel Core i5 / i7', '16GB RAM', '512GB SSD', 'Legendary Keyboard'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 4,
    name: 'Apple MacBook Air / Pro',
    desc: 'Premium aluminum build with excellent battery life for creators and developers.',
    specs: ['Intel Core i5 / M1', '8GB RAM', '256GB SSD', 'macOS Space Gray'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 5,
    name: 'Dell Precision Workstation',
    desc: 'Heavy-duty processing power designed for demanding tasks like 3D rendering and CAD.',
    specs: ['Intel Core i7 / Xeon', '16GB / 32GB RAM', '512GB / 1TB SSD', 'Dedicated NVIDIA GPU'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 6,
    name: 'HP Spectre / Envy',
    desc: 'Ultra-thin, premium 2-in-1 convertible laptops with stunning displays for creators.',
    specs: ['Intel Core i5 / i7', '16GB RAM', '512GB SSD', 'Touchscreen 360°'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 7,
    name: 'Asus ZenBook',
    desc: 'Ultra-portable and elegant with vibrant OLED displays perfect for media consumption.',
    specs: ['Intel i5 / AMD Ryzen 7', '16GB RAM', '512GB PCIe SSD', 'ErgoLift Hinge'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 8,
    name: 'Dell XPS 13 & 15',
    desc: 'Compact form factor, stunning InfinityEdge bezels, and premium carbon fiber build.',
    specs: ['Intel Core i7 / i9', '16GB / 32GB RAM', '512GB / 1TB SSD', '4K Touch Display'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 9,
    name: 'Lenovo IdeaPad',
    desc: 'Everyday reliability and smooth performance for students and home users.',
    specs: ['Intel i3 / Ryzen 3', '8GB RAM', '256GB SSD', 'FHD Anti-glare'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 10,
    name: 'Microsoft Surface Laptop',
    desc: 'Clean, minimalistic design with vibrant PixelSense touchscreens and Alcantara finish.',
    specs: ['Intel Core i5 / i7', '8GB / 16GB RAM', '256GB SSD', 'Touchscreen'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 11,
    name: 'Acer Swift Series',
    desc: 'Lightweight performance machines offering a superb balance of cost and portability.',
    specs: ['Intel Core i5 / Ryzen 5', '8GB RAM', '512GB SSD', 'All-Day Battery'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 12,
    name: 'HP Pavilion',
    desc: 'Versatile mainstream laptops delivering dependable computing for everyone.',
    specs: ['Intel Core i5 / i7', '8GB / 12GB RAM', '512GB SSD', 'B&O Audio'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 13,
    name: 'Asus ROG Zephyrus',
    desc: 'Premium ultra-slim gaming and creator laptops with immense GPU power.',
    specs: ['AMD Ryzen 9', '16GB / 32GB RAM', '1TB SSD', 'NVIDIA RTX 3060/3070'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 14,
    name: 'Lenovo Legion',
    desc: 'Uncompromised cooling and raw performance for serious gamers and 3D pros.',
    specs: ['Intel Core i7 / Ryzen 7', '16GB RAM', '1TB SSD', 'RTX Graphics'],
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 15,
    name: 'Dell G-Series',
    desc: 'Durable, entry-level to mid-range gaming laptops with robust thermals.',
    specs: ['Intel Core i5', '8GB / 16GB RAM', '512GB NVMe SSD', 'GTX/RTX Options'],
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 16,
    name: 'HP Omen',
    desc: 'Sleek aesthetics with high-refresh-rate displays and enthusiast-grade internals.',
    specs: ['Intel Core i7', '16GB RAM', '1TB PCIe SSD', '144Hz / 165Hz Display'],
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 17,
    name: 'Acer Predator',
    desc: 'Aggressive styling and extreme frame rates for competitive esports titles.',
    specs: ['Intel Core i7', '16GB / 32GB RAM', '1TB SSD', 'NVIDIA Dedicated GPU'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 18,
    name: 'Apple MacBook Pro (M-Series)',
    desc: 'Industry-leading silicon performance and Liquid Retina XDR displays.',
    specs: ['Apple M1 / M2 Pro', '16GB Uni Memory', '512GB SSD', 'macOS Ventura'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 19,
    name: 'LG Gram',
    desc: 'Unbelievably light footprint with incredible battery stamina for frequent travelers.',
    specs: ['Intel Core i5 / i7', '16GB RAM', '512GB SSD', 'Ultra-Lightweight (Below 1kg)'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 20,
    name: 'Microsoft Surface Pro',
    desc: 'The best tablet-to-laptop hybrid offering true flexibility and pen support.',
    specs: ['Intel Core i5', '8GB RAM', '256GB SSD', 'Detachable Form Factor'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 21,
    name: 'Asus VivoBook',
    desc: 'Colorful and energetic mainstream laptops with solid everyday productivity features.',
    specs: ['Intel Core i3 / i5', '8GB RAM', '256GB / 512GB SSD', 'Color-Blocked Enter Key'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 22,
    name: 'Acer Aspire Series',
    desc: 'The quintessential budget-friendly workstation that gets the job done effectively.',
    specs: ['Intel Core i3 / i5', '8GB RAM', '256GB NVMe SSD', 'Reliable Battery'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 23,
    name: 'Dell Inspiron',
    desc: 'A staple computing device with versatile options for students and home offices.',
    specs: ['Intel Core i5', '8GB RAM', '512GB SSD', 'FHD Display'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 24,
    name: 'Razer Blade Stealth',
    desc: 'Premium CNC aluminum build merging ultrabook portability with high performance.',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '120Hz / 144Hz Display'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    popular: false
  }
];

export default function Portfolio() {
  return (
    <section id="laptops" className="pt-12 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Collection</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Quality Laptops</h3>
          <p className="text-gray-600 text-lg">Browse our most popular models in stock. We provide varying configurations based on your specific requirements and budget.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative flex flex-col"
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Tag size={12} /> Bestseller
                </div>
              )}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <div className="space-y-2 mb-6 mt-4">
                  {product.specs.map((spec, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-2 py-1.5 rounded border border-gray-100">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={`https://wa.me/919601196085?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white flex flex-row items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors"
                >
                  Inquire Price <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
