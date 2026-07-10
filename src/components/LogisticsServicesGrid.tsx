export default function LogisticsServicesGrid(): JSX.Element {
  return (
    <section className="bg-warm-cream py-24 px-6 md:px-10" id="logistics-services">
      <div className="max-w-[1180px] mx-auto">

        {/* ── Title ── */}
        <div className="mb-14">
          <h2 className="font-serif text-[2.4rem] font-bold text-[#0d1b2e] tracking-tight leading-none">
            Our Logistics Services
          </h2>
          <div className="w-24 h-1 bg-gold mt-5" />
        </div>

        {/* ── 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ── Card 1: Freight Forwarding (spans 2 cols) ── */}
          <div className="md:col-span-2 relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[340px] group border border-[#e8e8e4] shadow-sm flex flex-col justify-between p-8 md:p-10">
            {/* Background Image */}
            <img
              src="/logistics-hero.webp"
              alt="Freight Forwarding Terminal"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Semi-transparent white/grey frosted overlay covering the entire container */}
            <div className="absolute inset-0 bg-[#faf8f4]/65 backdrop-blur-[1px]" />

            {/* Content (z-10 relative) */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* White rounded icon container */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#0d1b2e] shadow-sm mb-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-[1.65rem] font-bold text-[#0d1b2e] mb-3">
                  Freight Forwarding
                </h3>
                <p className="font-sans text-[0.82rem] text-[#555] font-semibold leading-relaxed max-w-[480px]">
                  Comprehensive Sea (FCL/LCL) and Air freight solutions connecting major global hubs.
                </p>
              </div>
            </div>
          </div>

          {/* ── Card 2: Road Transportation ── */}
          <div className="bg-white border border-[#e8e8e4] rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[300px] md:min-h-[340px] transition-all duration-300 hover:scale-[1.01]">
            <div className="text-[#c8a84b] mb-12">
              {/* Gold truck icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-[1.65rem] font-bold text-[#0d1b2e] mb-3">
                Road Transportation
              </h3>
              <p className="font-sans text-[0.82rem] text-[#555] font-semibold leading-relaxed">
                PAN-India coverage, FTL/PTL, with direct Mundra &amp; Kandla connectivity.
              </p>
            </div>
          </div>

          {/* ── Card 3: Warehousing ── */}
          <div className="bg-[#081225] border border-white/5 rounded-xl p-8 md:p-10 shadow-lg flex flex-col justify-between min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-[1.01]">
            <div className="text-[#c8a84b] mb-12">
              {/* Gold warehouse icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-[1.65rem] font-bold text-white mb-3">
                Warehousing
              </h3>
              <p className="font-sans text-[0.82rem] text-white/60 font-semibold leading-relaxed">
                State-of-the-art facilities in Ahmedabad, Sanand, and Naroda.
              </p>
            </div>
          </div>

          {/* ── Card 4: Customs Brokerage ── */}
          <div className="bg-white border border-[#e8e8e4] rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-[1.01]">
            <div className="text-[#c8a84b] mb-12">
              {/* Gold shield outline icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-[1.65rem] font-bold text-[#0d1b2e] mb-3">
                Customs Brokerage
              </h3>
              <p className="font-sans text-[0.82rem] text-[#555] font-semibold leading-relaxed">
                Licensed CHA services for smooth, compliant border transitions.
              </p>
            </div>
          </div>

          {/* ── Card 5: Cold Chain ── */}
          <div className="bg-[#f4efe8] border border-[#e0dacd] rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-[1.01]">
            <div className="text-[#3b82f6] mb-12">
              {/* Blue snowflake icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-[1.65rem] font-bold text-[#0d1b2e] mb-3">
                Cold Chain
              </h3>
              <p className="font-sans text-[0.82rem] text-[#555] font-semibold leading-relaxed">
                Temperature-controlled logistics for Pharma and Perishables.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
