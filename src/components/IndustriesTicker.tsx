const industries = [
  'Textile',
  'Pharmaceuticals',
  'Chemicals',
  'Automotive',
  'Electronics',
  'FMCG',
  'Energy',
  'Agriculture',
]

export default function IndustriesTicker(): JSX.Element {
  // Duplicate for infinite scroll
  const items = [...industries, ...industries, ...industries]

  return (
    <section className="bg-[#050f1a] py-8 overflow-hidden border-y border-white/5" id="industries-ticker">
      {/* Small Gold Centered Label */}
      <div className="text-center mb-4">
        <span className="font-sans text-[0.62rem] font-bold tracking-[0.20em] uppercase text-[#c8a84b]">
          Industries We Support
        </span>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 24s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track">
        {items.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-10 font-sans text-[0.80rem] font-bold tracking-[0.14em] uppercase whitespace-nowrap"
          >
            {/* Gold diamond divider */}
            <svg width="8" height="8" viewBox="0 0 24 24" fill="#c8a84b" className="shrink-0 opacity-80">
              <path d="M12 0l3.818 8.182L24 12l-8.182 3.818L12 24l-3.818-8.182L0 12l8.182-3.818z" />
            </svg>
            <span className="text-white/70">{name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
