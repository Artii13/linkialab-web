"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

const CAL_LINK = "https://cal.linkialab.com"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[var(--z-sticky)] h-16 md:h-[72px] w-full border-b transition-all duration-300",
          "bg-[var(--color-surface)] border-[var(--color-border)]",
          scrolled && "bg-[var(--color-surface)]/80 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-foreground transition-all duration-300 hover:opacity-90 md:text-2xl"
            aria-label="Link IA Lab - Inicio"
          >
            <span className="text-[#F59E0B]">L</span>ink IA Lab
          </Link>

          {/* Desktop: navegación + CTA */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/90 transition-all duration-300 hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm"
            >
              Reservar llamada
            </a>
          </nav>

          {/* Móvil: solo botón hamburguesa */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent p-2 text-foreground transition-all duration-300 hover:bg-[var(--color-surface-muted)]"
              aria-label="Abrir menú"
            >
              <List className="size-6" weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil (Sheet) */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" showCloseButton={false} className="w-full max-w-[280px] sm:max-w-[320px]">
          <SheetHeader className="flex flex-row items-center justify-between border-b border-[var(--color-border)] pb-4">
            <SheetTitle className="font-serif text-lg">
              <span className="text-[#F59E0B]">L</span>ink IA Lab
            </SheetTitle>
            <SheetClose
              className="inline-flex size-10 items-center justify-center rounded-lg border-none bg-transparent p-2 transition-all duration-300 hover:bg-[var(--color-surface-muted)]"
              aria-label="Cerrar menú"
            >
              <X className="size-6" weight="bold" />
            </SheetClose>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-4 border-t border-[var(--color-border)]" />
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-center text-sm"
            >
              Reservar llamada
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
