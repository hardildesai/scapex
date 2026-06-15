import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Types ── */
type ReportTab = 'ALL' | 'ANNUAL REPORTS' | 'SUSTAINABILITY' | 'FINANCIAL RESULTS'

interface Report {
  id: string
  badge: string
  year: string
  subtitle: string
  tab: ReportTab
}

const reports: Report[] = [
  { id: 'r1', badge: 'PDF | 5.16MB',  year: '2023', subtitle: 'Integrated Annual Report', tab: 'ANNUAL REPORTS' },
  { id: 'r2', badge: 'DOCX | 2.5MB',  year: '2022', subtitle: 'Financial Statements',    tab: 'FINANCIAL RESULTS' },
  { id: 'r3', badge: 'XLSX | 1.75MB', year: '2023', subtitle: 'Budget Analysis',         tab: 'FINANCIAL RESULTS' },
]

const TABS: ReportTab[] = ['ALL', 'ANNUAL REPORTS', 'SUSTAINABILITY', 'FINANCIAL RESULTS']

/* ─── Shared style tokens ─── */
const CARD_LABEL: React.CSSProperties = {
  fontSize: '0.52rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#5b7fa0',   /* steel-blue matching reference */
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
}

const CARD_VALUE: React.CSSProperties = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontSize: '2rem',
  fontWeight: 800,
  color: '#111',
  letterSpacing: '-0.03em',
  lineHeight: 1,
  marginBottom: '6px',
}

const CARD_SUB: React.CSSProperties = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontSize: '0.55rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#666',
}

const CARD_BASE: React.CSSProperties = {
  background: '#f0f0ee',
  padding: '20px 22px 22px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '170px',
}

/* ── Page ── */
export default function InvestorsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <InvestorsHero />
        <FinancialPerformance />
        <AnnualReports />
      </main>
      <Footer />
    </>
  )
}

/* ─────────────── Hero ─────────────── */
function InvestorsHero(): JSX.Element {
  return (
    <section
      id="investors-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        overflow: 'hidden',
        marginTop: '84px',
      }}
    >
      {/* Background image — business meeting scene */}
      <img
        src="/investors-hero.png"
        alt="Scapex investor relations meeting"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          display: 'block',
        }}
      />

      {/* Gradient overlay — image fades lighter toward right/bottom for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.55) 38%, rgba(255,255,255,0.88) 65%, rgba(255,255,255,0.95) 100%)',
        }}
      />
      {/* Bottom fade for text contrast */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.30) 100%)',
        }}
      />

      {/* Text content — right-side, bottom-aligned */}
      <div
        style={{
          position: 'absolute',
          right: '52px',
          bottom: '44px',
          maxWidth: '580px',
          textAlign: 'left',
        }}
      >
        {/* Pill badge — light blue/periwinkle */}
        <div style={{ marginBottom: '14px' }}>
          <span style={{
            display: 'inline-block',
            background: '#c7d9f0',
            borderRadius: '999px',
            padding: '5px 18px',
            fontSize: '0.70rem',
            fontStyle: 'italic',
            color: '#1a3a6a',
            fontFamily: 'Georgia, Playfair Display, serif',
            letterSpacing: '0.01em',
          }}>
            Investor Relationships
          </span>
        </div>

        {/* Heading — very large serif, "Sustainable" is muted gray */}
        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
          fontWeight: 800,
          color: '#0f0f0f',
          lineHeight: 1.06,
          letterSpacing: '-0.02em',
          marginBottom: '16px',
          whiteSpace: 'nowrap',
        }}>
          Creating{' '}
          <span style={{ color: '#a0a8b4' }}>Sustainable</span>{' '}
          Value
        </h1>

        {/* Body text */}
        <p style={{
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontSize: '0.58rem',
          color: '#555',
          lineHeight: 1.85,
          letterSpacing: '0.045em',
          textTransform: 'uppercase',
          maxWidth: '380px',
        }}>
          Scapex Group deliver a financial robust performance driven by<br />
          excellence and a long term commitment to sustainable growth.<br />
          Explore our latest metrics, reports, and strategic insights
        </p>
      </div>
    </section>
  )
}

/* ─────────────── Financial Performance ─────────────── */
function FinancialPerformance(): JSX.Element {
  return (
    <section
      style={{ background: '#fff', paddingTop: '60px', paddingBottom: '64px' }}
      id="financial-performance"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Section header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '36px',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '1.55rem',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.02em',
          }}>
            Financial Performance
          </h2>
          <a
            href="#metrics"
            style={{
              border: '1px solid #c0c0bc',
              background: 'transparent',
              color: '#444',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '9px 20px',
              borderRadius: '2px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            View Full Metrics
          </a>
        </div>

        {/* 3×2 Metrics grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, auto)',
          gap: '4px',
        }}>
          {/* Row 1 */}
          <MetricCard label="Annual Revenue"  value="₹500 Cr+"  sub="FY 2023–2024" />
          <MetricCard label="EBITDA"           value="RM 103.0b" sub="+12% YoY Growth" />
          <MetricCard label="Employee Count"  value="500+"       sub="As of 2023" />
          {/* Row 2 */}
          <MetricCard label="Debt to Equity"  value="0.42x"      sub="Industry Leading" />
          <MetricCard label="ROE"              value="18.2%"      sub="Consistent Returns" />
          <MarketCapCard />
        </div>

      </div>
    </section>
  )
}

function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }): JSX.Element {
  return (
    <div style={CARD_BASE}>
      {/* Label — top */}
      <span style={CARD_LABEL}>{label}</span>
      {/* Value + subtitle — bottom */}
      <div>
        <div style={CARD_VALUE}>{value}</div>
        <div style={CARD_SUB}>{sub}</div>
      </div>
    </div>
  )
}

function MarketCapCard(): JSX.Element {
  const bars = [38, 52, 44, 62, 72, 66, 85]

  return (
    <div style={{
      background: '#0d1b2e',
      padding: '20px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '170px',
    }}>
      {/* Label + Value */}
      <div>
        <span style={{ ...CARD_LABEL, color: '#6b8aad' }}>Market Cap</span>
        <div style={{ ...CARD_VALUE, color: '#fff', marginTop: '10px', fontSize: '1.8rem' }}>
          ₹12.5k Cr+
        </div>
      </div>

      {/* Bar chart */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '6px',
        height: '56px',
        marginTop: '10px',
      }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: '#4a6fa0',
              borderRadius: '3px 3px 0 0',
              minHeight: '6px',
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ─────────────── Annual Reports ─────────────── */
function AnnualReports(): JSX.Element {
  const [activeTab, setActiveTab] = useState<ReportTab>('ALL')
  const filtered = activeTab === 'ALL' ? reports : reports.filter(r => r.tab === activeTab)

  return (
    <section
      style={{ background: '#fff', paddingTop: '52px', paddingBottom: '72px', borderTop: '1px solid #ebebea' }}
      id="annual-reports"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '1.55rem',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.02em',
          }}>
            Annual Reports
          </h2>
          <a
            href="#archives"
            style={{
              border: '1px solid #c0c0bc',
              background: 'transparent',
              color: '#444',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '9px 20px',
              borderRadius: '2px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            View Archives
          </a>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '28px', marginBottom: '24px', borderBottom: '1px solid #e4e4e0' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 0 10px',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.60rem',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: activeTab === tab ? '#111' : '#aaa',
                borderBottom: activeTab === tab ? '2px solid #111' : '2px solid transparent',
                marginBottom: '-1px',
                transition: 'color 0.15s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {filtered.map(r => <ReportCard key={r.id} report={r} />)}
          <ViewAllCard />
        </div>

      </div>
    </section>
  )
}

function ReportCard({ report }: { report: Report }): JSX.Element {
  return (
    <div style={{
      border: '1px solid #e4e4e0',
      borderRadius: '2px',
      padding: '18px 16px 16px',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s',
    }}>
      {/* Top: icon + badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
          <rect x="0.5" y="0.5" width="25" height="29" rx="2" fill="#dbeafe" stroke="#93c5fd"/>
          <rect x="5" y="9"  width="16" height="1.5" rx="0.75" fill="#3b82f6"/>
          <rect x="5" y="13" width="12" height="1.5" rx="0.75" fill="#3b82f6"/>
          <rect x="5" y="17" width="9"  height="1.5" rx="0.75" fill="#3b82f6"/>
        </svg>
        <span style={{
          background: '#1a1a1a',
          color: '#fff',
          fontSize: '0.44rem',
          fontWeight: 700,
          letterSpacing: '0.07em',
          padding: '3px 6px',
          borderRadius: '2px',
          textTransform: 'uppercase',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        }}>
          {report.badge}
        </span>
      </div>
      <div style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: '1.4rem',
        fontWeight: 800,
        color: '#111',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        {report.year}
      </div>
      <div style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: '0.60rem',
        color: '#888',
        letterSpacing: '0.01em',
      }}>
        {report.subtitle}
      </div>
    </div>
  )
}

function ViewAllCard(): JSX.Element {
  return (
    <div style={{
      border: '1px solid #e4e4e0',
      borderRadius: '2px',
      background: '#f8f8f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      cursor: 'pointer',
      minHeight: '130px',
      padding: '18px',
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: '0.62rem',
        fontWeight: 600,
        color: '#555',
        letterSpacing: '0.04em',
        textAlign: 'center',
      }}>
        View All Reports
      </span>
    </div>
  )
}
