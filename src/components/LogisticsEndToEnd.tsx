import AnimatedCounter from './AnimatedCounter'

export default function LogisticsEndToEnd(): JSX.Element {
  return (
    <section className="bg-warm-cream py-24 px-6 md:px-10" id="end-to-end">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: Big Heading ── */}
        <div>
          <h2 className="font-serif text-[clamp(2.0rem,4.5vw,2.8rem)] font-bold text-[#0d1b2e] leading-[1.12] tracking-tight">
            End-to-End Logistics, Built Around Your Business
          </h2>
        </div>

        {/* ── Right: Description + Stats ── */}
        <div>
          <p className="font-urbanist text-[0.85rem] text-[#555] font-semibold leading-[1.8] mb-10 uppercase tracking-wide">
            Our supply chain integration ensures that your cargo is handled with surgical precision. From documentation and custom clearance to ocean freight and last-mile warehousing, Scapex coordinates every touchpoint to eliminate delays.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-[#e8e8e4]">
            {/* Stat 1 */}
            <div>
              <div className="font-serif text-[2.8rem] font-bold text-[#c8a84b] leading-none">
                <AnimatedCounter end={75} suffix="+" />
              </div>
              <div className="font-sans text-[0.70rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mt-2">
                Ocean Routes Served
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="font-serif text-[2.8rem] font-bold text-[#c8a84b] leading-none">
                24/7
              </div>
              <div className="font-sans text-[0.70rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mt-2">
                Real-Time Tracking
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
