interface CorridorRow {
  lane: string
  mode: string
  transit: string
  frequency: string
}

const corridors: CorridorRow[] = [
  {
    lane: 'India ⇄ Middle East (Jebel Ali)',
    mode: 'Ocean FCL/LCL',
    transit: '3–6 days',
    frequency: 'Daily sailings',
  },
  {
    lane: 'India ⇄ Far East (SIN / SHA / HKG)',
    mode: 'Ocean FCL/LCL',
    transit: '7–14 days',
    frequency: 'Daily sailings',
  },
  {
    lane: 'India ⇄ North Europe (RTM / HAM / FXT)',
    mode: 'Ocean FCL/LCL',
    transit: '18–24 days',
    frequency: 'Weekly',
  },
  {
    lane: 'India ⇄ USA East Coast (NYC / SAV)',
    mode: 'Ocean FCL/LCL',
    transit: '24–30 days',
    frequency: 'Weekly',
  },
  {
    lane: 'India ⇄ East & South Africa',
    mode: 'Ocean FCL',
    transit: '12–20 days',
    frequency: 'Weekly',
  },
  {
    lane: 'India ⇄ Australia (SYD / MEL)',
    mode: 'Ocean FCL',
    transit: '16–22 days',
    frequency: 'Weekly',
  },
  {
    lane: 'Worldwide Airfreight (AMD / BOM / DEL)',
    mode: 'Air',
    transit: '1–4 days',
    frequency: 'Daily uplift',
  },
]

export default function FreightCorridors(): JSX.Element {
  return (
    <section className="bg-[#051124] py-24 px-6 md:px-12 text-white" id="freight-corridors">
      <div className="max-w-[1180px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] font-normal text-white">
            Key Trade Lanes &amp; Transit Times
          </h2>
        </div>

        {/* Table Container with Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-5 pr-6 font-sans text-[0.78rem] font-bold tracking-[0.08em] text-[#c8a84b] uppercase w-[40%]">
                  TRADE LANE
                </th>
                <th className="py-5 px-6 font-sans text-[0.78rem] font-bold tracking-[0.08em] text-[#c8a84b] uppercase w-[20%]">
                  MODE
                </th>
                <th className="py-5 px-6 font-sans text-[0.78rem] font-bold tracking-[0.08em] text-[#c8a84b] uppercase w-[20%]">
                  TRANSIT
                </th>
                <th className="py-5 pl-6 font-sans text-[0.78rem] font-bold tracking-[0.08em] text-[#c8a84b] uppercase w-[20%]">
                  FREQUENCY
                </th>
              </tr>
            </thead>
            <tbody>
              {corridors.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-150"
                >
                  <td className="py-4.5 pr-6 font-urbanist text-[0.85rem] font-medium text-white tracking-wide">
                    {row.lane}
                  </td>
                  <td className="py-4.5 px-6 font-urbanist text-[0.82rem] font-normal text-slate-300">
                    {row.mode}
                  </td>
                  <td className="py-4.5 px-6 font-urbanist text-[0.82rem] font-normal text-slate-300">
                    {row.transit}
                  </td>
                  <td className="py-4.5 pl-6 font-urbanist text-[0.82rem] font-normal text-slate-300">
                    {row.frequency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
