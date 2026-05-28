import './News.css'

interface NewsItem {
  id: string
  date: string
  source: string
  headline: string
  excerpt: string
}

const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: 'May 2026',
    source: 'Scapex Group',
    headline: 'Scapex Group Announces ₹5,000 Cr Investment in Offshore Agro-Infrastructure',
    excerpt:
      'In a landmark strategic move, Scapex Group has committed to a multi-year expansion into offshore agricultural zones, strengthening food supply chains across Southeast Asia and the Middle East.',
  },
  {
    id: 'news-2',
    date: 'April 2026',
    source: 'Scapex Group',
    headline: 'Scapex Group Announces ₹5,000 Cr Investment in Offshore Agro-Infrastructure',
    excerpt:
      "The group's solar division surpassed 1 GW of cumulative installed capacity, cementing its position as one of the fastest-growing renewable developers in the Asia-Pacific region.",
  },
  {
    id: 'news-3',
    date: 'March 2026',
    source: 'Scapex Group',
    headline: 'Scapex Group Announces ₹5,000 Cr Investment in Offshore Agro-Infrastructure',
    excerpt:
      'Scapex Logistics has signed a long-term partnership with three major European port authorities to facilitate carbon-neutral export corridors for Indian agro-commodities.',
  },
]

export default function News(): JSX.Element {
  return (
    <section className="news" id="media">
      <div className="container">

        {/* Header */}
        <div className="news__header">
          <h2 className="news__heading">
            Latest Insights &amp;{' '}
            <em className="news__heading-italic">Announcements</em>
          </h2>
          <a href="#all-stories" className="news__view-all" id="news-view-all">
            VIEW ALL STORIES →
          </a>
        </div>

        {/* Cards */}
        <div className="news__grid">
          {newsItems.map((item) => (
            <article className="news__card" key={item.id} id={item.id}>
              <div className="news__card-top">
                <span className="news__source">{item.source}</span>
                <span className="news__date">{item.date}</span>
              </div>
              <h3 className="news__card-headline">{item.headline}</h3>
              <p className="news__card-excerpt">{item.excerpt}</p>
              <a href="#" className="news__read-more">Read more →</a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
