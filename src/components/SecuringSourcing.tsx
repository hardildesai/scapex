import { useState } from 'react'
import { GOLD, FF_SANS } from './ExportsConstants'

export default function SecuringSourcing(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyName: '', tradeRoute: '', volume: '', notes: ''
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: FF_SANS, fontSize: '0.54rem', fontWeight: 700,
    letterSpacing: '0.16em', textTransform: 'uppercase', color: '#0d1b2e', marginBottom: '7px',
  }
  const inputStyle: React.CSSProperties = {
    display: 'block', width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid #c8c8c4', outline: 'none',
    fontFamily: FF_SANS, fontSize: '0.76rem', color: '#333', padding: '5px 0 9px', lineHeight: 1.4,
  }

  return (
    <section style={{ background: '#faf8f4', padding: '72px 0' }} id="sourcing-form">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Section label + heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.54rem', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
            Agro Excellence
          </p>
          <h2 style={{ fontFamily: FF_SANS, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em' }}>
            Securing Your Sourcing
          </h2>
          <p style={{ fontFamily: FF_SANS, fontSize: '0.72rem', color: '#666', lineHeight: 1.72, maxWidth: '440px', margin: '10px auto 0' }}>
            Partner with Scapex Agro to access India's finest produce at scale. Submit your sourcing requirements and our export team will respond within 24 hours.
          </p>
        </div>

        {/* 2 cols: image + form */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '52px', alignItems: 'start' }}>

          {/* LEFT: Farmer image */}
          <img
            src="/exports-farmer.webp"
            alt="Indian farmer"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
          />

          {/* RIGHT: Form */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label htmlFor="sf-full-name" style={labelStyle}>Full Name</label>
                <input id="sf-full-name" type="text" style={inputStyle} value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-company" style={labelStyle}>Company Name</label>
                <input id="sf-company" type="text" style={inputStyle} value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label htmlFor="sf-trade-route" style={labelStyle}>Trade Route</label>
                <input id="sf-trade-route" type="text" placeholder="Origin → Destination" style={inputStyle} value={form.tradeRoute} onChange={e => setForm({...form, tradeRoute: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-volume" style={labelStyle}>Estimated Volume</label>
                <input id="sf-volume" type="text" placeholder="e.g. 500 MT / month" style={inputStyle} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
              </div>
            </div>

            <div>
              <label htmlFor="sf-notes" style={labelStyle}>Additional Notes</label>
              <input id="sf-notes" type="text" placeholder="Specific product requirements, packaging, certifications..." style={inputStyle} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            </div>

            {/* Contact info row */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#555' }}>
                <span style={{ fontWeight: 700, color: '#111' }}>📞</span> +91 XXXXXXXXXX
              </div>
              <div style={{ fontFamily: FF_SANS, fontSize: '0.68rem', color: '#555' }}>
                <span style={{ fontWeight: 700, color: '#111' }}>✉️</span> agro@scapexgroup.com
              </div>
            </div>

            <style>{`
              #sf-full-name::placeholder, #sf-company::placeholder,
              #sf-trade-route::placeholder, #sf-volume::placeholder,
              #sf-notes::placeholder { color: #bbb; }
              #sf-full-name:focus, #sf-company:focus, #sf-trade-route:focus,
              #sf-volume:focus, #sf-notes:focus { border-bottom-color: ${GOLD}; }
            `}</style>

            <button type="submit" id="exports-submit-btn" style={{
              width: '100%', background: GOLD, color: '#fff',
              fontFamily: FF_SANS, fontSize: '0.68rem', fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '14px 28px', border: 'none', borderRadius: '3px', cursor: 'pointer',
            }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
