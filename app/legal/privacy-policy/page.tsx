import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Ninethray Technologies',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        headline="Privacy Policy"
        subheadline="Last updated: January 2024"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warning/10 border border-warning/30 p-6 mb-12">
            <p className="text-sm text-text-muted">
              <strong>Note:</strong> This is a placeholder privacy policy. Replace this content with your actual privacy policy drafted by legal counsel before deployment.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-text-muted mb-6">
              Ninethray Technologies Pvt Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-text-muted mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc list-inside text-text-muted mb-6 space-y-2">
              <li>Personal Data: Name, email address, phone number, organization details</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
              <li>Communication Data: Information from inquiries, demo requests, and support interactions</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">3. Use of Your Information</h2>
            <p className="text-text-muted mb-4">We may use information collected about you to:</p>
            <ul className="list-disc list-inside text-text-muted mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process demo requests and product information requests</li>
              <li>Send administrative information and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="text-text-muted mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">5. Security of Your Information</h2>
            <p className="text-text-muted mb-6">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-text-muted mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-text-muted mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside text-text-muted mb-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-text-muted mb-6">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <Link href="/contact" className="text-cyan hover:text-cyan/80">
                Contact Page
              </Link>
            </p>

            <p className="text-sm text-text-muted italic mt-12">
              This privacy policy template should be reviewed and customized by legal counsel to ensure compliance with applicable laws and regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
