export default function TeamImage(): JSX.Element {
  return (
    <div className="w-full bg-warm-cream py-20 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">

        <div className="relative">
          {/* Faded Background Heading for depth */}
          <div className="absolute -top-16 md:-top-24 left-0 md:left-0 select-none pointer-events-none z-0">
            <span className="font-serif italic text-[clamp(3.5rem,10vw,8.5rem)] text-[#1a5faa]/[0.1] leading-none block uppercase tracking-wider">
              Collaboration
            </span>
          </div>

          {/* White picture frame with soft shadow & interactive lift */}
          <div className="relative bg-white p-4 md:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-slate-100 z-10 transition-all duration-500 hover:shadow-[0_45px_85px_rgba(0,0,0,0.14)] hover:-translate-y-1.5">
            {/* Inner passpartout border */}
            <div className="overflow-hidden border border-[#F5A31C]/[0.2]">
              <img
                src="/careers-team.webp"
                alt="Scapex team collaborating on-site"
                className="w-full h-full object-cover object-center block transition-transform duration-700 hover:scale-[1.03] ease-out"
                style={{ height: 'clamp(280px, 45vw, 550px)' }}
              />
            </div>

            {/* Museum-style Gallery Tag Card overlapping bottom right */}
            <div className="absolute -bottom-6 right-6 md:right-12 bg-white border border-[#d4cec4] px-6 py-4 shadow-lg z-20 max-w-[240px] pointer-events-none md:pointer-events-auto">
              <p className="font-serif italic text-[#1a5faa] text-[0.62rem] tracking-[0.05em] uppercase mb-0.5">
                On-Site Portfolio
              </p>
              <h4 className="font-sans font-bold text-[#0D2E45] text-[0.72rem] tracking-[0.1em] uppercase mb-1">
                Solar Development II
              </h4>
              <div className="w-full h-[1px] bg-[#e6dfd5] my-2" />
              <p className="font-mono text-[0.55rem] text-[#5B6A7A] tracking-wider leading-relaxed">
                SCAPEX TEAM LOGISTICS & PRECISION ASSEMBLY
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
