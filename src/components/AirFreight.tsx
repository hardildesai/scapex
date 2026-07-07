function AirFeature({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <div className="border-l-2 border-[#c8a84b] pl-4">
      <div className="font-urbanist text-[0.82rem] font-bold text-[#111] mb-1">{title}</div>
      <div className="font-urbanist text-[0.70rem] text-[#666] leading-[1.7]">{text}</div>
    </div>
  )
}

export default function AirFreight(): JSX.Element {
  return (
    <section className="bg-ice-blue py-[72px]" id="air-freight">
      <div className="max-w-[1180px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Features */}
        <div>
          <p className="font-urbanist text-[0.70rem] font-bold tracking-[0.18em] uppercase text-[#c8a84b] mb-2">
            Global Airfreight
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#111] tracking-tight leading-[1.05] mb-9">
            Premium Air Freight
          </h2>

          <div className="flex flex-col gap-7">
            <AirFeature
              title="Express Airfreight"
              text="Time-critical shipments transported via priority boarding on passenger and dedicated cargo carriers with next-flight-out capabilities."
            />
            <AirFeature
              title="Scheduled Shipping"
              text="Cost-efficient regular slots on key airlines. Gives you full efficiency across the lane while maintaining schedule reliability."
            />
            <AirFeature
              title="Economy Freight"
              text="Economy freight to cargo booking capacity to transportation and warehousing facilities across 40+ countries worldwide."
            />
          </div>
        </div>

        {/* RIGHT: Aircraft image with branding card */}
        <div className="relative">
          <img
            src="/logistics-air.png"
            alt="Scapex cargo aircraft"
            className="w-full aspect-[4/3] object-cover block rounded-[2px]"
          />
          {/* Branded overlay card */}
          <div className="absolute bottom-5 left-5 bg-[#0d1b2e] text-white py-[14px] px-[18px] rounded-[2px] shadow-md">
            <div className="font-sans text-[1.0rem] font-bold text-white tracking-tight">Scapex</div>
            <div className="font-sans text-[0.55rem] text-white/60 tracking-[0.10em] uppercase mt-0.5">Air Cargo Division</div>
          </div>
        </div>
      </div>
    </section>
  )
}
