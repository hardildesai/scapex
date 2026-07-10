import { useEffect, useRef, useState } from 'react'

interface ServiceCard {
  title: string
  desc: string
  bullets: string[]
  icon: JSX.Element
  isDark?: boolean
}

const services: ServiceCard[] = [
  {
    title: 'Ocean Freight — FCL & LCL',
    desc: 'Competitive rates and guaranteed space on all major trade lanes from every Indian gateway port.',
    bullets: [
      "Full Container Load (20', 40', 40'HC, reefer, open-top, flat-rack)",
      'Weekly LCL consolidation to Dubai, Singapore, Europe & USA',
      'DG cargo handling with certified packing & declarations',
      'Direct line contracts — MSC, Maersk, CMA CGM, Hapag & more'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="20" height="8" rx="1" />
        <path d="M5 6h10l2 4H3L5 6z" />
        <circle cx="7" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    ),
    isDark: true
  },
  {
    title: 'Air Freight',
    desc: 'Uplift from Ahmedabad (AMD), Mumbai (BOM), Delhi (DEL) & all Indian air cargo complexes with priority space on scheduled and charter capacity.',
    bullets: [
      'Express, consolidated & deferred airfreight products',
      'Temperature-controlled & pharma-grade handling',
      'Door-to-airport and door-to-door (DAP/DDP) service',
      'Same-day quote, next-flight-out for critical cargo'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    isDark: false
  },
  {
    title: 'Customs Clearance (CHA)',
    desc: 'In-house customs expertise for imports and exports at all Indian ports, ICDs and air cargo complexes.',
    bullets: [
      'Import & export clearance, shipping bill / bill of entry filing',
      'Duty drawback, RoDTEP, EPCG & advance authorisation support',
      'FSSAI, ADC, plant & animal quarantine NOC coordination',
      'Post-clearance audit & SVB representation'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    isDark: true
  },
  {
    title: 'Road Transport',
    desc: 'Pan-India surface network for first-mile pickup, port drayage and full inland distribution.',
    bullets: [
      'FTL & LTL — closed body, trailer, ODC & hydraulic axle',
      'Factory-to-port container movement with GPS tracking',
      'ICD / CFS coordination & empty repositioning',
      'Bonded trucking for transhipment cargo'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    isDark: false
  },
  {
    title: 'Warehousing & Distribution',
    desc: "Flexible storage close to India's industrial belts and gateway ports.",
    bullets: [
      'General & bonded warehousing, open yard storage',
      'Palletisation, lashing, fumigation & export packing',
      'Pick-pack, labelling & kitting for e-commerce',
      'Inventory visibility with barcode-level reporting'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      </svg>
    ),
    isDark: true
  },
  {
    title: 'Project & ODC Cargo',
    desc: 'Engineered logistics for over-dimensional, heavy-lift and plant relocation moves.',
    bullets: [
      'Breakbulk, RORO & chartering solutions',
      'Route surveys, permissions & escort management',
      'Turnkey EPC project logistics with milestone planning',
      'Heavy-lift cranage & site handling coordination'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="21" y1="10" x2="21" y2="6" />
        <line x1="3" y1="10" x2="3" y2="6" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <rect x="6" y="10" width="12" height="11" rx="2" />
        <path d="M12 2v4" />
      </svg>
    ),
    isDark: false
  },
  {
    title: 'Cargo Insurance',
    desc: 'Comprehensive marine cargo cover arranged per shipment or as an annual open policy.',
    bullets: [
      'All-risk ICC (A) coverage door-to-door',
      'Single transit & open policies at negotiated premiums',
      'Claims documentation & settlement assistance'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    isDark: true
  },
  {
    title: 'Trade Documentation & Advisory',
    desc: 'End-to-end export-import paperwork so your team can focus on the business.',
    bullets: [
      'Incoterms® & freight-cost structuring advisory',
      'Certificate of origin, LC document preparation & vetting',
      'IEC, AD-code registration & DGFT liaison support'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    isDark: false
  }
]

export default function ComprehensiveServices(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Double the services array to create an infinite marquee loop
  const extendedServices = [...services, ...services]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    const speed = 0.6 // Pixels to scroll per animation frame

    const scroll = () => {
      if (isHovered || isScrolling) return

      scrollContainer.scrollLeft += speed

      // Check if we've scrolled past the first full set of items
      const halfWidth = scrollContainer.scrollWidth / 2
      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft = 0
      }
    }

    const loop = () => {
      scroll()
      animationFrameId = requestAnimationFrame(loop)
    }

    animationFrameId = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isScrolling])

  const handleScroll = () => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const cardEl = scrollContainer.firstElementChild as HTMLElement
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 364 // 24px is gap-6

    const index = Math.round(scrollContainer.scrollLeft / cardWidth)
    setActiveIndex(index % services.length)
  }

  const navigateScroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    setIsScrolling(true)

    const cardEl = scrollContainer.firstElementChild as HTMLElement
    const cardOffset = cardEl ? cardEl.offsetWidth + 24 : 364

    const currentScroll = scrollContainer.scrollLeft
    const halfWidth = scrollContainer.scrollWidth / 2

    let targetLeft = currentScroll
    if (direction === 'left') {
      targetLeft = currentScroll - cardOffset
      if (targetLeft < -10) {
        scrollContainer.scrollLeft = halfWidth
        targetLeft = halfWidth - cardOffset
      }
    } else {
      targetLeft = currentScroll + cardOffset
      if (targetLeft >= halfWidth + 10) {
        scrollContainer.scrollLeft = 0
        targetLeft = cardOffset
      }
    }

    scrollContainer.scrollTo({ left: targetLeft, behavior: 'smooth' })

    const timer = setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  return (
    <section className="bg-[#051124] py-20 px-6 md:px-12 relative overflow-hidden" id="comprehensive-services">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="max-w-[1180px] mx-auto">
        
        {/* Header containing title and navigation arrows */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <span className="inline-block bg-gold/15 text-gold border border-gold/25 rounded-full px-4 py-1 text-[0.68rem] font-bold tracking-[0.10em] uppercase mb-3">
              Our Services
            </span>
            <h2 className="font-bricolage text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold text-white tracking-tight uppercase">
              Comprehensive Global Services
            </h2>
            <div className="w-16 h-[3px] bg-gold mt-4" />
          </div>
          
          {/* Custom Navigation Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={() => navigateScroll('left')}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0d1b2e] flex items-center justify-center text-white/80 hover:bg-gold hover:text-black hover:border-gold transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button 
              onClick={() => navigateScroll('right')}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0d1b2e] flex items-center justify-center text-white/80 hover:bg-gold hover:text-black hover:border-gold transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Carousel View */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-1 cursor-grab active:cursor-grabbing"
        >
          {extendedServices.map((item, index) => (
            <div
              key={index}
              className={`w-[280px] sm:w-[325px] md:w-[340px] shrink-0 rounded-xl p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${
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

                {/* Card Title */}
                <h3 className={`font-serif text-[1.1rem] font-bold tracking-wide uppercase mb-3 ${
                  item.isDark ? 'text-white' : 'text-[#0d1b2e]'
                }`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`font-urbanist text-[0.76rem] font-medium leading-[1.68] mb-6 ${
                  item.isDark ? 'text-white/70' : 'text-[#666]'
                }`}>
                  {item.desc}
                </p>
              </div>

              {/* Bullet list divided by dashed line */}
              <ul className={`list-none p-0 m-0 flex flex-col gap-2.5 border-t pt-5 ${
                item.isDark ? 'border-white/10' : 'border-[#e8e8e4]'
              }`}>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[0.72rem] font-semibold font-urbanist leading-[1.4]">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-[6px]" />
                    <span className={item.isDark ? 'text-white/80' : 'text-[#555]'}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Carousel Slider Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const scrollContainer = scrollRef.current
                if (scrollContainer) {
                  setIsScrolling(true)
                  const cardEl = scrollContainer.firstElementChild as HTMLElement
                  const cardOffset = cardEl ? cardEl.offsetWidth + 24 : 364
                  scrollContainer.scrollTo({ left: idx * cardOffset, behavior: 'smooth' })
                  setTimeout(() => setIsScrolling(false), 1000)
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'bg-gold scale-110 ring-4 ring-gold/25' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
