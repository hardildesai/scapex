import { useState, useEffect } from 'react'
import './Navbar.css'

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
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="/" className="navbar__logo" aria-label="Scapex Home">
          <span className="navbar__logo-wordmark">Scapex</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__cta" id="nav-cta-partner">
            Partner With Us
          </button>
          <button className="navbar__search" id="nav-search-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            id="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-drawer ${menuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="navbar__cta navbar__cta--mobile">Partner With Us</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
