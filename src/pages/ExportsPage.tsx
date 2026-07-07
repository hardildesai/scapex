import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExportsHero from '../components/ExportsHero'
import ExportsStats from '../components/ExportsStats'
import GlobalStewardship from '../components/GlobalStewardship'
import ProductPortfolio from '../components/ProductPortfolio'
import ComplianceCerts from '../components/ComplianceCerts'
import TradeExcellence from '../components/TradeExcellence'
import SustainabilityCommitment from '../components/SustainabilityCommitment'
import SecuringSourcing from '../components/SecuringSourcing'

export default function ExportsPage(): JSX.Element {
  return (
    <>
      <style>{EXPORTS_MOBILE_CSS}</style>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ExportsHero />
        <ExportsStats />
        <GlobalStewardship />
        <ProductPortfolio />
        <ComplianceCerts />
        <TradeExcellence />
        <SustainabilityCommitment />
        <SecuringSourcing />
      </main>
      <Footer />
    </>
  )
}
