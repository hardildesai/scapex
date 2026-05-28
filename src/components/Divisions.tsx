import './Divisions.css'

export default function Divisions(): JSX.Element {
  return (
    <section className="divisions" id="industries">
      <div className="container">

        <div className="divisions__header">
          <p className="divisions__label">02 / Core Divisions</p>
          <h2 className="divisions__title">
            Achieving Outstanding Performance Across All Divisions
          </h2>
        </div>

        {/* Asymmetric 2-column grid */}
        <div className="divisions__grid">

          {/* Left: Large card */}
          <article className="divisions__card divisions__card--solar" id="division-solar">
            <img src="/solar.png" alt="Solar & Renewable Infrastructure" className="divisions__img" />
            <div className="divisions__overlay">
              <h3 className="divisions__card-title">Solar &amp; Renewable<br />Infrastructure</h3>
            </div>
          </article>

          {/* Right column: two stacked cards */}
          <div className="divisions__col">
            <article className="divisions__card" id="division-agro">
              <img src="/agro.png" alt="Agro Commodities" className="divisions__img" />
              <div className="divisions__overlay">
                <h3 className="divisions__card-title">Agro Commodities</h3>
              </div>
            </article>

            <article className="divisions__card divisions__card--dark" id="division-logistics">
              <img src="/export.png" alt="Export &amp; Logistics" className="divisions__img" />
              <div className="divisions__overlay">
                <h3 className="divisions__card-title">Export &amp; Logistics</h3>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
