import AnnouncementBar from './components/AnnouncementBar.tsx'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Stats from './components/Stats.tsx'
import Architecture from './components/Architecture.tsx'
import Divisions from './components/Divisions.tsx'
import './App.css'

export default function App(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Architecture />
        <Divisions />
      </main>
    </>
  )
}
