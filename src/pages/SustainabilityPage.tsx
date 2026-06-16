import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SustainabilityPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <SustainabilityHero />
        <StrategicPillars />
        <GlobalImpactMetrics />
      </main>
      <Footer />
    </>
  )
}

/* ─────────────── Hero ─────────────── */
function SustainabilityHero(): JSX.Element {
  return (
    <section id="sust-hero" className="w-full" style={{ marginTop: '84px' }}>
      {/* Flex-col on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: 'clamp(300px, 50vw, 380px)' }}>

        {/* Left: dark panel */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-14" style={{ background: '#0d1b2e', flex: '0 0 auto', width: '100%', minWidth: 0 }} data-md-width="42%">
          <style>{`@media(min-width:768px){#sust-left{width:42%;flex-shrink:0}#sust-right{flex:1}}`}</style>
          <div id="sust-left" style={{ width: '100%' }}>
            <div style={{ marginBottom: '6px' }}>
              <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.2, marginBottom: 0 }}>Powering a</p>
              <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, fontStyle: 'italic', color: '#c8a84b', lineHeight: 1.05, marginBottom: 0 }}>Greener &amp;</p>
              <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, fontStyle: 'italic', color: '#4a9eda', lineHeight: 1.05, marginBottom: '4px' }}>Sustainable</p>
              <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>Tomorrow.</p>
            </div>
            <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.60rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, letterSpacing: '0.04em', textTransform: 'uppercase', maxWidth: '340px', marginTop: '16px' }}>
              Scapex is dedicated to leading industrial revolution. Our mission is clear: achieve net zero operations by 2030 through breakthrough technological innovations and rigorous operational efficiency.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div id="sust-right" className="overflow-hidden" style={{ minHeight: '200px', flex: 1 }}>
          <img src="/sust-hero.png" alt="Green plant growing on solar panel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', minHeight: '200px' }} />
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Strategic Pillars ─────────────── */
function StrategicPillars(): JSX.Element {
  return (
    <section id="pillars" className="bg-white py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Stack on mobile, 2-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-8 md:gap-12 items-start">

          {/* Left: Text */}
          <div>
            <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', marginBottom: '10px' }}>
              Pillars of Sustainability
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 700, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '14px' }}>
              Strategic Pillars
            </h2>
            <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.72rem', color: '#666', lineHeight: 1.75, maxWidth: '300px' }}>
              Our sustainability framework is built on four core commitments — designed not just for compliance, but for pioneering industry standards.
            </p>
          </div>

          {/* Right: 2×2 icon grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #d8d8d4', borderRadius: '2px', overflow: 'hidden' }}>
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
      <ellipse cx="16" cy="13" rx="9" ry="7" stroke="#1a5faa" strokeWidth="1.5" fill="none"/>
      <path d="M7 13c-3 0-5 1.5-5 3.5S6 20 9 20h14c3 0 7-1 7-3.5S27 13 24 13" stroke="#1a5faa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <text x="11" y="17" fontSize="7" fill="#1a5faa" fontFamily="Inter, sans-serif" fontWeight="700">CO₂</text>
    </svg>
  )
}
function LeafIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
function RecycleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
}
function PeopleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5faa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}

/* ─────────────── Global Impact Metrics ─────────────── */
function GlobalImpactMetrics(): JSX.Element {
  return (
    <section id="impact-metrics" className="py-12 md:py-16" style={{ background: '#dce9f5' }}>
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <p style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a7aa0', marginBottom: '16px' }}>
          Metrics That Matter
        </p>

        {/* Stack on mobile, 2-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-12 items-center">

          {/* Left: image */}
          <div className="overflow-hidden rounded-sm" style={{ aspectRatio: '4/3', maxHeight: '300px' }}>
            <img src="/sust-metrics.png" alt="Tree in solar field" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>

          {/* Right: stats */}
          <div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.0rem', fontStyle: 'italic', color: '#2a4a6a', marginBottom: '2px', fontWeight: 400 }}>Global Impact</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '24px' }}>Metrics</h2>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '4px' }}>1000+</div>
              <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a7aa0' }}>MW Solar Deployed Globally</div>
            </div>

            <div>
              <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '4px' }}>500k+</div>
              <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a7aa0' }}>Tonnes CO₂ Offset Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
