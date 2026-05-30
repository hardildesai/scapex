import { useState, useEffect } from 'react'


interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Our Ecosystem', href: '#ecosystem' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Investors', href: '#investors' },
  { label: 'Media', href: '#media' },
  { label: 'Careers', href: '#careers' },
]

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (

    <nav
      className="fixed top-8 left-0 right-0 z-[90] bg-white/95 border-b border-[#e8e8e8] h-[52px]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center h-[52px] max-w-[1180px] mx-auto px-10 w-full">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-1.5 flex-shrink-0 no-underline mr-7"
          aria-label="Scapex Home"
        >
          <span className="text-base font-bold text-[#111] tracking-tight">Scapex</span>
        </a>

        {/* Desktop Links */}

        <ul className="flex items-center list-none flex-1 gap-0" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block px-3 text-[0.76rem] font-normal text-[#333] tracking-wide whitespace-nowrap transition-colors duration-150 hover:text-[#111]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="bg-[#1a5faa] text-white text-xs font-semibold rounded px-4 py-2 hover:bg-[#174e8a] transition-colors"
            id="nav-cta-partner"
          >
            Partner With Us
          </button>
          <button
            className="ml-2 p-2 rounded hover:bg-gray-100 transition-colors"
            id="nav-search-btn"
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            className={`ml-2 flex flex-col justify-center items-center w-8 h-8 rounded border border-gray-300 transition-all ${menuOpen ? 'bg-gray-200' : 'bg-white'}`}
            id="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </button>
        </div>
      </div>

      <div className={`fixed top-[84px] left-0 right-0 bg-white shadow-lg z-[100] transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <ul role="list" className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-4 py-2 text-base font-medium text-[#333] hover:text-[#111] hover:bg-gray-100 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-[#1a5faa] text-white text-xs font-semibold rounded px-4 py-2 mt-2 hover:bg-[#174e8a] transition-colors">Partner With Us</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
