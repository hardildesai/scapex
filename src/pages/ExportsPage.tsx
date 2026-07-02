import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Shared tokens ── */
const GOLD = '#c8a84b'
const NAVY = '#0d1b2e'
const FF_SANS = 'Inter, ui-sans-serif, system-ui, sans-serif'
const FF_SERIF = 'Playfair Display, Georgia, serif'

export default function ExportsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ExportsHero />
        <ExportsStats />
        <GlobalStewardship />
        <ProductPortfolio />
        <ComplianceCerts />
        <TradeExcellence />
        <SustainabilityCommitment />
        <SecuringSourcing />
      </main>
      <Footer />
    </>
  )
}

/* ═══════════════════════════════════════════
   1. HERO
   Dark warm overlay, heading + 2 CTAs, right image
═══════════════════════════════════════════ */
function ExportsHero(): JSX.Element {
  return (
    <section
      id="exports-hero"
      style={{
        position: 'relative',
        marginTop: '84px',
        overflow: 'hidden',
        minHeight: '420px',
        display: 'grid',
        gridTemplateColumns: '55% 45%',
      }}
    >
      {/* LEFT: Dark overlay + text */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0e00 0%, #2a1800 60%, #3a2200 100%)',
        padding: '60px 48px 60px 52px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Small label */}
        <p style={{
          fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: GOLD, marginBottom: '14px',
        }}>
          Agro Exports Division
        </p>

        {/* Heading */}
        <h1 style={{ marginBottom: '20px', lineHeight: 1.08 }}>
          <span style={{
            display: 'block', fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            fontWeight: 800, color: '#fff', letterSpacing: '-0.04em',
          }}>
            Premium Agro Commodities
          </span>
          <span style={{
            display: 'block', fontFamily: FF_SERIF, fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            fontWeight: 700, fontStyle: 'italic', color: GOLD, letterSpacing: '-0.01em',
          }}>
            From India's Heartlands
          </span>
          <span style={{
            display: 'block', fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            fontWeight: 800, color: '#fff', letterSpacing: '-0.04em',
          }}>
            to the World
          </span>
        </h1>

        {/* Body */}
        <p style={{
          fontFamily: FF_SANS, fontSize: '0.70rem', color: 'rgba(255,255,255,0.60)',
          lineHeight: 1.78, maxWidth: '360px', marginBottom: '28px',
        }}>
          Scapex Agro connects India's finest produce to global markets — with full traceability, certified quality, and seamless export logistics.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#sourcing-form" id="exports-enquiry-btn" style={{
            display: 'inline-block', background: GOLD, color: '#000',
            fontFamily: FF_SANS, fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            padding: '11px 22px', borderRadius: '2px', textDecoration: 'none',
          }}>
            Get Enquiry
          </a>
          <a href="#product-portfolio" id="exports-catalogue-btn" style={{
            display: 'inline-block', background: 'transparent', color: '#fff',
            fontFamily: FF_SANS, fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            padding: '11px 22px', borderRadius: '2px',
            border: '1px solid rgba(255,255,255,0.35)', textDecoration: 'none',
          }}>
            View Catalogue
          </a>
        </div>
      </div>

      {/* RIGHT: Grain/spice hero image — absolutely positioned so it fills height */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/exports-hero.png"
          alt="Golden Indian agro commodities"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Warm golden overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #1a0e00 0%, transparent 40%)', pointerEvents: 'none' }} />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   2. STATS BAR
═══════════════════════════════════════════ */
function ExportsStats(): JSX.Element {
  const stats = [
    { value: '75+',        label: 'Export Destinations' },
    { value: '5,000+',    label: 'Product SKUs' },
    { value: '180,000 MT', label: 'Annual Export Volume' },
    { value: '40+',        label: 'Years of Heritage' },
  ]
  return (
    <section style={{ background: '#1a1200', padding: '28px 0' }} id="exports-stats">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(200,168,75,0.2)' : 'none' }}>
            <div style={{ fontFamily: FF_SANS, fontSize: '1.8rem', fontWeight: 800, color: GOLD, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: FF_SANS, fontSize: '0.54rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '6px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   3. OUR GLOBAL STEWARDSHIP
   White bg, 2-col: text left + farmer image right
═══════════════════════════════════════════ */
function GlobalStewardship(): JSX.Element {
  return (
    <section style={{ background: '#fff', padding: '72px 0' }} id="global-stewardship">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

        {/* LEFT: Text */}
        <div>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '18px' }}>
            Our Global Stewardship
          </h2>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.73rem', color: '#555', lineHeight: 1.78, marginBottom: '16px' }}>
            Scapex Agro operates as the export arm of Scapex Group, channeling the agricultural wealth of India's most productive heartlands to international buyers across the Middle East, Africa, Europe, and Asia-Pacific.
          </p>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.73rem', color: '#555', lineHeight: 1.78, marginBottom: '28px' }}>
            We work directly with farmer cooperatives and certified procurement networks, ensuring traceability from field to freight. Every shipment reflects our commitment to quality, compliance, and responsible sourcing.
          </p>

          {/* Highlighted link-style rows */}
          <div style={{ borderTop: '1px solid #e8e8e4', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Direct Farmer Network — 12,000+ registered producers',
              'ISO 22000 & FSSAI certified supply chain',
              'Real-time cargo tracking & documentation',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: FF_SANS, fontSize: '0.68rem', color: '#333' }}>
                <span style={{ width: '6px', height: '6px', background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Farmer portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <img
            src="/exports-farmer.png"
            alt="Indian farmer in field"
            style={{ width: '100%', aspectRatio: '4/3.5', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   4. OUR PRODUCT PORTFOLIO
   Photo mosaic grid
═══════════════════════════════════════════ */
function ProductPortfolio(): JSX.Element {
  return (
    <section style={{ background: '#fafaf8', padding: '72px 0' }} id="product-portfolio">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.4rem, 2.5vw, 2.0rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', marginBottom: '32px' }}>
          Our Product Portfolio
        </h2>

        {/* Mosaic grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '12px' }}>
          {/* Large left image */}
          <div style={{ gridRow: '1 / 3', position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
            <img src="/exports-solar.png" alt="Agricultural solar export" style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '24px 20px 20px' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.62rem', fontWeight: 700, color: GOLD, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Renewable Agro</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Solar & Agri Infrastructure</div>
            </div>
          </div>

          {/* Top right: wheat/grains */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
            <img src="/exports-wheat.png" alt="Wheat and grain exports" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '20px 16px 14px' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.62rem', fontWeight: 700, color: GOLD, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Grains</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>Wheat, Rice & Pulses</div>
            </div>
          </div>

          {/* Bottom right: containers */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
            <img src="/exports-containers.png" alt="Export shipping containers" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '20px 16px 14px' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.62rem', fontWeight: 700, color: GOLD, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Logistics</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>Export Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   5. COMPLIANCE & CERTIFICATIONS
   Light gray bg, centered heading, 4 cert cards
═══════════════════════════════════════════ */
function ComplianceCerts(): JSX.Element {
  const certs = [
    { id: 'cert-fssai', title: 'FSSAI', sub: 'Food Safety Standards' },
    { id: 'cert-apeda', title: 'APEDA', sub: 'Agri. & Processed Food' },
    { id: 'cert-haccp', title: 'HACCP', sub: 'Hazard Analysis Control' },
    { id: 'cert-iso',   title: 'ISO 22000', sub: 'Food Safety Management' },
  ]
  return (
    <section style={{ background: '#f0ede6', padding: '64px 0' }} id="compliance-certs">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.4rem, 2.5vw, 2.0rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', marginBottom: '10px' }}>
            Compliance &amp; Certifications
          </h2>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: '#666', lineHeight: 1.72, maxWidth: '480px', margin: '0 auto' }}>
            Every export shipment adheres to the highest international food safety standards. Our certifications reflect our commitment to quality and regulatory excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {certs.map((c) => (
            <div key={c.id} id={c.id} style={{ background: '#fff', border: '1px solid #e0ddd6', borderRadius: '3px', padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '1.1rem', fontWeight: 800, color: '#0d1b2e', letterSpacing: '-0.02em', marginBottom: '6px' }}>{c.title}</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.62rem', color: '#888', letterSpacing: '0.06em', lineHeight: 1.5 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   6. TRADE EXCELLENCE & SEAMLESS REACH
   Dark navy bg, left text + right destination table card
═══════════════════════════════════════════ */
function TradeExcellence(): JSX.Element {
  const destinations = [
    { region: 'Middle East', value: '42,000 MT', pct: '28%' },
    { region: 'South East Asia', value: '35,000 MT', pct: '24%' },
    { region: 'Africa', value: '28,000 MT', pct: '19%' },
    { region: 'Europe', value: '22,000 MT', pct: '15%' },
    { region: 'Americas', value: '21,000 MT', pct: '14%' },
  ]

  return (
    <section style={{ background: NAVY, padding: '72px 0' }} id="trade-excellence">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>

        {/* LEFT: Text + stats */}
        <div>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '18px' }}>
            Trade Excellence &amp;<br />Seamless Reach
          </h2>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.78, marginBottom: '36px', maxWidth: '380px' }}>
            Backed by Scapex Group's global trade infrastructure, we deliver Indian agro commodities to 75+ countries with documentation, compliance, and logistics fully managed.
          </p>

          {/* Two key stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <div style={{ fontFamily: FF_SANS, fontSize: '2.0rem', fontWeight: 800, color: GOLD, letterSpacing: '-0.04em' }}>75+</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Countries Reached</div>
            </div>
            <div>
              <div style={{ fontFamily: FF_SANS, fontSize: '2.0rem', fontWeight: 800, color: GOLD, letterSpacing: '-0.04em' }}>40+</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Trade Partners</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Dark table card */}
        <div style={{ background: '#0a1520', borderRadius: '4px', padding: '28px 24px', border: '1px solid rgba(200,168,75,0.15)' }}>
          <div style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>
            Global Agro Logistics
          </div>
          <div style={{ fontFamily: FF_SANS, fontSize: '0.90rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
            Export Distribution 2024
          </div>

          {/* Table rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Region', 'Volume', 'Share'].map(h => (
                <div key={h} style={{ fontFamily: FF_SANS, fontSize: '0.52rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{h}</div>
              ))}
            </div>
            {destinations.map((d, i) => (
              <div key={d.region} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px', gap: '8px', padding: '10px 0', borderBottom: i < destinations.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: '#fff' }}>{d.region}</div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: GOLD, fontWeight: 600 }}>{d.value}</div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>{d.pct}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   7. SUSTAINABILITY COMMITMENT
   White bg, 2×2 icon grid
═══════════════════════════════════════════ */
function SustainabilityCommitment(): JSX.Element {
  const items = [
    {
      id: 'sus-zero-waste',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18l-1.5 9H4.5L3 6z"/><path d="M3 6l-.75-3H1"/><circle cx="9" cy="20" r="1"/><circle cx="15" cy="20" r="1"/>
        </svg>
      ),
      title: 'Zero Waste Sourcing',
      text: 'Minimising post-harvest losses through cold-chain infrastructure and direct procurement.',
    },
    {
      id: 'sus-carbon',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      ),
      title: 'Low Carbon Freight',
      text: 'Routing shipments through carbon-optimised corridors with verified offset partnerships.',
    },
    {
      id: 'sus-fair',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Fair Trade Practices',
      text: 'Direct farmer payments above market rates, supporting rural community development.',
    },
    {
      id: 'sus-traceability',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'End-to-End Traceability',
      text: 'Blockchain-enabled tracking from farm registration to final customs clearance at destination.',
    },
  ]

  return (
    <section style={{ background: '#fff', padding: '72px 0' }} id="sustainability-commitment">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', marginBottom: '40px' }}>
          Sustainability Commitment
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {items.map((item) => (
            <div key={item.id} id={item.id} style={{ background: '#faf8f4', borderRadius: '3px', padding: '28px 24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.88rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#666', lineHeight: 1.72 }}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   8. SECURING YOUR SOURCING  — CTA + Form
   Cream bg, farmer image left + form right
═══════════════════════════════════════════ */
function SecuringSourcing(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyName: '', tradeRoute: '', volume: '', notes: ''
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: FF_SANS, fontSize: '0.54rem', fontWeight: 700,
    letterSpacing: '0.16em', textTransform: 'uppercase', color: '#0d1b2e', marginBottom: '7px',
  }
  const inputStyle: React.CSSProperties = {
    display: 'block', width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid #c8c8c4', outline: 'none',
    fontFamily: FF_SANS, fontSize: '0.76rem', color: '#333', padding: '5px 0 9px', lineHeight: 1.4,
  }

  return (
    <section style={{ background: '#faf8f4', padding: '72px 0' }} id="sourcing-form">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Section label + heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.54rem', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
            Agro Excellence
          </p>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em' }}>
            Securing Your Sourcing
          </h2>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: '#666', lineHeight: 1.72, maxWidth: '440px', margin: '10px auto 0' }}>
            Partner with Scapex Agro to access India's finest produce at scale. Submit your sourcing requirements and our export team will respond within 24 hours.
          </p>
        </div>

        {/* 2 cols: image + form */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '52px', alignItems: 'start' }}>

          {/* LEFT: Farmer image */}
          <img
            src="/exports-farmer.png"
            alt="Indian farmer"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
          />

          {/* RIGHT: Form */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label htmlFor="sf-full-name" style={labelStyle}>Full Name</label>
                <input id="sf-full-name" type="text" style={inputStyle} value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-company" style={labelStyle}>Company Name</label>
                <input id="sf-company" type="text" style={inputStyle} value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label htmlFor="sf-trade-route" style={labelStyle}>Trade Route</label>
                <input id="sf-trade-route" type="text" placeholder="Origin → Destination" style={inputStyle} value={form.tradeRoute} onChange={e => setForm({...form, tradeRoute: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-volume" style={labelStyle}>Estimated Volume</label>
                <input id="sf-volume" type="text" placeholder="e.g. 500 MT / month" style={inputStyle} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
              </div>
            </div>

            <div>
              <label htmlFor="sf-notes" style={labelStyle}>Additional Notes</label>
              <input id="sf-notes" type="text" placeholder="Specific product requirements, packaging, certifications..." style={inputStyle} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            </div>

            {/* Contact info row */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#555' }}>
                <span style={{ fontWeight: 700, color: '#111' }}>📞</span> +91 XXXXXXXXXX
              </div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#555' }}>
                <span style={{ fontWeight: 700, color: '#111' }}>✉️</span> agro@scapexgroup.com
              </div>
            </div>

            <style>{`
              #sf-full-name::placeholder, #sf-company::placeholder,
              #sf-trade-route::placeholder, #sf-volume::placeholder,
              #sf-notes::placeholder { color: #bbb; }
              #sf-full-name:focus, #sf-company:focus, #sf-trade-route:focus,
              #sf-volume:focus, #sf-notes:focus { border-bottom-color: ${GOLD}; }
            `}</style>

            <button type="submit" id="exports-submit-btn" style={{
              width: '100%', background: GOLD, color: '#fff',
              fontFamily: FF_SANS, fontSize: '0.68rem', fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '14px 28px', border: 'none', borderRadius: '3px', cursor: 'pointer',
            }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
