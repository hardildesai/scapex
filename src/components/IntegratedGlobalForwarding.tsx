/* Hexagon verified-badge icon + feature text */
function HexFeature({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <div className="flex gap-3.5 items-start">
      {/* Gold hexagon badge icon */}
      <div className="shrink-0 mt-[2px]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1.5 L19.5 6.25 L19.5 15.75 L11 20.5 L2.5 15.75 L2.5 6.25 Z" fill="#c8a84b" />
          <polyline points="7,11 10,14 15,9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      <div>
        <div className="font-urbanist text-[0.82rem] font-bold text-[#111] mb-[3px]">{title}</div>
        <div className="font-urbanist text-[0.76rem] text-slate-gray font-medium leading-[1.68]">{text}</div>
      </div>
    </div>
  )
}

export default function IntegratedLogistics(): JSX.Element {
  return (
    <section className="bg-warm-cream py-20" id="integrated-logistics">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 items-start">

        {/* LEFT: Image with floating overlapping amber badge */}
        <div className="relative pb-8 pr-8 w-full max-w-[420px] mx-auto md:mx-0">
          <img
            src="/logistics-aircraft.webp"
            alt="Scapex cargo aircraft at sunset"
            className="w-[100%] aspect-square object-cover rounded-[2px] shadow-sm block"
          />
          {/* Amber badge — overlapping bottom-right of the image */}
          <div className="absolute bottom-0 right-0 bg-[#ff9e24] w-[185px] h-[135px] flex flex-col justify-center items-center text-center rounded-[14px] shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <div className="font-serif text-[2.6rem] font-medium text-black leading-none mb-1">25+</div>
            <div className="font-serif text-[0.95rem] font-medium text-black leading-tight">Years Experience</div>
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div className="pt-2">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.08] mb-5">
            Integrated Logistics For A New Era.
          </h2>

          {/* First paragraph */}
          <p className="font-urbanist text-[0.78rem] text-slate-gray font-medium leading-[1.78] mb-5">
            Scapex Global Forwarding stands as the specialized logistics arm of Scapex Group, bridging the gap between global industrial demand and complex supply chain requirements.
          </p>

          {/* Second paragraph */}
          <p className="font-urbanist text-[0.78rem] text-slate-gray font-medium leading-[1.78] mb-8">
            Our heritage in renewable energy and large-scale infrastructure projects has ingrained a DNA of meticulous planning and risk mitigation in our forwarding services. We don't just move cargo; we manage integrity of your entire trade cycle through expert brokerage and proprietary carrier relationships.
          </p>

          {/* Feature bullets with hexagon badge icon */}
          <div className="flex flex-col gap-5">
            <HexFeature
              title="Group Synergy"
              text="Leveraging Scapex Group's global infrastructure for localized logistical excellence."
            />
            <HexFeature
              title="End-to-End Control"
              text="Direct oversight from the factory gate to final destination site."
            />
          </div>
        </div>

      </div>
    </section>
  )
}
