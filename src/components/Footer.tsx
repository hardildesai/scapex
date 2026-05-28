import './Footer.css'

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Ecosystem', href: '#ecosystem' },
      { label: 'Stewardship', href: '#stewardship' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    heading: 'Divisions',
    links: [
      { label: 'Solar & Renewable', href: '#division-solar' },
      { label: 'Agro Commodities', href: '#division-agro' },
      { label: 'Export & Logistics', href: '#division-logistics' },
      { label: 'Industrial Network', href: '#ecosystem' },
    ],
  },
  {
    heading: 'Investors',
    links: [
      { label: 'Investor Relations', href: '#investors' },
      { label: 'Annual Reports', href: '#investors' },
      { label: 'Governance', href: '#investors' },
      { label: 'ESG Reports', href: '#sustainability' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Media & Press', href: '#media' },
      { label: 'Partner With Us', href: '#contact' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer(): JSX.Element {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">

        {/* Top: Logo + Nav columns */}
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Scapex Home">
              <span className="footer__logo-wordmark">Scapex</span>
            </a>
            <p className="footer__tagline">
              Empowering Sustainability.<br />Enabling Global Growth.
            </p>
          </div>

          <div className="footer__nav">
            {footerLinks.map((col) => (
              <div className="footer__col" key={col.heading}>
                <h4 className="footer__col-heading">{col.heading}</h4>
                <ul role="list">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="footer__link">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom: Legal */}
        <div className="footer__bottom">
          <p className="footer__legal">
            © {new Date().getFullYear()} Scapex Group. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms" className="footer__legal-link">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
