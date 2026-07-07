export default function SeaFreight(): JSX.Element {
  const cards = [
    {
      id: 'fcl-lcl',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="20" width="30" height="22" rx="2" fill="#ff9e24" />
          <rect x="14" y="23" width="2" height="16" fill="#fff" opacity="0.3" />
          <rect x="22" y="23" width="2" height="16" fill="#fff" opacity="0.3" />
          <rect x="30" y="23" width="2" height="16" fill="#fff" opacity="0.3" />
          <path d="M39 26H50C52.2 26 54 27.8 54 30V39C54 40.7 52.7 42 51 42H39V26Z" fill="#ff9e24" />
          <path d="M42 29H47.5L51 34.5H42V29Z" fill="#fcfcfa" />
          <circle cx="18" cy="46" r="5.5" fill="#ff9e24" />
          <circle cx="45" cy="46" r="5.5" fill="#ff9e24" />
          <circle cx="18" cy="46" r="2" fill="#fcfcfa" />
          <circle cx="45" cy="46" r="2" fill="#fcfcfa" />
        </svg>
      ),
      title: 'FCL/LCL',
      desc: 'Full and Less than Container Load services with weekly sailings and competitive transit times across all major trade lanes.',
      bullets: [
        'Priority Equipment Access',
        'Multi-Carrier Contracts',
        'Port-to-Door Delivery',
      ],
    },
    {
      id: 'specialist',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 48V18C12 16.9 12.9 16 14 16H50C51.1 16 52 16.9 52 18V48" stroke="#ff9e24" strokeWidth="4" strokeLinecap="round" />
          <rect x="18" y="22" width="28" height="4" fill="#ff9e24" />
          <line x1="16" y1="36" x2="22" y2="36" stroke="#ff9e24" strokeWidth="2" />
          <line x1="42" y1="36" x2="48" y2="36" stroke="#ff9e24" strokeWidth="2" />
          <rect x="9" y="44" width="6" height="4" rx="1" fill="#ff9e24" />
          <rect x="49" y="44" width="6" height="4" rx="1" fill="#ff9e24" />
          <rect x="23" y="28" width="18" height="12" rx="1" fill="#ff9e24" />
          <rect x="27" y="30" width="1.5" height="8" fill="#0d1b2e" />
          <rect x="32" y="30" width="1.5" height="8" fill="#0d1b2e" />
          <rect x="37" y="30" width="1.5" height="8" fill="#0d1b2e" />
        </svg>
      ),
      title: 'Specialist Freight',
      desc: 'Export handling of Ro-Ro, breakbulk, and flatrack cargo for industrial turbines, solar farms, and oversized machinery.',
      bullets: [
        'Out-of-Gauge Management',
        'Temp-Controlled Monitoring',
        'Chartered Vessel Option',
      ],
      isHighlighted: true,
    },
    {
      id: 'project-cargo',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="16" width="4" height="30" rx="1" fill="#ff9e24" />
          <circle cx="32" cy="13" r="5" stroke="#ff9e24" strokeWidth="3" fill="none" />
          <rect x="22" y="21" width="20" height="3" rx="0.5" fill="#ff9e24" />
          <path d="M16 38C16 46.8 23.2 54 32 54C40.8 54 48 46.8 48 38" stroke="#ff9e24" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M12 38L16 33L20 38H12Z" fill="#ff9e24" />
          <path d="M44 38L48 33L52 38H44Z" fill="#ff9e24" />
        </svg>
      ),
      title: 'Project Cargo',
      desc: 'End-to-end management of complex industrial shipments involving multi modal coordination and specialized cranes.',
      bullets: [
        'Site Survey & Planning',
        'Route Optimization',
        'Marine Insurance Coverage',
      ],
    },
  ]

  return (
    <section className="bg-white py-20" id="sea-freight">
      <div className="max-w-[1180px] mx-auto px-10">
        <p className="font-urbanist text-[0.70rem] font-bold text-slate-500 tracking-[0.18em] uppercase mb-2">
          Maritime Excellence
        </p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0d1b2e] tracking-tight mb-12">
          Sea Freight Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isDark = card.isHighlighted
            return (
              <div
                key={card.id}
                id={card.id}
                className={`rounded-[3px] p-8 flex flex-col items-stretch transition-transform duration-300 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-[#0d1b2e] border border-[#c8a84b]/60 hover:shadow-[0_4px_25px_rgba(200,168,75,0.15)]'
                    : 'bg-[#fcfcfa] border border-[#e8e8e4] hover:shadow-md'
                }`}
              >
                {/* Centered Icon wrapper */}
                <div className="flex justify-center mb-8 h-16 items-center">
                  {card.icon}
                </div>
                
                {/* Text Content */}
                <div className={`font-serif text-[1.2rem] font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-[#0d1b2e]'
                }`}>
                  {card.title}
                </div>
                
                <p className={`font-urbanist text-[0.78rem] leading-[1.68] mb-6 ${
                  isDark ? 'text-slate-300' : 'text-[#666]'
                }`}>
                  {card.desc}
                </p>

                {/* Bullets List */}
                <ul className={`list-disc pl-5 flex flex-col gap-2.5 ${
                  isDark ? 'text-slate-300' : 'text-[#555]'
                }`}>
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-urbanist text-[0.74rem] font-medium"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
