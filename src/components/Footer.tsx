

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
    <footer className="bg-[#0d1b2e] pt-16" role="contentinfo">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        {/* Top: Logo + Nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-12 pb-12">
          <div className="flex flex-col gap-4">
            <a href="/" className="inline-block" aria-label="Scapex Home">
              <span className="text-[1.3rem] font-extrabold text-white tracking-tight">Scapex</span>
            </a>
            <p className="text-[0.75rem] text-[#7b9bb8] leading-[1.7]">
              Empowering Sustainability.<br />Enabling Global Growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[0.60rem] font-bold tracking-[0.14em] uppercase text-[#4a6a88] mb-4">{col.heading}</h4>
                <ul role="list" className="flex flex-col gap-2.5 list-none">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[0.76rem] text-[#8aaac4] no-underline transition-colors duration-200 tracking-wide hover:text-white">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="h-px bg-white/10" aria-hidden="true" />
        {/* Bottom: Legal */}
        <div className="flex flex-wrap items-center justify-between py-5 gap-6">
          <p className="text-[0.68rem] text-[#4a6a88] tracking-wide">
            © {new Date().getFullYear()} Scapex Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[0.68rem] text-[#4a6a88] no-underline transition-colors duration-200 hover:text-[#8aaac4]">Privacy Policy</a>
            <a href="#terms" className="text-[0.68rem] text-[#4a6a88] no-underline transition-colors duration-200 hover:text-[#8aaac4]">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
