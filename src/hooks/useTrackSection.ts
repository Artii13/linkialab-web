"use client"

import { useEffect, useRef } from "react"
import { analytics } from "@/lib/analytics"

export function useTrackSection(
  sectionName: string,
  existingRef?: React.RefObject<HTMLElement | null>
) {
  const ref = useRef<HTMLElement>(null)
  const targetRef = existingRef ?? ref
  const tracked = useRef(false)

  useEffect(() => {
    const el = targetRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true
          analytics.viewSection(sectionName)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionName, targetRef])

  return targetRef
}
