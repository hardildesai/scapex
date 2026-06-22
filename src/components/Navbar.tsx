import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLink { label: string; href: string; isRoute?: boolean }

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Our Ecosystem', href: '#ecosystem' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '/sustainability', isRoute: true },
  { label: 'Investors', href: '/investors', isRoute: true },
  { label: 'Media', href: '#media' },
  { label: 'Careers', href: '/careers', isRoute: true },
]

export default function Navbar(): JSX.Element {
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = (href: string) =>
    `inline-block px-3 text-[0.75rem] font-bold tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80 ${location.pathname === href ? 'text-black' : 'text-black'
    }`

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-[90] bg-white/97 border-b border-[#e8e8e8] h-[52px] transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-28'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center h-[52px] max-w-[1180px] mx-auto px-10 w-full">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 no-underline mr-7 flex items-center -ml-28" aria-label="Scapex Home">
          <img src="/logo/main-logo.png" alt="Scapex Logo" className="h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center list-none font-mono flex-1 gap-8 ml-26" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link to={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="inline-block px-3 text-[0.75rem] font-bold text-black tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-40">
          <Link
            to="/partner"
            className="bg-gold text-black text-[0.73rem] font-mono font-bold  rounded-xl px-4 py-[7px] hover:bg-[#1e4f30] transition-colors duration-200 whitespace-nowrap"
            id="nav-cta-partner"
          >
            Partner With Us
          </Link>
          <button
            className="p-2 rounded hover:bg-gray-100 transition-colors text-[#555]"
            id="nav-search-btn"
            aria-label="Search"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer p-1.5"
            id="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-[1.5px] bg-[#111] rounded transition-all duration-250 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-[#111] rounded transition-all duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-[#111] rounded transition-all duration-250 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-[84px] left-0 right-0 bg-white border-b border-[#e8e8e8] z-[89] transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'}`}>
        <ul role="list" className="flex flex-col py-3 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="block px-6 py-2.5 text-[0.85rem] text-[#333] hover:bg-gray-50 hover:text-[#111] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="block px-6 py-2.5 text-[0.85rem] text-[#333] hover:bg-gray-50 hover:text-[#111] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li className="px-6 pt-2 pb-3">
            <button className="w-full bg-[#2a6840] text-white text-[0.73rem] font-semibold rounded px-4 py-2 hover:bg-[#1e4f30] transition-colors">
              Partner With Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
