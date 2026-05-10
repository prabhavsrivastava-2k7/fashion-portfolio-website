"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function PageTransition() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-[#050510] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.04,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <span
              className="text-5xl font-bold tracking-[-0.04em] gradient-text text-glow"
              style={{ fontFamily: "'Satoshi', 'General Sans', sans-serif" }}
            >
              PRABHAV
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
