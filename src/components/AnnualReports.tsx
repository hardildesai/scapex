import { useState } from 'react'

type ReportTab = 'ALL' | 'ANNUAL REPORTS' | 'SUSTAINABILITY' | 'FINANCIAL RESULTS'

interface Report { id: string; badge: string; year: string; subtitle: string; tab: ReportTab }
const reports: Report[] = [
  { id: 'r1', badge: 'PDF | 5.16MB',  year: '2023', subtitle: 'Integrated Annual Report', tab: 'ANNUAL REPORTS' },
  { id: 'r2', badge: 'DOCX | 2.5MB',  year: '2022', subtitle: 'Financial Statements',    tab: 'FINANCIAL RESULTS' },
  { id: 'r3', badge: 'XLSX | 1.75MB', year: '2023', subtitle: 'Budget Analysis',         tab: 'FINANCIAL RESULTS' },
]
const TABS: ReportTab[] = ['ALL', 'ANNUAL REPORTS', 'SUSTAINABILITY', 'FINANCIAL RESULTS']

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

export default function AnnualReports(): JSX.Element {
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
