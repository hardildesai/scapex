import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalForwardingHero from '../components/GlobalForwardingHero'
import StatsBar from '../components/StatsBar'
import IntegratedGlobalForwarding from '../components/IntegratedGlobalForwarding'
import SeaFreight from '../components/SeaFreight'
import AirFreight from '../components/AirFreight'
import CustomsCompliance from '../components/CustomsCompliance'
import GlobalForwardingContactForm from '../components/GlobalForwardingContactForm'
import ScrollReveal from '../components/ScrollReveal'

export default function GlobalForwardingPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-hidden">
        <ScrollReveal>
          <GlobalForwardingHero />
          <StatsBar />
        </ScrollReveal>
        <ScrollReveal>
          <IntegratedGlobalForwarding />
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
          <GlobalForwardingContactForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
