import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Ninethray Technologies',
}

export default function TermsOfUsePage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        headline="Terms of Use"
        subheadline="Last updated: January 2024"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warning/10 border border-warning/30 p-6 mb-12">
            <p className="text-sm text-text-muted">
              <strong>Note:</strong> This is a placeholder terms of use document. Replace this content with your actual terms drafted by legal counsel before deployment.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-text-muted mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-text-muted mb-6">
              Permission is granted to temporarily access the materials (information or software) on Ninethray Technologies&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-text-muted mb-6">
              The materials on Ninethray Technologies&apos; website are provided on an &apos;as is&apos; basis. Ninethray Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-text-muted mb-6">
              In no event shall Ninethray Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ninethray Technologies&apos; website.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">5. Export Controls</h2>
            <p className="text-text-muted mb-6">
              Our products and services may be subject to export control laws and regulations. You agree to comply with all applicable export and re-export control laws and regulations. You will not use our products or services in any country or for any purpose prohibited by applicable law.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-text-muted mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Ninethray Technologies and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="text-text-muted mb-6">
              Ninethray Technologies may revise these terms of use at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of use.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-text-muted mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="text-text-muted mb-6">
              If you have any questions about these Terms of Use, please contact us at:
              <br />
              <Link href="/contact" className="text-cyan hover:text-cyan/80">
                Contact Page
              </Link>
            </p>

            <p className="text-sm text-text-muted italic mt-12">
              This terms of use template should be reviewed and customized by legal counsel to ensure compliance with applicable laws and regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
