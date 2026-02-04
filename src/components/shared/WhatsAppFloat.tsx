"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { WhatsappLogo } from "@phosphor-icons/react"

const WHATSAPP_LINK = "https://wa.me/34647186479"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
          style={{ backgroundColor: "#25D366" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <WhatsappLogo
            size={28}
            weight="fill"
            className="text-white"
          />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
