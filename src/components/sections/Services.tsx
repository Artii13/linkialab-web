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
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div
            className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <span className="text-sm font-medium text-foreground/80">
              Lo que hacemos
            </span>
          </motion.div>
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            Soluciones que trabajan por ti
          </motion.h2>
          <motion.p
            className="text-lg text-muted"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            Automatizamos las tareas repetitivas de tu negocio para que tú
            puedas enfocarte en lo que importa.
          </motion.p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="card group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  className="mb-4 flex size-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--color-brand-muted)",
                    color: service.iconColor ?? "var(--color-brand)",
                  }}
                >
                  <Icon size={32} weight="duotone" />
                </motion.div>
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
