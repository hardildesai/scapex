import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LogisticsHero from '../components/LogisticsHero'
import StatsBar from '../components/StatsBar'
import IntegratedLogistics from '../components/IntegratedLogistics'
import SeaFreight from '../components/SeaFreight'
import AirFreight from '../components/AirFreight'
import CustomsCompliance from '../components/CustomsCompliance'
import LogisticsContactForm from '../components/LogisticsContactForm'
import ScrollReveal from '../components/ScrollReveal'

export default function LogisticsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-hidden">
        <ScrollReveal>
          <LogisticsHero />
          <StatsBar />
        </ScrollReveal>
        <ScrollReveal>
          <IntegratedLogistics />
        </ScrollReveal>
        <ScrollReveal>
          <SeaFreight />
        </ScrollReveal>
        <ScrollReveal>
          <AirFreight />
        </ScrollReveal>
        <ScrollReveal>
          <CustomsCompliance />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsContactForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
