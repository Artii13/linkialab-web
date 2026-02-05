"use client"

import { useEffect, useState } from "react"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { CTAFinal } from "@/components/sections/CTAFinal"
import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { useTrackSection } from "@/hooks/useTrackSection"
import { analytics } from "@/lib/analytics"
import { LINKS } from "@/lib/links"

const heroVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
}

export default function Home() {
  const [heroReady, setHeroReady] = useState(false)
  const heroRef = useTrackSection("hero")

  useEffect(() => {
    const onPreloaderDone = () => setHeroReady(true)
    window.addEventListener("preloaderDone", onPreloaderDone)

    // Si no hay preloader en DOM (ej. navegación interna al home), iniciar Hero en el siguiente tick
    const fallback = setTimeout(() => {
      if (!document.querySelector('[role="status"][aria-label="Cargando"]')) {
        setHeroReady(true)
      }
    }, 0)

    return () => {
      window.removeEventListener("preloaderDone", onPreloaderDone)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero (inline; animación empieza cuando el preloader dispara preloaderDone) */}
      <section
        ref={heroRef}
        id="hero"
        className="pt-32 pb-20"
      >
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center md:px-6"
          variants={heroVariants}
          initial="hidden"
          animate={heroReady ? "visible" : "hidden"}
        >
          <motion.div
            variants={heroItem}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-foreground)]">
                Automatización inteligente
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="mb-6 text-4xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-5xl lg:text-6xl"
          >
            Tu negocio funcionando{" "}
            <span className="headline-accent">por ti</span>, 24/7
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-foreground-muted)] md:text-xl"
          >
            Chatbots de WhatsApp, automatizaciones y asistentes de IA que
            trabajan mientras tú descansas. Sin complicaciones técnicas.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={LINKS.calendar.hero}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.clickCalendar("hero")}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Reservar llamada gratuita
              <ArrowRight className="size-5" weight="bold" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </main>
  )
}
