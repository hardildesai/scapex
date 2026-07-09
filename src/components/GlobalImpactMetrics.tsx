export default function GlobalImpactMetrics(): JSX.Element {
  return (
    <section id="impact-metrics" className="py-8 md:py-30 bg-ice-blue">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <p className="font-urbanist text-[1rem] font-bold  uppercase text-primary mb-4">
          Metrics That Matter
        </p>

        {/* Stack on mobile, 2-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: image */}
          <div className="overflow-hidden rounded-sm aspect-[4/3] max-h-[380px]">
            <img
              src="/sust-metrics.webp"
              alt="Tree in solar field"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Right: stats */}
          <div>
            <p className="font-bricolage text-[2rem]  text-[#2a4a6a] mb-[2px] font-normal">
              Global Impact
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold text-black tracking-[-0.03em] leading-none mb-6">
              Metrics
            </h2>

            <div className="mb-[18px]">
              <div className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-[#111] tracking-[-0.04em] leading-none mb-1">
                1000+
              </div>
              <div className="font-urbanist text-[0.8rem] font-bold tracking-[0.15em] uppercase text-[#4a7aa0]">
                MW Solar Deployed Globally
              </div>
            </div>

            <div>
              <div className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-[#111] tracking-[-0.04em] leading-none mb-1">
                500k+
              </div>
              <div className="font-urbanist text-[0.8rem] font-bold tracking-[0.15em] uppercase text-[#4a7aa0]">
                Tonnes CO₂ Offset Annually
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

