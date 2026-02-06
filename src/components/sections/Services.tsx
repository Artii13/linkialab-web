"use client"

import { motion } from "framer-motion"
import {
  WhatsappLogo,
  GearSix,
  Brain,
  Plugs,
} from "@phosphor-icons/react"
import { useTrackSection } from "@/hooks/useTrackSection"

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
  const sectionRef = useTrackSection("services")
  return (
    <section
      ref={sectionRef}
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
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div
            className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2"
            variants={{
              hidden: { opacity: 0, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.5 },
              },
            }}
          >
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              Lo que hacemos
            </span>
          </motion.div>
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            variants={{
              hidden: { opacity: 0, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.5 },
              },
            }}
          >
            Soluciones que trabajan por ti
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--color-foreground-muted)]"
            variants={{
              hidden: { opacity: 0, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
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
                className="service-card relative group rounded-2xl p-5 md:p-6 overflow-hidden"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Capa del borde animado */}
                <div className="absolute inset-0 -z-10 rounded-2xl overflow-hidden">
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-40 animate-border-rotate origin-center"
                    style={{
                      backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(251,191,36,0.8) 40%, rgba(245,158,11,0.8) 60%, transparent 100%)'
                    }}
                  />
                </div>
                
                {/* Fondo de la card con gradients */}
                <div 
                  className="absolute inset-[1px] rounded-2xl -z-5"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    backgroundImage: `
                      radial-gradient(at 88% 40%, var(--card-bg) 0px, transparent 85%),
                      radial-gradient(at 49% 30%, var(--card-bg) 0px, transparent 85%),
                      radial-gradient(at 14% 26%, var(--card-bg) 0px, transparent 85%),
                      radial-gradient(at 0% 64%, rgba(251,191,36,0.15) 0px, transparent 85%),
                      radial-gradient(at 41% 94%, rgba(252,211,77,0.1) 0px, transparent 85%),
                      radial-gradient(at 100% 99%, rgba(245,158,11,0.15) 0px, transparent 85%)
                    `,
                    boxShadow: 'inset 0px -16px 24px 0px rgba(255,255,255,0.06)'
                  }}
                />
                
                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono */}
                  <div className="h-12 w-12 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mb-4">
                    <Icon size={32} weight="duotone" className="text-amber-500" />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-sm text-[var(--color-foreground-muted)]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
