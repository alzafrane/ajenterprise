import { ShieldCheck, Tag, Laptop, Cpu, Briefcase, Headphones } from 'lucide-react';

const features = [
  {
    label: 'QUALITY CERTIFIED',
    title: 'Quality Tested',
    subtitle: 'Laptops in Ahmedabad',
    desc: 'Every used and refurbished laptop is fully tested for reliable performance before delivery.',
    className: 'md:col-span-2 lg:col-span-2 bg-[#F4FBFA] border border-[#E5F4F2]',
    labelClass: 'text-[#00A67E]',
    titleClass: 'text-gray-900',
    subtitleClass: 'text-gray-900 font-semibold',
    descClass: 'text-gray-600',
    icon: ShieldCheck,
    iconWrapper: 'bg-[#00A67E] text-white',
    layout: 'horizontal'
  },
  {
    label: 'POCKET FRIENDLY',
    title: 'Best Price',
    subtitle: 'Guaranteed Value',
    desc: 'Premium laptops at affordable prices with excellent value.',
    className: 'col-span-1 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]',
    labelClass: 'text-yellow-500 border border-yellow-600/50 px-2.5 py-1 rounded-full',
    titleClass: 'text-white',
    subtitleClass: 'text-gray-300',
    descClass: 'text-gray-400',
    layout: 'vertical'
  },
  {
    label: 'HUGE SELECTION',
    title: 'Top Brands',
    subtitle: 'Multiple Configs',
    desc: 'Dell, HP, Lenovo, and Apple MacBook available.',
    className: 'col-span-1 bg-white border border-gray-100 shadow-sm',
    labelClass: 'text-gray-400',
    titleClass: 'text-gray-900',
    subtitleClass: 'text-gray-600',
    descClass: 'text-gray-500',
    layout: 'vertical'
  },
  {
    label: 'PERFORMANCE',
    title: 'Custom Upgrades',
    subtitle: 'RAM & SSD Options',
    desc: 'Upgrades available as per customer requirements.',
    className: 'col-span-1 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]',
    labelClass: 'text-gray-400',
    titleClass: 'text-white',
    subtitleClass: 'text-gray-300',
    descClass: 'text-gray-400',
    layout: 'vertical'
  },
  {
    label: 'B2B SOLUTIONS',
    title: 'Bulk Orders',
    subtitle: 'For Businesses',
    desc: 'Special solutions for offices, startups, and students.',
    className: 'col-span-1 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]',
    labelClass: 'text-gray-400',
    titleClass: 'text-white',
    subtitleClass: 'text-gray-300',
    descClass: 'text-gray-400',
    layout: 'vertical'
  },
  {
    label: 'FULL COVERAGE',
    title: 'Fast Support',
    subtitle: 'Always here to help',
    desc: 'Quick assistance via Call and WhatsApp before and after your purchase.',
    className: 'md:col-span-2 lg:col-span-2 bg-[#F5F8FF] border border-[#E5EDFF]',
    labelClass: 'text-blue-500',
    titleClass: 'text-gray-900',
    subtitleClass: 'text-gray-900 font-semibold',
    descClass: 'text-gray-600',
    icon: Headphones,
    iconWrapper: 'bg-blue-500 text-white shadow-md shadow-blue-500/20',
    layout: 'horizontal'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#C17F59] font-bold tracking-widest uppercase text-xs mb-4">Why AJ Enterprise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Built on trust. <br className="hidden sm:block" />Backed by performance.</h3>
          <p className="text-gray-600 text-lg">
            We provide top-quality Used and Refurbished Laptops in Ahmedabad, as well as premium Used MacBook Ahmedabad models, tailored to meet your performance and budget needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => {
            return (
              <div 
                key={index} 
                className={`p-6 md:p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${feature.className}`}
              >
                {feature.layout === 'horizontal' ? (
                  <div className="flex flex-col sm:flex-row gap-6 items-start h-full">
                    {feature.icon && (
                      <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${feature.iconWrapper}`}>
                        <feature.icon size={22} strokeWidth={2} />
                      </div>
                    )}
                    <div className="flex flex-col h-full">
                      <span className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${feature.labelClass}`}>
                        {feature.label}
                      </span>
                      <h4 className={`text-2xl md:text-3xl font-bold mb-1 tracking-tight ${feature.titleClass}`}>
                        {feature.title}
                      </h4>
                      <h5 className={`text-sm mb-3 ${feature.subtitleClass}`}>
                        {feature.subtitle}
                      </h5>
                      <p className={`text-sm leading-relaxed mt-auto ${feature.descClass}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <span className={`self-start text-[10px] font-bold tracking-widest uppercase mb-8 ${feature.labelClass}`}>
                      {feature.label}
                    </span>
                    <div className="mt-auto">
                      <h4 className={`text-3xl font-bold mb-1 tracking-tight ${feature.titleClass}`}>
                        {feature.title}
                      </h4>
                      <h5 className={`text-sm mb-3 ${feature.subtitleClass}`}>
                        {feature.subtitle}
                      </h5>
                      <p className={`text-xs sm:text-sm leading-relaxed ${feature.descClass}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
