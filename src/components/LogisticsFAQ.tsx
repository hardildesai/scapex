import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What services does Scapex provide for domestic logistics?',
    a: 'Scapex provides a comprehensive network of road transport, FTL (Full Truckload) and LTL (Less than Truckload) land carriage, bonded warehousing, and last-mile distribution across major economic hubs.',
  },
  {
    q: 'How can I track my shipment status through Scapex?',
    a: 'You can use our Track Cargo interface at the top of this page with your B/L or consignment reference number for live tracking. Automatic email updates and live client portal dashboards are also provided.',
  },
  {
    q: 'What are the customs clearance requirements for exports?',
    a: 'Our in-house customs brokerage handles all documentation including bills of lading, certificates of origin, customs declaration filing, HS code verification, and regulatory clearance at Indian and destination ports.',
  },
  {
    q: 'Can Scapex handle hazardous or oversized cargo?',
    a: 'Yes, our project cargo and specialised logistics divisions have certified equipment and personnel to handle hazardous materials (DG), temperature-sensitive goods, and heavy/oversized breakbulk shipments.',
  },
  {
    q: 'What is the difference between FCL and LCL shipping?',
    a: 'FCL (Full Container Load) means you rent a complete container for your cargo, offering faster transit and exclusive storage. LCL (Less than Container Load) consolidates your cargo with other shippers, offering a highly cost-efficient solution for smaller volumes.',
  },
]

export default function LogisticsFAQ(): JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="bg-warm-cream py-24 px-6 md:px-10" id="logistics-faq">
      <div className="max-w-[760px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-[clamp(2.0rem,4vw,2.8rem)] font-bold text-[#0d1b2e] tracking-tight">
            Logistics FAQs
          </h2>
          <div className="w-16 h-[2px] bg-[#c8a84b] mx-auto mt-4" />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#c8a84b]/60 shadow-md bg-white' : 'border-[#e8e8e4] bg-white'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#fffdf9] transition-colors cursor-pointer"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[0.88rem] font-bold text-[#0d1b2e] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#c8a84b] border-[#c8a84b] text-[#0d1b2e]'
                        : 'border-[#d8d8d4] text-[#888]'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d={isOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 bg-white border-t border-[#f2ede4]">
                    <p className="font-urbanist text-[0.82rem] text-[#555] leading-relaxed font-semibold pt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
