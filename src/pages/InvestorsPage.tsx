import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type ReportTab = 'ALL' | 'ANNUAL REPORTS' | 'SUSTAINABILITY' | 'FINANCIAL RESULTS'

interface Report { id: string; badge: string; year: string; subtitle: string; tab: ReportTab }
const reports: Report[] = [
  { id: 'r1', badge: 'PDF | 5.16MB',  year: '2023', subtitle: 'Integrated Annual Report', tab: 'ANNUAL REPORTS' },
  { id: 'r2', badge: 'DOCX | 2.5MB',  year: '2022', subtitle: 'Financial Statements',    tab: 'FINANCIAL RESULTS' },
  { id: 'r3', badge: 'XLSX | 1.75MB', year: '2023', subtitle: 'Budget Analysis',         tab: 'FINANCIAL RESULTS' },
]
const TABS: ReportTab[] = ['ALL', 'ANNUAL REPORTS', 'SUSTAINABILITY', 'FINANCIAL RESULTS']

const LABEL_STYLE: React.CSSProperties = {
  fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em',
  textTransform: 'uppercase', color: '#5b7fa0',
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
}
const VALUE_STYLE: React.CSSProperties = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, color: '#111',
  letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px',
}
const SUB_STYLE: React.CSSProperties = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.08em',
  textTransform: 'uppercase', color: '#666',
}

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
    <section id="investors-hero" className="relative w-full overflow-hidden" style={{ marginTop: '84px', minHeight: 'clamp(260px, 45vw, 380px)' }}>
      <img src="/investors-hero.png" alt="Scapex investor relations meeting" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
      {/* Gradient */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.55) 38%, rgba(255,255,255,0.88) 65%, rgba(255,255,255,0.95) 100%)' }} />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.30) 100%)' }} />

      {/* Text — responsive positioning */}
      <div className="absolute inset-0 flex items-end md:items-end justify-start md:justify-end px-6 md:px-[52px] pb-8 md:pb-11">
        <div style={{ maxWidth: '560px' }}>
          <div className="mb-3">
            <span style={{ display: 'inline-block', background: '#c7d9f0', borderRadius: '999px', padding: '4px 14px', fontSize: '0.70rem', fontStyle: 'italic', color: '#1a3a6a', fontFamily: 'Georgia, Playfair Display, serif' }}>
              Investor Relationships
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 4.4rem)', fontWeight: 800, color: '#0f0f0f', lineHeight: 1.06, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Creating <span style={{ color: '#a0a8b4' }}>Sustainable</span> Value
          </h1>
          <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.58rem', color: '#555', lineHeight: 1.85, letterSpacing: '0.045em', textTransform: 'uppercase', maxWidth: '380px' }}>
            Scapex Group deliver a financial robust performance driven by excellence and a long term commitment to sustainable growth. Explore our latest metrics, reports, and strategic insights
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Financial Performance ─────────────── */
function FinancialPerformance(): JSX.Element {
  return (
    <section className="bg-white py-12 md:py-16" id="financial-performance">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.2rem, 3vw, 1.55rem)', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>Financial Performance</h2>
          <a href="#metrics" style={{ border: '1px solid #c0c0bc', background: 'transparent', color: '#444', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.04em', padding: '8px 16px', borderRadius: '2px', textDecoration: 'none', whiteSpace: 'nowrap' }}>View Full Metrics</a>
        </div>

        {/* 2-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px] md:gap-[4px]">
          <MetricCard label="Annual Revenue"  value="₹500 Cr+"  sub="FY 2023–2024" />
          <MetricCard label="EBITDA"           value="RM 103.0b" sub="+12% YoY Growth" />
          <MetricCard label="Employee Count"  value="500+"       sub="As of 2023" />
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
    <div style={{ background: '#f0f0ee', padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '130px' }}>
      <span style={LABEL_STYLE}>{label}</span>
      <div>
        <div style={VALUE_STYLE}>{value}</div>
        <div style={SUB_STYLE}>{sub}</div>
      </div>
    </div>
  )
}

function MarketCapCard(): JSX.Element {
  const bars = [38, 52, 44, 62, 72, 66, 85]
  return (
    <div style={{ background: '#0d1b2e', padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '130px' }}>
      <div>
        <span style={{ ...LABEL_STYLE, color: '#6b8aad' }}>Market Cap</span>
        <div style={{ ...VALUE_STYLE, color: '#fff', marginTop: '8px' }}>₹12.5k Cr+</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '44px', marginTop: '8px' }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: '#4a6fa0', borderRadius: '2px 2px 0 0', minHeight: '4px' }} />
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
    <section className="bg-white py-12 md:py-14" style={{ borderTop: '1px solid #ebebea' }} id="annual-reports">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-5">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.2rem, 3vw, 1.55rem)', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>Annual Reports</h2>
          <a href="#archives" style={{ border: '1px solid #c0c0bc', background: 'transparent', color: '#444', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.68rem', fontWeight: 500, padding: '8px 16px', borderRadius: '2px', textDecoration: 'none', whiteSpace: 'nowrap' }}>View Archives</a>
        </div>

        {/* Scrollable tabs on mobile */}
        <div className="flex gap-4 md:gap-7 mb-6 overflow-x-auto pb-0" style={{ borderBottom: '1px solid #e4e4e0' }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0 10px', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: activeTab === tab ? '#111' : '#aaa', borderBottom: activeTab === tab ? '2px solid #111' : '2px solid transparent', marginBottom: '-1px', transition: 'color 0.15s', whiteSpace: 'nowrap' }}>
              {tab}
            </button>
          ))}
        </div>

        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {filtered.map(r => <ReportCard key={r.id} report={r} />)}
          <ViewAllCard />
        </div>
      </div>
    </section>
  )
}

function ReportCard({ report }: { report: Report }): JSX.Element {
  return (
    <div style={{ border: '1px solid #e4e4e0', borderRadius: '2px', padding: '14px 12px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '6px' }}>
        <svg width="22" height="26" viewBox="0 0 26 30" fill="none"><rect x="0.5" y="0.5" width="25" height="29" rx="2" fill="#dbeafe" stroke="#93c5fd"/><rect x="5" y="9" width="16" height="1.5" rx="0.75" fill="#3b82f6"/><rect x="5" y="13" width="12" height="1.5" rx="0.75" fill="#3b82f6"/><rect x="5" y="17" width="9" height="1.5" rx="0.75" fill="#3b82f6"/></svg>
        <span style={{ background: '#1a1a1a', color: '#fff', fontSize: '0.40rem', fontWeight: 700, letterSpacing: '0.06em', padding: '2px 5px', borderRadius: '2px', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>{report.badge}</span>
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#111', letterSpacing: '-0.02em', lineHeight: 1 }}>{report.year}</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', color: '#888' }}>{report.subtitle}</div>
    </div>
  )
}

function ViewAllCard(): JSX.Element {
  return (
    <div style={{ border: '1px solid #e4e4e0', borderRadius: '2px', background: '#f8f8f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', minHeight: '110px', padding: '16px' }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.60rem', fontWeight: 600, color: '#555', textAlign: 'center' }}>View All Reports</span>
    </div>
  )
}
