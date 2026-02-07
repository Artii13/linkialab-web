"use client"

import { Accordion } from "@/components/ui/accordion-custom"
import { useTrackSection } from "@/hooks/useTrackSection"
import { analytics } from "@/lib/analytics"
import { LINKS } from "@/lib/links"

const FAQ_ITEMS = [
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer:
      "La mayoría están funcionando en 2 semanas. Si es algo más complejo, puede tardar más. Antes de empezar te decimos exactamente cuánto.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "Cero. Tú nos cuentas qué te quita tiempo y nosotros lo montamos. Una vez funcionando, tú solo ves los resultados: clientes que entran, citas agendadas, respuestas automáticas. De lo técnico nos encargamos nosotros.",
  },
  {
    question: "¿Qué pasa si algo deja de funcionar?",
    answer:
      "Lo arreglamos cuanto antes. Todos los proyectos incluyen soporte, así que estamos encima.",
  },
  {
    question: "¿Puedo integrar herramientas que ya uso?",
    answer:
      "Seguramente sí. CRM, calendario, WhatsApp, email... lo que uses. Si no lo conocemos, nos ponemos en contacto con la empresa para confirmar que se puede conectar antes de prometerte nada.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de lo que necesites. En la llamada lo vemos y en 48h tienes presupuesto cerrado, sin sorpresas. Cada proyecto es diferente, pero para que tengas una idea: hemos hecho proyectos desde los 1.000€ en adelante. Tu caso puede ser diferente.",
  },
  {
    question: "¿Ofrecéis mantenimiento?",
    answer:
      "Sí. En proyectos complejos es obligatorio, no dejamos sistemas sin soporte. Incluye corrección de errores y actualizaciones. En proyectos más sencillos, lo hablamos y decidimos juntos.",
  },
]

export function FAQ() {
  const sectionRef = useTrackSection("faq")
  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header de sección */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2">
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
            ¿Tienes dudas? Te las resolvemos
          </h2>
          <p className="text-lg text-[var(--color-foreground-muted)]">
            Las respuestas a lo que más nos preguntan
          </p>
        </div>

        {/* Accordion custom: contenido siempre en DOM para animar apertura y cierre */}
        <Accordion items={FAQ_ITEMS} className="mx-auto max-w-3xl" />

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg font-medium text-[var(--color-foreground)]">
            ¿Más preguntas? Hablemos
          </p>
          <a
            href={LINKS.calendar.faq}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.clickCalendar("faq")}
            className="btn-primary"
          >
            Reservar llamada
          </a>
        </div>
      </div>
    </section>
  )
}
