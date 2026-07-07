import { GOLD, FF_SANS } from './LogisticsConstants'

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

export default function IntegratedLogistics(): JSX.Element {
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
