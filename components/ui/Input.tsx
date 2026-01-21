import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-text-primary mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 bg-ink-950 border border-slate-700 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all',
            error && 'border-critical focus:ring-critical',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-critical">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
