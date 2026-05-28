import './Stewardship.css'

interface Leader {
  id: string
  name: string
  title: string
  img: string
  quote: string
}

const leaders: Leader[] = [
  {
    id: 'leader-ceo',
    name: 'Rajiv Mehta',
    title: 'Chairman & Chief Executive Officer',
    img: '/leader1.png',
    quote:
      'True leadership is measured not by the scale of what we build, but by the legacy we leave for generations to come.',
  },
  {
    id: 'leader-coo',
    name: 'Priya Nair',
    title: 'Chief Operating Officer',
    img: '/leader2.png',
    quote:
      'Global ambition must be rooted in local accountability — every decision we make reflects our commitment to sustainable stewardship.',
  },
]

export default function Stewardship(): JSX.Element {
  return (
    <section className="stewardship" id="stewardship">
      {/* Vertical side label */}
      <div className="stewardship__side" aria-hidden="true">
        <span className="stewardship__side-text">— STEWARDSHIP</span>
      </div>

      <div className="container stewardship__container">
        <div className="stewardship__cards">
          {leaders.map((l) => (
            <article className="stewardship__card" key={l.id} id={l.id}>
              <div className="stewardship__img-wrap">
                <img src={l.img} alt={l.name} className="stewardship__img" />
              </div>
              <div className="stewardship__info">
                <p className="stewardship__quote">"{l.quote}"</p>
                <p className="stewardship__name">{l.name}</p>
                <p className="stewardship__title">{l.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
