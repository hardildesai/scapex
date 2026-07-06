import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Shared tokens ── */
const GOLD = '#c8a84b'
const NAVY = '#0d1b2e'
const FF_SANS = 'Inter, ui-sans-serif, system-ui, sans-serif'
const FF_SERIF = 'Playfair Display, Georgia, serif'

const LOGISTICS_MOBILE_CSS = `
@media (max-width: 768px) {
  /* ── Hero ── */
  #logistics-hero > div {
    grid-template-columns: 1fr !important;
    padding: 0 20px !important;
    min-height: unset !important;
  }
  #logistics-hero > div > div:first-child {
    padding: 40px 0 32px !important;
  }
  #logistics-hero > div > div:last-child {
    display: none !important;
  }

  /* ── Stats bar ── */
  #stats-bar > div {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px 12px !important;
    padding: 0 20px !important;
  }
  #stats-bar > div > div {
    border-right: none !important;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding-bottom: 16px;
  }

  /* ── Integrated logistics ── */
  #integrated-logistics > div {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    padding: 0 20px !important;
  }
  #integrated-logistics { padding: 48px 0 !important; }

  /* ── Sea freight ── */
  #sea-freight > div { padding: 0 20px !important; }
  #sea-freight > div > div:last-child {
    grid-template-columns: 1fr !important;
  }
  #sea-freight { padding: 48px 0 !important; }

  /* ── Air freight ── */
  #air-freight > div {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    padding: 0 20px !important;
  }
  #air-freight { padding: 48px 0 !important; }

  /* ── Customs compliance ── */
  #customs-compliance > div > div:last-child {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  #customs-compliance > div > div:last-child > div:last-child > div:last-child {
    grid-template-columns: 1fr !important;
  }
  #customs-compliance > div { padding: 0 20px !important; }
  #customs-compliance { padding: 48px 0 !important; }

  /* ── Contact form ── */
  #contact-form > div {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    padding: 0 20px !important;
  }
  #contact-form { padding: 48px 0 !important; }
  #contact-form .lp-form-row {
    grid-template-columns: 1fr !important;
  }
}
`

export default function LogisticsPage(): JSX.Element {
  return (
    <>
      <style>{LOGISTICS_MOBILE_CSS}</style>
      <AnnouncementBar />
      <Navbar />
      <main>
        <LogisticsHero />
        <StatsBar />
        <IntegratedLogistics />
        <SeaFreight />
        <AirFreight />
        <CustomsCompliance />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

/* ═══════════════════════════════════════════
   1. HERO
═══════════════════════════════════════════ */
function LogisticsHero(): JSX.Element {
  return (
    <section
      id="logistics-hero"
      style={{
        background: NAVY,
        marginTop: '84px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        minHeight: '420px',
      }}>
        {/* LEFT: Text */}
        <div style={{ padding: '56px 40px 56px 0', zIndex: 2 }}>
          {/* Label */}
          <p style={{ fontFamily: FF_SANS, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '14px' }}>
            Global Logistics Solutions
          </p>

          {/* Heading */}
          <h1 style={{ fontFamily: FF_SANS, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '20px' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: '#fff' }}>Global Logistics</span>
            <span style={{ display: 'block', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: GOLD }}>Simplified</span>
          </h1>

          {/* Body */}
          <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '360px', marginBottom: '28px' }}>
            End-to-end logistics solutions designed for scale. From sea freight and air cargo to customs clearance — Scapex moves your business forward with precision.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="#contact-form" id="logistics-quote-btn" style={{ display: 'inline-block', background: GOLD, color: '#000', fontFamily: FF_SANS, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '11px 22px', borderRadius: '2px', textDecoration: 'none' }}>
              Get a Quote
            </a>
            <a href="#sea-freight" id="logistics-track-btn" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: FF_SANS, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '11px 22px', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none' }}>
              Track Cargo
            </a>
          </div>

          <p style={{ fontFamily: FF_SANS, fontSize: '0.60rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
            ★ Trusted by 500+ global enterprises
          </p>
        </div>

        {/* RIGHT: Hero image — absolute so it doesn't push height */}
        <div style={{ position: 'relative', height: '100%', minHeight: '420px' }}>
          <img
            src="/logistics-hero.png"
            alt="Cargo ship and aircraft logistics"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Golden accent overlay badge */}
          <div style={{ position: 'absolute', bottom: '32px', left: '16px', background: GOLD, color: '#000', fontFamily: FF_SANS, fontSize: '0.65rem', fontWeight: 800, padding: '8px 14px', letterSpacing: '0.05em' }}>
            VSC CERTIFIED
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   2. STATS BAR
═══════════════════════════════════════════ */
function StatsBar(): JSX.Element {
  const stats = [
    { value: '75+',   label: 'Cargo Routes' },
    { value: '100↑',  label: 'Active Ports' },
    { value: '5,000', label: 'Tonnes/Day' },
    { value: '99%',   label: 'On-Time Delivery' },
  ]
  return (
    <section style={{ background: '#111827', padding: '28px 0' }} id="stats-bar">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontFamily: FF_SANS, fontSize: '2.0rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '6px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   3. INTEGRATED LOGISTICS FOR A NEW ERA
═══════════════════════════════════════════ */
function IntegratedLogistics(): JSX.Element {
  return (
    <section style={{ background: '#faf8f4', padding: '80px 0' }} id="integrated-logistics">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '45% 55%', gap: '64px', alignItems: 'start' }}>

        {/* LEFT: Image stacked above amber badge */}
        <div>
          <img
            src="/logistics-aircraft.png"
            alt="Scapex cargo aircraft at sunset"
            style={{ width: '100%', display: 'block', aspectRatio: '4/3.2', objectFit: 'cover', borderRadius: '2px 2px 0 0' }}
          />
          {/* Amber badge — same width, sits flush below image */}
          <div style={{ background: '#e8950a', padding: '22px 28px', textAlign: 'center', borderRadius: '0 0 2px 2px' }}>
            <div style={{ fontFamily: FF_SANS, fontSize: '2.4rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>25+</div>
            <div style={{ fontFamily: FF_SANS, fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.04em', marginTop: '4px' }}>Years Experience</div>
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div style={{ paddingTop: '8px' }}>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '20px' }}>
            Integrated Logistics For A New Era.
          </h2>

          {/* First paragraph */}
          <p style={{ fontFamily: FF_SANS, fontSize: '0.74rem', color: '#555', lineHeight: 1.78, marginBottom: '20px' }}>
            Scapex Global Forwarding stands as the specialized logistics arm of Scapex Group, bridging the gap between global industrial demand and complex supply chain requirements.
          </p>

          {/* Second paragraph */}
          <p style={{ fontFamily: FF_SANS, fontSize: '0.74rem', color: '#555', lineHeight: 1.78, marginBottom: '32px' }}>
            Our heritage in renewable energy and large-scale infrastructure projects has ingrained a DNA of meticulous planning and risk mitigation in our forwarding services. We don't just move cargo; we manage integrity of your entire trade cycle through expert brokerage and proprietary carrier relationships.
          </p>

          {/* Feature bullets with hexagon badge icon */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <HexFeature
              title="Group Synergy"
              text="Leveraging Scapex Group's global infrastructure for localized logistical excellence."
            />
            <HexFeature
              title="End-to-End Control"
              text="Direct oversight from the factory gate to final destination site."
            />
          </div>
        </div>

      </div>
    </section>
  )
}

/* Hexagon verified-badge icon + feature text */
function HexFeature({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      {/* Gold hexagon badge icon */}
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1.5 L19.5 6.25 L19.5 15.75 L11 20.5 L2.5 15.75 L2.5 6.25 Z" fill={GOLD} />
          <polyline points="7,11 10,14 15,9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: FF_SANS, fontSize: '0.80rem', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{title}</div>
        <div style={{ fontFamily: FF_SANS, fontSize: '0.70rem', color: '#666', lineHeight: 1.68 }}>{text}</div>
      </div>
    </div>
  )
}



/* ═══════════════════════════════════════════
   4. SEA FREIGHT SOLUTIONS
═══════════════════════════════════════════ */
function SeaFreight(): JSX.Element {
  const cards = [
    {
      id: 'fcl-lcl',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="14" width="28" height="12" rx="2" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.5"/>
          <rect x="5" y="8" width="10" height="8" rx="1" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.3"/>
          <rect x="17" y="8" width="10" height="8" rx="1" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.3"/>
          <line x1="2" y1="20" x2="30" y2="20" stroke={GOLD} strokeWidth="1"/>
        </svg>
      ),
      title: 'FCL / LCL',
      desc: 'Full Container Load and Less-than-Container Load options for every cargo type and volume.',
      bullets: ['Door-to-door delivery', 'Custom container sizing', 'Hazmat certified'],
    },
    {
      id: 'specialized',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="4" stroke={GOLD} strokeWidth="1.5" fill="none"/>
          <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M20 15l4 4" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round"/>
          <rect x="22" y="17" width="6" height="8" rx="1" stroke={GOLD} strokeWidth="1.2" fill={GOLD} fillOpacity="0.1"/>
        </svg>
      ),
      title: 'Specialized Freight',
      desc: 'Project cargo, oversized loads and high-value goods managed with dedicated expertise.',
      bullets: ['Temperature-controlled', 'Break bulk cargo', 'Heavy lift solutions'],
    },
    {
      id: 'transit',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 C8 4 4 10 4 16 C4 22 8 28 16 28 C24 28 28 22 28 16 C28 10 24 4 16 4Z" stroke={GOLD} strokeWidth="1.5" fill="none"/>
          <path d="M16 4 C16 4 12 10 12 16 C12 22 16 28 16 28" stroke={GOLD} strokeWidth="1" fill="none"/>
          <path d="M4 16 L28 16" stroke={GOLD} strokeWidth="1" />
          <path d="M5 10 L27 10" stroke={GOLD} strokeWidth="0.8" />
          <path d="M5 22 L27 22" stroke={GOLD} strokeWidth="0.8" />
        </svg>
      ),
      title: 'Transit Cargo',
      desc: 'Efficient trans-shipment and relay services connecting major global trade corridors.',
      bullets: ['Multi-port transit', 'Bonded warehouse', 'Fast clearance network'],
    },
  ]

  return (
    <section style={{ background: '#fafaf8', padding: '72px 0' }} id="sea-freight">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <p style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>Maritime Excellence</p>
        <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', marginBottom: '40px' }}>
          Sea Freight Solutions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {cards.map((card) => (
            <div key={card.id} id={card.id} style={{ background: '#fff', border: '1px solid #e8e8e4', borderRadius: '2px', padding: '28px 24px' }}>
              <div style={{ marginBottom: '16px' }}>{card.icon}</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{card.title}</div>
              <p style={{ fontFamily: FF_SANS, fontSize: '0.70rem', color: '#666', lineHeight: 1.70, marginBottom: '16px' }}>{card.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {card.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: FF_SANS, fontSize: '0.65rem', color: '#555' }}>
                    <span style={{ width: '5px', height: '5px', background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   5. PREMIUM AIR FREIGHT
═══════════════════════════════════════════ */
function AirFreight(): JSX.Element {
  return (
    <section style={{ background: '#e8eef6', padding: '72px 0' }} id="air-freight">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

        {/* LEFT: Features */}
        <div>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>Global Airfreight</p>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '36px' }}>
            Premium Air Freight
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <AirFeature
              title="Express Airfreight"
              text="Time-critical shipments transported via priority boarding on passenger and dedicated cargo carriers with next-flight-out capabilities."
            />
            <AirFeature
              title="Scheduled Shipping"
              text="Cost-efficient regular slots on key airlines. Gives you full efficiency across the lane while maintaining schedule reliability."
            />
            <AirFeature
              title="Economy Freight"
              text="Economy freight to cargo booking capacity to transportation and warehousing facilities across 40+ countries worldwide."
            />
          </div>
        </div>

        {/* RIGHT: Aircraft image with branding card */}
        <div style={{ position: 'relative' }}>
          <img
            src="/logistics-air.png"
            alt="Scapex cargo aircraft"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderRadius: '2px' }}
          />
          {/* Branded overlay card */}
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: NAVY, color: '#fff', padding: '14px 18px', borderRadius: '2px' }}>
            <div style={{ fontFamily: FF_SANS, fontSize: '1.0rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Scapex</div>
            <div style={{ fontFamily: FF_SANS, fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: '2px' }}>Air Cargo Division</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AirFeature({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '16px' }}>
      <div style={{ fontFamily: FF_SANS, fontSize: '0.82rem', fontWeight: 700, color: '#111', marginBottom: '5px' }}>{title}</div>
      <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#666', lineHeight: 1.7 }}>{text}</div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6. CUSTOMS & COMPLIANCE ADVISORY
═══════════════════════════════════════════ */
function CustomsCompliance(): JSX.Element {
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


/* ═══════════════════════════════════════════
   7. CONTACT FORM  — dark navy bg, white card form
═══════════════════════════════════════════ */
function ContactForm(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyEmail: '', serviceRequired: '', volume: '', message: ''
  })

  /* Inside-card label style */
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: FF_SANS,
    fontSize: '0.54rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#0d1b2e',
    marginBottom: '8px',
  }

  /* Bottom-border only input */
  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c8c8c4',
    outline: 'none',
    fontFamily: FF_SANS,
    fontSize: '0.80rem',
    color: '#222',
    padding: '6px 0 10px',
    lineHeight: 1.4,
  }

  return (
    <section
      id="contact-form"
      style={{ background: NAVY, padding: '72px 0' }}
    >
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Heading + contact info ── */}
        <div>
          {/* Big white heading */}
          <h2 style={{
            fontFamily: FF_SANS,
            fontSize: 'clamp(2.0rem, 3.5vw, 3.0rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Ready to move your<br />business forward ?
          </h2>

          {/* Uppercase body text */}
          <p style={{
            fontFamily: FF_SANS,
            fontSize: '0.58rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.50)',
            lineHeight: 1.85,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            maxWidth: '320px',
            marginBottom: '36px',
          }}>
            Consult with our freight experts to receive a tailored plan that prioritizes efficiency and regulatory compliance.
          </p>

          {/* Contact rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.15a16 16 0 0 0 5.74 5.74l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                ),
                text: '+91 XXXXXXXXXX',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                text: 'solutions@scapexglobal',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                text: 'Global Trade Plaza, Dubai',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Dark icon box */}
                <div style={{
                  width: '40px', height: '40px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <span style={{ fontFamily: FF_SANS, fontSize: '0.78rem', fontWeight: 500, color: '#fff' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: White card with form ── */}
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '36px 32px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.18)',
        }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Row 1: Full Name | Company Email */}
            <div className="lp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label htmlFor="cf-full-name" style={labelStyle}>Full Name</label>
                <input id="cf-full-name" type="text" style={inputStyle}
                  value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
              </div>
              <div>
                <label htmlFor="cf-company-email" style={labelStyle}>Company Email</label>
                <input id="cf-company-email" type="email" style={inputStyle}
                  value={form.companyEmail} onChange={e => setForm({...form, companyEmail: e.target.value})} />
              </div>
            </div>

            {/* Row 2: Service Required | Estimated Volume */}
            <div className="lp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label htmlFor="cf-service" style={labelStyle}>Service Required</label>
                <input id="cf-service" type="text" placeholder="Sea / Air / Customs"
                  style={inputStyle} value={form.serviceRequired}
                  onChange={e => setForm({...form, serviceRequired: e.target.value})} />
              </div>
              <div>
                <label htmlFor="cf-volume" style={labelStyle}>Estimated Volume</label>
                <input id="cf-volume" type="text" placeholder="e.g. 20 TEU / month"
                  style={inputStyle} value={form.volume}
                  onChange={e => setForm({...form, volume: e.target.value})} />
              </div>
            </div>

            {/* Row 3: Message — full width */}
            <div>
              <label htmlFor="cf-message" style={labelStyle}>Message</label>
              <input id="cf-message" type="text" style={inputStyle}
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            {/* Placeholder styling */}
            <style>{`
              #cf-full-name::placeholder, #cf-company-email::placeholder,
              #cf-service::placeholder, #cf-volume::placeholder,
              #cf-message::placeholder { color: #ccc; }
              #cf-full-name:focus, #cf-company-email:focus,
              #cf-service:focus, #cf-volume:focus,
              #cf-message:focus { border-bottom-color: ${GOLD}; }
            `}</style>

            {/* Submit — full width gold */}
            <button
              type="submit"
              id="logistics-submit-btn"
              style={{
                width: '100%',
                background: GOLD,
                color: '#fff',
                fontFamily: FF_SANS,
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '15px 28px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Submit Enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

