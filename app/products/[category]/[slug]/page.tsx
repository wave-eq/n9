'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Download, Play } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import { products } from '@/content/products'
import { useState } from 'react'
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }))
}

export default function ProductDetailPage() {
  const params = useParams()
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const product = products.find(
    p => p.category === params.category && p.slug === params.slug
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo request:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setDemoModalOpen(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', organization: '', message: '' })
    }, 2000)
  }

  return (
    <>
      <section className="pt-32 pb-12 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-sm text-cyan hover:text-cyan/80 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>

          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan uppercase tracking-wider border border-cyan/30 bg-cyan/5">
            {product.categoryLabel}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-3xl">
            {product.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary" onClick={() => setDemoModalOpen(true)}>
              <Play size={20} className="mr-2" />
              Request Demo
            </Button>
            <Button size="lg" variant="secondary">
              <Download size={20} className="mr-2" />
              Download Datasheet
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <SectionHeading
                  title="Problems It Solves"
                />
                <div className="space-y-4">
                  {product.problemSolved.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-cyan flex-shrink-0 mt-1" size={20} />
                      <p className="text-text-muted">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  title="Key Capabilities"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.keyCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-ink-900 border border-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-text-muted">{capability}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  title="How It Works"
                />
                <div className="space-y-6">
                  {product.howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan/10 border border-cyan/30 flex items-center justify-center font-heading font-bold text-cyan">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-2">
                          {step.step}
                        </h3>
                        <p className="text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  title="Frequently Asked Questions"
                />
                <Accordion items={product.faqs} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <h3 className="font-heading text-lg font-semibold mb-4">Deployment Options</h3>
                  <ul className="space-y-3">
                    {product.deployment.map((option, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                        <CheckCircle2 className="text-cyan flex-shrink-0 mt-0.5" size={16} />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="font-heading text-lg font-semibold mb-4">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((industry, index) => (
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
                  <h3 className="font-heading text-lg font-semibold mb-4">Security & Compliance</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Engineered with security-first principles and designed to support compliance requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan">•</span>
                      <span>Defense-grade security standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan">•</span>
                      <span>Air-gapped operation supported</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan">•</span>
                      <span>Comprehensive audit logging</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy?"
        description="Speak with our team to discuss deployment, training, and support options."
      />

      <Dialog
        open={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Request a Demo"
      >
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="text-success mx-auto mb-4" size={48} />
            <h3 className="font-heading text-xl font-semibold mb-2">Request Submitted</h3>
            <p className="text-text-muted">Our team will contact you within 1-2 business days.</p>
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
              label="Organization"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            />
            <Textarea
              label="Message (Optional)"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button type="submit" variant="primary" className="w-full">
              Submit Request
            </Button>
          </form>
        )}
      </Dialog>
    </>
  )
}
