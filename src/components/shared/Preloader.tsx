"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function Preloader() {
  const [phase, setPhase] = useState<"init" | "loading" | "logoOut" | "done">("init")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Phase 1: Logo entra desde abajo
    const t0 = setTimeout(() => setPhase("loading"), 50)

    // Phase 2: Logo sale hacia arriba
    const t1 = setTimeout(() => setPhase("logoOut"), 1200)

    // Phase 3: Eliminar preloader del DOM y avisar al Hero para que inicie su animación
    const t2 = setTimeout(() => {
      setPhase("done")
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preloaderDone"))
      }
    }, 1700)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (phase === "done") return null

  // Logo según tema
  const logoSrc =
    mounted && theme === "dark"
      ? "/logo-linkialab-oscuro.PNG"
      : "/logo-linkialab-claro.PNG"

  // Background según tema
  const bgColor = mounted && theme === "dark" ? "#0C0A09" : "#FAFAF9"

  // Calcular posición y opacidad del logo
  let logoTranslateY = 0
  let logoOpacity = 1

  if (phase === "init") {
    logoTranslateY = 80
    logoOpacity = 0
  } else if (phase === "loading") {
    logoTranslateY = 0
    logoOpacity = 1
  } else if (phase === "logoOut") {
    logoTranslateY = -80
    logoOpacity = 0
  }

  const bgOpacity = phase === "logoOut" ? 0 : 1

  return (
    <div
      role="status"
      aria-label="Cargando"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
        opacity: bgOpacity,
        transition: "opacity 0.4s cubic-bezier(0.7, 0.2, 0.2, 1)",
        pointerEvents: phase === "logoOut" ? "none" : "all",
      }}
    >
      <img
        src={logoSrc}
        alt="Link IA Lab"
        draggable={false}
        style={{
          width: 360,
          maxWidth: "90vw",
          height: "auto",
          objectFit: "contain",
          transform: `translateY(${logoTranslateY}px)`,
          opacity: logoOpacity,
          transition: "all 0.4s cubic-bezier(0.7, 0.2, 0.2, 1)",
          willChange: "transform, opacity",
          userSelect: "none",
        }}
      />
    </div>
  )
}
