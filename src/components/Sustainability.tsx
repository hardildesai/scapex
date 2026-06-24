import * as React from "react"

export default function Sustainability(): JSX.Element {
  return (
    <section className="bg-warm-cream py-16 md:py-24" id="sustainability">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Single photo */}
          <div className="rounded-xl overflow-hidden h-[400px] md:h-[520px]">
            <img
              src="/sustainability.png"
              alt="Sustainability stacking blocks"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <p className="text-[0.7rem] font-bold font-serif tracking-[0.2em] uppercase text-slate-gray mb-5 font-sans">
              04 / SUSTAINABILITY FIRST
            </p>
            <h2
              className="font-serif font-bold text-black leading-[1.15] tracking-tight mb-6 text-4xl md:text-5xl"
            >
              Carbon Neutrality Is The<br />Benchmark.
            </h2>
            <p className="text-[0.87rem] text-slate-gray leading-[1.8] mb-8 font-urbanist">
              We aren't just moving products; we're moving the world toward a more
              sustainable equilibrium. Our agrivoltaic projects allow land to produce
              both food and energy simultaneously, maximizing resource efficiency.
            </p>

            <div className="flex flex-col gap-6 font-sans">
              {/* Item 1 */}
              <div>
                <h3 className="text-[0.95rem] font-bold text-black flex items-center gap-2">
                  <span className="text-slate-gray/50 font-normal font-mono">01.</span> Regenerative Exports
                </h3>
                <p className="text-[0.8rem] text-slate-gray font-urbanist leading-[1.65] pl-8 mt-1">
                  Working with farmers to implement zero-waste agricultural practices across our entirely supply chain.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="text-[0.95rem] font-bold text-black flex items-center gap-2">
                  <span className="text-slate-gray/50 font-normal font-mono">02.</span> Renewable Operations
                </h3>
                <p className="text-[0.8rem] text-slate-gray font-urbanist leading-[1.65] pl-8 mt-1">
                  Targeting 100% renewable energy-usage across all Scapex logistics centers by 2030.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

