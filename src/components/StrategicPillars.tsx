import * as React from 'react'

export default function StrategicPillars(): JSX.Element {
  return (
    <section id="pillars" className="bg-white py-12 md:py-38">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Stack on mobile, 2-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-8 md:gap-12 items-start">

          {/* Left: Text */}
          <div>
            <p className='font-urbanist text-[0.85rem] uppercase text-slate-gray'>
              Pillars of Sustainability
            </p>
            <h2 className='font-serif text-[clamp(2rem,6vw,2.9rem)] font-bold text-black leading-tight mt-1'>
              Strategic Pillars
            </h2>
            <p className='font-urbanist text-[0.82rem] mt-2 text-slate-gray uppercase'>
              Our sustainability framework is built on four core commitments — designed not just for compliance, but for pioneering industry standards.
            </p>
          </div>

          {/* Right: 2×2 icon grid */}
          <div className="grid grid-cols-2 border border-[#d8d8d4] rounded-[2px] overflow-hidden">
            <PillarCell><Co2Icon /></PillarCell>
            <PillarCell borderLeft><LeafIcon /></PillarCell>
            <PillarCell borderTop><RecycleIcon /></PillarCell>
            <PillarCell borderTop borderLeft><PeopleIcon /></PillarCell>
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarCell({ children, borderLeft = false, borderTop = false }: { children: React.ReactNode; borderLeft?: boolean; borderTop?: boolean }): JSX.Element {
  return (
    <div style={{ height: 'clamp(100px, 15vw, 140px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderLeft: borderLeft ? '1px solid #d8d8d4' : 'none', borderTop: borderTop ? '1px solid #d8d8d4' : 'none' }}>
      {children}
    </div>
  )
}

function Co2Icon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="13" rx="9" ry="7" stroke="#1a5faa" strokeWidth="1.5" fill="none" />
      <path d="M7 13c-3 0-5 1.5-5 3.5S6 20 9 20h14c3 0 7-1 7-3.5S27 13 24 13" stroke="#1a5faa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="11" y="17" fontSize="7" fill="#1a5faa" fontFamily="Inter, sans-serif" fontWeight="700">CO₂</text>
    </svg>
  )
}

function LeafIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}

function RecycleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>
}

function PeopleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
}
