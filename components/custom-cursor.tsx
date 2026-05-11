"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isText, setIsText] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 }
  const dotSpring = { damping: 50, stiffness: 800, mass: 0.1 }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  const dotX = useSpring(mouseX, dotSpring)
  const dotY = useSpring(mouseY, dotSpring)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onEnter = () => setIsHidden(false)
    const onLeave = () => setIsHidden(true)

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true)
      }
      if (
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "SPAN"
      ) {
        setIsText(true)
      }
    }

    const onHoverEnd = () => {
      setIsHovering(false)
      setIsText(false)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseover", onHoverStart)
    document.addEventListener("mouseout", onHoverEnd)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseover", onHoverStart)
      document.removeEventListener("mouseout", onHoverEnd)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : isText ? 0.6 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="rounded-full border border-white/80"
          style={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            transition: "width 0.3s ease, height 0.3s ease",
            boxShadow: isHovering
              ? "0 0 20px rgba(236, 83, 176, 0.6), 0 0 40px rgba(157, 68, 192, 0.3)"
              : "0 0 10px rgba(255,255,255,0.2)",
          }}
        />
      </motion.div>

      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.3 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-white"
          style={{
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      </motion.div>
    </>
  )
}
