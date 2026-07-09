import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ── Ecosystem dropdown items ── */
const ecosystemLinks = [
  {
    label: 'Logistics',
    href: '/global-forwarding',
    desc: 'End-to-end freight forwarding',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Exports',
    href: '/exports',
    desc: 'Premium agro commodities',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Global Forwarding',
    href: '/global-forwarding',
    desc: 'Sea, air & customs clearance',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

interface NavLink { label: string; href: string; isRoute?: boolean; hasDropdown?: boolean }

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Our Ecosystem', href: '#ecosystem', hasDropdown: true },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '/sustainability', isRoute: true },
  { label: 'Investors', href: '/investors', isRoute: true },
  { label: 'Media', href: '#media' },
  { label: 'Careers', href: '/careers', isRoute: true },
]

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false) // desktop hover state
  const [mobileEcoOpen, setMobileEcoOpen] = useState<boolean>(false) // mobile accordion
  const location = useLocation()
  const dropdownRef = useRef<HTMLLIElement>(null)

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); setDropdownOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false)
    setMobileEcoOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  /* Prevent body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Close desktop dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center list-none font-mono flex-1 gap-8 ml-26" role="list">
            {navLinks.map((link) => {

              /* Our Ecosystem — dropdown */
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="inline-flex items-center gap-1 px-3 text-[0.75rem] font-bold text-black tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80 cursor-pointer bg-transparent border-none"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      id="ecosystem-btn"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      {/* Chevron */}
                      <svg
                        width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* ── Dropdown Panel ── */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px] transition-all duration-200 origin-top z-50 ${dropdownOpen
                          ? 'opacity-100 scale-y-100 pointer-events-auto translate-y-0'
                          : 'opacity-0 scale-y-95 pointer-events-none -translate-y-1'
                        }`}
                      role="menu"
                    >
                      {/* Inner Container with styling */}
                      <div className="relative bg-white border border-[#e8e8e4] rounded-xl shadow-xl overflow-hidden">
                        {/* Small triangle notch */}
                        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e8e8e4] rotate-45 z-10" />

                        <div className="py-2 relative z-20">
                          {ecosystemLinks.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-[#f8f8f6] transition-colors duration-150 no-underline group"
                              role="menuitem"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <div className="mt-0.5 text-[#c8a84b] shrink-0 group-hover:text-[#b09038] transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-[0.78rem] font-bold text-[#0d1b2e] font-mono tracking-wide">
                                  {item.label}
                                </div>
                                <div className="text-[0.65rem] text-[#888] font-sans mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                              {/* Arrow */}
                              <svg
                                width="13" height="13" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="ml-auto mt-1 text-[#ccc] group-hover:text-[#c8a84b] transition-colors"
                              >
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </Link>
                          ))}
                        </div>

                        {/* Bottom accent */}
                        <div className="h-[3px] bg-gradient-to-r from-[#c8a84b] via-[#e0c060] to-[#c8a84b]" />
                      </div>
                    </div>
                  </li>
                )
              }

              /* Regular link */
              return (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="inline-block px-3 text-[0.75rem] font-bold text-black tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="inline-block px-3 text-[0.75rem] font-bold text-black tracking-[0.01em] whitespace-nowrap transition-colors duration-150 hover:text-black/80"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>

          {/* ── Desktop Actions ── */}
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

          {/* ── Mobile: search + hamburger ── */}
          <div className="flex md:hidden items-center gap-1 ml-auto">
            <button className="p-2 rounded hover:bg-gray-100 transition-colors text-[#555]" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              id="nav-hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'}`} />
              <span className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
              <span className={`absolute block w-5 h-[1.8px] bg-[#111] rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════ */}
      <div
        className={`md:hidden fixed inset-0 z-[85] transition-all duration-350 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Drawer panel */}
        <div
          className={`absolute left-0 right-0 bg-[#0d1b2e] shadow-2xl transition-all duration-350 ease-in-out ${isScrolled ? 'top-[52px]' : 'top-[84px]'
            } ${menuOpen ? 'translate-y-0' : '-translate-y-4'}`}
        >
          <ul role="list" className="list-none py-2 border-b border-white/10">
            {navLinks.map((link, i) => {

              /* Our Ecosystem — accordion */
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className={`transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                  >
                    {/* Accordion trigger */}
                    <button
                      className="w-full flex items-center justify-between px-6 py-3.5 text-[0.88rem] font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 border-b border-white/[0.05] bg-transparent"
                      onClick={() => setMobileEcoOpen(!mobileEcoOpen)}
                      aria-expanded={mobileEcoOpen}
                    >
                      {link.label}
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`opacity-50 transition-transform duration-250 ${mobileEcoOpen ? 'rotate-90' : ''}`}
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>

                    {/* Accordion content — sub-links */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileEcoOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      {ecosystemLinks.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-3 pl-10 pr-6 py-3 text-[0.82rem] font-medium text-white/60 hover:text-[#c8a84b] hover:bg-white/[0.04] transition-colors duration-150 border-b border-white/[0.04] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="text-[#c8a84b] opacity-70">{item.icon}</span>
                          <div>
                            <div className="text-[0.82rem] font-semibold text-white/75">{item.label}</div>
                            <div className="text-[0.62rem] text-white/35 mt-0.5">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              }

              /* Regular mobile link */
              return (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
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
              )
            })}
          </ul>

          {/* CTA inside drawer */}
          <div
            className={`px-6 py-5 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
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
            <p className="text-center text-[0.62rem] text-white/30 mt-3 tracking-wide">
              solutions@scapexglobal.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
