import { GOLD, FF_SANS, FF_SERIF } from './ExportsConstants'

export default function ExportsHero(): JSX.Element {
  return (
    <section
      id="exports-hero"
      style={{
        position: 'relative',
        marginTop: '52px',
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
