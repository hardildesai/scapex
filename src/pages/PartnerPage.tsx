import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PartnerHero from '../components/PartnerHero'
import PartnerForm from '../components/PartnerForm'

export default function PartnerPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <PartnerHero />
        <PartnerForm />
      </main>
      <Footer />
    </>
  )
}
