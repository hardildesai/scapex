export default function Hero(): JSX.Element {
  return (
    <section className="relative bg-white min-h-screen  overflow-hidden" id="hero">
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 animate-grid-move"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start pt-8 pb-12 md:pt-[124px] md:pb-16 max-w-[1180px] mx-auto px-6 md:px-10">

        {/* ── Left: Content ── */}
        <div className="pt-5">
          <p className="text-[0.68rem] font-bold px-4 py-1 rounded-full bg-ice-blue tracking-[0.06em] text-deep-navy font-serif italic mb-5 w-fit">
            Leading the global transition
          </p>
          <h1
            className="font-extrabold font-bricolage text-7xl leading-[1.06] text-black tracking-[-0.04em] mb-6"

          >
            Empowering<br />
            <em className="italic font-bold text-primary font-serif " style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
              Sustainability
            </em><br />
            Global
            Growth
          </h1>
          <p className="text-[0.82rem] text-slate-gray font-urbanist uppercase leading-[1.7] max-w-[340px] mb-8">
            Scapex deploys large-scale solar infrastructure with integrated
            logistics, creating the next generation of sustainable enterprises.
          </p>
          <a
            href="#industries"
            className="inline-block px-5 py-2.5 bg-deep-navy text-white text-[0.75rem] font-mono tracking-wide rounded-xl transition-colors duration-200 hover:bg-[#1a3a6a]"
            id="hero-explore-btn"
          >
            Explore Our Solutions
          </a>
        </div>

        {/* ── Right: Gray Placeholder Mosaic ── */}
        <div className="grid grid-cols-3 gap-4 pt-4 w-[700px]" aria-hidden="true">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#d5d2d2] rounded-2xl h-[270px]" />
            <div className="bg-[#d5d2d2] rounded-2xl h-[230px]" />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#d5d2d2] rounded-2xl h-[310px]" />
            <div className="bg-[#d5d2d2] rounded-2xl h-[190px]" />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#d5d2d2] rounded-2xl h-[516px]" />
          </div>
        </div>

      </div>
    </section>
  )
}
