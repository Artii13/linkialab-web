"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const STORAGE_KEY = "linkialab_cookie_consent"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (consent !== "accepted" && consent !== "rejected") {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          key="cookie-banner"
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-lg border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-lg md:flex-row md:items-center md:justify-between md:rounded-b-none md:rounded-t-lg">
            <p className="text-sm text-muted">
              Usamos cookies para mejorar tu experiencia. Al continuar
              navegando, aceptas nuestra{" "}
              <Link
                href="/cookies"
                className="underline transition-colors hover:text-[var(--color-brand)]"
              >
                política de cookies
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={handleReject}
                className="btn-ghost rounded-lg px-4 py-2 text-sm"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="btn-primary rounded-lg px-4 py-2 text-sm"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
