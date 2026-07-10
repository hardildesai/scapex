interface CapabilityCard {
  title: string
  desc: string
  icon: JSX.Element
}

const capabilities: CapabilityCard[] = [
  {
    title: 'Cargo Insurance',
    desc: 'Comprehensive coverage for peace of mind against transit risks, loss, and damage globally.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Customs Brokerage',
    desc: 'Expert navigation of complex tariff codes, documentation, and regulatory compliance to ensure swift clearance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Warehousing & Distribution',
    desc: 'Secure, scalable storage solutions coupled with efficient order fulfillment and last-mile distribution.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      </svg>
    ),
  },
  {
    title: 'Logistics Consulting',
    desc: 'Strategic supply chain analysis, route optimization, and cost-reduction modeling for modern enterprises.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="11" r="2" />
        <circle cx="19" cy="6" r="2" />
        <line x1="7" y1="16.5" x2="10" y2="12.5" />
        <line x1="14" y1="9.5" x2="17" y2="7.5" />
      </svg>
    ),
  },
]

export default function CoreCapabilities(): JSX.Element {
  return (
    <section className="bg-[#fcfaf6] py-20 px-6 md:px-12" id="core-capabilities">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <span className="text-[0.70rem] font-extrabold tracking-[0.25em] uppercase text-[#c8a84b] block mb-3">
            Beyond the Basics
          </span>
          <h2 className="font-serif text-[clamp(2.0rem,3.5vw,2.4rem)] font-bold text-[#0d1b2e] leading-tight">
            Value Added Services
          </h2>
          <div className="w-16 h-[3px] bg-[#c8a84b] mx-auto mt-4" />
          <p className="font-urbanist text-[0.80rem] text-[#555] leading-relaxed font-semibold mt-6">
            Comprehensive logistics support encompassing Cargo Insurance, Customs Brokerage, Warehousing, and Strategic Logistics Consulting to streamline your entire supply chain.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0ebe0] rounded-[20px] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-gold mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[1.1rem] font-bold text-[#0d1b2e] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-urbanist text-[0.76rem] text-slate-gray leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
