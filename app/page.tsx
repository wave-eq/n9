import Link from 'next/link'
import { Shield, Brain, Plane, ShieldAlert, Award, Lock, Rocket, FileCheck, Building, Radio, Factory, Building2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { homeContent } from '@/content/home'

const iconMap = {
  Shield,
  Brain,
  Plane,
  ShieldAlert,
  Award,
  Lock,
  Rocket,
  FileCheck,
  Building,
  Radio,
  Factory,
  Building2
}

export default function HomePage() {
  return (
    <>
      <Hero
        headline={homeContent.hero.headline}
        subheadline={homeContent.hero.subheadline}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products">
            <Button size="lg" variant="primary">
              Explore Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Speak to Our Team
            </Button>
          </Link>
        </div>
      </Hero>

      <section className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={homeContent.whatWeDo.title}
              title="Mission-Critical Solutions Across Four Domains"
              description={homeContent.whatWeDo.description}
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeContent.whatWeDo.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap]
              return (
                <RevealOnScroll key={pillar.title} delay={index * 60}>
                  <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                      <Icon className="text-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-text-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                  </Card>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Why Ninethray"
              title="Built for Organizations That Demand Excellence"
              align="center"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.whyNinethray.points.map((point, index) => {
              const Icon = iconMap[point.icon as keyof typeof iconMap]
              return (
                <RevealOnScroll key={point.title} delay={index * 70}>
                  <div className="text-center">
                  <div className="inline-flex w-16 h-16 bg-cyan/10 border border-cyan/30 items-center justify-center mb-4">
                    <Icon className="text-cyan" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {point.description}
                  </p>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Industries"
              title="Industries We Serve"
              align="center"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeContent.industries.map((industry, index) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap]
              return (
                <RevealOnScroll key={industry.name} delay={index * 60}>
                  <Link href={industry.href}>
                  <Card hover>
                    <div className="flex items-start space-x-3 mb-3">
                      <Icon className="text-cyan flex-shrink-0" size={24} />
                      <h3 className="font-heading text-lg font-semibold">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-sm text-text-muted">
                      {industry.description}
                    </p>
                  </Card>
                  </Link>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              {homeContent.trust.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
              {homeContent.trust.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.trust.points.map((point, index) => (
              <div key={index} className="text-center p-6 bg-ink-900 border border-slate-700">
                <p className="text-sm text-text-muted">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
