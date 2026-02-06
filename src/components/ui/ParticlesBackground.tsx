"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const { resolvedTheme } = useTheme()

  const initParticles = useCallback(
    (width: number, height: number, isMobile: boolean) => {
      const particleCount = isMobile ? 20 : 60
      const particleSpeed = isMobile ? 0.3 : 0.5
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * 2 + 0.8,
      }))
    },
    []
  )

  useEffect(() => {
    // Respetar prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      const isMobile = canvas.width < 768
      initParticles(canvas.width, canvas.height, isMobile)
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isMobile = canvas.width < 768
      const connectionDistance = isMobile ? 70 : 120
      const lineWidth = isMobile ? 0.5 : 0.8

      const isDark = resolvedTheme === "dark"
      // Usar color ámbar para las partículas
      const particleColor = isDark
        ? "rgba(251, 191, 36,"
        : "rgba(245, 158, 11,"
      const lineColor = isDark
        ? "rgba(251, 191, 36,"
        : "rgba(245, 158, 11,"

      const particles = particlesRef.current

      // Actualizar posiciones
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      // Dibujar conexiones
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * (isDark ? 0.15 : 0.2)
            ctx.strokeStyle = `${lineColor} ${opacity})`
            ctx.lineWidth = lineWidth
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Dibujar partículas
      particles.forEach((p) => {
        ctx.fillStyle = `${particleColor} ${isDark ? 0.35 : 0.4})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [resolvedTheme, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  )
}
