import { GOLD, FF_SANS } from './ExportsConstants'

export default function GlobalStewardship(): JSX.Element {
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
