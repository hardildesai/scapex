import { GOLD, NAVY, FF_SANS } from './LogisticsConstants'

function AirFeature({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '16px' }}>
      <div style={{ fontFamily: FF_SANS, fontSize: '0.82rem', fontWeight: 700, color: '#111', marginBottom: '5px' }}>{title}</div>
      <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#666', lineHeight: 1.7 }}>{text}</div>
    </div>
  )
}

export default function AirFreight(): JSX.Element {
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
