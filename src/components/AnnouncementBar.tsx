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
    <div
      className="bg-[#0d1b2e] text-[#8a9bb0] text-[0.68rem] font-normal tracking-wide h-8 overflow-hidden flex items-center relative z-[100]"
      role="banner"
      aria-label="Announcements"
    >
      <div className="flex items-center whitespace-nowrap animate-marquee will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-7 border-r border-white/[0.08] inline-flex items-center h-8 hover:text-[#c0cdd8] cursor-pointer transition-colors duration-150"
          >
            {item === 'LIVE' ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold tracking-[0.08em]">
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-emerald-400 animate-livepulse" />
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
