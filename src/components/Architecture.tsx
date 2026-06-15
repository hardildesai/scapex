export default function Architecture(): JSX.Element {
  return (
    <section className="bg-warm-cream pt-24 pb-28" id="ecosystem">
      <div className="max-w-[1180px] mx-auto px-10 w-full">

        {/* Header: 2-col — label+title left, description right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-10">
          <div>
            <p className="text-[0.75rem] font-serif font-semibold tracking-[0.15em] uppercase text-slate-gray mb-3">
              01 / The Architecture
            </p>
            <h2 className="text-[2.5rem] font-bold font-bricolage text-black leading-[1.18] tracking-[-0.03em]">
              A{' '}
              <em className="font-serif text-primary">
                Synchronized
              </em>
              <br />
              Industrial Network
            </h2>
          </div>
          <p className="text-[0.80rem] font-serif font-medium text-black ml-40 leading-[1.75] max-w-[380px] md:pt-9">
            Our operations are not isolated silos. They are continuously
            interconnected threads of energy, resources, and logistics,
            optimised for massive scale.
          </p>
        </div>

        {/* Three empty bordered cards */}
        <div className="grid grid-cols-3 border border-[#d8d8d4] rounded overflow-hidden">
          <div className="h-[320px] bg-white border-r border-[#d8d8d4]" />
          <div className="h-[320px] bg-white border-r border-[#d8d8d4]" />
          <div className="h-[320px] bg-white" />
        </div>

      </div>
    </section>
  )
}
