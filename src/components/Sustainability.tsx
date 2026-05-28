import './Sustainability.css'

const bullets: string[] = [
  'Achieve net-zero across all operating divisions by 2035',
  'Deploy 5 GW of solar capacity with zero-waste manufacturing',
  'Integrate circular agriculture practices reducing emissions by 60%',
  'Operate carbon-neutral logistics across 40+ countries',
]

export default function Sustainability(): JSX.Element {
  return (
    <section className="sustain" id="sustainability">
      <div className="container">
        <div className="sustain__inner">

          {/* Left: 2×2 photo grid */}
          <div className="sustain__photos" aria-hidden="true">
            <div className="sustain__photo-grid">
              <div className="sustain__photo">
                <img src="/sustainability.png" alt="Eco hands with seedling" />
              </div>
              <div className="sustain__photo sustain__photo--green">
                <span className="sustain__icon">♻</span>
                <p>Sustainable Practices</p>
              </div>
              <div className="sustain__photo sustain__photo--solar">
                <img src="/solar.png" alt="Solar panels" />
              </div>
              <div className="sustain__photo sustain__photo--agro">
                <img src="/agro.png" alt="Agriculture" />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="sustain__content">
            <p className="sustain__label">04 / Sustainability</p>
            <h2 className="sustain__heading">
              Carbon Neutrality Is The{' '}
              <em className="sustain__heading-italic">Benchmark</em>
            </h2>
            <p className="sustain__desc">
              We are committed to a future where industrial scale and environmental
              stewardship are not opposing forces — they are engineered to coexist
              at every level of our operations.
            </p>
            <ul className="sustain__bullets" role="list">
              {bullets.map((b, i) => (
                <li key={i} className="sustain__bullet">
                  <span className="sustain__bullet-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
