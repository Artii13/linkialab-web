"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className="border-b border-[var(--color-border)]"
      data-slot="accordion-item"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "accordion-trigger flex w-full items-center justify-between py-4 text-left font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]/50"
        )}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform text-[var(--color-foreground-muted)]",
            isOpen && "rotate-180"
          )}
          style={{
            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            transitionDuration: "400ms",
          }}
        />
      </button>

      {/* Contenido SIEMPRE en el DOM, altura controlada por CSS */}
      <div
        className="accordion-content"
        data-state={isOpen ? "open" : "closed"}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 pt-0 text-sm text-[var(--color-foreground-muted)]">
          {answer}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: { question: string; answer: string }[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([])

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index)
      }
      if (allowMultiple) {
        return [...prev, index]
      }
      return [index]
    })
  }

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
