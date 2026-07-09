import { useEffect, useState } from 'react'

export default function Preloader(): JSX.Element | null {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 12) // 100 * 12ms = 1200ms loading time

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setFadeOut(true)
        const removeTimer = setTimeout(() => {
          setVisible(false)
        }, 850) // wait for slide up transition to finish
        return () => clearTimeout(removeTimer)
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fcfbf9] transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        fadeOut ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      {/* Ambient warm light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,168,75,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex flex-col items-center relative z-10">
        {/* Logo Container */}
        <div
          className="relative mb-5 transition-all duration-1000 ease-out"
          style={{
            transform: `scale(${0.95 + (progress / 100) * 0.05})`,
            opacity: 0.1 + (progress / 100) * 0.9
          }}
        >
          <img
            src="/logo/main-logo.webp"
            alt="Scapex Logo"
            className="h-11 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Clean minimal separator line expanding from center */}
        <div className="w-24 h-[1px] bg-black/5 relative overflow-hidden mt-3">
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 bg-[#c8a84b] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtle Brand Tagline */}
        <span className="text-[0.48rem] font-sans font-bold tracking-[0.25em] text-[#0d1b2e]/30 uppercase mt-4">
          FARM-TO-FORK • BLOCKCHAIN TRANSPARENCY
        </span>

        {/* Elegant small counter */}
        <div className="mt-8 font-mono text-[0.68rem] font-bold text-[#c8a84b] tracking-[0.2em]">
          {progress.toString().padStart(2, '0')}%
        </div>
      </div>
    </div>
  )
}
