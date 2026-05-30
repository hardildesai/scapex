

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
      className="bg-[#0d1b2e] text-[#8a9bb0] text-[0.70rem] font-normal tracking-wider h-8 overflow-hidden flex items-center relative z-[100]"
      role="banner"
      aria-label="Announcements"
    >
      <div
        className="flex items-center whitespace-nowrap animate-[marquee_32s_linear_infinite] will-change-transform"
        style={{ animationPlayState: 'running' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-8 border-r border-white/10 inline-flex items-center h-8 hover:text-[#c0cdd8] cursor-pointer transition-colors"
          >
            {item === 'LIVE' ? (
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold tracking-widest">
                <span
                  className="inline-block w-[5px] h-[5px] rounded-full bg-emerald-400 animate-[pulse_1.4s_ease-in-out_infinite]"
                  style={{ animationName: 'pulse' }}
                />
                LIVE
              </span>
            ) : (
              item
            )}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
