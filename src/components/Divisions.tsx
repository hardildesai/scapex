export default function Divisions(): JSX.Element {
  return (
    <section className="bg-white pt-12 md:pt-20 pb-12 md:pb-20" id="industries">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[0.7rem] font-serif font-bold tracking-[0.2em] uppercase text-slate-gray mb-3">
            02 / Core Divisions
          </p>
          <h2 className="text-[clamp(1.6rem,5vw,2.6rem)] font-bold font-bricolage text-black leading-[1.2] tracking-[-0.01em] max-w-[850px]">
            Achieving Outstanding Performance Across All Divisions
          </h2>
        </div>

        {/* Asymmetric 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[540px]">

          {/* Left: Large solar card */}
          <article className="relative overflow-hidden bg-[#c8c8c8] h-[360px] md:h-full" id="division-solar">
            <img src="/solar.webp" alt="Solar & Renewable Infrastructure" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-8">
              <h3 className="text-[1.85rem] md:text-[2.3rem] font-serif font-medium text-white leading-[1.1] tracking-tight">
                Solar &amp; Renewable<br />Infrastructure
              </h3>
            </div>
          </article>

          {/* Right: Two stacked cards */}
          <div className="flex flex-col md:grid md:grid-rows-2 gap-4 md:h-full">
            <article className="relative overflow-hidden bg-[#c8c8c8] h-[220px] md:h-full" id="division-agro">
              <img src="/agro.webp" alt="Agro Commodities" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-transparent flex items-start p-8">
                <h3 className="text-[1.35rem] md:text-[1.5rem] font-serif font-medium text-white tracking-tight">Agro Commodities</h3>
              </div>
            </article>
            <article className="relative overflow-hidden bg-[#0f1e35] h-[220px] md:h-full" id="division-logistics">
              <img src="/export.webp" alt="Export & Logistics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent flex items-end p-8">
                <h3 className="text-[1.35rem] md:text-[1.5rem] font-serif font-medium text-white tracking-tight">Export &amp; Logistics</h3>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
