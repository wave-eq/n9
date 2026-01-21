import Link from 'next/link'
import Button from '@/components/ui/Button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function CTASection({
  title = "Let's Secure Your Mission",
  description = 'Speak with our team about deploying mission-grade solutions for your organization.',
  primaryCTA = { text: 'Contact Us', href: '/contact' },
  secondaryCTA
}: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-blue-electric/10" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryCTA.href}>
            <Button size="lg" variant="primary">
              {primaryCTA.text}
            </Button>
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button size="lg" variant="secondary">
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
