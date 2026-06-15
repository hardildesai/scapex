interface StatItem { value: string; label: string }

const stats: StatItem[] = [
  { value: '500 Cr', label: 'Annual Revenue' },
  { value: '250',    label: 'Projects Completed' },
  { value: '20',     label: 'Countries Served' },
]

export default function Stats(): JSX.Element {
  return (
    <section className="bg-[#f4f4f2] border-y border-[#e0e0de] py-8" id="stats">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">

          {/* Left: Label + Heading */}
          <div className="flex-shrink-0 max-w-[280px]">
            <p className="text-[0.63rem] font-semibold tracking-[0.15em] uppercase text-[#888] mb-2.5">
              Scale Across X City
            </p>
            <h2 className="text-[0.87rem] font-semibold text-[#1a1a1a] leading-[1.5]">
              Demonstrating Massive<br />
              Impact Across All<br />
              Operating Divisions
            </h2>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-[#d0d0ce] flex-shrink-0" aria-hidden="true" />
          <div className="block md:hidden h-px w-full bg-[#d0d0ce]" aria-hidden="true" />

          {/* Stats */}
          <div className="flex gap-10 md:gap-12 items-start flex-wrap" role="list">
            {stats.map((s) => (
              <div className="flex flex-col gap-1" key={s.label} role="listitem">
                <span className="text-[1.75rem] font-bold text-[#111] tracking-[-0.04em] leading-none">
                  {s.value}
                </span>
                <span className="text-[0.68rem] font-normal text-[#888] tracking-[0.03em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
