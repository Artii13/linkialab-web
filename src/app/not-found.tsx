"use client"

import Link from "next/link"
import { SmileyXEyes } from "@phosphor-icons/react"
import { analytics } from "@/lib/analytics"
import { LINKS } from "@/lib/links"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <SmileyXEyes
          size={64}
          weight="duotone"
          className="opacity-40"
          style={{ color: "var(--color-brand)" }}
          aria-hidden
        />
        <p className="mt-4 font-serif text-8xl font-bold text-brand md:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
          Página no encontrada
        </h1>
        <p className="mt-2 max-w-md text-muted">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <a
            href={LINKS.whatsapp.notFound}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.clickWhatsApp("not_found")}
            className="btn-secondary"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  )
}
