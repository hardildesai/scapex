export default function GlobalStewardship(): JSX.Element {
  return (
    <section
      id="global-stewardship"
      className="bg-warm-cream pt-32 pb-20 px-6 md:px-12 relative z-10"
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">

        {/* LEFT: Text & Details Card */}
        <div className="bg-white border-r-[6px] border-gold p-8 md:p-12 shadow-sm flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h2 className="font-bricolage text-[clamp(2.0rem,4vw,2.8rem)] font-bold text-black leading-tight">
              Our Global Stewardship
            </h2>

            {/* Small horizontal gold line divider */}
            <div className="w-32 h-[3px] bg-gold mt-4 mb-8" />

            {/* Description (Uppercase, tracking-wider, leading-relaxed) */}
            <p className="font-urbanist text-[0.68rem] md:text-[0.72rem] text-black font-semibold tracking-wider leading-relaxed uppercase mb-8">
              SCAPEX EXPORTS PVT. LTD. IS THE INTERNATIONAL TRADE POWERHOUSE OF THE SCAPEX GROUP, SPECIALIZING IN THE SOURCING, PROCESSING, AND EXPORT OF PREMIUM AGRO COMMODITIES. ETHNICALLY SOURCED FROM INDIA'S MOST FERTILE AGRICULTURAL HEARTLANDS, OUR PRODUCTS REACH DISCERNING BUYERS ACROSS MORE THAN 50 COUNTRIES WORLDWIDE.
            </p>

            {/* Quality Labs Section */}
            <div className="mb-6">
              <span className="inline-block font-serif font-bold text-[0.72rem] md:text-[0.76rem] tracking-wider text-[#c8a84b] uppercase border-b border-[#c8a84b]/40 pb-0.5 mb-2 cursor-default">
                Quality Labs
              </span>
              <p className="font-urbanist text-[0.75rem] md:text-[0.8rem] text-black font-semibold leading-relaxed">
                Gujarat-based state-of-the-art facilities with cold storage and fumigation.
              </p>
            </div>

            {/* Blockchain Traceability Section */}
            <div className="mb-8">
              <span className="inline-block font-serif font-bold text-[0.72rem] md:text-[0.76rem] tracking-wider text-[#c8a84b] uppercase border-b border-[#c8a84b]/40 pb-0.5 mb-2 cursor-default">
                Blockchain Traceability
              </span>
              <p className="font-urbanist text-[0.75rem] md:text-[0.8rem] text-black font-semibold leading-relaxed">
                Full transparency from field to port, ensuring zero-compromise quality.
              </p>
            </div>
          </div>

          {/* Highlight Banner Card at Bottom */}
          <div className="bg-[#fcf7ec] p-4 border border-[#c8a84b]/10 rounded-sm">
            <p className="font-sans italic font-bold text-[0.72rem] md:text-[0.76rem] text-black text-center">
              *Partnering with over 1,500 smallholder farmers through fair-trade cooperatives.*
            </p>
          </div>
        </div>

        {/* RIGHT: Farmer portrait image */}
        <div className="flex items-stretch">
          <img
            src="/exports-farmer.webp"
            alt="Indian farmer in field at sunset"
            className="w-full h-full object-cover shadow-sm min-h-[400px] md:min-h-full"
          />
        </div>

      </div>
    </section>
  )
}
