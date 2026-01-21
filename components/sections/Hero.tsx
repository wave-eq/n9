import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  children?: ReactNode
  className?: string
  withBackground?: boolean
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  children,
  className,
  withBackground = true
}: HeroProps) {
  return (
    <section className={cn('relative pt-32 pb-20 overflow-hidden', className)}>
      {withBackground && (
        <>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950" />
          <NineRaysBackground />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-cyan uppercase tracking-wider border border-cyan/30 bg-cyan/5">
              {eyebrow}
            </div>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed">
              {subheadline}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

function NineRaysBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="rays-gradient">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="translate(500, 300)">
        {[...Array(9)].map((_, i) => {
          const angle = (i * 360) / 9
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos((angle * Math.PI) / 180) * 800}
              y2={Math.sin((angle * Math.PI) / 180) * 800}
              stroke="url(#rays-gradient)"
              strokeWidth="2"
            />
          )
        })}
      </g>
    </svg>
  )
}
