"use client"

import { useState, useEffect } from "react"
import { Quotes, CaretLeft, CaretRight, Star } from "@phosphor-icons/react"

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
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = !useMediaQuery("(min-width: 768px)")

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const goToIndex = (index: number) => {
    setActiveIndex(index)
  }

  const getCardTransform = (index: number): {
    opacity: number
    transform: string
    zIndex: number
    visible: boolean
  } => {
    if (isMobile) {
      if (index === activeIndex) {
        return {
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 10,
          visible: true,
        }
      }
      return {
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0.8)",
        zIndex: 0,
        visible: false,
      }
    }

    // Desktop: efecto fan/abanico
    const diff = index - activeIndex
    const totalCards = TESTIMONIALS.length
    let normalizedDiff = diff
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards
    }

    if (normalizedDiff === 0) {
      return {
        opacity: 1,
        transform: "translate(-50%, -50%) translateX(0) scale(1) rotate(0deg)",
        zIndex: 30,
        visible: true,
      }
    } else if (normalizedDiff === -1) {
      return {
        opacity: 0.7,
        transform: "translate(-50%, -50%) translateX(-85%) scale(0.9) rotate(-6deg)",
        zIndex: 20,
        visible: true,
      }
    } else if (normalizedDiff === 1) {
      return {
        opacity: 0.7,
        transform: "translate(-50%, -50%) translateX(85%) scale(0.9) rotate(6deg)",
        zIndex: 20,
        visible: true,
      }
    } else {
      const dir = normalizedDiff > 0 ? 1 : -1
      return {
        opacity: 0,
        transform: `translate(-50%, -50%) translateX(${dir * 200}%) scale(0.7) rotate(${dir * 12}deg)`,
        zIndex: 10,
        visible: false,
      }
    }
  }

  return (
    <section
      id="testimonios"
      className="section bg-[var(--color-surface-muted)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header de sección - z-50 para estar SIEMPRE encima de las cards */}
        <div className="relative z-50 mx-auto mb-16 max-w-2xl text-center md:mb-20">
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

        {/* Contenedor de cards - altura fija, cards centradas dentro con absolute */}
        <div className="relative mx-auto h-[460px] w-full max-w-[1000px] overflow-visible md:h-[420px]">
          {TESTIMONIALS.map((testimonial, index) => {
            const card = getCardTransform(index)
            return (
              <div
                key={testimonial.initials}
                className="absolute left-1/2 top-1/2 w-[88%] max-w-md transition-all duration-700 ease-out md:w-[400px]"
                style={{
                  opacity: card.opacity,
                  transform: card.transform,
                  zIndex: card.zIndex,
                  pointerEvents: card.visible ? "auto" : "none",
                }}
              >
                <div
                  className="flex flex-col rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
                  style={{
                    boxShadow:
                      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                >
                  {/* Comillas */}
                  <Quotes
                    size={40}
                    weight="fill"
                    className="mb-4 shrink-0 opacity-20"
                    style={{ color: "var(--color-brand)" }}
                    aria-hidden
                  />

                  {/* Quote */}
                  <p className="mb-4 flex-1 text-base italic leading-relaxed text-[var(--color-foreground)] md:text-lg">
                    {testimonial.quote}
                  </p>

                  {/* Estrellas */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        weight="fill"
                        style={{ color: "var(--color-brand)" }}
                      />
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-px shrink-0 bg-[var(--color-border)]" />

                  {/* Author info */}
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-sm font-semibold text-[var(--color-brand)]">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-[var(--color-foreground-muted)]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navegación - mt-8 justo debajo de las cards */}
        <div className="mt-8">
          {isMobile ? (
            <div className="flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-6 bg-[var(--color-brand)]"
                      : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-foreground-muted)]"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/10 hover:text-[var(--color-brand)]"
                aria-label="Testimonio anterior"
              >
                <CaretLeft size={24} weight="bold" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-8 bg-[var(--color-brand)]"
                        : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-foreground-muted)]"
                    }`}
                    aria-label={`Ir al testimonio ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/10 hover:text-[var(--color-brand)]"
                aria-label="Siguiente testimonio"
              >
                <CaretRight size={24} weight="bold" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
