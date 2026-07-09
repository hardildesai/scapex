import { Link } from 'react-router-dom'

interface ServiceCard {
  title: string
  desc: string
  bullets: string[]
  icon: JSX.Element
  isDark?: boolean
}

const services: ServiceCard[] = [
  {
    title: 'SEA FREIGHT',
    desc: 'Full and Less than Container Load services with weekly sailings and competitive transit times across all major trade lanes.',
    bullets: ['Priority Equipment Access', 'Multi-Carrier Contracts', 'Port-to-Door Delivery'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="20" height="8" rx="1" />
        <path d="M5 6h10l2 4H3L5 6z" />
        <circle cx="7" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    ),
    isDark: true, // matches the dark card in the image
  },
  {
    title: 'AIR FREIGHT',
    desc: 'Express, scheduled, and economy charter capacity connecting industrial networks globally with next-flight-out capabilities.',
    bullets: ['Express Priority Access', 'Consolidated Cargo Slotting', 'Temp-Controlled Monitoring'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'ROAD FREIGHT',
    desc: 'Reliable cross-border land transport solutions with a modern fleet and real-time GPS tracking for secure deliveries.',
    bullets: ['FTL & LTL Land Carriage', 'Customs Bonded Trucking', 'Dangerous Goods Certified'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'CUSTOMS COMPLIANCE',
    desc: 'Experienced customs brokerage handling tariff classification, duty computation, and fast border clearance.',
    bullets: ['HS Code Classification', 'AEO / C-TPAT Compliance', 'Duty Minimization Advisory'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

export default function ComprehensiveServices(): JSX.Element {
  return (
    <section className="bg-[#051124] py-20 px-6 md:px-12" id="comprehensive-services">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-gold/15 text-gold rounded-full px-4 py-1 text-[0.68rem] font-bold tracking-[0.10em] uppercase border border-gold/25">
              Our Services
            </span>
          </div>
          <h2 className="font-bricolage text-[clamp(2.0rem,4vw,2.8rem)] font-extrabold text-white tracking-tight uppercase">
            Comprehensive Global Services
          </h2>
          <div className="w-20 h-[3px] bg-gold mx-auto mt-4" />
        </div>

        {/* Scrollable Container / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${
                item.isDark
                  ? 'bg-[#0d1b2e] border-gold/40 text-white shadow-gold/5'
                  : 'bg-white border-[#e8e8e4] text-[#0d1b2e]'
              }`}
            >
              <div>
                {/* Icon */}
                <div className={`mb-8 p-3 w-fit rounded-lg ${
                  item.isDark ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-gold/10 text-[#b09038]'
                }`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className={`font-serif text-[1.1rem] font-bold tracking-wide uppercase mb-3 ${
                  item.isDark ? 'text-white' : 'text-[#0d1b2e]'
                }`}>
                  {item.title}
                </h3>

                {/* Desc */}
                <p className={`font-urbanist text-[0.76rem] font-medium leading-[1.68] mb-6 ${
                  item.isDark ? 'text-white/70' : 'text-[#666]'
                }`}>
                  {item.desc}
                </p>
              </div>

              {/* Bullets */}
              <ul className={`list-none p-0 m-0 flex flex-col gap-2.5 border-t pt-5 ${
                item.isDark ? 'border-white/10' : 'border-[#e8e8e4]'
              }`}>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[0.72rem] font-semibold font-urbanist">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className={item.isDark ? 'text-white/80' : 'text-[#555]'}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
