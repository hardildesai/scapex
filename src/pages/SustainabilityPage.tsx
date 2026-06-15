import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SustainabilityPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <SustainabilityHero />
        <StrategicPillars />
        <GlobalImpactMetrics />
      </main>
      <Footer />
    </>
  )
}

/* ─────────────── Hero ─────────────── */
function SustainabilityHero(): JSX.Element {
  return (
    <section
      id="sust-hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        width: '100%',
        marginTop: '84px',
        minHeight: '340px',
      }}
    >
      {/* ── Left: dark panel with text ── */}
      <div
        style={{
          background: '#0d1b2e',
          padding: '52px 44px 52px 52px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: '1.05rem',
            fontWeight: 500,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '2px',
          }}>
            Powering a
          </p>

          <p style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2rem, 3.6vw, 3rem)',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#c8a84b',   /* gold-green */
            lineHeight: 1.05,
            marginBottom: 0,
          }}>
            Greener &amp;
          </p>

          <p style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2rem, 3.6vw, 3rem)',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#4a9eda',   /* sky blue */
            lineHeight: 1.05,
            marginBottom: '4px',
          }}>
            Sustainable
          </p>

          <p style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
          }}>
            Tomorrow.
          </p>
        </div>

        {/* Body text */}
        <p style={{
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontSize: '0.60rem',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.85,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          maxWidth: '340px',
        }}>
          Scapex is dedicated to leading industrial revolution. Our
          mission is clear: achieve net zero operations by 2030 through
          breakthrough technological innovations and rigorous
          operational efficiency.
        </p>
      </div>

      {/* ── Right: Plant on solar panel image ── */}
      <div style={{ overflow: 'hidden' }}>
        <img
          src="/sust-hero.png"
          alt="Green plant growing on solar panel"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        />
      </div>
    </section>
  )
}

/* ─────────────── Strategic Pillars ─────────────── */
function StrategicPillars(): JSX.Element {
  return (
    <section
      id="pillars"
      style={{ background: '#fff', paddingTop: '60px', paddingBottom: '64px' }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '38% 62%',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* Left: Text */}
          <div>
            <p style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: '10px',
            }}>
              Pillars of Sustainability
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
              fontWeight: 700,
              color: '#111',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '18px',
            }}>
              Strategic Pillars
            </h2>
            <p style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.72rem',
              color: '#666',
              lineHeight: 1.75,
              maxWidth: '300px',
            }}>
              Our sustainability framework is built on four core commitments — designed not
              just for compliance, but for pioneering industry standards.
            </p>
          </div>

          {/* Right: 2×2 icon grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid #d8d8d4',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            {/* Top-left: CO₂ icon */}
            <PillarCell>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16" cy="13" rx="9" ry="7" stroke="#1a5faa" strokeWidth="1.5" fill="none"/>
                <path d="M7 13c-3 0-5 1.5-5 3.5S6 20 9 20h14c3 0 7-1 7-3.5S27 13 24 13" stroke="#1a5faa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="11" y="17" fontSize="7" fill="#1a5faa" fontFamily="Inter, sans-serif" fontWeight="700">CO₂</text>
              </svg>
            </PillarCell>
            {/* Top-right: Leaf/eco icon */}
            <PillarCell borderLeft>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </PillarCell>
            {/* Bottom-left: Recycle icon */}
            <PillarCell borderTop>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/>
                <polyline points="23 20 23 14 17 14"/>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
              </svg>
            </PillarCell>
            {/* Bottom-right: People/community icon */}
            <PillarCell borderTop borderLeft>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </PillarCell>
          </div>

        </div>
      </div>
    </section>
  )
}

function PillarCell({
  children,
  borderLeft = false,
  borderTop = false,
}: {
  children: React.ReactNode
  borderLeft?: boolean
  borderTop?: boolean
}): JSX.Element {
  return (
    <div style={{
      height: '140px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      borderLeft: borderLeft ? '1px solid #d8d8d4' : 'none',
      borderTop:  borderTop  ? '1px solid #d8d8d4' : 'none',
    }}>
      {children}
    </div>
  )
}

/* ─────────────── Global Impact Metrics ─────────────── */
function GlobalImpactMetrics(): JSX.Element {
  return (
    <section
      id="impact-metrics"
      style={{ background: '#dce9f5', paddingTop: '56px', paddingBottom: '64px' }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Label */}
        <p style={{
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontSize: '0.55rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#4a7aa0',
          marginBottom: '20px',
        }}>
          Metrics That Matter
        </p>

        {/* 2-col: image left, metrics right */}
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '52px', alignItems: 'center' }}>

          {/* Left: landscape image */}
          <div style={{ overflow: 'hidden', borderRadius: '3px', aspectRatio: '4/3' }}>
            <img
              src="/sust-metrics.png"
              alt="Tree in solar field"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>

          {/* Right: text + stats */}
          <div>
            {/* "Global Impact" italic + "Metrics" bold */}
            <p style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '1.0rem',
              fontStyle: 'italic',
              color: '#2a4a6a',
              marginBottom: '2px',
              fontWeight: 400,
            }}>
              Global Impact
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#111',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: '28px',
            }}>
              Metrics
            </h2>

            {/* Stat 1 */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#111',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                1000+
              </div>
              <div style={{
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#4a7aa0',
              }}>
                MW Solar Deployed Globally
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div style={{
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#111',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                500k+
              </div>
              <div style={{
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#4a7aa0',
              }}>
                Tonnes CO₂ Offset Annually
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
