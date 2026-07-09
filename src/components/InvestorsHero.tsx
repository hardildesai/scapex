export default function InvestorsHero(): JSX.Element {
  return (
    <section id="investors-hero" className="relative w-full overflow-hidden mt-[84px] min-h-[400px] md:h-[600px]">
      <img src="/investors-hero.webp" alt="Scapex investor relations meeting" className="absolute inset-0 w-full h-full object-cover object-[center_20%]" />
      {/* Gradient */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.55)_38%,rgba(255,255,255,0.88)_65%,rgba(255,255,255,0.95)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(255,255,255,0.30)_100%)]" />

      {/* Text — responsive positioning */}
      <div className="absolute inset-0 flex items-end justify-start md:justify-end px-6 md:px-[52px] pb-8 md:pb-16">
        <div className="max-w-[560px]">
          <div className="mb-3">
            <span className="inline-block bg-ice-blue rounded-full px-[14px] py-[4px] text-[0.70rem] italic text-primary font-serif">
              Investor Relationships
            </span>
          </div>
          <h1 className="font-bricolage text-[clamp(1.8rem,5vw,4.4rem)] font-extrabold text-[#0f0f0f] leading-[1.06] tracking-[-0.02em] mb-[12px]">
            Creating <span className="text-[#a0a8b4]">Sustainable</span> Value
          </h1>
          <p className="font-urbanist text-[0.7rem] font-bold text-black/90 leading-[1.85] tracking-[0.045em] uppercase max-w-[380px]">
            Scapex Group deliver a financial robust performance driven by excellence and a long term commitment to sustainable growth. Explore our latest metrics, reports, and strategic insights
          </p>
        </div>
      </div>
    </section>
  )
}
