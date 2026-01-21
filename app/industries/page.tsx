import Link from 'next/link'
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { industries } from '@/content/industries'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Mission-critical solutions for governments, enterprises, and critical infrastructure.',
}

export default function IndustriesPage() {
  return (
    <>
      <Hero
        eyebrow="Industries"
        headline="Industries We Serve"
        subheadline="Tailored solutions for organizations protecting critical assets, infrastructure, and operations."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Card key={industry.id} hover>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  {industry.name}
                </h3>
                <p className="text-text-muted mb-4">
                  {industry.tagline}
                </p>
                <p className="text-sm text-text-muted mb-6">
                  {industry.description}
                </p>
                <Link href={`/industries/${industry.slug}`}>
                  <Button variant="secondary" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find the Right Solution"
        description="Speak with our team to discuss solutions tailored to your industry."
      />
    </>
  )
}
