interface CapabilityCard {
  title: string
  desc: string
  icon: JSX.Element
}

const capabilities: CapabilityCard[] = [
  {
    title: 'Cold Chain Logistics',
    desc: 'Active temp-sensitive monitoring for perishable and pharmaceutical shipments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Customs Clearance',
    desc: 'Expert brokerage handling all tariff classification and regulatory paperwork.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Warehousing & Dist.',
    desc: 'Strategic storage locations with integrated pick-pack and inventory control.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Last-Mile Consulting',
    desc: 'Optimized routing and distribution design to streamline final stage delivery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function CoreCapabilities(): JSX.Element {
  return (
    <section className="bg-white py-20 px-6 md:px-12" id="core-capabilities">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <span className="text-[0.70rem] font-bold tracking-[0.20em] uppercase text-gold block mb-2">
              Beyond the Ports
            </span>
            <h2 className="font-serif text-[clamp(2.0rem,3.5vw,2.6rem)] font-bold text-[#0d1b2e] leading-tight">
              Core Capabilities
            </h2>
            <div className="w-16 h-[3px] bg-gold mt-4" />
          </div>
          <p className="font-urbanist text-[0.80rem] text-[#666] max-w-[380px] text-left md:text-right leading-relaxed font-semibold">
            Professional end-to-end freight forwarding managed with surgical precision and modern supply chain technology.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf8f4] border border-[#e8e8e4] rounded-xl p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-gold/30"
            >
              {/* Icon */}
              <div className="text-gold mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[1.05rem] font-bold text-[#0d1b2e] mb-3">
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
