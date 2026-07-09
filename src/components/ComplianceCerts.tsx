export default function ComplianceCerts(): JSX.Element {
  const certs = [
    { id: 'cert-fssai', title: 'FSSAI', sub: 'Food Safety Standards' },
    { id: 'cert-apeda', title: 'APEDA', sub: 'Agri. & Processed Food' },
    { id: 'cert-haccp', title: 'HACCP', sub: 'Hazard Analysis Control' },
    { id: 'cert-iso', title: 'ISO 22000', sub: 'Food Safety Management' },
  ]
  return (
    <section id="compliance-certs" className="bg-ice-blue py-16 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[3rem] font-bold text-[#111] tracking-tight mb-2.5">
            Compliance &amp; Certifications
          </h2>
          <p className="font-urbanist text-[0.8rem] text-slate-600 leading-[1.72] max-w-[480px] mx-auto">
            Every export shipment adheres to the highest international food safety standards. Our certifications reflect our commitment to quality and regulatory excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.id}
              id={c.id}
              className="bg-white border border-[#e0ddd6] rounded-[3px] py-6 px-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="font-sans text-[1.1rem] font-bold text-[#0d1b2e] tracking-tight mb-1.5">
                {c.title}
              </div>
              <div className="font-sans text-[0.62rem] text-slate-500 tracking-[0.06em] leading-normal">
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
