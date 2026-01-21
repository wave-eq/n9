import Link from 'next/link'
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { products } from '@/content/products'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Mission-grade products across Cyber Security, Artificial Intelligence, Drones, and Anti-Drone Systems.',
}

export default function ProductsPage() {
  const cyberProducts = products.filter(p => p.category === 'cyber-security')
  const aiProducts = products.filter(p => p.category === 'artificial-intelligence')
  const droneProducts = products.filter(p => p.category === 'drones')
  const antiDroneProducts = products.filter(p => p.category === 'anti-drone')

  return (
    <>
      <Hero
        eyebrow="Products"
        headline="Mission-Grade Product Portfolio"
        subheadline="Field-tested solutions engineered for governments, enterprises, and critical infrastructure operators."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cyber Security"
            title="Cyber Security & Digital Forensics"
            description="Field-deployable security assessment tools, digital forensics platforms, and AML detection systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cyberProducts.map((product) => (
              <Card key={product.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {product.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.keyCapabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.category}/${product.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Product
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <SectionHeading
            eyebrow="Artificial Intelligence"
            title="AI Platforms & Intelligence"
            description="Enterprise AI governance, investment intelligence, and secure AI deployment platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {aiProducts.map((product) => (
              <Card key={product.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {product.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.keyCapabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.category}/${product.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Product
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <SectionHeading
            eyebrow="Defense & Industrial UAV"
            title="Drone Systems"
            description="Military-grade drones for combat, disaster response, and critical infrastructure monitoring."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {droneProducts.map((product) => (
              <Card key={product.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {product.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.keyCapabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.category}/${product.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Product
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <SectionHeading
            eyebrow="Counter-UAV"
            title="Anti-Drone Systems"
            description="Advanced counter-drone platforms for detecting and neutralizing unauthorized UAV threats."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {antiDroneProducts.map((product) => (
              <Card key={product.id} hover>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {product.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.keyCapabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-muted">
                      <span className="text-cyan mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.category}/${product.slug}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Product
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Request Product Information"
        description="Speak with our team to discuss your requirements and request detailed product specifications."
      />
    </>
  )
}
