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
    <section className="bg-white pt-12 md:pt-14 pb-14 md:pb-16 border-t border-[#e8e8e4]" id="media">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-7">
          <h2
            className="font-bold text-[#111] leading-[1.2] tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}
          >
            Latest Insights &amp;{' '}
            <em style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', color: '#1a5faa' }}>
              Announcements
            </em>
          </h2>
          <a
            href="#all-stories"
            className="text-[0.67rem] font-semibold tracking-[0.10em] uppercase text-[#888] whitespace-nowrap transition-colors duration-200 hover:text-[#111]"
            id="news-view-all"
          >
            VIEW ALL STORIES →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.map((item) => (
            <article
              className="border border-[#e4e4e0] rounded p-6 flex flex-col bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              key={item.id}
              id={item.id}
            >
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="text-[0.58rem] font-semibold tracking-[0.12em] uppercase text-[#2a7a50]">
                  {item.source}
                </span>
                <span className="text-[0.58rem] font-normal text-[#aaa] tracking-[0.04em]">
                  {item.date}
                </span>
              </div>
              <h3 className="text-[0.81rem] font-bold text-[#111] leading-[1.45] tracking-tight mb-3">
                {item.headline}
              </h3>
              <p className="text-[0.74rem] text-[#666] leading-[1.7] flex-1 mb-4">
                {item.excerpt}
              </p>
              <a
                href="#"
                className="text-[0.67rem] font-semibold text-[#1a5faa] tracking-wide self-start transition-colors duration-200 hover:text-[#0d3d6e]"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
