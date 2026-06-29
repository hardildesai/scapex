export default function CareersHero(): JSX.Element {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen pt-[84px]" id="careers-hero">
      {/* Content wrapper centered vertically */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full min-h-[calc(100vh-84px)] relative flex items-center">

        {/* Grid for content and diamonds */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center min-h-auto pt-6 pb-0 w-full">

          {/* Left: Text */}
          <div className="pb-10 md:pb-14 pt-10 relative z-10">
            {/* Pill label */}
            <div className="mb-5">
              <span className="inline-block bg-ice-blue font-bold rounded-full py-[6px] px-[18px] text-[0.72rem] italic text-primary font-serif tracking-[0.02em]">
                Explore this Life with Us
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bricolage text-[clamp(2.2rem,6.5vw,4rem)] font-extrabold text-[#111111] leading-[1.05] tracking-[-0.03em] mb-5">
              Shape the Future of<br />Global Architecture
            </h1>

            {/* Body */}
            <p className="font-urbanist text-[0.72rem] text-[#666] leading-[1.8] tracking-[0.05em] uppercase max-w-[420px] mb-7">
              We are looking for visionary thinkers, engineers and strategists to build the physical foundation of tomorrow. Join a culture of uncompromising excellence and technical precision.
            </p>

            {/* Button */}
            <a href="#openings" id="careers-explore-btn" className="inline-block bg-deep-navy text-white font-mono text-[0.72rem] font-bold tracking-[0.16em] uppercase py-3 px-[22px] rounded-none transition-colors duration-200 no-underline hover:bg-[#1a3a6a]">
              Explore Open Roles
            </a>
          </div>

          {/* Right: Nested-diamond only (image moved to outer wrapper for absolute bottom alignment) */}
          <div className="hidden md:block relative h-[460px]">
            {/* Nested diamond SVG */}
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 520 460" preserveAspectRatio="xMidYMid meet" className="w-full h-full" style={{ overflow: 'visible' }} fill="none">
                {[70, 130, 190, 250, 310, 370, 430, 490, 550, 610, 670].map((r, i) => {
                  const cx = 300, cy = 230
                  const pts = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`
                  const colors = ['#1a5faa', '#F5A31C', '#2E8B57']
                  return <polygon key={i} points={pts} stroke={colors[i % colors.length]} strokeWidth="1.4" fill="none" opacity={0.8 - i * 0.04} />
                })}
              </svg>
            </div>
          </div>

        </div>

        {/* Worker image - positioned at the absolute bottom of the centered max-w container */}
        <div className="hidden md:block absolute bottom-0 right-6 md:right-[-60px] z-10 w-[265%] max-w-[1050px]">
          <img src="/careers-hero.png" alt="Scapex professional in safety vest" className="w-full h-auto block scale-x-[-1]" />
        </div>

      </div>
    </section>
  )
}
