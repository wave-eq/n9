import { services } from '@/content/services'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'

export async function generateStaticParams() {
  return services.map((service) => ({
    category: service.category,
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { category: string; slug: string } }) {
  const service = services.find(
    s => s.category === params.category && s.slug === params.slug
  )

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="pt-32 pb-12 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm text-cyan hover:text-cyan/80 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>

          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan uppercase tracking-wider border border-cyan/30 bg-cyan/5">
            {service.categoryLabel}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            {service.name}
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-3xl">
            {service.tagline}
          </p>

          <Link href="/contact">
            <Button size="lg" variant="primary">
              Speak to Our Team
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <SectionHeading title="What You Get" />
                <div className="space-y-4">
                  {service.whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-cyan flex-shrink-0 mt-1" size={20} />
                      <p className="text-text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading title="Engagement Model" />
                <div className="space-y-6">
                  {service.engagementModel.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan/10 border border-cyan/30 flex items-center justify-center font-heading font-bold text-cyan">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-2">
                          {phase.phase}
                        </h3>
                        <p className="text-text-muted mb-8">Can&apos;t find what you&apos;re looking for?</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading title="Frequently Asked Questions" />
                <Accordion items={service.faqs} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <h3 className="font-heading text-lg font-semibold mb-4">Who It&apos;s For</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.whoItsFor.map((industry, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-cyan/10 border border-cyan/30 text-cyan"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="font-heading text-lg font-semibold mb-4">Get Started</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Contact our team to discuss your requirements and receive a customized proposal.
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
