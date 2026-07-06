export default function Hero(): JSX.Element {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden" id="hero">
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 animate-grid-move"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      {/* ── Content grid ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[48px] items-center min-h-screen max-w-[1180px] mx-auto px-6 md:px-10">

        {/* ── Left: Text content ── */}
        <div className="flex flex-col justify-center pt-[100px] pb-12 md:pt-[124px] md:pb-16">
          {/* Pill badge */}
          <p className="text-[0.68rem] font-bold px-4 py-1 rounded-full bg-ice-blue tracking-[0.06em] text-deep-navy font-serif italic mb-5 w-fit">
            Leading the global transition
          </p>

          {/* Main heading */}
          <h1 className="font-extrabold font-bricolage text-[clamp(2.8rem,9vw,4.5rem)] leading-[1.05] text-black tracking-[-0.04em] mb-6">
            Empowering<br />
            <em
              className="italic font-bold text-primary font-serif"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
            >
              Sustainability
            </em><br />
            Global Growth
          </h1>

          {/* Body */}
          <p className="text-[0.82rem] text-slate-gray font-urbanist uppercase leading-[1.7] max-w-[340px] mb-8">
            Scapex deploys large-scale solar infrastructure with integrated
            logistics, creating the next generation of sustainable enterprises.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#industries"
              className="inline-block px-5 py-2.5 bg-deep-navy text-white text-[0.75rem] font-mono tracking-wide rounded-xl transition-colors duration-200 hover:bg-[#1a3a6a]"
              id="hero-explore-btn"
            >
              Explore Our Solutions
            </a>
            <a
              href="#sustainability"
              className="inline-block px-5 py-2.5 border border-[#c8c8c8] text-[#333] text-[0.75rem] font-mono tracking-wide rounded-xl transition-colors duration-200 hover:border-[#111] hover:text-[#111]"
              id="hero-sustainability-btn"
            >
              Sustainability
            </a>
          </div>

          {/* Small stat strip — only shown on mobile as a teaser */}
          <div className="flex md:hidden gap-6 mt-10 pt-8 border-t border-[#e8e8e4]">
            {[
              { value: '500 Cr+', label: 'Revenue' },
              { value: '250+',    label: 'Projects' },
              { value: '20+',     label: 'Countries' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[1.2rem] font-extrabold font-bricolage text-primary tracking-[-0.04em] leading-none">{s.value}</div>
                <div className="text-[0.60rem] font-semibold text-slate-gray uppercase tracking-[0.12em] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Mosaic cards — desktop only ── */}
        <div className="hidden md:grid grid-cols-3 gap-4 pt-4 w-[700px]" aria-hidden="true">
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
