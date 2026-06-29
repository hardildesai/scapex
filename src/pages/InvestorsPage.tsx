import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InvestorsHero from '../components/InvestorsHero'
import FinancialPerformance from '../components/FinancialPerformance'
import AnnualReports from '../components/AnnualReports'

export default function InvestorsPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <InvestorsHero />
        <FinancialPerformance />
        <AnnualReports />
      </main>
      <Footer />
    </>
  )
}
