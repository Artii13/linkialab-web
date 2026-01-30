"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"

const STEPS = [
  {
    number: "1",
    title: "Llamada de descubrimiento",
    description:
      "Hablamos 30 minutos para entender tu negocio, tus procesos actuales y dónde pierdes más tiempo.",
  },
  {
    number: "2",
    title: "Propuesta personalizada",
    description:
      "En 48h recibes un plan detallado con las automatizaciones recomendadas, tiempos y presupuesto cerrado.",
  },
  {
    number: "3",
    title: "Implementación y soporte",
    description:
      "Construimos, probamos y lanzamos. Tú solo ves el resultado. Soporte incluido para que todo funcione perfecto.",
  },
]

export function Process() {
  return (
    <section
      id="proceso"
      className="section bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header de sección */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
            <span className="text-sm font-medium text-foreground/80">
              Cómo trabajamos
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            De la idea a la automatización en 3 pasos
          </h2>
          <p className="text-lg text-muted">
            Un proceso simple y transparente. Sin sorpresas, sin tecnicismos.
          </p>
        </div>

        {/* Grid de 3 pasos + línea conectora (desktop) */}
        <div className="relative">
          {/* Línea conectora: solo desktop */}
          <div
            className="absolute left-0 right-0 top-12 hidden border-t border-dashed border-[var(--color-border)] md:block"
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="card relative z-10 bg-[var(--color-surface)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span
                  className="mb-4 block font-serif text-5xl italic"
                  style={{ color: "var(--color-brand)" }}
                >
                  {step.number}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Empezar con una llamada gratuita
            <ArrowRight className="size-5" weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
