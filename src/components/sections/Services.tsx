"use client"

import { motion } from "framer-motion"
import {
  WhatsappLogo,
  GearSix,
  Brain,
  Plugs,
} from "@phosphor-icons/react"

const SERVICES = [
  {
    icon: WhatsappLogo,
    title: "Chatbots WhatsApp",
    description:
      "Atiende a tus clientes 24/7 con inteligencia artificial conversacional. Respuestas instantáneas, citas automáticas y soporte sin esperas.",
    iconColor: "var(--color-brand)",
  },
  {
    icon: GearSix,
    title: "Automatizaciones inteligentes",
    description:
      "Conecta tus herramientas y elimina tareas manuales. Facturas, emails, seguimientos... todo funcionando solo.",
  },
  {
    icon: Brain,
    title: "Asistentes IA personalizados",
    description:
      "Agentes virtuales que aprenden de tu negocio y ayudan a tu equipo. Responden preguntas, generan informes y más.",
  },
  {
    icon: Plugs,
    title: "Integraciones a medida",
    description:
      "Conectamos cualquier herramienta que uses: CRM, email, calendario, WhatsApp, bases de datos... todo sincronizado.",
  },
]

export function Services() {
  return (
    <section
      id="servicios"
      className="section bg-[var(--color-surface-muted)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header de sección */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
            <span className="text-sm font-medium text-foreground/80">
              Lo que hacemos
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Soluciones que trabajan por ti
          </h2>
          <p className="text-lg text-muted">
            Automatizamos las tareas repetitivas de tu negocio para que tú
            puedas enfocarte en lo que importa.
          </p>
        </div>

        {/* Grid de servicios */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  className="mb-4 flex size-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--color-brand-muted)",
                    color: service.iconColor ?? "var(--color-brand)",
                  }}
                >
                  <Icon size={32} weight="duotone" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
