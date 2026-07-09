import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLink { label: string; href: string; isRoute?: boolean }

const navLinks: NavLink[] = [
  { label: 'About',          href: '#about' },
  { label: 'Our Ecosystem',  href: '#ecosystem' },
  { label: 'Industries',     href: '#industries' },
  { label: 'Sustainability', href: '/sustainability', isRoute: true },
  { label: 'Investors',      href: '/investors',     isRoute: true },
  { label: 'Media',          href: '#media' },
  { label: 'Careers',        href: '/careers',       isRoute: true },
]

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [menuOpen,   setMenuOpen]   = useState<boolean>(false)
  const location = useLocation()

  /* Close on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { setIsScrolled(true); setMenuOpen(false) }
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* Prevent body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = (href: string) =>
    `inline-block px-3 text-[0.75rem] font-bold tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80 ${
      location.pathname === href ? 'text-black' : 'text-black'
    }`

  /* Navbar top: sits below announcement bar (32px) when not scrolled */
  const navTop = isScrolled ? 'top-0' : 'top-8'

  return (
    <>
      {/* ══════════════════════════════════════════
          NAV BAR
      ══════════════════════════════════════════ */}
      <nav
        className={`fixed left-0 right-0 z-[90] bg-white border-b border-[#e8e8e8] h-[52px] transition-all duration-300 ease-in-out ${navTop}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-[52px] max-w-[1180px] mx-auto px-4 md:px-10 w-full">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex-shrink-0 no-underline flex items-center md:-ml-28"
            aria-label="Scapex Home"
          >
            <img src="/logo/main-logo.webp" alt="Scapex Logo" className="h-10 md:h-11 w-auto object-contain" />
          </Link>

          {/* ── Desktop Links (hidden on mobile) ── */}
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

          {/* ── Desktop Actions (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-2 ml-40">
            <Link
              to="/partner"
              className="bg-gold text-black text-[0.73rem] font-mono font-bold rounded-xl px-4 py-[7px] hover:bg-[#e09010] transition-colors duration-200 whitespace-nowrap"
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
          </div>

          {/* ── Mobile: right side = search + hamburger ── */}
          <div className="flex md:hidden items-center gap-1 ml-auto">
            <button
              className="p-2 rounded hover:bg-gray-100 transition-colors text-[#555]"
              aria-label="Search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Hamburger / X */}
            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              id="nav-hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Three bars animate into an X */}
              <span
                className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'
                }`}
              />
              <span
                className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'
                }`}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER
          Slides in from top, dark navy bg
      ══════════════════════════════════════════ */}
      <div
        className={`md:hidden fixed inset-0 z-[85] transition-all duration-350 ease-in-out ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Dark overlay backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel — slides in from top */}
        <div
          className={`absolute left-0 right-0 bg-[#0d1b2e] shadow-2xl transition-all duration-350 ease-in-out ${
            isScrolled ? 'top-[52px]' : 'top-[84px]'
          } ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Nav links */}
          <ul role="list" className="list-none py-2 border-b border-white/10">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-300 ${
                  menuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="flex items-center justify-between px-6 py-3.5 text-[0.88rem] font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 border-b border-white/[0.05]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-6 py-3.5 text-[0.88rem] font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 border-b border-white/[0.05]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA inside drawer */}
          <div
            className={`px-6 py-5 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 40 + 40}ms` : '0ms' }}
          >
            <Link
              to="/partner"
              className="flex items-center justify-center w-full bg-[#c8a84b] text-[#0d1b2e] font-mono font-bold text-[0.78rem] tracking-[0.12em] uppercase py-3.5 rounded-lg hover:bg-[#d4b55a] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
              id="mobile-partner-btn"
            >
              Partner With Us
            </Link>

            {/* Small contact info line */}
            <p className="text-center text-[0.62rem] text-white/30 mt-3 tracking-wide">
              solutions@scapexglobal.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
