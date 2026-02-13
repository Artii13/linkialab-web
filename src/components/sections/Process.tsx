"use client"

import { useEffect, useRef, useLayoutEffect, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ArrowRight } from "@phosphor-icons/react"
import { useTrackSection } from "@/hooks/useTrackSection"
import { analytics } from "@/lib/analytics"
import { LINKS } from "@/lib/links"

const PROCESS_CONFIG = {
  CARD_WIDTH: 280,
  CARD_WIDTH_ACTIVE: 340,
  CARD_GAP: 24,
  CARD_GAP_DESKTOP: 32,
  ANIMATION_DURATION: 0.6,
  STAGGER_DELAY: 0.15,
} as const

const STEPS = [
  {
    number: "01",
    title: "Llamada de descubrimiento",
    description:
      "Una llamada corta donde identificamos qué tareas te roban tiempo y cómo automatizarlas.",
    image: "/animations/step-01.svg",
  },
  {
    number: "02",
    title: "Propuesta personalizada",
    description:
      "En 48h recibes un plan detallado con las automatizaciones recomendadas, tiempos y presupuesto cerrado.",
    image: "/animations/step-02.svg",
  },
  {
    number: "03",
    title: "Implementación y soporte",
    description:
      "Lo montamos, lo probamos, lo lanzamos. Con mantenimiento continuo para que nunca deje de funcionar.",
    image: "/animations/step-03.svg",
  },
]

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  useTrackSection("process", sectionRef)
  const triggerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

   
  useEffect(() => {
    setIsClient(true)

    const mql = window.matchMedia("(min-width: 768px)")
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(!e.matches)
    }
    handleChange(mql)
    mql.addEventListener("change", handleChange)
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return

    let cleanup: (() => void) | null = null

    const initGSAP = (): (() => void) | null => {
      const section = sectionRef.current
      const trigger = triggerRef.current
      const cards = cardsRef.current
      const line = lineRef.current
      const cardElements = cardRefs.current.filter(Boolean)
      const cta = ctaRef.current

      if (!section || !trigger || !cards || !line || !cta || cardElements.length === 0)
        return null

      const mql = window.matchMedia("(min-width: 768px)")
      if (!mql.matches) return null

      const ctx = gsap.context(() => {
        const scrollDistance = window.innerHeight * 3
        const { CARD_WIDTH_ACTIVE, CARD_GAP_DESKTOP } = PROCESS_CONFIG
        const totalCardsWidth = CARD_WIDTH_ACTIVE * 3 + CARD_GAP_DESKTOP * 2
        const centerPosition = (window.innerWidth - totalCardsWidth) / 2
        const startX = window.innerWidth + 50
        const finalX = centerPosition

        gsap.set(cards, { x: startX })
        cardElements.forEach((card) => {
          gsap.set(card, { opacity: 0, y: 50 })
        })
        gsap.set(cta, { opacity: 0, y: 20 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top 15%",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        const totalDistance = Math.abs(startX - finalX)

        tl.to(cards, { x: startX - totalDistance * 0.25, duration: 0.2, ease: "none" }, 0)
        tl.to(line, { scaleX: 0.2, duration: 0.2, ease: "none" }, 0)
        tl.to(cardElements[0], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.05)

        tl.to(cards, { x: startX - totalDistance * 0.55, duration: 0.25, ease: "none" }, 0.2)
        tl.to(line, { scaleX: 0.5, duration: 0.25, ease: "none" }, 0.2)
        tl.to(cardElements[1], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.3)

        tl.to(cards, { x: startX - totalDistance * 0.85, duration: 0.25, ease: "none" }, 0.45)
        tl.to(line, { scaleX: 0.85, duration: 0.25, ease: "none" }, 0.45)
        tl.to(cardElements[2], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.55)

        tl.to(cards, { x: finalX, duration: 0.3, ease: "none" }, 0.7)
        tl.to(line, { scaleX: 1, duration: 0.3, ease: "none" }, 0.7)
        tl.to(cta, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, 0.85)
      }, section)

      const handleResize = () => {
        ctx.revert()
        ScrollTrigger.refresh()
      }
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        ctx.revert()
      }
    }

    const tryInit = (attempts = 0) => {
      if (attempts > 5) return
      if (sectionRef.current && cardsRef.current && cardRefs.current.filter(Boolean).length > 0) {
        cleanup = initGSAP()
      } else {
        requestAnimationFrame(() => tryInit(attempts + 1))
      }
    }

    tryInit()

    return () => {
      cleanup?.()
    }
  }, [])

  useEffect(() => {
    if (!isClient) return
    ScrollTrigger.refresh()
  }, [isClient])

  // Detectar card activa en móvil (para indicadores)
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return

    const container = scrollContainerRef.current

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardStep = PROCESS_CONFIG.CARD_WIDTH + PROCESS_CONFIG.CARD_GAP
      const activeIndex = Math.round(scrollLeft / cardStep)
      setActiveCard(Math.min(activeIndex, STEPS.length - 1))
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative bg-[var(--color-background)]"
    >
      <div ref={triggerRef} className="relative md:min-h-screen">
        {/* Header */}
        <div className="pb-6 pt-6 md:pb-8 md:pt-12">
          <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1.5 md:mb-4 md:px-4 md:py-2">
              <span className="text-xs font-medium text-[var(--color-foreground)] md:text-sm">
                Cómo trabajamos
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--color-foreground)] md:mb-4 md:text-4xl">
              Del problema a la solución en 3 pasos
            </h2>
            <p className="text-base text-[var(--color-foreground-muted)] md:text-lg">
              Simple, rápido y sin letra pequeña.
            </p>
          </div>
        </div>

        {/* Cards area */}
        <div className="relative h-auto md:h-[55vh] md:overflow-hidden">
          {/* Línea conectora (solo desktop) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-[5%] right-[5%] top-1/2 h-[2px] -translate-y-1/2 origin-left scale-x-0"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand) 50%, transparent 50%)",
              backgroundSize: "12px 2px",
            }}
          />

          {/* Mobile: Scroll-Snap (visible solo en viewport < md; no depende de JS para pintar) */}
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 py-8 scrollbar-hide md:hidden"
            style={{
              scrollPaddingLeft: "32px",
              scrollPaddingRight: "32px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex-shrink-0 snap-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-lg"
                style={{ width: `${PROCESS_CONFIG.CARD_WIDTH}px` }}
              >
                {/* SVG */}
                <div className="process-svg-illustration mb-3 flex h-24 items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Número */}
                  <span
                    className="mb-2 block font-serif text-3xl font-bold"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {step.number}
                  </span>

                  {/* Título */}
                  <h3 className="mb-2 text-base font-semibold text-[var(--color-foreground)]">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Desktop: GSAP Horizontal Scroll (visible solo en md+; opacity la controla GSAP para fallback visible si GSAP falla) */}
          <div
            ref={cardsRef}
            className="hidden absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-8 md:flex"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="process-desktop-card flex-shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-lg"
                style={{ width: `${PROCESS_CONFIG.CARD_WIDTH_ACTIVE}px` }}
              >
                  {/* SVG */}
                  <div className="process-svg-illustration mb-4 flex h-44 items-center justify-center -mt-28">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Número */}
                  <span
                    className="mb-3 block font-serif text-5xl font-bold"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {step.number}
                  </span>

                  {/* Título */}
                  <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Indicadores móvil (dots) */}
        {isMobile && (
          <div className="flex justify-center gap-2 pb-6">
            {STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const cardStep = PROCESS_CONFIG.CARD_WIDTH + PROCESS_CONFIG.CARD_GAP
                  scrollContainerRef.current?.scrollTo({
                    left: i * cardStep,
                    behavior: "smooth",
                  })
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCard === i
                    ? "w-6 bg-[var(--color-brand)]"
                    : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-foreground-muted)]"
                }`}
                aria-label={`Ir al paso ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA - FUERA del contenedor de cards para centrado correcto */}
        <div ref={ctaRef} className="flex justify-center pb-8">
          <a
            href={LINKS.calendar.process}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.clickCTA("process")}
            className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg"
          >
            Empezar ahora
            <ArrowRight className="size-4 md:size-5" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}
