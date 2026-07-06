export default function PartnerHero(): JSX.Element {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden" id="partner-hero">
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 animate-grid-move"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start pt-24 pb-12 md:pt-[124px] md:pb-16 max-w-[1180px] mx-auto px-6 md:px-10">

        {/* ── Left: Content ── */}
        <div className="pt-5 relative z-10">
          {/* Pill badge */}
          <div className="mb-5">
            <span className="inline-block bg-ice-blue rounded-full px-4 py-1 text-[0.68rem] italic text-primary font-serif font-bold tracking-[0.06em]">
              Partner with Us
            </span>
          </div>

          {/* Heading — matching Hero.tsx style */}
          <h1 className="font-extrabold font-bricolage text-[clamp(2.4rem,8vw,4.5rem)] leading-[1.06] text-black tracking-[-0.04em] mb-6">
            Partnering With<br />
            <em className="italic font-bold text-primary font-serif" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
              Global
            </em><br />
            Excellence
          </h1>

          {/* Body text */}
          <p className="text-[0.82rem] text-slate-gray font-urbanist uppercase leading-[1.7] max-w-[340px] mb-8">
            At Scapex Group, we believe that industry-defining scale is
            achieved through strategic, high-trust alliances. We seek
            partners who share our commitment to precision,
            sustainability, and uncompromising quality.
          </p>


        </div>

        {/* ── Right: Image ── */}
        <div className="relative w-full h-[516px] rounded-2xl overflow-hidden shadow-xl mt-4 md:mt-0 z-10">
          <img
            src="/partner-hero.png"
            alt="Cargo container ship at port"
            className="w-full h-full object-cover object-center block"
          />
        </div>

      </div>
    </section>
  )
}
