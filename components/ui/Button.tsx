import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50',
          'transition-all active:scale-[0.98]',
          {
            'bg-cyan text-ink-950 hover:bg-cyan/90 hover:shadow-cyan-glow hover:-translate-y-[1px] hover:scale-[1.01]': variant === 'primary',
            'bg-ink-900 text-text-primary border border-slate-700 hover:border-cyan hover:text-cyan hover:-translate-y-[1px]': variant === 'secondary',
            'text-text-primary hover:text-cyan hover:bg-ink-900': variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        style={{
          transitionDuration: 'var(--dur-2)',
          transitionTimingFunction: 'var(--ease-apple)',
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
