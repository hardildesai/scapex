import React from 'react'

function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }): JSX.Element {
  return (
    <div className="bg-[#f0f0ee] px-4 pt-4 pb-[18px] flex flex-col justify-between min-h-[130px]">
      <span className="font-sans text-[0.52rem] font-bold tracking-[0.15em] uppercase text-[#5b7fa0]">{label}</span>
      <div>
        <div className="font-sans text-[clamp(1.4rem,4vw,2rem)] font-extrabold text-[#111] tracking-[-0.03em] leading-none mb-[6px]">{value}</div>
        <div className="font-sans text-[0.55rem] font-semibold tracking-[0.08em] uppercase text-[#666]">{sub}</div>
      </div>
    </div>
  )
}

function MarketCapCard(): JSX.Element {
  const bars = [38, 52, 44, 62, 72, 66, 85]
  return (
    <div className="bg-[#0d1b2e] px-4 pt-4 pb-[18px] flex flex-col justify-between min-h-[130px]">
      <div>
        <span className="font-sans text-[0.52rem] font-bold tracking-[0.15em] uppercase text-[#6b8aad]">Market Cap</span>
        <div className="font-sans text-[clamp(1.4rem,4vw,2rem)] font-extrabold tracking-[-0.03em] leading-none text-white mt-2">₹12.5k Cr+</div>
      </div>
      <div className="flex items-end gap-1 h-[44px] mt-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 bg-[#4a6fa0] rounded-t-[2px] min-h-[4px]" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export default function FinancialPerformance(): JSX.Element {
  return (
    <section className="bg-white py-12 md:py-16" id="financial-performance">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <h2 className="font-serif text-[clamp(1.2rem,3vw,1.55rem)] font-bold text-[#111] tracking-[-0.02em]">Financial Performance</h2>
          <a href="#metrics" className="border border-[#c0c0bc] bg-transparent text-[#444] font-sans text-[0.68rem] font-medium tracking-[0.04em] px-4 py-2 rounded-[2px] no-underline whitespace-nowrap">View Full Metrics</a>
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
