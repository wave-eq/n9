'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { contactContent } from '@/content/contact'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    
    setSubmitted(true)
    
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', organization: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Hero
        eyebrow="Contact"
        headline={contactContent.hero.title}
        subheadline={contactContent.hero.subtitle}
      >
        <p className="text-text-muted">
          {contactContent.hero.description}
        </p>
      </Hero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="text-cyan flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      {contactContent.details.email.label}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {contactContent.details.email.value}
                    </p>
                    <p className="text-xs text-text-muted italic mt-1">
                      {contactContent.details.email.note}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="text-cyan flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      {contactContent.details.phone.label}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {contactContent.details.phone.value}
                    </p>
                    <p className="text-xs text-text-muted italic mt-1">
                      {contactContent.details.phone.note}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="text-cyan flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      {contactContent.details.address.label}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {contactContent.details.address.value}
                    </p>
                    <p className="text-xs text-text-muted italic mt-1">
                      {contactContent.details.address.note}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-cyan/10 border border-cyan/30">
                <p className="text-sm text-text-muted">
                  {contactContent.responseTime}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="text-success mx-auto mb-4" size={64} />
                    <h3 className="font-heading text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-text-muted">
                      Thank you for contacting us. We&apos;ll respond within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <Input
                        label="Organization"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <Input
                        label="Phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <Textarea
                      label="Message"
                      required
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                    />

                    <p className="text-sm text-text-muted">
                      {contactContent.formNote}
                    </p>

                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
