interface DifferenceItem {
  title: string
  desc: string
}

const differenceItems: DifferenceItem[] = [
  {
    title: 'Pioneering Sustainability',
    desc: 'Carbon-optimized corridors and verified offset partnerships for low-impact transit.',
  },
  {
    title: 'Surgical Precision Management',
    desc: 'Direct ownership of critical touchpoints ensures zero communication gaps.',
  },
  {
    title: 'Technology-Driven Transparency',
    desc: 'Real-time updates and blockchain verification for absolute cargo visibility.',
  },
]

export default function LogisticsCommitments(): JSX.Element {
  return (
    <section className="bg-warm-cream py-20 px-6 md:px-12" id="logistics-commitments">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT Column: Commitments */}
        <div className="pt-2">
          <span className="text-[0.70rem] font-bold tracking-[0.20em] uppercase text-gold block mb-2">
            Our Commitments
          </span>
          <h2 className="font-serif text-[clamp(2.0rem,4.5vw,2.8rem)] font-extrabold text-[#0d1b2e] leading-tight mb-6">
            Performance &amp; Delivery
          </h2>
          <p className="font-urbanist text-[0.80rem] text-slate-gray font-semibold leading-relaxed mb-8 max-w-[480px]">
            There is no alternative to precision. We operate with a standard of excellence that guarantees reliability across the global trade cycle.
          </p>

          {/* Bullet Items */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: 'Unwavering Precision',
                desc: 'Ensuring every shipment meets rigorous standards and timelines.',
              },
              {
                title: 'Proprietary Carrier Network',
                desc: 'Direct agreements with leading ocean carriers and airlines.',
              },
              {
                title: 'Resource Synergy',
                desc: 'Leveraging group assets for seamless warehousing and transit.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {/* Checkmark icon */}
                <div className="shrink-0 mt-0.5 p-1 bg-gold/15 text-gold rounded-full">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[0.85rem] font-bold text-[#0d1b2e] mb-1">{item.title}</h4>
                  <p className="font-urbanist text-[0.76rem] text-slate-gray font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT Column: What Makes Us Different Card */}
        <div className="bg-white border border-[#e8e8e4] rounded-xl shadow-xl p-8 md:p-10 w-full">
          <h3 className="font-serif text-2xl font-bold text-[#0d1b2e] border-b border-[#e8e8e4] pb-5 mb-8">
            What Makes Us Different
          </h3>

          <div className="flex flex-col gap-8">
            {differenceItems.map((item, idx) => (
              <div key={idx}>
                <h4 className="font-sans text-[0.82rem] font-bold text-[#c8a84b] tracking-wide uppercase mb-2">
                  {item.title}
                </h4>
                <p className="font-urbanist text-[0.78rem] text-slate-gray font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
