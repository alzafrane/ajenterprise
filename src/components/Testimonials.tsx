import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Desai",
    role: "Student",
    text: "Bought a Dell Latitude for my college projects. Condition was totally like new, battery backup is great. Very prompt service by AJ Enterprise.",
  },
  {
    name: "Pooja Shah",
    role: "Freelancer",
    text: "Needed a reliable laptop for video editing but had a strict budget. They suggested an HP EliteBook with upgraded RAM. It runs flawlessly!",
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    text: "Procured 5 Lenovo ThinkPads for my office staff. The bulk pricing was excellent and the systems are running perfectly. Highly recommended in Ahmedabad.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Happy Customers in Ahmedabad
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow"
            >
              <Quote
                className="absolute top-8 right-8 text-gray-100/50"
                size={64}
                fill="currentColor"
              />
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-8 relative z-10 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
