export default function PartnerForm(): JSX.Element {
  const labelClass = "block font-serif text-[0.65rem] font-bold tracking-[0.06em] uppercase text-slate-gray mb-3"
  const inputClass = "block w-full bg-transparent border-none border-b border-black/30 outline-none font-serif text-[0.82rem] text-black/80 pt-2 pb-3 px-0 leading-normal placeholder-black/30 focus:border-b-black transition-colors duration-200"

  return (
    <section
      id="partner-form"
      className="bg-white pt-[48px] pb-[64px]"
    >
      <div className="max-w-[1180px] mx-auto px-10 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-[64px] items-start">

        {/* ── LEFT: Bordered card ── */}
        <div className="border border-[#d4d4d0] rounded-[2px] py-[44px] px-[36px] bg-white min-h-[380px] flex flex-col justify-start">
          <h2 className="font-serif text-[3rem] md:text-[3.25rem] font-bold text-black leading-[1.05] mb-6">
            Initiate<br />
            Contact.
          </h2>
          <p className="font-serif text-[0.82rem] text-black/80 leading-[1.65]">
            Begin the dialogue. Submit your organization's details and our
            strategic alliances team will review your proposal.
          </p>
        </div>

        {/* ── RIGHT: Form ── */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-[36px] pt-2"
        >
          {/* COMPANY NAME */}
          <div>
            <label htmlFor="company-name" className={labelClass}>Company Name</label>
            <input
              id="company-name"
              type="text"
              placeholder="Enter full registered name."
              className={inputClass}
            />
          </div>

          {/* PRIMARY CONTACT + CORPORATE EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="primary-contact" className={labelClass}>Primary Contact</label>
              <input
                id="primary-contact"
                type="text"
                placeholder="Full Name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="corporate-email" className={labelClass}>Corporate Email</label>
              <input
                id="corporate-email"
                type="email"
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* PARTNERSHIP CATEGORY */}
          <div className="relative">
            <label htmlFor="partnership-category" className={labelClass}>Partnership Category</label>
            <select
              id="partnership-category"
              defaultValue=""
              className={`${inputClass} appearance-none cursor-pointer pr-6 text-black/30`}
              onChange={(e) => {
                if (e.target.value) {
                  e.target.classList.remove('text-black/30')
                  e.target.classList.add('text-black/80')
                } else {
                  e.target.classList.remove('text-black/80')
                  e.target.classList.add('text-black/30')
                }
              }}
            >
              <option value="" disabled>Select Category</option>
              <option value="renewable-energy">Renewable Energy</option>
              <option value="agro-commodities">Agro Commodities</option>
              <option value="logistics">Logistics &amp; Export</option>
              <option value="industrial">Industrial Network</option>
              <option value="sustainability">Sustainability</option>
            </select>
            <svg
              aria-hidden="true"
              width="11" height="11"
              viewBox="0 0 12 12" fill="none"
              className="absolute right-0.5 bottom-3.5 pointer-events-none"
            >
              <polyline points="2,4 6,8 10,4" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* VALUE PROPOSITION PROPOSAL */}
          <div>
            <label htmlFor="value-proposal" className={labelClass}>Value Proposition Proposal</label>
            <textarea
              id="value-proposal"
              rows={4}
              placeholder="Briefly describe how this partnership aligns with Scapex Group's Industrial Objectives"
              className={`${inputClass} resize-none pt-2 pb-4 leading-[1.6]`}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-deep-navy text-white text-[0.72rem] font-mono font-bold tracking-[0.16em] uppercase py-3.5 px-10 hover:bg-[#1a3a6a] transition-colors duration-200"
            >
              GET A QUOTE
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
