"use client"

import { useTheme } from "next-themes"
import { Particles } from "@/components/magicui/particles"
import { useEffect, useState } from "react"
import { Meteors } from "./magicui/meteors"

export function ThemeAwareParticles() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only render component after it's mounted on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Default color for initial render
  let particleColor = "#933f00"
  // Set color based on theme after component is mounted
  if (mounted) {
    particleColor = resolvedTheme === "dark" ? "#ff3333" : "rgba(74, 144, 226, 0.6)"
  }


  
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
        <Particles 
        className="absolute inset-0 opacity-40"
        quantity={400}
        staticity={200}
        ease={20}
        color={particleColor}
        />
    </div>
  )
} 