"use client"

import { motion } from "framer-motion"
import { CalendarBlank, WhatsappLogo } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"
const WHATSAPP_LINK = "https://wa.me/34622779639"

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="section bg-[var(--color-surface-muted)]"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          className="mx-auto rounded-3xl border-2 border-[var(--color-brand)] bg-[var(--color-surface)] p-12 text-center shadow-glow md:p-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Agenda una llamada gratuita de 30 minutos. Sin compromiso, sin
            tecnicismos. Solo soluciones.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <CalendarBlank className="size-5" weight="bold" />
              Reservar llamada gratuita
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <WhatsappLogo className="size-5" weight="fill" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Respondemos en menos de 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
