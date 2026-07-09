import { useState } from 'react'

export default function LogisticsContactForm(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '', companyEmail: '', serviceRequired: '', volume: '', message: ''
  })

  return (
    <section id="contact-form" className="bg-[#0d1b2e] py-[72px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ── LEFT: Heading + contact info ── */}
        <div>
          {/* Big white heading */}
          <h2 className="font-bricolage text-[clamp(2rem,3.5vw,3rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Ready to move your<br />business forward?
          </h2>

          {/* Uppercase body text */}
          <p className="font-urbanist text-[0.70rem] font-semibold text-white/50 leading-relaxed uppercase tracking-wider max-w-[320px] mb-9">
            Consult with our freight experts to receive a tailored plan that prioritizes efficiency and regulatory compliance.
          </p>

          {/* Contact rows */}
          <div className="flex flex-col gap-[18px]">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.15a16 16 0 0 0 5.74 5.74l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                ),
                text: '+91 XXXXXXXXXX',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                text: 'solutions@scapexglobal',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                text: 'Global Trade Plaza, Dubai',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Dark icon box */}
                <div className="w-10 h-10 bg-white/7 rounded-lg flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="font-urbanist text-[0.78rem] font-medium text-white">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: White card with form ── */}
        <div className="bg-white rounded-xl p-[36px_32px] shadow-2xl">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-7">

            {/* Row 1: Full Name | Company Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cf-full-name" className="block font-urbanist text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">
                  Full Name
                </label>
                <input
                  id="cf-full-name"
                  type="text"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-urbanist text-[0.80rem] text-[#222] py-1.5 pb-2.5 leading-relaxed transition-colors focus:border-[#c8a84b] placeholder-[#ccc]"
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="cf-company-email" className="block font-urbanist text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">
                  Company Email
                </label>
                <input
                  id="cf-company-email"
                  type="email"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-urbanist text-[0.80rem] text-[#222] py-1.5 pb-2.5 leading-relaxed transition-colors focus:border-[#c8a84b] placeholder-[#ccc]"
                  value={form.companyEmail}
                  onChange={e => setForm({ ...form, companyEmail: e.target.value })}
                />
              </div>
            </div>

            {/* Row 2: Service Required | Estimated Volume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cf-service" className="block font-urbanist text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">
                  Service Required
                </label>
                <input
                  id="cf-service"
                  type="text"
                  placeholder="Sea / Air / Customs"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-urbanist text-[0.80rem] text-[#222] py-1.5 pb-2.5 leading-relaxed transition-colors focus:border-[#c8a84b] placeholder-[#ccc]"
                  value={form.serviceRequired}
                  onChange={e => setForm({ ...form, serviceRequired: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="cf-volume" className="block font-urbanist text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">
                  Estimated Volume
                </label>
                <input
                  id="cf-volume"
                  type="text"
                  placeholder="e.g. 20 TEU / month"
                  className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-urbanist text-[0.80rem] text-[#222] py-1.5 pb-2.5 leading-relaxed transition-colors focus:border-[#c8a84b] placeholder-[#ccc]"
                  value={form.volume}
                  onChange={e => setForm({ ...form, volume: e.target.value })}
                />
              </div>
            </div>

            {/* Row 3: Message — full width */}
            <div>
              <label htmlFor="cf-message" className="block font-urbanist text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#0d1b2e] mb-2">
                Message
              </label>
              <input
                id="cf-message"
                type="text"
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-urbanist text-[0.80rem] text-[#222] py-1.5 pb-2.5 leading-relaxed transition-colors focus:border-[#c8a84b] placeholder-[#ccc]"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Submit — full width gold */}
            <button
              type="submit"
              id="logistics-submit-btn"
              className="w-full bg-[#c8a84b] text-white font-mono text-[0.68rem] font-extrabold tracking-[0.18em] uppercase py-3.5 px-7 rounded-[4px] cursor-pointer transition-colors hover:bg-[#b09038]"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
