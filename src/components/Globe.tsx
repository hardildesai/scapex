import * as React from "react"
import { DottedMap, type Marker } from "./DottedMap"

type CountryCode = string

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode
    label: string
  }
}

const markers: MyMarker[] = [
  {
    lat: 37.5665,
    lng: 126.978,
    size: 2.2,
    overlay: { countryCode: "kr", label: "Seoul" },
  },
  {
    lat: 40.7128,
    lng: -74.006,
    size: 2.2,
    overlay: { countryCode: "us", label: "NYC" },
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 2.2,
    overlay: { countryCode: "gb", label: "London" },
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 2.2,
    overlay: { countryCode: "au", label: "Sydney" },
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 2.2,
    overlay: { countryCode: "sg", label: "Singapore" },
  },
]

export default function Globe(): JSX.Element {
  const id = React.useId()

  return (
    <section className="bg-[#0D2E45] pt-12 md:pt-14 pb-12 overflow-hidden relative" id="global-reach">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full mb-8">
        <p className="text-[0.75rem] font-bold font-serif tracking-[0.15em] uppercase text-slate-gray mb-2">
          03 / GLOBAL CONNECTIONS
        </p>
        <h2
          className="font-serif font-bold text-gold font-bricolage leading-[1.15] tracking-tight max-w-[600px] mb-0"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
        >
          Bridging Continents with Precision
        </h2>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-10 w-full relative">
        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4">
          <DottedMap<MyMarker>
            width={150}
            height={75}
            mapSamples={6000}
            dotRadius={0.18}
            dotColor="rgba(255, 255, 255, 0.2)"
            markerColor="#c8a84b"
            pulse={true}
            markers={markers}
            renderMarkerOverlay={({ marker, x, y, r, index }) => {
              const { countryCode, label } = marker.overlay
              const href = `https://flagcdn.com/w80/${countryCode}.webp`
              const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
              const imgR = r * 0.75
              const fontSize = r * 0.9
              const pillH = r * 1.5
              const pillW = label.length * (fontSize * 0.62) + r * 1.4
              const pillX = x + r + r * 0.6
              const pillY = y - pillH / 2
              return (
                <g style={{ pointerEvents: "none" }} key={clipId}>
                  <clipPath id={clipId}>
                    <circle cx={x} cy={y} r={imgR} />
                  </clipPath>
                  <image
                    href={href}
                    x={x - imgR}
                    y={y - imgR}
                    width={imgR * 2}
                    height={imgR * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${clipId})`}
                  />
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillW}
                    height={pillH}
                    rx={pillH / 2}
                    fill="rgba(0,0,0,0.55)"
                  />
                  <text
                    x={pillX + r * 0.7}
                    y={y + fontSize * 0.35}
                    fontSize={fontSize}
                    fill="white"
                  >
                    {label}
                  </text>
                </g>
              )
            }}
          />
        </div>
      </div>
    </section>
  )
}

