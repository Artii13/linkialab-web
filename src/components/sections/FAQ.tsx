"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CAL_LINK = "https://cal.linkialab.com"

const FAQ_ITEMS = [
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer:
      "Depende del proyecto, pero la mayoría de automatizaciones están funcionando en 1-2 semanas. Proyectos más complejos como chatbots personalizados pueden tardar 3-4 semanas. Siempre te damos un timeline claro antes de empezar.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "Para nada. Nosotros nos encargamos de todo lo técnico. Tú solo nos explicas cómo funciona tu negocio y qué tareas quieres automatizar. El resultado final es algo que cualquiera de tu equipo puede usar sin formación especial.",
  },
  {
    question: "¿Qué pasa si algo deja de funcionar?",
    answer:
      "Todos nuestros proyectos incluyen soporte. Si algo falla, lo arreglamos. Además, construimos las automatizaciones con monitorización para detectar problemas antes de que te afecten.",
  },
  {
    question: "¿Puedo integrar herramientas que ya uso?",
    answer:
      "Sí, esa es nuestra especialidad. Trabajamos con +200 herramientas: CRMs, email marketing, calendarios, WhatsApp Business, bases de datos, ERPs... Si usas una herramienta, probablemente podemos conectarla.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Cada proyecto es diferente. Tras la llamada de descubrimiento, te enviamos un presupuesto cerrado sin sorpresas. Nuestros proyectos suelen arrancar desde 1.500€ para automatizaciones simples hasta 8.000€+ para sistemas completos con IA.",
  },
  {
    question: "¿Ofrecéis mantenimiento?",
    answer:
      "Sí, ofrecemos planes de mantenimiento mensual para quienes quieren soporte continuo, actualizaciones y nuevas automatizaciones. Pero no es obligatorio: muchos clientes solo contratan el proyecto inicial.",
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="section bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header de sección */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
            <span className="text-sm font-medium text-foreground/80">
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            ¿Tienes dudas? Te las resolvemos
          </h2>
          <p className="text-lg text-muted">
            Las respuestas a lo que más nos preguntan
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl"
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-b border-[var(--color-border)]"
            >
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg font-medium text-foreground">
            ¿Más preguntas? Hablemos
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar llamada
          </a>
        </div>
      </div>
    </section>
  )
}
