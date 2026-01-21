'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Target, Code, Users, TrendingUp, CheckCircle2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { careersContent } from '@/content/careers'

const iconMap = {
  Target,
  Code,
  Users,
  TrendingUp
}

export default function CareersPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleApply = (role: string) => {
    setSelectedRole(role)
    setFormData({ ...formData, role })
    setApplyModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setApplyModalOpen(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', role: '', message: '' })
    }, 2000)
  }

  return (
    <>
      <Hero
        eyebrow="Careers"
        headline={careersContent.hero.title}
        subheadline={careersContent.hero.subtitle}
      >
        <p className="text-text-muted mb-8">
          {careersContent.hero.description}
        </p>
      </Hero>

      <section className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Ninethray"
            title="Why Work With Us"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersContent.whyWorkWithUs.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div key={item.title} className="text-center">
                  <div className="inline-flex w-16 h-16 bg-cyan/10 border border-cyan/30 items-center justify-center mb-4">
                    <Icon className="text-cyan" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            align="center"
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {careersContent.openings.map((opening, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {opening.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-text-muted">
                      <span>{opening.location}</span>
                      <span>•</span>
                      <span>{opening.type}</span>
                    </div>
                    <p className="text-sm text-text-muted mt-2">
                      {opening.description}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleApply(opening.title)}
                    className="md:ml-4"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">Don&apos;t see a role that fits? We&apos;re always looking for exceptional talent.</p>
            <p className="text-sm text-text-muted">
              Send your resume to <span className="text-cyan">{careersContent.contact.email}</span>
            </p>
            <p className="text-xs text-text-muted mt-2 italic">
              {careersContent.contact.note}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Make an Impact?"
        description="Join our team and work on technology that protects critical infrastructure and national security."
      />

      <Dialog
        open={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        title={`Apply for ${selectedRole}`}
      >
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="text-success mx-auto mb-4" size={48} />
            <h3 className="font-heading text-xl font-semibold mb-2">Application Submitted</h3>
            <p className="text-text-muted">We&apos;re building systems that matter. If you&apos;re driven by precision, innovation, and impact, explore opportunities below.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              label="Role"
              value={formData.role}
              disabled
            />
            <Textarea
              label="Why are you interested in this role?"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <p className="text-xs text-text-muted">
              Note: This is a demo form. In production, this would submit to your application system.
            </p>
            <Button type="submit" variant="primary" className="w-full">
              Submit Application
            </Button>
          </form>
        )}
      </Dialog>
    </>
  )
}
