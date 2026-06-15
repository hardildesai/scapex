const bullets: string[] = [
  'Achieve net-zero across all operating divisions by 2035',
  'Deploy 5 GW of solar capacity with zero-waste manufacturing',
  'Integrate circular agriculture practices reducing emissions by 60%',
  'Operate carbon-neutral logistics across 40+ countries',
]

export default function Sustainability(): JSX.Element {
  return (
    <section className="bg-white pt-14 pb-16" id="sustainability">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: 2×2 photo grid */}
          <div aria-hidden="true">
            <div
              className="grid grid-cols-2 grid-rows-2 gap-2"
              style={{ height: '300px' }}
            >
              <div className="rounded overflow-hidden bg-[#d4dae0]">
                <img src="/sustainability.png" alt="" className="w-full h-full object-cover block" />
              </div>
              <div className="rounded overflow-hidden flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1a6b3c] to-[#2a9d5c]">
                <span className="text-2xl text-white">♻</span>
                <p className="text-[0.70rem] font-semibold text-white/90 tracking-wide uppercase text-center px-3">
                  Sustainable Practices
                </p>
              </div>
              <div className="rounded overflow-hidden bg-[#d4dae0]">
                <img src="/solar.png" alt="" className="w-full h-full object-cover block" />
              </div>
              <div className="rounded overflow-hidden bg-[#d4dae0]">
                <img src="/agro.png" alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-[0.63rem] font-semibold tracking-[0.15em] uppercase text-[#888] mb-4">
              04 / Sustainability
            </p>
            <h2
              className="font-bold text-[#111] leading-[1.2] tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.45rem, 2.4vw, 2.0rem)' }}
            >
              Carbon Neutrality Is The{' '}
              <em style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', color: '#1a5faa' }}>
                Benchmark
              </em>
              .
            </h2>
            <p className="text-[0.82rem] text-[#666] leading-[1.75] mb-7 max-w-[400px]">
              We are committed to a future where industrial scale and environmental
              stewardship are not opposing forces — they are engineered to coexist
              at every level of our operations.
            </p>
            <ul className="flex flex-col gap-3 list-none" role="list">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.80rem] text-[#333] leading-[1.6]">
                  <span
                    className="flex-shrink-0 rounded-full bg-[#c8a84b] mt-[5px]"
                    style={{ width: 7, height: 7 }}
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
