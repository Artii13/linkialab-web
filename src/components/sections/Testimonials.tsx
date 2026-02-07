"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quotes } from "@phosphor-icons/react"

const TESTIMONIALS = [
  {
    quote:
      "Antes me pasaba el día en WhatsApp contestando lo mismo: horarios, precios, si hay hueco... Ahora el agente de IA lo hace solo y yo puedo estar con mis pacientes.",
    role: "Directora de clínica dental",
    location: "Ibiza",
    initials: "CD",
  },
  {
    quote:
      "Flipamos cuando descubrimos que llevábamos días hablando con su IA por WhatsApp. Pensábamos que era una persona. Después, nos dijo que nos convenía más aprender a usar ChatGPT con Excel que montar una automatización. Ahora el equipo no trabaja sin IA. No les dejo.",
    role: "Gerente de inmobiliaria",
    location: "Ibiza",
    initials: "GI",
  },
  {
    quote:
      "La IA contesta en 5 idiomas. Alemanes, ingleses, franceses... todos reservan sin que yo toque el móvil. En temporada alta eso no tiene precio.",
    role: "Propietario de chiringuito",
    location: "Ibiza",
    initials: "PC",
  },
  {
    quote:
      "Me escribían por Instagram, WhatsApp... era un caos. Ahora todo va al mismo sitio, la IA responde y yo me encargo de cuidar a mis clientas.",
    role: "Dueña de centro de estética",
    location: "Ibiza",
    initials: "CE",
  },
]

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia(query)
    setMatches(mql.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const isLg = useMediaQuery("(min-width: 1024px)")
  const isMd = useMediaQuery("(min-width: 768px)")

  const maxSlides = isLg ? 2 : isMd ? 2 : 4

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(0, maxSlides - 1)))
  }, [maxSlides])

  useEffect(() => {
    if (isPaused || maxSlides <= 1) return
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides)
    }, 5000)
    return () => clearInterval(id)
  }, [isPaused, maxSlides])

  const cardsPerSlide = isLg ? 3 : isMd ? 2 : 1

  const getCardsForSlide = (slideIndex: number) => {
    const start = slideIndex * cardsPerSlide
    return TESTIMONIALS.slice(start, start + cardsPerSlide)
  }

  return (
    <section
      id="testimonios"
      className="section bg-[var(--color-surface-muted)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header de sección */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2">
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              Esto dicen de nosotros
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
            Negocios que ya no pierden el tiempo
          </h2>
          <p className="text-lg text-[var(--color-foreground-muted)]">
            Y ahora tienen la cabeza para lo importante
          </p>
        </div>

        {/* Slider de testimonios */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {Array.from({ length: maxSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`flex w-full shrink-0 gap-6 px-1 ${cardsPerSlide === 1 ? "justify-center" : ""}`}
                style={{ minWidth: "100%" }}
              >
                {getCardsForSlide(slideIndex).map((t) => (
                  <div
                    key={t.initials}
                    className={`card flex min-h-0 flex-1 flex-col ${cardsPerSlide === 1 ? "max-w-md" : "w-full"}`}
                  >
                    <Quotes
                      size={32}
                      weight="fill"
                      className="shrink-0 opacity-20"
                      style={{ color: "var(--color-brand)" }}
                      aria-hidden
                    />
                    <p className="mt-3 flex-1 italic text-[var(--color-foreground)]">
                      {t.quote}
                    </p>
                    <div className="my-4 h-px shrink-0 bg-[var(--color-border)]" />
                    <div className="flex shrink-0 items-center gap-3">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-sm font-semibold text-[var(--color-brand)]">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-foreground)]">
                          {t.role}
                        </p>
                        <p className="text-sm text-[var(--color-foreground-muted)]">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Dots de navegación */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "w-6 bg-[var(--color-brand)]"
                    : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-foreground-muted)]"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
