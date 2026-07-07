import { GOLD, FF_SANS } from './ExportsConstants'

export default function ProductPortfolio(): JSX.Element {
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
