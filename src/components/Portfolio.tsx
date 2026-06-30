import React, { useState } from "react";
import { ExternalLink, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products, Product, createSlug } from "../data";

function ProductCard({ product }: { product: Product; key?: any }) {
  const baseImages = product.images || (product.image ? [product.image] : []);

  // Dynamically assemble exactly 3 high-quality, relevant images for each product
  let images = [...baseImages];
  if (images.length === 0) {
    images = [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800",
    ];
  } else if (images.length === 1) {
    const single = images[0];
    if (
      product.name.toLowerCase().includes("macbook") ||
      product.name.toLowerCase().includes("apple")
    ) {
      images = [
        single,
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800",
      ];
    } else if (
      product.name.toLowerCase().includes("surface") ||
      product.name.toLowerCase().includes("microsoft")
    ) {
      images = [
        single,
        "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
      ];
    } else if (
      product.name.toLowerCase().includes("rog") ||
      product.name.toLowerCase().includes("gaming") ||
      product.name.toLowerCase().includes("predator") ||
      product.name.toLowerCase().includes("omen") ||
      product.name.toLowerCase().includes("zephyrus")
    ) {
      images = [
        single,
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800",
      ];
    } else {
      images = [
        single,
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800",
      ];
    }
  } else if (images.length === 2) {
    images = [
      images[0],
      images[1],
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800",
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
      <Link
        to={`/product/${createSlug(product.name)}`}
        className="relative h-64 overflow-hidden bg-slate-50/50 flex items-center justify-center border-b border-gray-100 group/slider block"
      >
        {images.length > 0 ? (
          <img
            src={images[currentIdx]}
            alt={`${product.name} - Used Laptop Ahmedabad`}
            className="w-full h-full object-contain p-6 transition-transform duration-500 scale-100"
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

          </>
        )}
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <Link
          to={`/product/${createSlug(product.name)}`}
          className="hover:text-primary transition-colors"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            {product.name}
          </h4>
        </Link>
        <div className="space-y-2 mb-6 mt-4">
          {product.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-2 py-1.5 rounded border border-gray-100"
            >
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
          Inquire Now <ExternalLink size={16} />
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
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
            Our Collection
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Quality Laptops
          </h3>
          <p className="text-gray-600 text-lg">
            Browse our most popular models in stock. We provide varying
            configurations based on your specific requirements and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
