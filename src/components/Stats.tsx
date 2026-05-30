

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '500 Cr', label: 'Annual Revenue' },
  { value: '250', label: 'Projects Completed' },
  { value: '20', label: 'Countries Served' },
]

export default function Stats(): JSX.Element {
  return (
    <section className="bg-[#f4f4f2] border-y border-[#e0e0de] py-10" id="stats">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1px_1fr] items-center gap-y-6 md:gap-x-12">
          {/* Left: Label + Heading */}
          <div className="max-w-[280px]">
            <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#888] mb-2.5">Scale Across X City</p>
            <h2 className="text-[0.88rem] font-semibold text-[#1a1a1a] leading-[1.5] tracking-tight">
              Demonstrating Massive<br />
              Impact Across All<br />
              Operating Divisions
            </h2>
          </div>
          {/* Vertical separator */}
          <div className="hidden md:block w-px h-16 bg-[#d0d0ce] flex-shrink-0" aria-hidden="true" />
          <div className="block md:hidden w-full h-px bg-[#d0d0ce] my-4" aria-hidden="true" />
          {/* Right: Stat items */}
          <div className="flex gap-7 md:gap-12 items-start flex-wrap" role="list">
            {stats.map((s) => (
              <div className="flex flex-col gap-1" key={s.label} role="listitem">
                <span className="text-[1.7rem] font-bold text-[#111] tracking-tight leading-none">{s.value}</span>
                <span className="text-[0.70rem] font-normal text-[#888] tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
