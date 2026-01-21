'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-slate-700 bg-ink-900"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-ink-950 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-heading font-medium text-lg pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'flex-shrink-0 text-cyan transition-transform duration-200',
                openIndex === index && 'rotate-180'
              )}
              size={20}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-text-muted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
