import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-ink-900 border border-slate-700 p-6 transition-all',
          hover && 'hover:border-cyan/80 hover:shadow-cyan-glow hover:scale-[1.01] cursor-pointer',
          className
        )}
        style={{
          transitionDuration: 'var(--dur-3)',
          transitionTimingFunction: 'var(--ease-apple)',
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
