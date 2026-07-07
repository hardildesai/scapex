import { GOLD, FF_SANS } from './ExportsConstants'

export default function SustainabilityCommitment(): JSX.Element {
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
