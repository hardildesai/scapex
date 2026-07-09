import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalForwardingHero from '../components/GlobalForwardingHero'
import StatsBar from '../components/StatsBar'
import IntegratedGlobalForwarding from '../components/IntegratedGlobalForwarding'
import ComprehensiveServices from '../components/ComprehensiveServices'
import CoreCapabilities from '../components/CoreCapabilities'
import LogisticsProcess from '../components/LogisticsProcess'
import LogisticsCommitments from '../components/LogisticsCommitments'
import FreightCorridors from '../components/FreightCorridors'
import CbmCalculator from '../components/CbmCalculator'
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
          <ComprehensiveServices />
        </ScrollReveal>
        <ScrollReveal>
          <CoreCapabilities />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsProcess />
        </ScrollReveal>
        <ScrollReveal>
          <LogisticsCommitments />
        </ScrollReveal>
        <ScrollReveal>
          <FreightCorridors />
        </ScrollReveal>
        <ScrollReveal>
          <CbmCalculator />
        </ScrollReveal>
        <ScrollReveal>
          <GlobalForwardingContactForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
