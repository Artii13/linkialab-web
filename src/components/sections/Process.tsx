"use client"

import { useEffect, useRef, useLayoutEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ArrowRight } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"

const STEPS = [
  {
    number: "01",
    title: "Llamada de descubrimiento",
    description:
      "Hablamos 30 minutos para entender tu negocio, tus procesos actuales y dónde pierdes más tiempo.",
  },
  {
    number: "02",
    title: "Propuesta personalizada",
    description:
      "En 48h recibes un plan detallado con las automatizaciones recomendadas, tiempos y presupuesto cerrado.",
  },
  {
    number: "03",
    title: "Implementación y soporte",
    description:
      "Construimos, probamos y lanzamos. Tú solo ves el resultado. Soporte incluido para que todo funcione perfecto.",
  },
]

// Hook seguro para SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    const trigger = triggerRef.current
    const cards = cardsRef.current
    const line = lineRef.current
    const cardElements = cardRefs.current.filter(Boolean)
    const cta = ctaRef.current

    if (!section || !trigger || !cards || !line) return

    // Valores responsive
    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile
      ? window.innerHeight * 2.5
      : window.innerHeight * 3

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: isMobile ? "top 10%" : "top 15%",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      const totalWidth =
        cards.scrollWidth - window.innerWidth + (isMobile ? 40 : 100)

      // Card 1 aparece
      tl.fromTo(
        cardElements[0],
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.15,
          ease: "power2.out",
        },
        0
      )
      tl.to(line, { scaleX: 0.15, duration: 0.15, ease: "none" }, 0)

      // Scroll + Card 2 aparece
      tl.to(cards, { x: -totalWidth * 0.35, duration: 0.25, ease: "none" }, 0.15)
      tl.to(line, { scaleX: 0.5, duration: 0.25, ease: "none" }, 0.15)
      tl.fromTo(
        cardElements[1],
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.15,
          ease: "power2.out",
        },
        0.25
      )

      // Scroll + Card 3 aparece
      tl.to(cards, { x: -totalWidth * 0.7, duration: 0.25, ease: "none" }, 0.4)
      tl.to(line, { scaleX: 0.85, duration: 0.25, ease: "none" }, 0.4)
      tl.fromTo(
        cardElements[2],
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.15,
          ease: "power2.out",
        },
        0.5
      )

      // Scroll final + CTA
      tl.to(cards, { x: -totalWidth, duration: 0.3, ease: "none" }, 0.65)
      tl.to(line, { scaleX: 1, duration: 0.3, ease: "none" }, 0.65)
      tl.fromTo(
        cta,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(1.7)" },
        0.8
      )
    }, section)

    // Limpiar y recrear en resize
    const handleResize = () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative bg-[var(--color-background)]"
    >
      <div ref={triggerRef} className="relative min-h-screen">
        {/* Header */}
        <div className="pb-6 pt-6 md:pb-8 md:pt-12">
          <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 md:mb-4 md:px-4 md:py-2">
              <span className="text-xs font-medium text-foreground/80 md:text-sm">
                Cómo trabajamos
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:mb-4 md:text-4xl">
              De la idea a la automatización en 3 pasos
            </h2>
            <p className="text-base text-muted md:text-lg">
              Un proceso simple y transparente. Sin sorpresas, sin tecnicismos.
            </p>
          </div>
        </div>

        {/* Cards container */}
        <div className="relative h-[55vh] overflow-hidden md:h-[60vh]">
          {/* Línea conectora */}
          <div
            ref={lineRef}
            className="absolute left-[5%] right-[5%] top-1/2 h-[2px] -translate-y-1/2 origin-left scale-x-0"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand) 50%, transparent 50%)",
              backgroundSize: "12px 2px",
            }}
          />

          {/* Cards */}
          <div
            ref={cardsRef}
            className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-4 pl-[5vw] md:gap-12 md:pl-[10vw]"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="w-[280px] flex-shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 opacity-0 shadow-lg md:w-[400px] md:p-8"
              >
                <span
                  className="mb-2 block font-serif text-4xl font-bold md:mb-4 md:text-6xl"
                  style={{ color: "var(--color-brand)" }}
                >
                  {step.number}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground md:mb-3 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </div>
            ))}

            {/* CTA */}
            <div
              ref={ctaRef}
              className="flex w-[280px] flex-shrink-0 items-center justify-center opacity-0 md:w-[400px]"
            >
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg"
              >
                Empezar ahora
                <ArrowRight className="size-4 md:size-5" weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
