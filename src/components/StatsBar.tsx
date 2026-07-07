import { useState, useEffect, useRef } from 'react'
import { FF_SANS } from './LogisticsConstants'

interface AnimatedNumberProps {
  value: string
}

function AnimatedNumber({ value }: AnimatedNumberProps): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0')
  const elementRef = useRef<HTMLDivElement | null>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    // Extract numeric portion (e.g. 5000 from "5,000", 75 from "75+")
    const numericStr = value.replace(/[^0-9]/g, '')
    const target = parseInt(numericStr, 10) || 0
    
    // Extract non-numeric suffixes (e.g. "+", "%", "↑")
    const suffix = value.replace(/[0-9,]/g, '')
    
    // Detect if we need to format with thousands-separating commas
    const hasComma = value.includes(',')

    if (target === 0) {
      setDisplayValue(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          
          const duration = 1500 // Animation duration: 1.5 seconds
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Quad ease-out equation for smooth deceleration
            const easeProgress = progress * (2 - progress)
            const currentCount = Math.floor(easeProgress * target)

            // Format numeric value with commas if original had it
            const formattedNum = hasComma 
              ? currentCount.toLocaleString('en-US') 
              : currentCount.toString()

            setDisplayValue(`${formattedNum}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(value) // Guarantee exact matching final string
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [value])

  return <span ref={elementRef}>{displayValue}</span>
}

export default function StatsBar(): JSX.Element {
  const stats = [
    { value: '75+',   label: 'Cargo Routes' },
    { value: '100↑',  label: 'Active Ports' },
    { value: '5,000', label: 'Tonnes/Day' },
    { value: '99%',   label: 'On-Time Delivery' },
  ]

  return (
    <section style={{ background: '#111827', padding: '28px 0' }} id="stats-bar">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontFamily: FF_SANS, fontSize: '2.0rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
              <AnimatedNumber value={s.value} />
            </div>
            <div style={{ fontFamily: FF_SANS, fontSize: '0.56rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '6px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
