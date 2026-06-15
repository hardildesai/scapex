import { Fragment } from 'react'

interface StatItem { value: string; label: string }

const stats: StatItem[] = [
  { value: '500 Cr+', label: 'Annual Revenue' },
  { value: '250+', label: 'Projects Completed' },
  { value: '20+', label: 'Countries Served' },
]

export default function Stats(): JSX.Element {
  return (
    <section className="bg-white border-y border-[#e0e0de] py-8 " id="stats">
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">

          {/* Left: Label + Heading */}
          <div className="flex-shrink-0 max-w-[280px]">
            <p className="text-[0.75rem] font-serif font-medium tracking-[0.15em] uppercase text-slate-gray mb-2.5">
              Scale & Velocity
            </p>
            <h2 className="text-[0.97rem] font-urbanist font-bold text-black leading-[1.5]">
              Demonstrating Massive<br />
              Impact Across All<br />
              Operating Divisions
            </h2>
          </div>

          {stats.map((s) => (
            <Fragment key={s.label}>
              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-[#d0d0ce] flex-shrink-0" aria-hidden="true" />
              <div className="block md:hidden h-px w-full bg-[#d0d0ce] my-1" aria-hidden="true" />

              {/* Stats */}
              <div className="flex flex-col gap-1 flex-shrink-0" role="listitem">
                <span className="text-[1.75rem] font-bold  font-serif text-primary tracking-[-0.04em] leading-none">
                  {s.value}
                </span>
                <span className="text-[0.75rem] font-urbanist text-slate-gray tracking-[0.03em]">
                  {s.label}
                </span>
              </div>
            </Fragment>
          ))}

        </div>
      </div>
    </section>
  )
}
