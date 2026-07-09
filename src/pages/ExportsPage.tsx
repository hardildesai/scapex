import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExportsHero from '../components/ExportsHero'
import GlobalStewardship from '../components/GlobalStewardship'
import ProductPortfolio from '../components/ProductPortfolio'
import ComplianceCerts from '../components/ComplianceCerts'
import TradeExcellence from '../components/TradeExcellence'
import SustainabilityCommitment from '../components/SustainabilityCommitment'
import SecuringSourcing from '../components/SecuringSourcing'
import ScrollReveal from '../components/ScrollReveal'

export default function ExportsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-hidden">
        <div className="relative z-20">
          <ScrollReveal>
            <ExportsHero />
          </ScrollReveal>
        </div>
        <div className="relative z-10">
          <ScrollReveal>
            <GlobalStewardship />
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <ProductPortfolio />
        </ScrollReveal>
        <ScrollReveal>
          <ComplianceCerts />
        </ScrollReveal>
        <ScrollReveal>
          <TradeExcellence />
        </ScrollReveal>
        <ScrollReveal>
          <SustainabilityCommitment />
        </ScrollReveal>
        <ScrollReveal>
          <SecuringSourcing />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
