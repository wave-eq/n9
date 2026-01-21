import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <div className={cn(
          'inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan uppercase tracking-wider border border-cyan/30 bg-cyan/5',
          align === 'center' && 'mx-auto'
        )}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-lg text-text-muted max-w-3xl',
          align === 'center' && 'mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
