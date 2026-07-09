import { useState } from 'react'

export default function SecuringSourcing(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyName: '', tradeRoute: '', volume: '', notes: ''
  })

  return (
    <section className="bg-[#faf8f4] py-[72px]" id="sourcing-form">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">

        {/* Section label + heading */}
        <div className="text-center mb-12">
          <p className="font-sans text-[0.54rem] font-bold tracking-[0.20em] uppercase text-[#c8a84b] mb-2.5">
            Agro Excellence
          </p>
          <h2 className="font-sans text-[clamp(1.6rem,2.8vw,2.2rem)] font-extrabold text-[#111] tracking-[-0.04em]">
            Securing Your Sourcing
          </h2>
          <p className="font-sans text-[0.72rem] text-[#666] leading-[1.72] max-w-[440px] mx-auto mt-2.5">
            Partner with Scapex Agro to access India's finest produce at scale. Submit your sourcing requirements and our export team will respond within 24 hours.
          </p>
        </div>

        {/* 2 cols on md+, single col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-[52px] items-start">

          {/* LEFT: Farmer image — hidden on mobile to save space */}
          <img
            src="/exports-farmer.webp"
            alt="Indian farmer"
            className="w-full aspect-[3/4] object-cover rounded-sm block hidden md:block"
          />

          {/* RIGHT: Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sf-full-name" className="block font-sans text-[0.54rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">Full Name</label>
                <input id="sf-full-name" type="text"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.76rem] text-[#333] py-1 pb-2.5 transition-colors focus:border-[#c8a84b] placeholder-[#bbb]"
                  value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-company" className="block font-sans text-[0.54rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">Company Name</label>
                <input id="sf-company" type="text"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.76rem] text-[#333] py-1 pb-2.5 transition-colors focus:border-[#c8a84b] placeholder-[#bbb]"
                  value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sf-trade-route" className="block font-sans text-[0.54rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">Trade Route</label>
                <input id="sf-trade-route" type="text" placeholder="Origin → Destination"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.76rem] text-[#333] py-1 pb-2.5 transition-colors focus:border-[#c8a84b] placeholder-[#bbb]"
                  value={form.tradeRoute} onChange={e => setForm({...form, tradeRoute: e.target.value})} />
              </div>
              <div>
                <label htmlFor="sf-volume" className="block font-sans text-[0.54rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">Estimated Volume</label>
                <input id="sf-volume" type="text" placeholder="e.g. 500 MT / month"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.76rem] text-[#333] py-1 pb-2.5 transition-colors focus:border-[#c8a84b] placeholder-[#bbb]"
                  value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
              </div>
            </div>

            <div>
              <label htmlFor="sf-notes" className="block font-sans text-[0.54rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">Additional Notes</label>
              <input id="sf-notes" type="text" placeholder="Specific product requirements, packaging, certifications..."
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.76rem] text-[#333] py-1 pb-2.5 transition-colors focus:border-[#c8a84b] placeholder-[#bbb]"
                value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            </div>

            {/* Contact info row */}
            <div className="flex flex-wrap gap-5">
              <div className="font-sans text-[0.68rem] text-[#555]">
                <span className="font-bold text-[#111]">📞</span> +91 XXXXXXXXXX
              </div>
              <div className="font-sans text-[0.68rem] text-[#555]">
                <span className="font-bold text-[#111]">✉️</span> agro@scapexgroup.com
              </div>
            </div>

            <button
              type="submit"
              id="exports-submit-btn"
              className="w-full bg-[#c8a84b] text-white font-sans text-[0.68rem] font-extrabold tracking-[0.18em] uppercase py-3.5 px-7 border-none rounded-sm cursor-pointer hover:bg-[#b09038] transition-colors"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
