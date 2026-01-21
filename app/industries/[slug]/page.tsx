'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { industries } from '@/content/industries'
import { products } from '@/content/products'
import { services } from '@/content/services'

export default function IndustryDetailPage() {
  const params = useParams()

  const industry = industries.find(i => i.slug === params.slug)

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Industry Not Found</h1>
          <Link href="/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relevantProducts = products.filter(p => 
    industry.relevantProducts.includes(p.name)
  )

  const relevantServices = services.filter(s => 
    industry.relevantServices.includes(s.name)
  )

  return (
    <>
      <section className="pt-32 pb-12 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/industries" className="inline-flex items-center text-sm text-cyan hover:text-cyan/80 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Industries
          </Link>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            {industry.name}
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-3xl">
            {industry.tagline}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <p className="text-lg text-text-muted leading-relaxed">
              {industry.description}
            </p>
          </div>

          <div className="mb-16">
            <SectionHeading title="Challenges We Address" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-ink-900 border border-slate-700">
                  <CheckCircle2 className="text-cyan flex-shrink-0 mt-1" size={20} />
                  <p className="text-text-muted">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {relevantProducts.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Relevant Products" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantProducts.map((product) => (
                  <Card key={product.id} hover>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                      {product.tagline}
                    </p>
                    <Link href={`/products/${product.category}/${product.slug}`}>
                      <Button variant="ghost" size="sm">
                        Learn More →
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {relevantServices.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Relevant Services" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantServices.map((service) => (
                  <Card key={service.id} hover>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                      {service.tagline}
                    </p>
                    <Link href={`/services/${service.category}/${service.slug}`}>
                      <Button variant="ghost" size="sm">
                        Learn More →
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="bg-ink-900 border border-slate-700 p-8">
            <SectionHeading title="Case Study" />
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-cyan mb-2">Challenge</h4>
                <p className="text-text-muted">{industry.caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-cyan mb-2">Solution</h4>
                <p className="text-text-muted">{industry.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-cyan mb-2">Outcome</h4>
                <p className="text-text-muted">{industry.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
