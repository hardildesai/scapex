interface Bullet {
  title: string
  desc: string
}

const bullets: Bullet[] = [
  {
    title: 'Control Center',
    desc: '24/7 monitoring of all cargo lanes and port-to-port connections with live dashboard.',
  },
  {
    title: 'Air Cargo Access',
    desc: 'Priority allocation and chartered flight options across major global airports.',
  },
  {
    title: 'CFS Distribution',
    desc: 'In-house container freight stations for efficient custom inspection and storage.',
  },
]

export default function LogisticsInfrastructure(): JSX.Element {
  return (
    <section className="bg-warm-cream py-24 px-6 md:px-10" id="logistics-infrastructure">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Text ── */}
        <div>
          <h2 className="font-serif text-[clamp(2.0rem,4.5vw,2.8rem)] font-bold text-[#0d1b2e] leading-[1.12] tracking-tight mb-10">
            Infrastructure That Empowering
          </h2>

          <div className="flex flex-col gap-8">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-4.5 items-start">
                {/* Gold diamond/star icon */}
                <div className="shrink-0 mt-1.5 text-[#c8a84b]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l3.818 8.182L24 12l-8.182 3.818L12 24l-3.818-8.182L0 12l8.182-3.818z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[0.88rem] font-bold text-[#0d1b2e] mb-1.5">{b.title}</h4>
                  <p className="font-urbanist text-[0.78rem] text-[#666] font-semibold leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Control Room Image ── */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[340px] md:h-[420px] border border-[#e8e8e4]">
          <img
            src="/logistics-control-room.png"
            alt="Scapex Logistics Operations Center"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
