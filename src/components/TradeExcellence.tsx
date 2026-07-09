export default function TradeExcellence(): JSX.Element {
  const logisticsData = [
    { region: 'Middle East', info: 'Bulk & Retail' },
    { region: 'Europe', info: 'EU Organic Certified' },
    { region: 'North America', info: 'USDA Organic Supply' },
    { region: 'Asia Pacific', info: 'Strategic Growth' },
  ]

  return (
    <section id="trade-excellence" className="bg-[#050f1a] py-20 px-6 md:px-12 text-white">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT: Text & Stats */}
        <div className="flex flex-col items-start">
          <h2 className="font-serif text-[clamp(2.0rem,4vw,2.8rem)] font-bold leading-tight mb-6">
            Trade Excellence &amp;<br />Seamless Reach
          </h2>
          <p className="font-urbanist text-[0.82rem] text-slate-400 leading-relaxed max-w-[430px] mb-12">
            With integrated logistics support from our sister company Scapex Global Forwarding, we ensure competitive freight and cold storage reliability from Indian ports to your destination.
          </p>

          {/* Two Key Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[450px]">
            <div>
              <span className="block font-sans font-extrabold text-[0.72rem] tracking-wider text-white uppercase mb-2">
                Market Reach
              </span>
              <p className="font-urbanist text-[0.75rem] text-slate-400 leading-relaxed">
                Active presence in UAE, Saudi Arabia, UK, Germany, USA, and Canada.
              </p>
            </div>
            <div>
              <span className="block font-sans font-extrabold text-[0.72rem] tracking-wider text-white uppercase mb-2">
                Cold Storage
              </span>
              <p className="font-urbanist text-[0.75rem] text-slate-400 leading-relaxed">
                Integrated temperature-sensitive facilities for freshness preservation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Logistics Card */}
        <div className="bg-[#0d1b2e] border border-white/5 shadow-2xl rounded-2xl p-8 md:p-10 w-full">

          <h3 className="font-serif text-3xl font-bold text-[#c8a84b] leading-tight mb-8">
            Direct Market<br />Logistics
          </h3>

          {/* Logistics Rows */}
          <div className="flex flex-col mb-8">
            {logisticsData.map((item, index) => (
              <div
                key={item.region}
                className={`flex justify-between items-center py-4 ${index < logisticsData.length - 1 ? 'border-b border-white/10' : ''
                  }`}
              >
                <span className="font-urbanist text-[0.85rem] font-bold text-white tracking-wide">
                  {item.region}
                </span>
                <span className="font-urbanist text-[0.8rem] font-bold text-[#c8a84b]">
                  {item.info}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="block text-center border border-[#c8a84b] hover:bg-[#c8a84b]/10 transition-colors duration-300 rounded py-3.5 px-6 font-mono font-bold text-[0.72rem] tracking-[0.12em] text-[#c8a84b] uppercase no-underline"
          >
            Request Logistics Quote
          </a>

        </div>

      </div>
    </section>
  )
}
