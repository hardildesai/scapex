import { GOLD, NAVY, FF_SANS, FF_SERIF } from './LogisticsConstants'

export default function CustomsCompliance(): JSX.Element {
  return (
    <section style={{ background: '#fff', padding: '72px 0' }} id="customs-compliance">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Centered heading */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
            Regulatory Mastery
          </p>
          <h2 style={{ fontFamily: FF_SERIF, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#0d1b2e', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Customs &amp; Compliance Advisory
          </h2>
        </div>

        {/* 2-col: Left card | Right nested grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '42% 58%', gap: '24px', alignItems: 'start' }}>

          {/* ── LEFT: Bordered brokerage card ── */}
          <div style={{ border: '1px solid #e0e0dc', borderRadius: '3px', padding: '36px 32px' }}>
            {/* Inbox icon */}
            <div style={{ marginBottom: '20px' }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="14" width="32" height="22" rx="2" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.6"/>
                <rect x="10" y="8" width="24" height="8" rx="1.5" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.4"/>
                <line x1="6" y1="28" x2="38" y2="28" stroke={GOLD} strokeWidth="1.4"/>
                <rect x="14" y="28" width="16" height="5" rx="1" fill={GOLD}/>
              </svg>
            </div>

            <h3 style={{ fontFamily: FF_SANS, fontSize: '1.05rem', fontWeight: 700, color: '#111', marginBottom: '12px' }}>
              Import &amp; Export Brokerage
            </h3>
            <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: '#555', lineHeight: 1.75, marginBottom: '24px' }}>
              Navigating complex tariff codes and regional regulations is our core competency. We ensure your cargo clears borders with zero friction.
            </p>

            {/* Numbered bullets */}
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Harmonized System (HS) Classification',
                'Duty & Tax Calculation & Minimization',
                'AEO & C-TPAT Compliance Audits',
              ].map((item, i) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: FF_SANS, fontSize: '0.72rem', color: '#444' }}>
                  <span style={{ fontWeight: 700, color: '#111', minWidth: '20px', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* ── RIGHT: Nested grid ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* TOP: Dark navy card — Trade Compliance Advisory */}
            <div style={{ position: 'relative', background: NAVY, borderRadius: '3px', padding: '32px 28px', overflow: 'hidden' }}>
              {/* Faint gavel watermark */}
              <div aria-hidden="true" style={{ position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.12 }}>
                <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
                  <rect x="30" y="10" width="18" height="50" rx="4" fill="#fff" transform="rotate(30 30 10)"/>
                  <rect x="10" y="55" width="60" height="14" rx="5" fill="#fff" transform="rotate(30 10 55)"/>
                  <rect x="20" y="70" width="55" height="10" rx="3" fill="#fff" transform="rotate(30 20 70)"/>
                </svg>
              </div>

              <h3 style={{ fontFamily: FF_SANS, fontSize: '1.0rem', fontWeight: 700, color: '#fff', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                Trade Compliance Advisory
              </h3>
              <p style={{ fontFamily: FF_SANS, fontSize: '0.70rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.72, marginBottom: '20px', maxWidth: '300px', position: 'relative', zIndex: 1 }}>
                Strategic consulting to optimize your global trade lanes through FTA analysis and licensing support.
              </p>
              <a href="#contact-form" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: FF_SANS, fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '8px 16px', border: '1px solid rgba(255,255,255,0.55)', borderRadius: '2px', textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Request Advisory
              </a>
            </div>

            {/* BOTTOM row: Gold card + White card */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

              {/* Gold — Documentation */}
              <div style={{ background: GOLD, borderRadius: '3px', padding: '24px 22px' }}>
                <div style={{ marginBottom: '14px' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#0d1b2e" fillOpacity="0.25" stroke="#0d1b2e" strokeWidth="1.5"/>
                    <polyline points="14 2 14 8 20 8" stroke="#0d1b2e" strokeWidth="1.4"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#0d1b2e" strokeWidth="1.3"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#0d1b2e" strokeWidth="1.3"/>
                  </svg>
                </div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.88rem', fontWeight: 700, color: '#0d1b2e', marginBottom: '8px' }}>Documentation</div>
                <p style={{ fontFamily: FF_SANS, fontSize: '0.66rem', color: 'rgba(13,27,46,0.75)', lineHeight: 1.68 }}>
                  Automated and manual checks for Bills of Lading, Certificates of Origin, and more.
                </p>
              </div>

              {/* White — 24/7 Support */}
              <div style={{ background: '#f8f8f6', border: '1px solid #e8e8e4', borderRadius: '3px', padding: '24px 22px' }}>
                <div style={{ marginBottom: '14px' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M22 16c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3"/>
                  </svg>
                </div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.88rem', fontWeight: 700, color: '#111', marginBottom: '8px' }}>24/7 Support</div>
                <p style={{ fontFamily: FF_SANS, fontSize: '0.66rem', color: '#666', lineHeight: 1.68 }}>
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
