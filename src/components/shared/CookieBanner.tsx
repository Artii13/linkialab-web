"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type CookieConsent = "accepted" | "rejected" | null

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Leer preferencia guardada
    const stored = localStorage.getItem("cookie-consent") as CookieConsent

    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored)
      // Si aceptó, cargar GA4
      if (stored === "accepted") {
        loadGA4()
      }
    } else {
      // No hay preferencia, mostrar banner después de un delay
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const loadGA4 = () => {
    // Evitar cargar dos veces
    if (document.getElementById("ga4-script")) return

    // Crear script de gtag
    const script1 = document.createElement("script")
    script1.id = "ga4-script"
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-P45Y84F1HW"
    script1.async = true
    document.head.appendChild(script1)

    // Inicializar gtag
    const script2 = document.createElement("script")
    script2.id = "ga4-init"
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P45Y84F1HW');
    `
    document.head.appendChild(script2)
  }

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setConsent("accepted")
    setVisible(false)
    loadGA4()
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setConsent("rejected")
    setVisible(false)
  }

  // No mostrar si ya eligió o aún no es visible
  if (consent || !visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
      role="dialog"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-lg md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-sm text-[var(--color-foreground-muted)] md:text-base">
              Utilizamos cookies para mejorar tu experiencia y analizar el tráfico.
              Puedes aceptar todas, rechazarlas o ver más detalles en nuestra{" "}
              <Link
                href="/legal/cookies"
                className="text-[var(--color-brand)] underline hover:no-underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <button
              onClick={handleReject}
              className="rounded-lg border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-muted)]"
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className="btn-primary rounded-lg px-4 py-2 text-sm font-medium"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
