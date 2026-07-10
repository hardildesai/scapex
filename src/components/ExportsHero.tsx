import { useEffect, useState, useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function ExportsHero(): JSX.Element {
  return (
    <section
      id="exports-hero"
      className="relative mt-[52px] min-h-[640px] bg-cover bg-center bg-no-repeat flex flex-col justify-between text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(19, 10, 2, 0.98) 0%, rgba(19, 10, 2, 0.92) 35%, rgba(19, 10, 2, 0.65) 65%, rgba(19, 10, 2, 0.2) 100%), url("/exports-hero.webp")',
      }}
    >
      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pt-14 pb-10 md:pb-36 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">

          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Pill/Capsule Badge */}
            <div className="mb-6 flex items-center gap-2 bg-[#12233c] border border-white/10 px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-[0.7rem] md:text-[0.75rem] font-serif italic font-semibold tracking-wider text-[#c8a84b]">
                Harvesting Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bricolage font-bold tracking-tight leading-[1.08] mb-8 text-left">
              <span className="block text-[clamp(1.8rem,7vw,3.6rem)] text-white">
                Premium Agro Commodities
              </span>
              <span className="block text-[clamp(1.8rem,7vw,3.6rem)] text-white">
                From{' '}
                <span className="font-serif italic font-semibold text-[#c8a84b]">
                  India's Heartlands
                </span>{' '}
                to the World
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#sourcing-form"
                id="exports-enquiry-btn"
                className="inline-block border border-[#c8a84b] bg-[#c8a84b]/18 text-white font-mono font-semibold text-[0.68rem] tracking-[0.10em] uppercase py-3.5 px-7 rounded transition-all duration-300 hover:bg-[#c8a84b]/30"
              >
                Inquire for a Trade
              </a>
              <a
                href="#product-portfolio"
                id="exports-catalogue-btn"
                className="inline-block bg-white text-[#0d1b2e] font-mono font-semibold text-[0.68rem] tracking-[0.10em] uppercase py-3.5 px-7 rounded shadow-md transition-all duration-300 hover:bg-white/90"
              >
                View Brochure
              </a>
            </div>

          </div>

          {/* Right Column: Description overlay */}
          <div className="hidden lg:col-4 justify-end items-end">
            <p className="text-right max-w-[500px] ml-auto text-[0.68rem] md:text-[1rem] tracking-[0.06em] font-urbanist font-semibold text-white/95 leading-relaxed [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
              SCAPEX EXPORTS BRIDGES THE FARM-TO-FORK JOURNEY WITH UNWAVERING QUALITY, PRECISION-DRIVEN PROCESSING, AND BLOCKCHAIN-BASED TRANSPARENCY.
            </p>
          </div>

        </div>
      </div>

      {/* Stats Bar — static on mobile, absolute (overlapping) on lg+ */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:translate-y-1/2 lg:z-20 px-5 md:px-6 mt-0 lg:mt-0 pb-6 lg:pb-0">
        <div className="max-w-7xl mx-auto bg-[#1c0f01] rounded-2xl py-7 md:py-8 px-5 md:px-6 border border-white/10 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4">

          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-[0.6rem] md:text-[0.65rem] font-sans font-bold tracking-[0.14em] uppercase text-[#c8a84b]">
              Export Countries
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <div className="text-[0.6rem] md:text-[0.65rem] font-sans font-bold tracking-[0.14em] uppercase text-[#c8a84b]">
              Farmer Partners
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
              <AnimatedCounter end={10000} suffix=" MT" />
            </div>
            <div className="text-[0.6rem] md:text-[0.65rem] font-sans font-bold tracking-[0.14em] uppercase text-[#c8a84b]">
              Basmati Supplied
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="text-[0.6rem] md:text-[0.65rem] font-sans font-bold tracking-[0.14em] uppercase text-[#c8a84b]">
              Food Waste Reduction
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
