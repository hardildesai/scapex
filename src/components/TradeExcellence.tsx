import { GOLD, NAVY, FF_SANS } from './ExportsConstants'

export default function TradeExcellence(): JSX.Element {
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
