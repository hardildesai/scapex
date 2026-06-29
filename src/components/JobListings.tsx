interface Job { id: string; category: string; title: string }
const jobs: Job[] = [
  { id: 'job-1', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-2', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-3', category: 'Renewables', title: 'Solar Project Manager' },
  { id: 'job-4', category: 'Renewables', title: 'Solar Project Manager' },
]

export default function JobListings(): JSX.Element {
  return (
    <section className="pt-12 md:pt-14 pb-16 md:pb-20" id="openings" style={{ background: '#f5f1e8' }}>
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start mb-8 md:mb-12">
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.4rem, 8vw, 4.5rem)', fontWeight: 700, color: '#2a2a2a', lineHeight: 0.97, letterSpacing: '-0.01em' }}>
              Current<br /><em style={{ fontStyle: 'italic' }}>Opinions</em>
            </h2>
          </div>
          <div className="flex items-start md:pt-2">
            <p style={{ fontSize: '0.68rem', color: '#7a7060', lineHeight: 1.7, letterSpacing: '0.05em', textTransform: 'uppercase', maxWidth: '340px', fontWeight: 500 }}>
              Join our multidisciplinary teams. We are currently scaling our renewables and logistics division
            </p>
          </div>
        </div>

        {/* Job rows */}
        <div role="list" aria-label="Open positions">
          {jobs.map((job) => (
            <div key={job.id} role="listitem">
              <div className="flex items-center justify-between" style={{ padding: '18px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9a8a70' }}>{job.category}</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#2a2a2a' }}>{job.title}</span>
                </div>
                <a href={`#${job.id}-detail`} style={{ flexShrink: 0, border: '1px solid #b8b4aa', background: 'transparent', color: '#5a5040', fontSize: '0.60rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 0, display: 'inline-block', transition: 'border-color 0.15s, color 0.15s', whiteSpace: 'nowrap' }} aria-label={`View job: ${job.title}`}>
                  View Job
                </a>
              </div>
              <div aria-hidden="true" style={{ height: '1px', background: '#d4cec4', width: '100%' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
