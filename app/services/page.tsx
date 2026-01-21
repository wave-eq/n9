import Link from 'next/link'
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional services across Cyber Security and Artificial Intelligence domains.',
}

export default function ServicesPage() {
  const cyberServices = services.filter(s => s.category === 'cyber-security')
  const aiServices = services.filter(s => s.category === 'artificial-intelligence')

  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Professional Services for Mission-Critical Operations"
        subheadline="Expert consulting and specialized services to support your security, compliance, and AI initiatives."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cyber Security"
            title="Cyber Security Services"
            description="Specialized services for threat response, due diligence, and security investigations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cyberServices.map((service) => (
              <Card key={service.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {service.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.whatYouGet.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.category}/${service.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <SectionHeading
            eyebrow="Artificial Intelligence"
            title="AI Services"
            description="Professional services for AI deployment, data preparation, and model optimization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <Card key={service.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {service.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.whatYouGet.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.category}/${service.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Requirements"
        description="Speak with our team to learn how our services can support your organization."
      />
    </>
  )
}
