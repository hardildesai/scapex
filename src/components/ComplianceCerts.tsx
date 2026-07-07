import { FF_SANS } from './ExportsConstants'

export default function ComplianceCerts(): JSX.Element {
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
