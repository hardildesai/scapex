import { Link } from 'react-router-dom'

export default function LogisticsCTA(): JSX.Element {
  return (
    <section className="bg-[#faf8f4] py-14 md:py-24 px-5 md:px-10 text-center" id="logistics-contact">
      <div className="max-w-[660px] mx-auto">

        <h2 className="font-serif text-[clamp(2.0rem,5vw,2.8rem)] font-bold text-[#0d1b2e] tracking-tight leading-[1.1] mb-5">
          Let's Simplify Your Supply Chain
        </h2>
        <p className="font-urbanist text-[0.82rem] text-[#666] font-semibold leading-[1.8] mb-10 max-w-[540px] mx-auto uppercase tracking-wide">
          Partner with Scapex today and experience seamless, reliable logistics services tailored to your business needs.
        </p>

        <Link
          to="/partner"
          id="logistics-cta-btn"
          className="inline-block bg-gold text-[#0d1b2e] font-mono font-extrabold text-[0.72rem] tracking-[0.14em] uppercase py-4 px-10 rounded-full hover:bg-[#d4b55a] transition-all duration-200 no-underline shadow-lg shadow-gold/15"
        >
          Get in Touch with Our Team
        </Link>

      </div>
    </section>
  )
}
