import './Hero.css'

export default function Hero(): JSX.Element {
  return (
    <section className="hero" id="hero">
      {/* Graph-paper grid background */}
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="hero__inner container">

        {/* ── Left: Content ── */}
        <div className="hero__content">
          <p className="hero__eyebrow">Leading the Global Transition</p>

          <h1 className="hero__heading">
            Empowering<br />
            <em className="hero__heading-italic">Sustainability</em><br />
            Global<br />
            Growth
          </h1>

          <p className="hero__desc">
            Scapex deploys large-scale solar infrastructure with integrated
            logistics, creating the next generation of sustainable enterprises.
          </p>

          <a href="#industries" className="hero__btn" id="hero-explore-btn">
            Explore Our Solutions
          </a>
        </div>

        {/* ── Right: Placeholder Image Mosaic ── */}
        <div className="hero__mosaic" aria-hidden="true">
          {/* Col A: one tall box */}
          <div className="hero__ph hero__ph--tall" />
          {/* Col B: two stacked boxes */}
          <div className="hero__ph hero__ph--top" />
          <div className="hero__ph hero__ph--bottom" />
        </div>

      </div>
    </section>
  )
}
