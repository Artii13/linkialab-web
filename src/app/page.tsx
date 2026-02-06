"use client"

import { useEffect, useState } from "react"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { CTAFinal } from "@/components/sections/CTAFinal"
import ParticlesBackground from "@/components/ui/ParticlesBackground"
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
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
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
        className="relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-72px)] pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-8"
      >
        <ParticlesBackground />
        <motion.div
          className="relative z-10 mx-auto w-full max-w-4xl text-center"
          variants={heroVariants}
          initial="hidden"
          animate={heroReady ? "visible" : "hidden"}
        >
          <motion.div
            variants={heroItem}
            className="mb-8 flex items-center justify-center"
          >
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-foreground)]">
                Automatización con IA
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="mb-6 text-center text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Tecnología que no se ve.
            <br />
            <span className="headline-gradient">Resultados que sí se notan.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mb-10 max-w-2xl px-4 text-center text-base text-[var(--color-foreground-muted)] md:text-lg"
          >
            Diseñamos sistemas invisibles que atienden, agendan y hacen
            seguimiento 24/7, para que tú te dediques a lo que importa.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
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

          {/* Tech Stack Carousel */}
          <div className="mt-16 md:mt-20 w-full max-w-3xl mx-auto opacity-0 animate-fade-in-delay">
            <p className="text-[11px] text-center text-[var(--color-foreground-muted)]/50 mb-6 md:mb-8 tracking-[0.2em] uppercase font-medium">
              Trabajamos con
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[var(--color-background)] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[var(--color-background)] to-transparent pointer-events-none" />
              <div className="flex animate-scroll-x gap-10 md:gap-14 items-center">
                {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="flex shrink-0 gap-10 md:gap-14 items-center">
                    <img src="/tech/n8n-light.svg" alt="n8n" className="h-5 md:h-6 opacity-40 dark:hidden" />
                    <img src="/tech/n8n-dark.svg" alt="n8n" className="h-5 md:h-6 opacity-40 hidden dark:block" />
                    <img src="/tech/OpenAI-light.svg" alt="OpenAI" className="h-5 md:h-6 opacity-40 dark:hidden" />
                    <img src="/tech/OpenAI-dark.svg" alt="OpenAI" className="h-5 md:h-6 opacity-40 hidden dark:block" />
                    <img src="/tech/ClaudeAI-light.svg" alt="Claude AI" className="h-5 md:h-6 opacity-40 dark:hidden" />
                    <img src="/tech/ClaudeAI-dark.svg" alt="Claude AI" className="h-5 md:h-6 opacity-40 hidden dark:block" />
                    <img src="/tech/Cursor-light.svg" alt="Cursor" className="h-10 md:h-12 opacity-40 dark:hidden" />
                    <img src="/tech/Cursor-dark.svg" alt="Cursor" className="h-10 md:h-12 opacity-40 hidden dark:block" />
                    <img src="/tech/Supabase-light.svg" alt="Supabase" className="h-5 md:h-6 opacity-40 dark:hidden" />
                    <img src="/tech/Supabase-dark.svg" alt="Supabase" className="h-5 md:h-6 opacity-40 hidden dark:block" />
                    <img src="/tech/Vercel-light.svg" alt="Vercel" className="h-5 md:h-6 opacity-40 dark:hidden" />
                    <img src="/tech/Vercel-dark.svg" alt="Vercel" className="h-5 md:h-6 opacity-40 hidden dark:block" />
                    <img src="/tech/GitHub-light.svg" alt="GitHub" className="h-10 md:h-12 opacity-40 dark:hidden" />
                    <img src="/tech/GitHub-dark.svg" alt="GitHub" className="h-10 md:h-12 opacity-40 hidden dark:block" />
                    <img src="/tech/whatsapp-wordmark.svg" alt="WhatsApp" className="h-5 md:h-6 opacity-40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
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
