import { Target, ShieldCheck, Scale, Award } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import { aboutContent } from '@/content/about'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Mission-focused technology company engineering solutions at the intersection of cybersecurity, artificial intelligence, and autonomous systems.',
}

const iconMap = {
  Target,
  ShieldCheck,
  Scale,
  Award
}

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Ninethray"
        headline="Engineering Mission-Grade Solutions"
        subheadline="At the intersection of cybersecurity, artificial intelligence, and autonomous systems."
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutContent.identity.title}
          />
          <p className="text-lg text-text-muted leading-relaxed">
            {aboutContent.identity.content}
          </p>
        </div>
      </section>

      <section className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-heading text-2xl font-bold mb-4 text-cyan">
                {aboutContent.vision.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {aboutContent.vision.content}
              </p>
            </Card>

            <Card>
              <h3 className="font-heading text-2xl font-bold mb-4 text-cyan">
                {aboutContent.mission.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {aboutContent.mission.content}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.values.map((value) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap]
              return (
                <Card key={value.title}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                      <Icon className="text-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutContent.howWeBuild.title}
            description={aboutContent.howWeBuild.subtitle}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.howWeBuild.principles.map((principle) => (
              <div key={principle.title} className="text-center p-6 bg-ink-950 border border-slate-700">
                <h4 className="font-heading font-semibold mb-2 text-cyan">
                  {principle.title}
                </h4>
                <p className="text-sm text-text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title={aboutContent.leadership.title}
            description={aboutContent.leadership.subtitle}
            align="center"
          />
          <p className="text-text-muted italic">
            {aboutContent.leadership.note}
          </p>
        </div>
      </section>

      <section className="py-20 bg-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutContent.compliance.title}
          />
          <p className="text-lg text-text-muted leading-relaxed mb-6">
            {aboutContent.compliance.content}
          </p>
          <ul className="space-y-3">
            {aboutContent.compliance.commitments.map((commitment, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-cyan rounded-full mt-2" />
                <span className="text-text-muted">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  )
}
