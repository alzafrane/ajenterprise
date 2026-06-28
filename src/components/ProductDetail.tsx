import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  RefreshCw,
  Banknote,
  Cpu,
  HardDrive,
  Monitor,
  CheckCircle2,
  Video,
  Share2,
  Check,
} from "lucide-react";
import { products, createSlug } from "../data";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => createSlug(p.name) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIdx(0);
    setSelectedRam("8GB");
    setSelectedStorage("256GB");
    setSelectedWarranty("Free 1 year");
  }, [slug]);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedRam, setSelectedRam] = useState("8GB");
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedWarranty, setSelectedWarranty] = useState("Free 1 year");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Product not found
        </h2>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const images =
    product.images ||
    (product.image
      ? [product.image]
      : [
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800",
        ]);

  const ramOptions = ["8GB", "16GB", "32GB"];
  const storageOptions = ["256GB", "512GB", "1TB"];
  const warrantyOptions = ["Free 1 year", "Extra 1 Year", "Extra 2 Years"];

  return (
    <div className="bg-white min-h-screen pb-20 pt-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-4 sm:p-8">
              <img
                src={images[activeImageIdx]}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    idx === activeImageIdx
                      ? "border-primary"
                      : "border-gray-100 hover:border-gray-300"
                  } bg-slate-50 flex items-center justify-center p-2`}
                >
                  <img
                    src={img}
                    alt=""
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Product Tabs (Specs, About, etc) */}
            <div className="mt-16 w-full hidden lg:block">
              <div className="flex border-b border-gray-200 gap-8">
                <button className="pb-4 font-bold text-gray-900 border-b-2 border-primary">
                  Specifications
                </button>
                <button className="pb-4 font-medium text-gray-500 hover:text-gray-900">
                  About
                </button>
                <button className="pb-4 font-medium text-gray-500 hover:text-gray-900">
                  Warranty
                </button>
                <button className="pb-4 font-medium text-gray-500 hover:text-gray-900">
                  Condition
                </button>
              </div>

              <div className="py-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <Monitor className="text-blue-500 mb-2" size={20} />
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                      Screen Size
                    </div>
                    <div className="text-sm font-medium text-gray-900">14"</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <Cpu className="text-purple-500 mb-2" size={20} />
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                      Processor
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.specs[0]}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <HardDrive className="text-orange-500 mb-2" size={20} />
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                      Storage
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.specs[3] || "256GB SSD"}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <CheckCircle2 className="text-green-500 mb-2" size={20} />
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                      Generation
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.specs[1] || "-"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col lg:sticky lg:top-8 h-fit">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {product.name} | {product.specs[0]} | 14" HD Screen | Windows 11
                Pro | Refurbished
              </h1>
              <button
                onClick={handleShare}
                className="shrink-0 flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary bg-gray-50 hover:bg-orange-50 px-3 py-1.5 rounded-full transition-colors border border-gray-200"
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Share2 size={16} />
                )}
                <span className={copied ? "text-green-600" : ""}>
                  {copied ? "Copied!" : "Share"}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-100">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-gray-900">
                In Stock
              </span>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-gray-100">
                <ShieldCheck size={20} className="text-gray-700 mb-1" />
                <span className="text-[10px] font-bold text-gray-900 uppercase">
                  12 Month
                </span>
                <span className="text-[10px] text-gray-500">Warranty</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-gray-100">
                <RefreshCw size={20} className="text-gray-700 mb-1" />
                <span className="text-[10px] font-bold text-gray-900 uppercase">
                  14 Days
                </span>
                <span className="text-[10px] text-gray-500">Easy Return</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-gray-100">
                <Banknote size={20} className="text-gray-700 mb-1" />
                <span className="text-[10px] font-bold text-gray-900 uppercase">
                  COD
                </span>
                <span className="text-[10px] text-gray-500">
                  Cash on Delivery
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">RAM</h4>
                <div className="flex flex-wrap gap-3">
                  {ramOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedRam(opt)}
                      className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedRam === opt
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">
                  STORAGE
                </h4>
                <div className="flex flex-wrap gap-3">
                  {storageOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedStorage(opt)}
                      className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedStorage === opt
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">
                  WARRANTY
                </h4>
                <div className="flex flex-wrap gap-3">
                  {warrantyOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedWarranty(opt)}
                      className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedWarranty === opt
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <a
                href={`https://wa.me/919601196085?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}%20with%20${selectedRam}%20RAM%20and%20${selectedStorage}%20Storage.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20"
              >
                Buy via WhatsApp
              </a>
              <p className="text-center text-xs text-gray-500 mt-4">
                100% Safe & Secure Ordering. Free Delivery across Ahmedabad.
              </p>
            </div>
          </div>
        </div>

        {/* Product Tabs Mobile */}
        <div className="mt-8 block lg:hidden w-full">
          <div className="flex border-b border-gray-200 gap-8 overflow-x-auto scrollbar-hide">
            <button className="pb-4 font-bold text-gray-900 border-b-2 border-primary whitespace-nowrap">
              Specifications
            </button>
            <button className="pb-4 font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
              About
            </button>
            <button className="pb-4 font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
              Warranty
            </button>
            <button className="pb-4 font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
              Condition
            </button>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <Monitor className="text-blue-500 mb-2" size={20} />
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Screen Size
                </div>
                <div className="text-sm font-medium text-gray-900">14"</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <Cpu className="text-purple-500 mb-2" size={20} />
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Processor
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {product.specs[0]}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <HardDrive className="text-orange-500 mb-2" size={20} />
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Storage
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {product.specs[3] || "256GB SSD"}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <CheckCircle2 className="text-green-500 mb-2" size={20} />
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Generation
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {product.specs[1] || "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          You May Also Like
        </h2>
        <div
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {products
            .filter(
              (p) =>
                p.id !== product.id &&
                p.name.split(" ")[0] === product.name.split(" ")[0],
            )
            .concat(
              products.filter(
                (p) =>
                  p.id !== product.id &&
                  p.name.split(" ")[0] !== product.name.split(" ")[0],
              ),
            )
            .slice(0, 8)
            .map((p) => (
              <Link
                key={p.id}
                to={`/product/${createSlug(p.name)}`}
                className="group w-[260px] sm:w-[280px] shrink-0 snap-start block bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-slate-50 flex items-center justify-center p-4">
                  <img
                    src={
                      p.images?.[0] ||
                      p.image ||
                      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800"
                    }
                    alt={p.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {p.name.split(" ")[1] || "Brand"}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star
                        size={12}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                    </div>
                    <span className="text-[10px] text-gray-400">(4.4)</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
