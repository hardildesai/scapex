import { useState } from 'react'

export default function SecuringSourcing(): JSX.Element {
  const [form, setForm] = useState({
    fullName: '',
    companyEmail: '',
    serviceRequired: '',
    estimatedVolume: '',
    message: '',
  })

  return (
    <section className="bg-white py-20 px-6 md:px-12" id="sourcing-form">
      <div className="max-w-[1180px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[0.8rem] font-sans font-bold tracking-widest text-[#c8a84b] uppercase block mb-3">
            Global Partnerships
          </span>
          <h2 className="font-serif text-[2.2rem] md:text-[2.6rem] font-bold text-slate-900 leading-tight">
            Securing Your Sourcing
          </h2>
          <p className="font-urbanist text-[0.85rem] text-slate-500 max-w-[620px] mx-auto mt-4 leading-relaxed font-semibold">
            Our trade specialists are ready to discuss your requirements, provide samples, and offer competitive market hedging advisory.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image and Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/exportglobal.webp"
                alt="Indian farmer plowing field with bulls"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Email Box */}
            <div className="bg-[#e8f2fe] rounded-lg p-5 flex flex-col">
              <span className="text-[0.62rem] font-sans font-extrabold tracking-wider text-slate-500 uppercase mb-1">
                Email Inquiries
              </span>
              <span className="font-sans font-bold text-[1.0rem] text-[#0d1b2e]">
                exports@scapex.com
              </span>
            </div>

            {/* Headquarters Box */}
            <div className="bg-[#e8f2fe] rounded-lg p-5 flex flex-col">
              <span className="text-[0.62rem] font-sans font-extrabold tracking-wider text-slate-500 uppercase mb-1">
                Headquarters
              </span>
              <span className="font-sans font-bold text-[1.0rem] text-[#0d1b2e] leading-snug">
                Andheri East, Mumbai,<br />India
              </span>
            </div>
          </div>

          {/* Right Column: Sourcing Inquiry Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white border border-slate-200/80 rounded-xl px-8 py-10 md:px-12 md:py-28 flex flex-col gap-8 shadow-sm"
          >
            {/* Input Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="sf-fullname" className="text-[0.65rem] font-mono font-extrabold tracking-widest text-[#0d1b2e] uppercase mb-2">
                  Full Name
                </label>
                <input
                  id="sf-fullname"
                  type="text"
                  className="w-full bg-transparent border-b border-slate-300 focus:border-[#c8a84b] outline-none font-mono text-[0.8rem] text-slate-800 pb-2 transition-colors"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sf-email" className="text-[0.65rem] font-mono font-extrabold tracking-widest text-[#0d1b2e] uppercase mb-2">
                  Company Email
                </label>
                <input
                  id="sf-email"
                  type="email"
                  className="w-full bg-transparent border-b border-slate-300 focus:border-[#c8a84b] outline-none font-mono text-[0.8rem] text-slate-800 pb-2 transition-colors"
                  value={form.companyEmail}
                  onChange={(e) => setForm({ ...form, companyEmail: e.target.value })}
                />
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="sf-service" className="text-[0.65rem] font-mono font-extrabold tracking-widest text-[#0d1b2e] uppercase mb-2">
                  Service Required
                </label>
                <input
                  id="sf-service"
                  type="text"
                  className="w-full bg-transparent border-b border-slate-300 focus:border-[#c8a84b] outline-none font-mono text-[0.8rem] text-slate-800 pb-2 transition-colors"
                  value={form.serviceRequired}
                  onChange={(e) => setForm({ ...form, serviceRequired: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sf-volume" className="text-[0.65rem] font-mono font-extrabold tracking-widest text-[#0d1b2e] uppercase mb-2">
                  Estimated Volume
                </label>
                <input
                  id="sf-volume"
                  type="text"
                  className="w-full bg-transparent border-b border-slate-300 focus:border-[#c8a84b] outline-none font-mono text-[0.8rem] text-slate-800 pb-2 transition-colors"
                  value={form.estimatedVolume}
                  onChange={(e) => setForm({ ...form, estimatedVolume: e.target.value })}
                />
              </div>
            </div>

            {/* Input Row 3 */}
            <div className="flex flex-col">
              <label htmlFor="sf-message" className="text-[0.65rem] font-mono font-extrabold tracking-widest text-[#0d1b2e] uppercase mb-2">
                Message
              </label>
              <input
                id="sf-message"
                type="text"
                className="w-full bg-transparent border-b border-slate-300 focus:border-[#c8a84b] outline-none font-mono text-[0.8rem] text-slate-800 pb-2 transition-colors"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gold hover:bg-[#916d00] text-white font-mono text-[0.72rem] font-bold tracking-[0.16em] uppercase py-4 rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Submit Enquiry
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}
