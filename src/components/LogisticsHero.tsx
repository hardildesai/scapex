export default function LogisticsHero(): JSX.Element {
  return (
    <section
      id="logistics-hero"
      className="relative bg-white mt-[52px] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px] md:min-h-[590px]">
        {/* LEFT: Text */}
        <div className="relative bg-white flex flex-col justify-center z-10 logistics-hero-left">
          {/* Content Wrapper aligned to the standard container left boundary */}
          <div className="w-full max-w-[550px] ml-auto py-[60px] px-10 md:py-[60px] md:px-10 box-border logistics-hero-wrapper">
            {/* Label Badge */}
            <div className="mb-5">
              <span className="inline-block font-serif italic text-[0.62rem] font-semibold text-gold bg-gold/15 py-[6px] px-[14px] rounded-[20px] tracking-[0.04em]">
                Premium Global Forwarding
              </span>
            </div>

            {/* Heading */}
            <h1 className=" font-bold tracking-[-0.02em] leading-[1.05] mb-6">
              <span className="block font-serif text-[clamp(2.4rem,4vw,3.6rem)] text-[#0d1b2e]">
                Global Logistics
              </span>
              <span className="block font-bricolage font-extrabold text-[clamp(2.4rem,4vw,3.6rem)] text-gold">
                Simplified
              </span>
            </h1>

            {/* Body */}
            <p className="font-urbanist text-[0.68rem] font-semibold text-[#0d1b2e]/70 leading-[1.7] tracking-[0.05em] uppercase max-w-[430px] mb-8">
              Professional end-to-end freight forwarding managed with surgical precision. From heavy industrial machinery to delicate solar components, we move the world's most critical assets.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-[14px] mb-10">
              <a
                href="#contact-form"
                id="logistics-quote-btn"
                className="inline-block bg-[#0d1b2e] text-white font-mono text-[0.68rem] font-bold tracking-[0.08em] uppercase py-3 px-6 rounded-lg text-decoration-none transition-colors duration-200 hover:bg-[#11243b] no-underline"
              >
                Get a Quote
              </a>
              <a
                href="#sea-freight"
                id="logistics-track-btn"
                className="inline-block bg-white text-[#0d1b2e] font-mono text-[0.68rem] font-bold tracking-[0.08em] uppercase py-3 px-[22px] rounded-lg border-[1.5px] border-[#0d1b2e] text-decoration-none transition-colors duration-200 hover:bg-gray-50 no-underline"
              >
                View Solutions
              </a>
            </div>

            {/* Footer country metric */}
            <div className="flex items-center gap-4">
              <div className="w-[120px] h-[2px] bg-gold" />
              <span className="font-urbanist text-[0.68rem] font-extrabold text-[#0d1b2e] tracking-[0.05em]">
                75+ COUNTRIES
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Hero image */}
        <div className="relative w-full h-[400px] md:h-full logistics-hero-right">
          <img
            src="/logistics-hero.png"
            alt="Cargo ship and aircraft logistics"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
