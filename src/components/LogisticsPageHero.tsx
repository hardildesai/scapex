export default function LogisticsPageHero(): JSX.Element {
  return (
    <section
      id="logistics-page-hero"
      className="relative mt-[84px] min-h-[500px] md:min-h-[580px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          'url("/logistics-hero.webp")',
      }}
    >
      {/* Mobile overlay: full dark */}
      <div className="absolute inset-0 bg-[#050f1a]/90 lg:hidden" />
      {/* Desktop overlay: directional gradient */}
      <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(to right, rgba(5,15,26,0.95) 0%, rgba(5,15,26,0.88) 42%, rgba(5,15,26,0.45) 70%, rgba(5,15,26,0.12) 100%)' }} />

      {/* Outer wrapper */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 md:px-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">

          {/* ── Left Column: Main Content ── */}
          <div>
            {/* Top Badge */}
            <div className="mb-5">
              <span className="inline-flex font-urbanist items-center gap-2 bg-white/5 border border-white/20 text-white text-[0.65rem] font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a31c]" />
                END-TO-END SUPPLY CHAIN
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bricolage font-bold text-white leading-[1.08] tracking-tight mb-5 text-[clamp(2.2rem,6vw,3.6rem)]">
              Reliable Logistics<br />
              Solutions for a<br />
              Connected World
            </h1>

            {/* Subtitle */}
            <p className="font-urbanist uppercase text-[0.82rem] text-white/70 leading-[1.78] max-w-[480px] mb-8 font-medium">
              From warehousing to last-mile delivery, Scapex manages your entire supply chain with precision, speed, and full visibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {/* Get a Logistics Quote Button */}
              <a
                href="#logistics-contact"
                id="logistics-quote-cta"
                className="inline-flex items-center gap-2 bg-[#f5a31c] text-[#0d1b2e] font-mono font-extrabold text-[0.70rem] tracking-[0.12em] uppercase py-3.5 px-5 md:px-6 rounded-xl transition-all duration-300 hover:bg-[#ffb438] no-underline shadow-lg"
              >
                Get a Logistics Quote
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              {/* Track Shipment Button */}
              <a
                href="#track-cargo"
                id="logistics-track-cta"
                className="inline-flex items-center gap-2 bg-[#094195] text-white font-mono font-bold text-[0.70rem] tracking-[0.12em] uppercase py-3.5 px-5 md:px-6 rounded-xl transition-all duration-300 hover:bg-[#0c4eb3] no-underline shadow-lg"
              >
                Track Shipment
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right Column: Track Cargo Card — desktop only ── */}
          <div className="hidden lg:flex justify-end">
            <div
              id="track-cargo"
              className="bg-black/20 border border-white/10 rounded-2xl p-8 backdrop-blur-2xl w-full max-w-[340px] shadow-2xl transition-all duration-300"
            >
              <h3 className="font-serif text-[1.5rem] font-bold text-white mb-6">
                Track Cargo
              </h3>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  className="w-full bg-white/[0.06] border border-white/15 text-white text-[0.80rem] px-4 py-3.5 rounded-lg outline-none placeholder-white/30 focus:border-[#f5a31c]/60 focus:bg-white/[0.1] transition-all font-urbanist"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#f5a31c] text-[#0d1b2e] font-sans font-bold text-[0.78rem] py-3.5 rounded-lg hover:bg-[#ffb438] transition-all duration-200 cursor-pointer shadow-md"
              >
                Track Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
