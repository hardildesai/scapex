import { useState } from 'react'
import { GOLD, NAVY, FF_SANS } from './LogisticsConstants'

export default function LogisticsContactForm(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyEmail: '', serviceRequired: '', volume: '', message: ''
  })

  /* Inside-card label style */
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: FF_SANS,
    fontSize: '0.54rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#0d1b2e',
    marginBottom: '8px',
  }

  /* Bottom-border only input */
  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c8c8c4',
    outline: 'none',
    fontFamily: FF_SANS,
    fontSize: '0.80rem',
    color: '#222',
    padding: '6px 0 10px',
    lineHeight: 1.4,
  }

  return (
    <section
      id="contact-form"
      style={{ background: NAVY, padding: '72px 0' }}
    >
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Heading + contact info ── */}
        <div>
          {/* Big white heading */}
          <h2 style={{
            fontFamily: FF_SANS,
            fontSize: 'clamp(2.0rem, 3.5vw, 3.0rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Ready to move your<br />business forward ?
          </h2>

          {/* Uppercase body text */}
          <p style={{
            fontFamily: FF_SANS,
            fontSize: '0.58rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.50)',
            lineHeight: 1.85,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            maxWidth: '320px',
            marginBottom: '36px',
          }}>
            Consult with our freight experts to receive a tailored plan that prioritizes efficiency and regulatory compliance.
          </p>

          {/* Contact rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.15a16 16 0 0 0 5.74 5.74l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                ),
                text: '+91 XXXXXXXXXX',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                text: 'solutions@scapexglobal',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                text: 'Global Trade Plaza, Dubai',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Dark icon box */}
                <div style={{
                  width: '40px', height: '40px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <span style={{ fontFamily: FF_SANS, fontSize: '0.78rem', fontWeight: 500, color: '#fff' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: White card with form ── */}
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '36px 32px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.18)',
        }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Row 1: Full Name | Company Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label htmlFor="cf-full-name" style={labelStyle}>Full Name</label>
                <input id="cf-full-name" type="text" style={inputStyle}
                  value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
              </div>
              <div>
                <label htmlFor="cf-company-email" style={labelStyle}>Company Email</label>
                <input id="cf-company-email" type="email" style={inputStyle}
                  value={form.companyEmail} onChange={e => setForm({...form, companyEmail: e.target.value})} />
              </div>
            </div>

            {/* Row 2: Service Required | Estimated Volume */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label htmlFor="cf-service" style={labelStyle}>Service Required</label>
                <input id="cf-service" type="text" placeholder="Sea / Air / Customs"
                  style={inputStyle} value={form.serviceRequired}
                  onChange={e => setForm({...form, serviceRequired: e.target.value})} />
              </div>
              <div>
                <label htmlFor="cf-volume" style={labelStyle}>Estimated Volume</label>
                <input id="cf-volume" type="text" placeholder="e.g. 20 TEU / month"
                  style={inputStyle} value={form.volume}
                  onChange={e => setForm({...form, volume: e.target.value})} />
              </div>
            </div>

            {/* Row 3: Message — full width */}
            <div>
              <label htmlFor="cf-message" style={labelStyle}>Message</label>
              <input id="cf-message" type="text" style={inputStyle}
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            {/* Placeholder styling */}
            <style>{`
              #cf-full-name::placeholder, #cf-company-email::placeholder,
              #cf-service::placeholder, #cf-volume::placeholder,
              #cf-message::placeholder { color: #ccc; }
              #cf-full-name:focus, #cf-company-email:focus,
              #cf-service:focus, #cf-volume:focus,
              #cf-message:focus { border-bottom-color: ${GOLD}; }
            `}</style>

            {/* Submit — full width gold */}
            <button
              type="submit"
              id="logistics-submit-btn"
              style={{
                width: '100%',
                background: GOLD,
                color: '#fff',
                fontFamily: FF_SANS,
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '15px 28px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Submit Enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
