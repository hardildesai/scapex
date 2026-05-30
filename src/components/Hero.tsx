

export default function Hero(): JSX.Element {
  return (
    <section
      className="relative min-h-screen bg-white pt-[84px] overflow-hidden"
      id="hero"
    >
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:44px_44px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start pt-12 pb-20 max-w-[1180px] mx-auto px-10 w-full">
        {/* ── Left: Content ── */}
        <div className="pt-5">
          <p className="text-[0.70rem] font-medium tracking-wider text-[#2a7a50] mb-5">Leading the Global Transition</p>
          <h1 className="text-[clamp(2.6rem,4vw,3.5rem)] font-extrabold leading-[1.06] text-[#111] tracking-tight mb-6">
            Empowering<br />
            <em className="italic font-bold text-[#1a5faa] not-italic:font-serif tracking-tight">Sustainability</em><br />
            Global<br />
            Growth
          </h1>
          <p className="text-[0.82rem] text-[#666] leading-[1.7] max-w-[340px] mb-8 font-normal">
            Scapex deploys large-scale solar infrastructure with integrated logistics, creating the next generation of sustainable enterprises.
          </p>
          <a
            href="#industries"
            className="inline-block px-5 py-2.5 bg-[#0f2040] text-white text-[0.75rem] font-semibold tracking-wide rounded transition-colors duration-200 hover:bg-[#1a3a6a]"
            id="hero-explore-btn"
          >
            Explore Our Solutions
          </a>
        </div>
        {/* ── Right: Placeholder Image Mosaic ── */}
        <div
          className="grid grid-cols-[1.15fr_1fr] grid-rows-2 gap-2.5 h-[420px] pt-2"
          aria-hidden="true"
        >
          {/* Col A: one tall box */}
          <div className="bg-[#d4dae0] rounded-[6px] col-start-1 row-start-1 row-span-2" />
          {/* Col B: two stacked boxes */}
          <div className="bg-[#d4dae0] rounded-[6px] col-start-2 row-start-1" />
          <div className="bg-[#d4dae0] rounded-[6px] col-start-2 row-start-2" />
        </div>
      </div>
    </section>
  )
}
