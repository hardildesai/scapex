import './Architecture.css'

export default function Architecture(): JSX.Element {
  return (
    <section className="arch" id="ecosystem">
      <div className="container">

        {/* Header row */}
        <div className="arch__header">
          <div className="arch__header-left">
            <p className="arch__label">01 / The Architecture</p>
            <h2 className="arch__title">
              A <em className="arch__title-italic">Synchronized</em><br />
              Industrial Network
            </h2>
          </div>
          <p className="arch__desc">
            Our operations are not isolated silos. They are continuously
            interconnected threads of energy, resources, and logistics,
            optimised for massive scale.
          </p>
        </div>

        {/* Three empty bordered cards */}
        <div className="arch__cards">
          <div className="arch__card" />
          <div className="arch__card" />
          <div className="arch__card" />
        </div>

      </div>
    </section>
  )
}
