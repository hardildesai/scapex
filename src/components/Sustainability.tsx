

const bullets: string[] = [
  'Achieve net-zero across all operating divisions by 2035',
  'Deploy 5 GW of solar capacity with zero-waste manufacturing',
  'Integrate circular agriculture practices reducing emissions by 60%',
  'Operate carbon-neutral logistics across 40+ countries',
]

export default function Sustainability(): JSX.Element {
  return (
    <section className="bg-white py-[72px] pb-[80px]" id="sustainability">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[64px] items-center">
          {/* Left: 2×2 photo grid */}
          <div aria-hidden="true">
            <div className="grid grid-cols-2 grid-rows-2 gap-2.5 h-[280px] md:h-[380px]">
              <div className="rounded-[6px] overflow-hidden bg-[#d4dae0] flex items-center justify-center">
                <img src="/sustainability.png" alt="Eco hands with seedling" className="w-full h-full object-cover block" />
              </div>
              <div className="rounded-[6px] overflow-hidden flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1a6b3c] to-[#2a9d5c]">
                <span className="text-2xl text-white">♻</span>
                <p className="text-[0.72rem] font-semibold text-white/90 tracking-wide uppercase text-center px-3">Sustainable Practices</p>
              </div>
              <div className="rounded-[6px] overflow-hidden bg-[#d4dae0] flex items-center justify-center">
                <img src="/solar.png" alt="Solar panels" className="w-full h-full object-cover block" />
              </div>
              <div className="rounded-[6px] overflow-hidden bg-[#d4dae0] flex items-center justify-center">
                <img src="/agro.png" alt="Agriculture" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
          {/* Right: Text */}
          <div className="pl-2">
            <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#888] mb-4.5">04 / Sustainability</p>
            <h2 className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-bold text-[#111] leading-[1.2] tracking-tight mb-5">
              Carbon Neutrality Is The{' '}
              <em className="italic font-serif text-[#1a5faa]">Benchmark</em>
            </h2>
            <p className="text-[0.82rem] text-[#666] leading-[1.75] mb-7 max-w-[400px]">
              We are committed to a future where industrial scale and environmental stewardship are not opposing forces — they are engineered to coexist at every level of our operations.
            </p>
            <ul className="flex flex-col gap-3.5 list-none" role="list">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.80rem] text-[#333] leading-[1.6]">
                  <span className="flex-shrink-0 w-[7px] h-[7px] rounded-full bg-[#c8a84b] mt-[5px]" aria-hidden="true" />
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
