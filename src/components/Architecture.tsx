export default function Architecture(): JSX.Element {
  return (
    <section className="bg-[#f4f4f2] pt-12 pb-14" id="ecosystem">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">

        {/* Header: 2-col — label+title left, description right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-10">
          <div>
            <p className="text-[0.63rem] font-semibold tracking-[0.15em] uppercase text-[#888] mb-3.5">
              01 / The Architecture
            </p>
            <h2 className="text-[1.65rem] font-bold text-[#111] leading-[1.18] tracking-[-0.03em]">
              A{' '}
              <em style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', color: '#1a5faa', fontWeight: 700 }}>
                Synchronized
              </em>
              <br />
              Industrial Network
            </h2>
          </div>
          <p className="text-[0.80rem] text-[#666] leading-[1.75] max-w-[380px] md:pt-9">
            Our operations are not isolated silos. They are continuously
            interconnected threads of energy, resources, and logistics,
            optimised for massive scale.
          </p>
        </div>

        {/* Three empty bordered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#d8d8d4] rounded overflow-hidden">
          <div className="h-[120px] md:h-[160px] bg-white border-b md:border-b-0 md:border-r border-[#d8d8d4]" />
          <div className="h-[120px] md:h-[160px] bg-white border-b md:border-b-0 md:border-r border-[#d8d8d4]" />
          <div className="h-[120px] md:h-[160px] bg-white" />
        </div>

      </div>
    </section>
  )
}
