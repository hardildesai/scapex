import { GOLD, FF_SANS } from './LogisticsConstants'

export default function SeaFreight(): JSX.Element {
  const cards = [
    {
      id: 'fcl-lcl',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="14" width="28" height="12" rx="2" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.5"/>
          <rect x="5" y="8" width="10" height="8" rx="1" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.3"/>
          <rect x="17" y="8" width="10" height="8" rx="1" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.3"/>
          <line x1="2" y1="20" x2="30" y2="20" stroke={GOLD} strokeWidth="1"/>
        </svg>
      ),
      title: 'FCL / LCL',
      desc: 'Full Container Load and Less-than-Container Load options for every cargo type and volume.',
      bullets: ['Door-to-door delivery', 'Custom container sizing', 'Hazmat certified'],
    },
    {
      id: 'specialized',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="4" stroke={GOLD} strokeWidth="1.5" fill="none"/>
          <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M20 15l4 4" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round"/>
          <rect x="22" y="17" width="6" height="8" rx="1" stroke={GOLD} strokeWidth="1.2" fill={GOLD} fillOpacity="0.1"/>
        </svg>
      ),
      title: 'Specialized Freight',
      desc: 'Project cargo, oversized loads and high-value goods managed with dedicated expertise.',
      bullets: ['Temperature-controlled', 'Break bulk cargo', 'Heavy lift solutions'],
    },
    {
      id: 'transit',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 C8 4 4 10 4 16 C4 22 8 28 16 28 C24 28 28 22 28 16 C28 10 24 4 16 4Z" stroke={GOLD} strokeWidth="1.5" fill="none"/>
          <path d="M16 4 C16 4 12 10 12 16 C12 22 16 28 16 28" stroke={GOLD} strokeWidth="1" fill="none"/>
          <path d="M4 16 L28 16" stroke={GOLD} strokeWidth="1" />
          <path d="M5 10 L27 10" stroke={GOLD} strokeWidth="0.8" />
          <path d="M5 22 L27 22" stroke={GOLD} strokeWidth="0.8" />
        </svg>
      ),
      title: 'Transit Cargo',
      desc: 'Efficient trans-shipment and relay services connecting major global trade corridors.',
      bullets: ['Multi-port transit', 'Bonded warehouse', 'Fast clearance network'],
    },
  ]

  return (
    <section style={{ background: '#fafaf8', padding: '72px 0' }} id="sea-freight">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <p style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>Maritime Excellence</p>
        <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', marginBottom: '40px' }}>
          Sea Freight Solutions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {cards.map((card) => (
            <div key={card.id} id={card.id} style={{ background: '#fff', border: '1px solid #e8e8e4', borderRadius: '2px', padding: '28px 24px' }}>
              <div style={{ marginBottom: '16px' }}>{card.icon}</div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{card.title}</div>
              <p style={{ fontFamily: FF_SANS, fontSize: '0.70rem', color: '#666', lineHeight: 1.70, marginBottom: '16px' }}>{card.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {card.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: FF_SANS, fontSize: '0.65rem', color: '#555' }}>
                    <span style={{ width: '5px', height: '5px', background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
