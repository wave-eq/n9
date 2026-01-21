import Link from 'next/link'
import { navigation } from '@/content/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cyan flex items-center justify-center font-heading font-bold text-ink-950">
                N9
              </div>
              <span className="font-heading font-semibold">Ninethray</span>
            </div>
            <p className="text-sm text-text-muted">
              Mission-grade security and intelligence solutions for governments, enterprises, and critical infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              {navigation.footer.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {navigation.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-muted">
              © {currentYear} Ninethray Technologies Pvt Ltd. All rights reserved.
            </p>
            <p className="text-xs text-text-muted">
              Export-controlled technology. Subject to applicable regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
