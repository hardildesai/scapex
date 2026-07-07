export default function CustomsCompliance(): JSX.Element {
  return (
    <section className="bg-white py-[72px]" id="customs-compliance">
      <div className="max-w-[1180px] mx-auto px-10">

        {/* Centered heading */}
        <div className="text-center mb-11">
          <p className="font-urbanist text-[0.70rem] font-bold tracking-[0.20em] uppercase text-[#c8a84b] mb-2.5">
            Regulatory Mastery
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#0d1b2e] tracking-tight leading-[1.1]">
            Customs &amp; Compliance Advisory
          </h2>
        </div>

        {/* 2-col: Left card | Right nested grid */}
        <div className="grid grid-cols-1 md:grid-cols-[42%_58%] gap-6">

          {/* ── LEFT: Bordered brokerage card ── */}
          <div className="bg-[#fcfcfa] border border-[#e8e8e4] rounded-[3px] p-9 shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300 h-full">
            {/* Inbox icon */}
            <div className="mb-5">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="14" width="32" height="22" rx="2" fill="#c8a84b" fillOpacity="0.15" stroke="#c8a84b" strokeWidth="1.6" />
                <rect x="10" y="8" width="24" height="8" rx="1.5" fill="#c8a84b" fillOpacity="0.2" stroke="#c8a84b" strokeWidth="1.4" />
                <line x1="6" y1="28" x2="38" y2="28" stroke="#c8a84b" strokeWidth="1.4" />
                <rect x="14" y="28" width="16" height="5" rx="1" fill="#c8a84b" />
              </svg>
            </div>

            <h3 className="font-serif text-[1.1rem] font-bold text-[#0d1b2e] mb-3">
              Import &amp; Export Brokerage
            </h3>
            <p className="font-urbanist text-[0.76rem] text-[#555] leading-[1.75] mb-6">
              Navigating complex tariff codes and regional regulations is our core competency. We ensure your cargo clears borders with zero friction.
            </p>

            {/* Numbered bullets */}
            <ol className="list-none p-0 m-0 flex flex-col gap-3.5">
              {[
                'Harmonized System (HS) Classification',
                'Duty & Tax Calculation & Minimization',
                'AEO & C-TPAT Compliance Audits',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-2.5 font-urbanist text-[0.74rem] text-[#555]">
                  <span className="font-bold text-[#0d1b2e] min-w-[20px] shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* ── RIGHT: Nested grid ── */}
          <div className="flex flex-col gap-4">

            {/* TOP: Dark navy card — Trade Compliance Advisory */}
            <div className="relative bg-[#0d1b2e] rounded-[3px] p-8 overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-sm">
              {/* Faint gavel watermark */}
              <div aria-hidden="true" className="absolute right-[-10px] bottom-[-10px] opacity-10 pointer-events-none z-0">
                <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
                  <rect x="30" y="10" width="18" height="50" rx="4" fill="#fff" transform="rotate(30 30 10)" />
                  <rect x="10" y="55" width="60" height="14" rx="5" fill="#fff" transform="rotate(30 10 55)" />
                  <rect x="20" y="70" width="55" height="10" rx="3" fill="#fff" transform="rotate(30 20 70)" />
                </svg>
              </div>

              <h3 className="font-serif text-[1.1rem] font-bold text-white mb-2.5 relative z-10">
                Trade Compliance Advisory
              </h3>
              <p className="font-urbanist text-[0.76rem] text-slate-300 leading-[1.72] mb-5 max-w-[320px] relative z-10">
                Strategic consulting to optimize your global trade lanes through FTA analysis and licensing support.
              </p>
              <a href="#contact-form" className="inline-block bg-transparent text-white font-mono text-[0.68rem] font-bold tracking-[0.14em] uppercase py-2 px-4 border border-white/55 rounded-[2px] transition-colors duration-200 hover:bg-white hover:text-[#0d1b2e] no-underline relative z-10">
                Request Advisory
              </a>
            </div>

            {/* BOTTOM row: Gold card + White card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Gold — Documentation */}
              <div className="bg-[#c8a84b] rounded-[3px] p-6 hover:scale-[1.01] transition-all duration-300 shadow-sm">
                <div className="mb-3.5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#0d1b2e" fillOpacity="0.25" stroke="#0d1b2e" strokeWidth="1.5" />
                    <polyline points="14 2 14 8 20 8" stroke="#0d1b2e" strokeWidth="1.4" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#0d1b2e" strokeWidth="1.3" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#0d1b2e" strokeWidth="1.3" />
                  </svg>
                </div>
                <div className="font-serif text-[0.95rem] font-bold text-[#0d1b2e] mb-2">Documentation</div>
                <p className="font-urbanist text-[0.72rem] text-[#0d1b2e]/85 leading-[1.68]">
                  Automated and manual checks for Bills of Lading, Certificates of Origin, and more.
                </p>
              </div>

              {/* White — 24/7 Support */}
              <div className="bg-[#fcfcfa] border border-[#e8e8e4] rounded-[3px] p-6 hover:scale-[1.01] transition-all duration-300 shadow-sm">
                <div className="mb-3.5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M22 16c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3" />
                  </svg>
                </div>
                <div className="font-serif text-[0.95rem] font-bold text-[#111] mb-2">24/7 Support</div>
                <p className="font-urbanist text-[0.72rem] text-[#666] leading-[1.68]">
                  Trade access to dedicated trade specialists across multiple time zones.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
