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

export default function LogisticsPage(): JSX.Element {
  return (
    <>
      <style>{LOGISTICS_MOBILE_CSS}</style>
      <AnnouncementBar />
      <Navbar />
      <main>
        <LogisticsHero />
        <StatsBar />
        <IntegratedLogistics />
        <SeaFreight />
        <AirFreight />
        <CustomsCompliance />
        <LogisticsContactForm />
      </main>
      <Footer />
    </>
  )
}
