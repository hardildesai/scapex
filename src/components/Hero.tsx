export default function Hero(): JSX.Element {
  return (
    <section className="relative bg-white pt-[84px] overflow-hidden" id="hero">
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start pt-8 pb-12 md:pt-10 md:pb-16 max-w-[1180px] mx-auto px-6 md:px-10">

        {/* ── Left: Content ── */}
        <div className="pt-5">
          <p className="text-[0.68rem] font-medium tracking-[0.06em] text-[#2a7a50] mb-5">
            Leading the Global Transition
          </p>
          <h1
            className="font-extrabold leading-[1.06] text-[#111] tracking-[-0.04em] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 4vw, 3.5rem)' }}
          >
            Empowering<br />
            <em className="italic font-bold text-[#1a5faa] font-serif not-italic" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
              Sustainability
            </em><br />
            Global<br />
            Growth
          </h1>
          <p className="text-[0.82rem] text-[#666] leading-[1.7] max-w-[340px] mb-8">
            Scapex deploys large-scale solar infrastructure with integrated
            logistics, creating the next generation of sustainable enterprises.
          </p>
          <a
            href="#industries"
            className="inline-block px-5 py-2.5 bg-[#0f2040] text-white text-[0.75rem] font-semibold tracking-wide rounded transition-colors duration-200 hover:bg-[#1a3a6a]"
            id="hero-explore-btn"
          >
            Explore Our Solutions
          </a>
        </div>

        {/* ── Right: Gray Placeholder Mosaic — hidden on mobile ── */}
        <div
          className="hidden md:block pt-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '8px',
            height: '380px',
          }}
          aria-hidden="true"
        >
          {/* Tall box — col 1, spans both rows */}
          <div
            className="bg-[#d4dae0] rounded-[6px]"
            style={{ gridColumn: '1', gridRow: '1 / 3' }}
          />
          {/* Top box — col 2, row 1 */}
          <div className="bg-[#d4dae0] rounded-[6px]" style={{ gridColumn: '2', gridRow: '1' }} />
          {/* Bottom box — col 2, row 2 */}
          <div className="bg-[#d4dae0] rounded-[6px]" style={{ gridColumn: '2', gridRow: '2' }} />
        </div>

      </div>
    </section>
  )
}
