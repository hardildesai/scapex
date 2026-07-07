import { GOLD, FF_SANS } from './ExportsConstants'

export default function ExportsStats(): JSX.Element {
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
