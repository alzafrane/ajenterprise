import React, { useState } from 'react';
import { ExternalLink, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  desc: string;
  specs: string[];
  image?: string;
  images?: string[];
  popular: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Refurbished Dell Latitude 5400',
    desc: 'Business-class durability with robust performance. Ideal for everyday office work and heavy multitasking.',
    specs: ['Intel i5', '8th Genration', '8GB Ram', '256 SSD'],
    images: [
      '/images/dell_5400_open.jpg',
      '/images/dell_5400_closed.jpg',
      '/images/dell_5400_angle.jpg'
    ],
    popular: true
  },
  {
    id: 2,
    name: 'Refurbished Dell Latitude 7280',
    desc: 'Sleek design paired with absolute performance and enterprise security features.',
    specs: ['Intel i7', '7th Genration', '8GB Ram', '256 SSD'],
    images: [
      '/images/dell_7280_open_front.jpg',
      '/images/dell_7280_open_angle.jpg',
      '/images/dell_7280_closed_top.jpg'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Refurbished Dell Latitude 3400',
    desc: 'Reliable and durable companion perfect for office productivity, studying, and everyday utility tasks.',
    specs: ['Intel Core i5', '8th Gen..', '8 Gb Ram', '256 Gb SSD'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=max&q=80&w=800',
    popular: false
  },
  {
    id: 7,
    name: 'Refurbished Dell Latitude 5490',
    desc: 'Business-class durability with robust performance. Ideal for everyday office work and heavy multitasking.',
    specs: ['Intel i5', '8th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 5,
    name: 'Refurbished Dell Latitude 5480',
    desc: 'Reliable and durable business companion perfect for productivity and everyday utility tasks.',
    specs: ['Intel i5', '6th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=max&q=80&w=800',
    popular: false
  },
  {
    id: 6,
    name: 'Refurbished Dell Latitude 3510',
    desc: 'Essential business laptop with a sleek modern design, perfect for students and professionals on the go.',
    specs: ['Intel i3', '10th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=max&q=80&w=800',
    popular: false
  },
  {
    id: 12,
    name: 'Refurbished HP Probook 440 G7',
    desc: 'Stylish, thin-and-light laptop designed to empower your workday with essential business features and modern aesthetic.',
    specs: ['Intel i5', '10th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 8,
    name: 'Refurbished HP Elitebook 840 G6',
    desc: 'Premium enterprise laptop offering robust performance, striking visual display, and high-end security features for professionals.',
    specs: ['Intel i5', '8th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 9,
    name: 'Refurbished HP 250 G8',
    desc: 'Budget-friendly business laptop delivering reliable performance for everyday tasks and seamless connectivity.',
    specs: ['Intel i5', '11th Genration', '8GB Ram', '256 SSD'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 10,
    name: 'Used MacBook Pro A1708',
    desc: 'Premium lightweight aluminum build with stunning Retina display and reliable performance for professionals.',
    specs: ['Intel i5 / i7', 'Year 2017', '8GB / 16GB Ram', '128GB/256GB SSD'],
    images: [
      '/images/macbook_a1708_open.jpg',
      '/images/macbook_a1708_closed.jpg',
      '/images/macbook_a1708_keyboard.jpg'
    ],
    popular: false
  },
  {
    id: 11,
    name: 'Used MacBook Pro A1989',
    desc: 'Powerful computing with Touch Bar, dynamic vivid display, and fast storage for creative workflows.',
    specs: ['Intel i5 / i7', 'Year 2018', '8GB / 16GB Ram', '256GB SSD'],
    images: [
      '/images/macbook_a1989_open.jpg',
      '/images/macbook_a1989_closed.jpg',
      '/images/macbook_a1989_keyboard.jpg'
    ],
    popular: false
  },
  {
    id: 12,
    name: 'Used MacBook Pro A2251',
    desc: 'Ultimate productivity laptop with enhanced Magic Keyboard and True Tone display for an immersive experience.',
    specs: ['Intel i5 / i7', 'Year 2020', '8GB / 16GB Ram', '256GB SSD'],
    images: [
      '/images/macbook_a2251_open.jpg',
      '/images/macbook_a2251_closed.jpg',
      '/images/macbook_a2251_keyboard.jpg'
    ],
    popular: false
  },
  {
    id: 13,
    name: 'Used MacBook Pro 15" A1990',
    desc: 'Breathtaking 15-inch Retina display and exceptional performance for creative professionals with Touch Bar integration.',
    specs: ['Intel i7 / i9', 'Year 2018', '16GB / 32GB Ram', '512GB SSD'],
    image: '/images/macbook_pro_a1990.jpg',
    popular: true
  },
  {
    id: 14,
    name: 'Used MacBook Pro 16" A2141',
    desc: 'Immersive 16-inch Retina display with powerful processing capabilities, perfect for demanding multi-core workloads.',
    specs: ['Intel i7', 'Year 2019', '16GB Ram', '512GB SSD'],
    image: '/images/macbook_pro_a2141_i7.jpg',
    popular: false
  },
  {
    id: 15,
    name: 'Used MacBook Pro 16" A2141',
    desc: 'The ultimate professional powerhouse delivering top-tier performance for video editing, 3D rendering, and coding.',
    specs: ['Intel i9', 'Year 2019', '16GB / 32GB Ram', '512GB / 1TB SSD'],
    image: '/images/macbook_pro_a2141_i9.jpg',
    popular: false
  },
  {
    id: 16,
    name: 'Used MacBook Pro M1 Pro 14"',
    desc: 'Game-changing Apple Silicon performance, jaw-dropping Liquid Retina XDR display, and incredible battery life.',
    specs: ['8-Core CPU & 14-Core GPU', 'Year 2021', '16GB RAM', '512GB SSD'],
    images: [
      '/images/macbook_m1_open.jpg',
      '/images/macbook_m1_closed.jpg',
      '/images/macbook_m1_kbd.jpg'
    ],
    popular: true
  },
  {
    id: 17,
    name: 'Used MacBook Pro M2 Pro 14"',
    desc: 'Exceptional sustained performance, advanced connectivity, and phenomenal battery life in a remarkably portable package.',
    specs: ['12-Core CPU & 30-Core GPU', 'Year 2022/2023', '16GB RAM', '512GB SSD'],
    images: [
      '/images/macbook_m2_open.jpg',
      '/images/macbook_m2_closed.jpg',
      '/images/macbook_m2_kbd.jpg'
    ],
    popular: false
  },
  {
    id: 18,
    name: 'Used MacBook Pro M3 Pro 14"',
    desc: 'The next generation of Apple Silicon offering mind-blowing speed, hardware-accelerated ray tracing, and a stunning Space Black finish.',
    specs: ['12-Core CPU & 19-Core GPU', 'Year 2023/2024', '18GB RAM', '512GB SSD'],
    images: [
      '/images/macbook_m3_open.jpg',
      '/images/macbook_m3_closed.jpg',
      '/images/macbook_m3_kbd.jpg'
    ],
    popular: true
  }
];

function ProductCard({ product }: { product: Product; key?: any }) {
  const baseImages = product.images || (product.image ? [product.image] : []);
  
  // Dynamically assemble exactly 3 high-quality, relevant images for each product
  let images = [...baseImages];
  if (images.length === 0) {
    images = [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800'
    ];
  } else if (images.length === 1) {
    const single = images[0];
    if (product.name.toLowerCase().includes('macbook') || product.name.toLowerCase().includes('apple')) {
      images = [
        single,
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800'
      ];
    } else if (product.name.toLowerCase().includes('surface') || product.name.toLowerCase().includes('microsoft')) {
      images = [
        single,
        'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800'
      ];
    } else if (product.name.toLowerCase().includes('rog') || product.name.toLowerCase().includes('gaming') || product.name.toLowerCase().includes('predator') || product.name.toLowerCase().includes('omen') || product.name.toLowerCase().includes('zephyrus')) {
      images = [
        single,
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800'
      ];
    } else {
      images = [
        single,
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800'
      ];
    }
  } else if (images.length === 2) {
    images = [
      images[0],
      images[1],
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800'
    ];
  }

  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative flex flex-col">
      {product.popular && (
        <div className="absolute top-3 right-3 z-10 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Tag size={11} /> Bestseller
        </div>
      )}
      <div className="relative h-64 overflow-hidden bg-slate-50/50 flex items-center justify-center border-b border-gray-100 group/slider">
        {images.length > 0 ? (
          <img 
            src={images[currentIdx]} 
            alt={`${product.name} - view ${currentIdx + 1}`} 
            className="w-full h-full object-cover transition-transform duration-500 scale-100"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image available</div>
        )}

        {images.length > 1 && (
          <>
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-1.5 rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-all duration-200 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
            </button>
            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-1.5 rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-all duration-200 z-10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-[2px]">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIdx(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx ? 'bg-primary scale-125' : 'bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
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
  );
}

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
