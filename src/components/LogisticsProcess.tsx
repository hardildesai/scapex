import ScrollReveal from './ScrollReveal'

interface ProcessStep {
  title: string
  desc: string
}

const steps: ProcessStep[] = [
  {
    title: 'Requirement Analysis',
    desc: 'Evaluating cargo specifics, urgency, and regulatory needs to determine the optimal transport mode.',
  },
  {
    title: 'Quotation & Planning',
    desc: 'Providing transparent pricing and constructing a robust routing plan tailored to your timeline.',
  },
  {
    title: 'Pickup & Documentation',
    desc: 'Securing cargo from origin and preparing all requisite customs and compliance paperwork.',
  },
  {
    title: 'Customs Clearance (Origin)',
    desc: 'Expert handling of export formalities to ensure swift release and loading onto the main carrier.',
  },
  {
    title: 'Transit & Tracking',
    desc: 'Main leg transportation (Sea/Air) with real-time milestone tracking via our TMS platform.',
  },
  {
    title: 'Clearance & Final Delivery',
    desc: 'Destination customs clearance followed by secure last-mile delivery to the final consignee.',
  },
]

export default function LogisticsProcess(): JSX.Element {
  return (
    <section className="bg-[#050f1a] py-16 md:py-24 px-6 md:px-12 text-white relative overflow-hidden" id="logistics-process">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="block font-sans text-[0.78rem] font-bold tracking-[0.20em] uppercase text-[#c8a84b] mb-3">
            PROCESS PRECISION
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.4rem)] font-medium text-white mb-4">
            Shipment Lifecycle
          </h2>
          <div className="w-12 h-[2px] bg-[#c8a84b] mx-auto mb-6" />
          <p className="font-sans text-[0.85rem] text-slate-400 max-w-[500px] mx-auto leading-relaxed">
            Our structured 6-step workflow guarantees visibility and control from origin to destination.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical central line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0
              return (
                <ScrollReveal key={idx}>
                  {/* Mobile: vertical stack with number left of text */}
                  <div className="flex md:hidden gap-4 items-start pl-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-[#c8a84b] text-[#0d1b2e] text-[0.85rem] font-sans font-bold flex items-center justify-center shadow-[0_0_15px_rgba(200,168,75,0.45)]">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-[1.1rem] font-bold text-white mb-1.5 leading-tight">{step.title}</h3>
                      <p className="font-sans text-[0.80rem] text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Desktop: alternating timeline */}
                  <div className="hidden md:flex relative items-center w-full">
                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:order-2'}`}>
                      <div className={`w-full max-w-[440px] ${
                        isEven ? 'text-left md:text-right' : 'text-left'
                      }`}>
                        <h3 className="font-serif text-[1.15rem] font-bold text-white mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="font-sans text-[0.82rem] text-slate-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Number Circle Node (Center) */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#c8a84b] text-[#0d1b2e] text-[0.85rem] font-sans font-bold flex items-center justify-center shadow-[0_0_15px_rgba(200,168,75,0.45)] z-20 shrink-0">
                      {idx + 1}
                    </div>

                    <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : ''}`} />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
