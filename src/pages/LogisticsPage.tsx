import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import LogisticsPageHero from '../components/LogisticsPageHero'
import LogisticsEndToEnd from '../components/LogisticsEndToEnd'
import LogisticsServicesGrid from '../components/LogisticsServicesGrid'
import LogisticsInfrastructure from '../components/LogisticsInfrastructure'
import IndustriesTicker from '../components/IndustriesTicker'
import LogisticsFAQ from '../components/LogisticsFAQ'
import LogisticsCTA from '../components/LogisticsCTA'

export default function LogisticsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-hidden">
        <LogisticsPageHero />
        <ScrollReveal>
          <LogisticsEndToEnd />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsServicesGrid />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsInfrastructure />
        </ScrollReveal>
        <IndustriesTicker />
        <ScrollReveal>
          <LogisticsFAQ />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
