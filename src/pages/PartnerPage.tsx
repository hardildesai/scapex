import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PartnerPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <PartnerHero />
        <PartnerForm />
      </main>
      <Footer />
    </>
  )
}

/* ══════════════════════════════════════════
   SECTION 1 — HERO
   Reference: ~280px tall, 44% left / 56% right split
   Left col: white bg, subtle vertical grid lines, pill + 3-line heading + body
   Right col: full-bleed cargo ship image
══════════════════════════════════════════ */
function PartnerHero(): JSX.Element {
  return (
    <section
      id="partner-hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '44% 56%',
        width: '100%',
        marginTop: '84px',
        /* NO fixed height — left column content drives the row height */
      }}
    >
      {/* ── LEFT: Text panel ── */}
      <div
        style={{
          position: 'relative',
          background: '#fff',
          padding: '36px 40px 36px 44px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflow: 'hidden',
        }}
      >
        {/* Subtle vertical grid-line decoration */}
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${n * 22}%`,
              width: '1px',
              background: 'rgba(0,0,0,0.06)',
              pointerEvents: 'none',
            }}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Pill badge */}
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              display: 'inline-block',
              background: '#c7d9f0',
              borderRadius: '999px',
              padding: '3px 12px',
              fontSize: '0.65rem',
              fontStyle: 'italic',
              color: '#1a3a6a',
              fontFamily: 'Georgia, Playfair Display, serif',
              letterSpacing: '0.01em',
            }}>
              Partner with Us
            </span>
          </div>

          {/* Heading — 3 lines */}
          <h1 style={{ margin: '0 0 18px 0', lineHeight: 1.08 }}>
            {/* "Partnering With" — italic serif */}
            <span style={{
              display: 'block',
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#111',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
            }}>
              Partnering With
            </span>
            {/* "Global" — bold Inter, blue */}
            <span style={{
              display: 'block',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '3.0rem',
              fontWeight: 800,
              color: '#1a5faa',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}>
              Global
            </span>
            {/* "Excellence" — bold Inter, dark */}
            <span style={{
              display: 'block',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '3.0rem',
              fontWeight: 800,
              color: '#111',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}>
              Excellence
            </span>
          </h1>

          {/* Body text */}
          <p style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: '0.58rem',
            color: '#555',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            maxWidth: '280px',
            margin: 0,
          }}>
            At Scapex Group, we believe that industry-defining scale is
            achieved through strategic, high-trust alliances. We seek
            partners who share our commitment to precision,
            sustainability, and uncompromising quality.
          </p>
        </div>
      </div>

      {/* RIGHT column: position:relative so image can be inset:0 absolute */}
      {/* The image does NOT contribute to row height — left col drives it    */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/partner-hero.png"
          alt="Cargo container ship at port"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 60%',
            display: 'block',
          }}
        />
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   SECTION 2 — INITIATE CONTACT FORM
   Reference: white bg, 2 columns
   Left: bordered card, big "Initiate / Contact." heading + desc
   Right: bottom-border-only form fields with blue uppercase labels
══════════════════════════════════════════ */
function PartnerForm(): JSX.Element {
  /* Shared styles */
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '0.54rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#1a5faa',
    marginBottom: '7px',
  }

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c8c8c4',
    outline: 'none',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '0.76rem',
    color: '#444',
    padding: '5px 0 7px',
    lineHeight: 1.4,
  }

  return (
    <section
      id="partner-form"
      style={{ background: '#fff', paddingTop: '48px', paddingBottom: '64px' }}
    >
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '290px 1fr',   /* fixed left card width, form takes rest */
        gap: '52px',
        alignItems: 'start',
      }}>

        {/* ── LEFT: Bordered card ── */}
        <div style={{
          border: '1px solid #d4d4d0',
          borderRadius: '2px',
          padding: '36px 28px',
          background: '#fff',
        }}>
          <h2 style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: '3.0rem',
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            marginBottom: '20px',
          }}>
            Initiate<br />Contact.
          </h2>
          <p style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: '0.73rem',
            color: '#666',
            lineHeight: 1.7,
          }}>
            Begin the dialogue. Submit your organization's details and our
            strategic alliances team will review your proposal.
          </p>
        </div>

        {/* ── RIGHT: Form ── */}
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '4px' }}
        >
          {/* COMPANY NAME */}
          <div>
            <label htmlFor="company-name" style={labelStyle}>Company Name</label>
            <input
              id="company-name"
              type="text"
              placeholder="Enter full registered name..."
              style={inputStyle}
            />
          </div>

          {/* PRIMARY CONTACT + CORPORATE EMAIL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <label htmlFor="primary-contact" style={labelStyle}>Primary Contact</label>
              <input
                id="primary-contact"
                type="text"
                placeholder="Full Name"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="corporate-email" style={labelStyle}>Corporate Email</label>
              <input
                id="corporate-email"
                type="email"
                placeholder="name@company.com"
                style={inputStyle}
              />
            </div>
          </div>

          {/* PARTNERSHIP CATEGORY */}
          <div style={{ position: 'relative' }}>
            <label htmlFor="partnership-category" style={labelStyle}>Partnership Category</label>
            <select
              id="partnership-category"
              defaultValue=""
              style={{
                ...inputStyle,
                appearance: 'none',
                WebkitAppearance: 'none',
                cursor: 'pointer',
                paddingRight: '24px',
                color: '#aaa',
              }}
            >
              <option value="" disabled>Select Category</option>
              <option value="renewable-energy">Renewable Energy</option>
              <option value="agro-commodities">Agro Commodities</option>
              <option value="logistics">Logistics &amp; Export</option>
              <option value="industrial">Industrial Network</option>
              <option value="sustainability">Sustainability</option>
            </select>
            <svg
              aria-hidden="true"
              width="11" height="11"
              viewBox="0 0 12 12" fill="none"
              style={{ position: 'absolute', right: 2, bottom: 12, pointerEvents: 'none' }}
            >
              <polyline points="2,4 6,8 10,4" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* VALUE PROPOSITION PROPOSAL */}
          <div>
            <label htmlFor="value-proposal" style={labelStyle}>Value Proposition Proposal</label>
            <textarea
              id="value-proposal"
              rows={4}
              placeholder="Briefly describe how this partnership aligns with Scapex Group's Industrial Objectives"
              style={{
                ...inputStyle,
                resize: 'none',
                paddingTop: '5px',
                lineHeight: 1.6,
              }}
            />
          </div>

          {/* Placeholder styles via global style tag */}
          <style>{`
            #company-name::placeholder,
            #primary-contact::placeholder,
            #corporate-email::placeholder,
            #value-proposal::placeholder {
              color: #bbb;
              font-size: 0.74rem;
            }
            #partnership-category { color: #bbb; }
            #partnership-category:focus,
            #company-name:focus,
            #primary-contact:focus,
            #corporate-email:focus,
            #value-proposal:focus {
              border-bottom-color: #1a5faa;
            }
          `}</style>
        </form>
      </div>
    </section>
  )
}
