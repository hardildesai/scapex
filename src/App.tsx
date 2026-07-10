import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Architecture from './components/Architecture'
import Divisions from './components/Divisions'
import Globe from './components/Globe'
import Sustainability from './components/Sustainability'
import Stewardship from './components/Stewardship'
import News from './components/News'
import Footer from './components/Footer'

// Lazy loaded page components
const CareersPage = lazy(() => import('./pages/CareersPage'))
const InvestorsPage = lazy(() => import('./pages/InvestorsPage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'))
const PartnerPage = lazy(() => import('./pages/PartnerPage'))
const GlobalForwardingPage = lazy(() => import('./pages/GlobalForwardingPage'))
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'))
const ExportsPage = lazy(() => import('./pages/ExportsPage'))

function HomePage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Architecture />
        <Divisions />
        <Globe />
        <Sustainability />
        <Stewardship />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Preloader />
      <Suspense fallback={
        <div className="min-h-screen bg-[#0d1b2e] flex items-center justify-center text-white/50 font-mono text-sm">
          Loading page...
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/global-forwarding" element={<GlobalForwardingPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/exports" element={<ExportsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
