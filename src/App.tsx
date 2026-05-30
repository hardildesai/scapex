import AnnouncementBar from './components/AnnouncementBar.tsx'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Stats from './components/Stats.tsx'
import Architecture from './components/Architecture.tsx'
import Divisions from './components/Divisions.tsx'
import Globe from './components/Globe.tsx'
import Sustainability from './components/Sustainability.tsx'
import Stewardship from './components/Stewardship.tsx'
import News from './components/News.tsx'
import Footer from './components/Footer.tsx'
// App-level reset is handled by Tailwind's preflight and utility classes.

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Architecture />
        <Divisions />
        <Globe />
        <Sustainability />
        <Stewardship />
        <News />
      </main>
      <Footer />
    </>
  )
}
