import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InvestorsPage from './pages/InvestorsPage'
import SustainabilityPage from './pages/SustainabilityPage'
import PartnerPage from './pages/PartnerPage'
import LogisticsPage from './pages/LogisticsPage'
import ExportsPage from './pages/ExportsPage'
import Stats from './components/Stats'
import Architecture from './components/Architecture'
import Divisions from './components/Divisions'
import Globe from './components/Globe'
import Sustainability from './components/Sustainability'
import Stewardship from './components/Stewardship'
import News from './components/News'
import Footer from './components/Footer'
import CareersPage from './pages/CareersPage'

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/exports" element={<ExportsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
