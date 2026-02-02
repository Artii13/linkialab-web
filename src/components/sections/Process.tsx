"use client"

import { useEffect, useRef, useLayoutEffect, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ArrowRight } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"

const STEPS = [
  {
    number: "01",
    title: "Llamada de descubrimiento",
    description:
      "Hablamos 30 minutos para entender tu negocio, tus procesos actuales y dónde pierdes más tiempo.",
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
      "Construimos, probamos y lanzamos. Tú solo ves el resultado. Soporte incluido para que todo funcione perfecto.",
    image: "/animations/step-03.svg",
  },
]

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return

    const isMobileDevice = window.innerWidth < 768

    const section = sectionRef.current
    const trigger = triggerRef.current
    const cards = cardsRef.current
    const line = lineRef.current
    const cardElements = cardRefs.current.filter(Boolean)
    const cta = ctaRef.current

    if (!section || !trigger || !cards || !line || !cta) return

    // Móvil: diferir setup para que iOS Safari tenga layout estable (viewport, address bar)
    if (isMobileDevice) {
      let ctx: ReturnType<typeof gsap.context> | null = null
      let resizeHandler: (() => void) | null = null
      const timeoutId = setTimeout(() => {
        ctx = gsap.context(() => {
          const scrollDistance = window.innerHeight * 2
          const cardWidth = 260
          const gap = 24

          const startX = window.innerWidth + 60
          const finalX =
            -((cardWidth + gap) * 2) + (window.innerWidth - cardWidth) / 2

          gsap.set(cards, { x: startX })
          cardElements.forEach((card) => {
            gsap.set(card, { opacity: 0, y: 30 })
          })
          gsap.set(cta, { opacity: 0, y: 20 })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top 10%",
              end: () => `+=${scrollDistance}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          const totalDistance = Math.abs(startX - finalX)

          tl.to(
            cards,
            { x: startX - totalDistance * 0.2, duration: 0.2, ease: "none" },
            0
          )
          tl.to(
            cardElements[0],
            { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" },
            0.05
          )

          tl.to(
            cards,
            { x: startX - totalDistance * 0.5, duration: 0.25, ease: "none" },
            0.2
          )
          tl.to(
            cardElements[1],
            { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" },
            0.3
          )

          tl.to(
            cards,
            { x: startX - totalDistance * 0.8, duration: 0.25, ease: "none" },
            0.45
          )
          tl.to(
            cardElements[2],
            { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" },
            0.55
          )

          tl.to(
            cards,
            { x: finalX, duration: 0.2, ease: "none" },
            0.7
          )
          tl.to(
            cta,
            { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
            0.85
          )
        }, section)

        ScrollTrigger.refresh()
        resizeHandler = () => {
          ctx?.revert()
          ScrollTrigger.refresh()
        }
        window.addEventListener("resize", resizeHandler)
      }, 150)

      return () => {
        clearTimeout(timeoutId)
        if (resizeHandler) window.removeEventListener("resize", resizeHandler)
        ctx?.revert()
      }
    }

    // Desktop: scroll horizontal con pin
    const ctx = gsap.context(() => {
      const scrollDistance = window.innerHeight * 3
      const cardWidth = 340
      const gap = 32
      const totalCardsWidth = cardWidth * 3 + gap * 2
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

      tl.to(
        cards,
        {
          x: startX - totalDistance * 0.25,
          duration: 0.2,
          ease: "none",
        },
        0
      )
      tl.to(line, { scaleX: 0.2, duration: 0.2, ease: "none" }, 0)
      tl.to(
        cardElements[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.05
      )

      tl.to(
        cards,
        {
          x: startX - totalDistance * 0.55,
          duration: 0.25,
          ease: "none",
        },
        0.2
      )
      tl.to(line, { scaleX: 0.5, duration: 0.25, ease: "none" }, 0.2)
      tl.to(
        cardElements[1],
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.3
      )

      tl.to(
        cards,
        {
          x: startX - totalDistance * 0.85,
          duration: 0.25,
          ease: "none",
        },
        0.45
      )
      tl.to(line, { scaleX: 0.85, duration: 0.25, ease: "none" }, 0.45)
      tl.to(
        cardElements[2],
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.55
      )

      tl.to(
        cards,
        {
          x: finalX,
          duration: 0.3,
          ease: "none",
        },
        0.7
      )
      tl.to(line, { scaleX: 1, duration: 0.3, ease: "none" }, 0.7)
      tl.to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        0.85
      )
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
  }, [])

  useEffect(() => {
    if (!isClient) return
    ScrollTrigger.refresh()
  }, [isClient])

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

        {/* Cards area */}
        <div className="relative h-[60vh] overflow-hidden md:h-[55vh]">
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

          {/* Cards container */}
          <div
            ref={cardsRef}
            className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-6 overflow-visible md:gap-8"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className={`w-[260px] flex-shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-lg md:w-[340px] md:p-8 ${isClient && !isMobile ? "opacity-0" : ""}`}
              >
                {/* SVG */}
                <div className="mb-3 flex h-32 items-center justify-center -mt-20 md:mb-4 md:h-44 md:-mt-28">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Número */}
                <span
                  className="mb-2 block font-serif text-3xl font-bold md:mb-3 md:text-5xl"
                  style={{ color: "var(--color-brand)" }}
                >
                  {step.number}
                </span>

                {/* Título */}
                <h3 className="mb-2 text-sm font-semibold text-foreground md:text-lg">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="text-xs leading-relaxed text-muted md:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - FUERA del contenedor de cards para centrado correcto */}
        <div ref={ctaRef} className="flex justify-center pb-8">
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
    </section>
  )
}
