

export default function Divisions(): JSX.Element {
  return (
    <section className="bg-[#f4f4f2] py-[60px] pb-[80px]" id="industries">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div className="mb-7">
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#888] mb-2.5">02 / Core Divisions</p>
          <h2 className="text-[1.3rem] font-bold text-[#111] leading-[1.3] tracking-tight max-w-[520px]">Achieving Outstanding Performance Across All Divisions</h2>
        </div>
        {/* Asymmetric 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:h-[480px]">
          {/* Left: Large card */}
          <article className="relative rounded-[6px] overflow-hidden bg-[#cccccc] h-[300px] md:h-full" id="division-solar">
            <img src="/solar.png" alt="Solar & Renewable Infrastructure" className="w-full h-full object-cover block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent flex items-end p-5">
              <h3 className="text-[0.95rem] font-bold text-white leading-[1.3]">Solar &amp; Renewable<br />Infrastructure</h3>
            </div>
          </article>
          {/* Right column: two stacked cards */}
          <div className="flex flex-col gap-2.5">
            <article className="relative rounded-[6px] overflow-hidden bg-[#cccccc] flex-1 h-[180px] md:h-auto" id="division-agro">
              <img src="/agro.png" alt="Agro Commodities" className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent flex items-end p-5">
                <h3 className="text-[0.95rem] font-bold text-white leading-[1.3]">Agro Commodities</h3>
              </div>
            </article>
            <article className="relative rounded-[6px] overflow-hidden bg-[#0f1e35] flex-1 h-[180px] md:h-auto" id="division-logistics">
              <img src="/export.png" alt="Export &amp; Logistics" className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent flex items-end p-5">
                <h3 className="text-[0.95rem] font-bold text-white leading-[1.3]">Export &amp; Logistics</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
