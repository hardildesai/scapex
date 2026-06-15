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
    <section
      className="bg-[#f9f9f7] pt-14 pb-16 relative border-t border-[#e8e8e4] overflow-hidden"
      id="stewardship"
    >
      {/* Vertical side label — hidden on mobile */}
      <div
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center overflow-visible"
        style={{ width: 28, height: 200 }}
        aria-hidden="true"
      >
        <span
          className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase text-[#bbb] whitespace-nowrap block"
          style={{ transform: 'rotate(-90deg)' }}
        >
          — STEWARDSHIP
        </span>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full md:pl-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-7">
          {leaders.map((l) => (
            <article className="flex flex-col" key={l.id} id={l.id}>
              <div
                className="w-full overflow-hidden rounded bg-[#2a2a2a] mb-5"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={l.img}
                  alt={l.name}
                  className="w-full h-full object-cover block"
                  style={{ filter: 'grayscale(100%) contrast(1.05)' }}
                />
              </div>
              <div className="px-1">
                <p className="text-[0.77rem] text-[#555] leading-[1.7] italic mb-3.5">
                  "{l.quote}"
                </p>
                <p className="text-[0.80rem] font-bold text-[#111] tracking-tight mb-0.5">
                  {l.name}
                </p>
                <p className="text-[0.67rem] font-normal text-[#888] tracking-wide">
                  {l.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
