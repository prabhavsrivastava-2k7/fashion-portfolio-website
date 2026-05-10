"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  blur?: boolean
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1.0,
  y = 50,
  blur = false,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    gsap.set(el, {
      y,
      opacity: 0,
      filter: blur ? "blur(12px)" : "blur(0px)",
    })

    const anim = gsap.to(el, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill()
      })
    }
  }, [y, delay, duration, blur])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const anim = gsap.to(el, {
      yPercent: -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      anim.kill()
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
