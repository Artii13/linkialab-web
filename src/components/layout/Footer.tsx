"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ChatCircle } from "@phosphor-icons/react"

const CAL_LINK = "https://cal.linkialab.com"
const WHATSAPP_LINK = "https://wa.me/34647186479"
const EMAIL = "hola@linkialab.com"

const SERVICIOS_LINKS = [
  { href: "#servicios", label: "Chatbots WhatsApp" },
  { href: "#servicios", label: "Automatizaciones" },
  { href: "#servicios", label: "Asistentes IA" },
  { href: "#servicios", label: "Integraciones" },
]

const EMPRESA_LINKS = [
  { href: "#sobre", label: "Sobre nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

const LEGAL_LINKS = [
  { href: "/legal/aviso-legal", label: "Aviso Legal" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/cookies", label: "Cookies" },
]

const linkClass =
  "text-sm text-[var(--color-foreground-muted)] transition-colors duration-300 hover:text-[var(--color-brand)]"

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  const logoSrc =
    mounted && theme === "dark"
      ? "/logo-linkialab-oscuro.PNG"
      : "/logo-linkialab-claro.PNG"

  return (
    <footer className="bg-[var(--color-surface-muted)] border-t border-[var(--color-border)]">
      {/* Sección principal */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <Link
              href="/"
              className="mb-4 inline-block"
              aria-label="Link IA Lab - Inicio"
            >
              <img
                src={logoSrc}
                alt="Link IA Lab"
                className="h-16 w-auto md:h-[5.5rem]"
              />
            </Link>
            <p className="max-w-[280px] text-sm text-[var(--color-foreground-muted)]">
              Automatización inteligente para negocios que quieren crecer sin
              complicaciones técnicas.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--color-foreground)]">Servicios</h3>
            <ul className="flex flex-col gap-2">
              {SERVICIOS_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--color-foreground)]">Empresa</h3>
            <ul className="flex flex-col gap-2">
              {EMPRESA_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--color-foreground)]">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className={linkClass}
              >
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm"
              >
                <ChatCircle size={20} weight="fill" />
                +34 647 186 479
              </a>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Reservar llamada
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-[var(--color-border)]" />

      {/* Sección inferior */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="text-center text-sm text-[var(--color-foreground-subtle)] md:text-left">
          © 2025 Link IA Lab. Todos los derechos reservados.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
          {LEGAL_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
