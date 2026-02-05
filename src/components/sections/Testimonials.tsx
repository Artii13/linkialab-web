"use client"

import { motion } from "framer-motion"
import { Quotes } from "@phosphor-icons/react"

const TESTIMONIALS = [
  {
    text: "Desde que implementamos el chatbot, hemos reducido un 60% las llamadas repetitivas. Mis clientes están encantados con la atención inmediata.",
    name: "María García",
    role: "Directora, Clínica Dental Sonrisa",
    initials: "MG",
    avatarClass: "bg-[var(--color-brand)]/10 text-[var(--color-brand)]",
  },
  {
    text: "La automatización de facturas nos ahorra 15 horas semanales. Es como tener un empleado extra que nunca descansa.",
    name: "Carlos Rodríguez",
    role: "CEO, Inmobiliaria Costa",
    initials: "CR",
    avatarClass: "bg-[var(--color-brand)]/10 text-[var(--color-foreground)]",
  },
  {
    text: "El equipo de Link IA Lab entendió nuestro negocio desde el primer día. La implementación fue rápida y el soporte es excelente.",
    name: "Ana Martínez",
    role: "Fundadora, Estudio Creativo AM",
    initials: "AM",
    avatarClass: "bg-[var(--color-brand)]/10 text-[var(--color-foreground)]",
  },
]

export function Testimonials() {
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
              Resultados reales
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-[var(--color-foreground-muted)]">
            Empresas que ya automatizaron su día a día
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="card"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Quotes
                size={32}
                weight="fill"
                className="opacity-20"
                style={{ color: "var(--color-brand)" }}
                aria-hidden
              />
              <p className="mt-3 italic text-[var(--color-foreground)]">{t.text}</p>
              <div className="my-4 h-px bg-[var(--color-border)]" />
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-foreground-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
