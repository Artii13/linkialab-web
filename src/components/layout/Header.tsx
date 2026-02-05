"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { List, X } from "@phosphor-icons/react"
import { analytics } from "@/lib/analytics"
import { LINKS } from "@/lib/links"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoSrc =
    mounted && theme === "dark"
      ? "/logo-linkialab-oscuro.PNG"
      : "/logo-linkialab-claro.PNG"

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[var(--z-sticky)] h-16 md:h-[72px] w-full border-b",
          "border-[var(--color-border)]",
          "transition-[background-color,border-color] duration-300",
          scrolled
            ? "bg-[var(--color-surface)]/95 supports-[backdrop-filter]:bg-[var(--color-surface)]/80 supports-[backdrop-filter]:backdrop-blur-md"
            : "bg-[var(--color-surface)]"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Link IA Lab - Inicio">
            <img
              src={logoSrc}
              alt="Link IA Lab"
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop: navegación + CTA */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-foreground)] transition-colors duration-300 hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href={LINKS.calendar.header}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.clickCTA("header")}
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent p-2 text-[var(--color-foreground)] transition-colors duration-200 hover:bg-[var(--color-surface-muted)]"
              aria-label="Abrir menú"
            >
              <List className="size-6 shrink-0 text-[var(--color-foreground)]" weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil (Sheet) */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" showCloseButton={false} className="w-full max-w-[280px] bg-[var(--color-surface)] sm:max-w-[320px]">
          <SheetHeader className="flex flex-row items-center justify-between border-b border-[var(--color-border)] pb-4">
            <SheetTitle asChild>
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <img
                  src={logoSrc}
                  alt="Link IA Lab"
                  className="h-12 w-auto"
                />
              </Link>
            </SheetTitle>
            <SheetClose
              className="inline-flex size-10 items-center justify-center rounded-lg border-none bg-transparent p-2 text-[var(--color-foreground)] transition-colors duration-200 hover:bg-[var(--color-surface-muted)]"
              aria-label="Cerrar menú"
            >
              <X className="size-6 shrink-0 text-[var(--color-foreground)]" weight="bold" />
            </SheetClose>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-foreground)] transition-colors duration-200 hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm text-[var(--color-foreground-muted)]">Tema</span>
              <ThemeToggle />
            </div>
            <div className="my-4 border-t border-[var(--color-border)]" />
            <a
              href={LINKS.calendar.header}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                closeMenu()
                analytics.clickCTA("header")
              }}
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
