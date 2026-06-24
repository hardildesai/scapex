export default function SustainabilityHero(): JSX.Element {
  return (
    <section
      id="sust-hero"
      className="relative w-full overflow-hidden"
      style={{
        marginTop: '84px',
        minHeight: '520px',
      }}
    >
      {/* Background Image using native img tag with absolute inline styling to prevent stretching */}
      <img
        src="/sus-hero.png"
        alt="Green plant growing on solar panel"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Container */}
      <div
        className="max-w-[1180px] mx-auto px-6 md:px-10 w-full flex items-center relative z-10 py-28"
        style={{ minHeight: '520px' }}
      >
        {/* Floating sharp white box */}
        <div
          className="bg-white p-8 md:p-12 shadow-2xl max-w-[460px] w-full"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="mb-9">
            <h1 className="text-[#111] leading-[1.08] tracking-tight">
              <span className="block font-bricolage text-[2.2rem] md:text-[2.6rem] font-bold text-black mb-1">
                Powering a
              </span>
              <span className="block font-serif text-[2.2rem] md:text-[3rem] font-black italic">
                <span className="text-[#2a6840]">Greener</span> <span className="text-black">&amp;</span>
              </span>
              <span className="block font-serif text-[2.2rem] md:text-[3rem] font-black italic text-[#1a5faa] -mt-2">
                Sustainable
              </span>
              <span className="block font-bricolage text-[2.2rem] md:text-[2.6rem] font-bold text-black mt-1">
                Tomorrow.
              </span>
            </h1>
          </div>

          <p
            className="font-urbanist text-[0.62rem] text-[#444] leading-[1.8] tracking-[0.06em] uppercase"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            SCAPEX IS DEDICATED TO LEADING INDUSTRIAL REVOLUTION. OUR MISSION IS CLEAR:
            ACHIEVE NET ZERO OPERATIONS BY 2050 THROUGH UNCOMPROMISING TECHNOLOGICAL
            INNOVATIONS AND RIGOROUS OPERATIONAL EFFICIENCY.
          </p>
        </div>
      </div>

      {/* Bottom fade out gradient to seamlessly transition to white background below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-1"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)',
        }}
      />
    </section>
  )
}
