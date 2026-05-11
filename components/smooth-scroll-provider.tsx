"use client"

import { createContext, useContext, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ScrollContext = createContext(null)

export function useScroll() {
  return useContext(ScrollContext)
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <div className={ScrollContext.Provider ? "" : ""}>{children}</div>
}
