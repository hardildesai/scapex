import './Stats.css'

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
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats__inner">

          {/* Left: Label + Heading */}
          <div className="stats__left">
            <p className="stats__label-top">Scale Across X City</p>
            <h2 className="stats__heading">
              Demonstrating Massive<br />
              Impact Across All<br />
              Operating Divisions
            </h2>
          </div>

          {/* Vertical separator */}
          <div className="stats__sep" aria-hidden="true" />

          {/* Right: Stat items */}
          <div className="stats__items" role="list">
            {stats.map((s) => (
              <div className="stats__item" key={s.label} role="listitem">
                <span className="stats__value">{s.value}</span>
                <span className="stats__item-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
