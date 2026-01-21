'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation } from '@/content/navigation'
import { cn } from '@/lib/utils'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const openTimerRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePointerEnter = (itemName: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
    }
    
    openTimerRef.current = setTimeout(() => {
      setActiveDropdown(itemName)
    }, 60)
  }

  const handlePointerLeave = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all',
        scrolled ? 'bg-ink-950/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
      )}
      style={{
        transitionDuration: 'var(--dur-3)',
        transitionTimingFunction: 'var(--ease-apple)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group transition-all"
            style={{
              transitionDuration: 'var(--dur-2)',
              transitionTimingFunction: 'var(--ease-apple)',
            }}
          >
            <div className="w-8 h-8 bg-cyan flex items-center justify-center font-heading font-bold text-ink-950 transition-all group-hover:scale-105"
              style={{
                transitionDuration: 'var(--dur-2)',
                transitionTimingFunction: 'var(--ease-apple)',
              }}
            >
              N9
            </div>
            <span className="font-heading font-semibold text-lg hidden sm:inline group-hover:text-cyan transition-colors"
              style={{
                transitionDuration: 'var(--dur-2)',
                transitionTimingFunction: 'var(--ease-apple)',
              }}
            >
              Ninethray Technologies
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onPointerEnter={() => item.submenu && handlePointerEnter(item.name)}
                onPointerLeave={() => item.submenu && handlePointerLeave()}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-text-muted hover:text-cyan inline-flex items-center relative group transition-colors"
                  style={{
                    transitionDuration: 'var(--dur-2)',
                    transitionTimingFunction: 'var(--ease-apple)',
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        "ml-1 transition-transform",
                        activeDropdown === item.name && "rotate-180"
                      )}
                      style={{
                        transitionDuration: 'var(--dur-2)',
                        transitionTimingFunction: 'var(--ease-apple)',
                      }}
                    />
                  )}
                  <span 
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                    style={{
                      transitionDuration: 'var(--dur-3)',
                      transitionTimingFunction: 'var(--ease-apple)',
                    }}
                  />
                </Link>

                {item.submenu && (
                  <div 
                    className={cn(
                      "absolute top-full left-0 pt-2 transition-all",
                      activeDropdown === item.name ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                    style={{
                      transitionDuration: 'var(--dur-3)',
                      transitionTimingFunction: 'var(--ease-apple)',
                      transform: activeDropdown === item.name ? 'translateY(0)' : 'translateY(-6px)',
                    }}
                  >
                    <div className="w-64 bg-ink-900 border border-slate-700 shadow-xl overflow-hidden">
                      {item.submenu.map((section) => (
                        <div key={section.category} className="p-4 border-b border-slate-700 last:border-b-0">
                          <div className="text-xs font-semibold text-cyan uppercase tracking-wider mb-2">
                            {section.category}
                          </div>
                          <div className="space-y-1">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-2 py-1.5 text-sm text-text-muted hover:text-cyan hover:bg-ink-950 transition-all hover:translate-x-[2px]"
                                style={{
                                  transitionDuration: 'var(--dur-2)',
                                  transitionTimingFunction: 'var(--ease-apple)',
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-primary hover:text-cyan transition-all hover:scale-105"
            style={{
              transitionDuration: 'var(--dur-2)',
              transitionTimingFunction: 'var(--ease-apple)',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-1">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-text-muted hover:text-cyan transition-colors"
                    style={{
                      transitionDuration: 'var(--dur-2)',
                      transitionTimingFunction: 'var(--ease-apple)',
                    }}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((section) => (
                        <div key={section.category} className="py-2">
                          <div className="text-xs font-semibold text-cyan uppercase tracking-wider mb-1">
                            {section.category}
                          </div>
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-2 py-1 text-sm text-text-muted hover:text-cyan transition-colors"
                              style={{
                                transitionDuration: 'var(--dur-2)',
                                transitionTimingFunction: 'var(--ease-apple)',
                              }}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
