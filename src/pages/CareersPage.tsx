import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareersHero from '../components/CareersHero'
import TeamImage from '../components/TeamImage'
import JobListings from '../components/JobListings'

export default function CareersPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <CareersHero />
        <TeamImage />
        <JobListings />
      </main>
      <Footer />
    </>
  )
}

