import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ninethray Technologies - Mission-Grade Security & Intelligence Solutions',
    template: '%s | Ninethray Technologies'
  },
  description: 'Cyber Security. Artificial Intelligence. Defense-Grade Drone Systems. Anti-Drone Technologies. Mission-critical solutions engineered for governments, enterprises, and critical infrastructure.',
  keywords: ['cyber security', 'artificial intelligence', 'drones', 'anti-drone systems', 'digital forensics', 'defense technology'],
  authors: [{ name: 'Ninethray Technologies Pvt Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ninethray.com',
    siteName: 'Ninethray Technologies',
    title: 'Ninethray Technologies - Mission-Grade Security & Intelligence Solutions',
    description: 'Cyber Security. Artificial Intelligence. Defense-Grade Drone Systems. Anti-Drone Technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninethray Technologies',
    description: 'Mission-critical solutions for governments, enterprises, and critical infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
