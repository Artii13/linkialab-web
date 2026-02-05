"use client"

import { useEffect } from "react"
import Clarity from "@microsoft/clarity"

export default function ClarityScript() {
  useEffect(() => {
    Clarity.init("vct6qc9mx7")
  }, [])

  return null
}
