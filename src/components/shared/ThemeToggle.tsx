"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { analytics } from "@/lib/analytics"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

   
  useEffect(() => {
    setMounted(true)
  }, [])

  // Placeholder durante hydration para evitar flash
  if (!mounted) {
    return (
      <div className="h-[26px] w-[48px] rounded-full bg-[var(--color-surface-muted)]" />
    )
  }

  const isLight = theme === "light"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isLight}
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      onClick={() => {
        const newTheme = isLight ? "dark" : "light"
        setTheme(newTheme)
        analytics.toggleDarkMode(newTheme)
      }}
      className="relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200"
      style={{
        backgroundColor: isLight ? "#E7E5E4" : "#292524",
      }}
    >
      <span
        className="pointer-events-none flex items-center justify-center rounded-full bg-white"
        style={{
          width: 22,
          height: 22,
          position: "absolute",
          top: 2,
          left: isLight ? 2 : 24,
          transition: "left 300ms cubic-bezier(0.4, 1.2, 0.6, 1)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        }}
      >
        {isLight ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="#F59E0B" />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="#A8A29E"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
