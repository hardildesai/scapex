import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SustainabilityHero from '../components/SustainabilityHero'
import StrategicPillars from '../components/StrategicPillars'
import GlobalImpactMetrics from '../components/GlobalImpactMetrics'

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

