import './AnnouncementBar.css'

const items: string[] = [
  'Performing Sustainable Growth Operations',
  'LIVE',
  'Global Expansions across 40+ Countries',
  'Investor Relations',
  'Media',
  'Careers',
]

export default function AnnouncementBar(): JSX.Element {
  return (
    <div className="announcement-bar" role="banner" aria-label="Announcements">
      <div className="announcement-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="announcement-item">
            {item === 'LIVE' ? (
              <span className="live-badge">
                <span className="live-dot" />
                LIVE
              </span>
            ) : (
              item
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
