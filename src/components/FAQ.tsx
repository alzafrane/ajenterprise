import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the difference between a used laptop and a refurbished laptop?",
    answer: "Refurbished laptops are professionally tested, cleaned, and verified before sale, while used laptops are pre-owned devices offered at affordable prices after quality inspection."
  },
  {
    question: "Do your laptops come with a warranty?",
    answer: "Yes, selected laptops include a warranty. Warranty details are clearly mentioned for each product."
  },
  {
    question: "Which laptop brands do you offer?",
    answer: "We offer Dell, HP, Lenovo, Apple MacBook, Acer, ASUS, and other trusted brands."
  },
  {
    question: "Can I use these laptops for office work, study, or programming?",
    answer: "Yes. Our laptops are suitable for students, professionals, business users, coding, online classes, and everyday work."
  },
  {
    question: "Can I visit your showroom before buying?",
    answer: "Yes, you are welcome to visit our Ahmedabad showroom to inspect and compare laptops before purchasing."
  },
  {
    question: "Do you provide laptop accessories and computer sales?",
    answer: "Yes, we also offer computer sales and essential laptop accessories."
  },
  {
    question: "Why should I buy a refurbished laptop instead of a new one?",
    answer: "Refurbished laptops deliver excellent performance at a much lower price, making them a smart and budget-friendly choice."
  },
  {
    question: "How can I contact AJ Enterprise?",
    answer: "Call or WhatsApp 9601196085 for product availability, pricing, or expert assistance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight font-display">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg">
            Everything you need to know about buying used and refurbished laptops in Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-colors duration-300 ${
                  openIndex === index 
                    ? 'bg-white border-primary/20 shadow-md shadow-primary/5' 
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-semibold pr-4 transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full ${openIndex === index ? 'bg-primary/10 rotate-180' : 'bg-gray-50'}`}>
                    {openIndex === index ? (
                      <Minus className="text-primary" size={16} />
                    ) : (
                      <Plus className="text-gray-500" size={16} />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {faqs.slice(4, 8).map((faq, idx) => {
              const index = idx + 4;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-white border-primary/20 shadow-md shadow-primary/5' 
                      : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={`font-semibold pr-4 transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full ${openIndex === index ? 'bg-primary/10 rotate-180' : 'bg-gray-50'}`}>
                      {openIndex === index ? (
                        <Minus className="text-primary" size={16} />
                      ) : (
                        <Plus className="text-gray-500" size={16} />
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
