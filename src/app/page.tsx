"use client"

// import Hero from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero (inline; mover a Hero después) */}
      <section
        id="hero"
        className="pt-32 pb-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Automatización inteligente
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
          >
            Tu negocio funcionando{" "}
            <span className="headline-accent">por ti</span>, 24/7
          </motion.h1>

          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl"
          >
            Chatbots de WhatsApp, automatizaciones y asistentes de IA que
            trabajan mientras tú descansas. Sin complicaciones técnicas.
          </motion.p>

          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Reservar llamada gratuita
              <ArrowRight className="size-5" weight="bold" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </motion.div>
        </div>
      </section>

      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </main>
  )
}
