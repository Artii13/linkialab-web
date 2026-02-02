"use client"

import { motion } from "framer-motion"
import { CalendarBlank, WhatsappLogo } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"
const WHATSAPP_LINK = "https://wa.me/34622779639"

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="section bg-[var(--color-surface-muted)] pt-8 md:pt-0"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          className="mx-auto flex flex-col items-center rounded-3xl border-2 border-[var(--color-brand)] bg-[var(--color-surface)] p-8 text-center shadow-glow md:p-12"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight md:mb-5 md:text-3xl">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted md:mb-10 md:text-lg">
            Agenda una llamada gratuita de 30 minutos. Sin compromiso, sin
            tecnicismos. Solo soluciones.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm md:px-6 md:py-2.5 md:text-base"
            >
              <CalendarBlank className="size-5" weight="bold" />
              Consultoría Gratuita
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm md:px-6 md:py-2.5 md:text-base"
            >
              <WhatsappLogo className="size-5" weight="fill" />
              Lía te atenderá 24/7
            </a>
          </div>

          <p className="mt-6 text-xs text-muted md:mt-8 md:text-sm">
            Contestamos en menos de 1 min
          </p>
        </motion.div>
      </div>
    </section>
  )
}
