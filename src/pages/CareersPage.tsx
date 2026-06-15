import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Job data ── */
interface Job {
  id: string
  category: string
  title: string
}

const jobs: Job[] = [
  { id: 'job-1', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-2', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-3', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-4', category: 'Renewables', title: 'Solar Project Manager' },
]

export default function CareersPage(): JSX.Element {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <CareersHero />
        <TeamImage />
        <JobListings />
      </main>
      <Footer />
    </>
  )
}

/* ─────────────── Hero ─────────────── */
function CareersHero(): JSX.Element {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: '84px' }}
      id="careers-hero"
    >
      <div className="max-w-[1180px] mx-auto px-10 w-full">
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ minHeight: '420px', paddingTop: '24px', paddingBottom: 0 }}
        >

          {/* ── Left: Text ── */}
          <div style={{ paddingBottom: '56px', paddingTop: '8px', position: 'relative', zIndex: 10 }}>

            {/* Pill label */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-block',
                background: '#eeeeec',
                borderRadius: '999px',
                padding: '5px 16px',
                fontSize: '0.72rem',
                fontStyle: 'italic',
                color: '#555',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.01em',
              }}>
                Explore this Life with Us
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(2.5rem, 4.2vw, 3.6rem)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}>
              Shape the Future of<br />Global Architecture
            </h1>

            {/* Body text */}
            <p style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.63rem',
              color: '#666',
              lineHeight: 1.85,
              letterSpacing: '0.045em',
              textTransform: 'uppercase',
              maxWidth: '310px',
              marginBottom: '32px',
            }}>
              We are looking for visionary thinkers,<br />
              engineers and strategists to build the<br />
              physical foundation of tomorrow. Join a<br />
              culture of uncompromising excellence and<br />
              technical precision.
            </p>

            {/* CTA Button — perfectly rectangular */}
            <a
              href="#openings"
              id="careers-explore-btn"
              style={{
                display: 'inline-block',
                background: '#0f2040',
                color: '#fff',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '12px 22px',
                borderRadius: 0,
                transition: 'background 0.2s',
                textDecoration: 'none',
              }}
            >
              Explore Open Roles
            </a>
          </div>

          {/* ── Right: Nested-diamond decoration + Worker image ── */}
          <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>

            {/* Nested diamond SVG — fills the right column */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                viewBox="0 0 520 460"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '100%', height: '100%' }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Nested diamonds (rotated squares) — blue & gold alternating */}
                {[70, 120, 170, 220, 270, 320, 370, 420].map((r, i) => {
                  const cx = 300, cy = 230
                  const pts = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`
                  const colors = ['#c8a84b', '#1a5faa', '#c8a84b', '#1a5faa', '#c8a84b', '#1a5faa', '#c8a84b', '#1a5faa']
                  return (
                    <polygon
                      key={i}
                      points={pts}
                      stroke={colors[i]}
                      strokeWidth="1.4"
                      fill="none"
                      opacity={0.65 - i * 0.04}
                    />
                  )
                })}
              </svg>
            </div>

            {/* Worker image — bottom-right aligned, transparent bg */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              zIndex: 10,
            }}>
              <img
                src="/careers-hero.png"
                alt="Scapex professional in safety vest"
                style={{
                  height: '450px',
                  width: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


/* ─────────────── Full-width team image ─────────────── */
function TeamImage(): JSX.Element {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: '380px' }}
    >
      <img
        src="/careers-team.png"
        alt="Scapex team collaborating on-site"
        className="w-full h-full object-cover block"
        style={{ objectPosition: 'center 40%' }}
      />
    </div>
  )
}

/* ─────────────── Job Listings ─────────────── */
function JobListings(): JSX.Element {
  return (
    <section
      className="pt-14 pb-20"
      id="openings"
      style={{ background: '#f5f1e8' }}
    >
      <div className="max-w-[1180px] mx-auto px-10 w-full">

        {/* Header: 2-col — big serif heading left, small description right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-12">

          {/* Heading — both words in Playfair Display */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(3.2rem, 6vw, 4.5rem)',
                fontWeight: 700,
                color: '#2a2a2a',
                lineHeight: 0.97,
                letterSpacing: '-0.01em',
              }}
            >
              Current<br />
              <em style={{ fontStyle: 'italic' }}>Opinions</em>
            </h2>
          </div>

          {/* Right: description */}
          <div className="flex items-start md:pt-2">
            <p
              style={{
                fontSize: '0.68rem',
                color: '#7a7060',
                lineHeight: 1.7,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                maxWidth: '340px',
                fontWeight: 500,
              }}
            >
              Join our multidisciplinary teams. We are currently scaling
              our renewables and logistics division
            </p>
          </div>
        </div>

        {/* Job rows */}
        <div role="list" aria-label="Open positions">
          {jobs.map((job) => (
            <div key={job.id} role="listitem">
              <div className="flex items-center justify-between" style={{ padding: '22px 0' }}>
                {/* Left: category + title */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#9a8a70',
                    }}
                  >
                    {job.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      color: '#2a2a2a',
                    }}
                  >
                    {job.title}
                  </span>
                </div>

                {/* Right: VIEW JOB button */}
                <a
                  href={`#${job.id}-detail`}
                  style={{
                    flexShrink: 0,
                    border: '1px solid #b8b4aa',
                    background: 'transparent',
                    color: '#5a5040',
                    fontSize: '0.60rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '8px 20px',
                    borderRadius: 0,
                    display: 'inline-block',
                    transition: 'border-color 0.15s, color 0.15s',
                    whiteSpace: 'nowrap',
                  }}
                  aria-label={`View job: ${job.title}`}
                >
                  View Job
                </a>
              </div>
              {/* Divider */}
              <div
                aria-hidden="true"
                style={{ height: '1px', background: '#d4cec4', width: '100%' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

