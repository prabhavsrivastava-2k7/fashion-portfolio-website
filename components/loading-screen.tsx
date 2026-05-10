"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050510]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, #4D2DB7 0%, transparent 70%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Logo/Name */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold tracking-[-0.04em] text-glow"
                initial={{ y: 100, filter: "blur(10px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <span className="gradient-text">PRABHAV</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-4 text-sm md:text-base tracking-[0.3em] text-[#8888aa] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Fashion × Technology
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-12 w-48 h-[1px] bg-[#1a1a3a] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#4D2DB7] to-[#EC53B0]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
