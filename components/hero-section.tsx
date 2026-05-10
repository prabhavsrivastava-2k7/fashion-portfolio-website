"use client"

import { motion } from "framer-motion"

const textLines = [
  "PRABHAV",
  "FASHION × TECHNOLOGY",
  "VISUAL STORYTELLING",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0E21A0 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #9D44C0 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Typography */}
          <div className="space-y-6">
            {textLines.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  className={`${
                    index === 0
                      ? "text-6xl md:text-8xl lg:text-9xl font-bold gradient-text"
                      : index === 1
                      ? "text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] text-[#8888aa]"
                      : "text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] text-[#f0f0f5]"
                  } leading-none`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}

            <motion.p
              className="text-[#8888aa] max-w-md mt-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Crafting immersive digital experiences at the intersection of luxury fashion and cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="#work"
                className="px-6 py-3 bg-gradient-to-r from-[#4D2DB7] to-[#9D44C0] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#1a1a3a] rounded-full text-sm font-medium hover:border-[#4D2DB7] transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right side - Visual composition */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Floating UI screens */}
            <motion.div
              className="absolute top-10 right-10 w-48 h-64 glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: -15 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EC53B0] to-[#4D2DB7] mb-4" />
                <div className="space-y-2 flex-1">
                  <div className="h-2 w-3/4 bg-[#1a1a3a] rounded" />
                  <div className="h-2 w-1/2 bg-[#1a1a3a] rounded" />
                  <div className="h-2 w-2/3 bg-[#1a1a3a] rounded" />
                </div>
                <div className="h-16 w-full bg-gradient-to-r from-[#0E21A0]/30 to-[#4D2DB7]/30 rounded-lg" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/3 left-0 w-56 h-72 glass rounded-2xl overflow-hidden glow-purple"
              initial={{ opacity: 0, x: -50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 10 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="h-1/2 bg-gradient-to-br from-[#9D44C0]/20 to-[#EC53B0]/20" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-3/4 bg-[#1a1a3a] rounded" />
                <div className="h-3 w-1/2 bg-[#1a1a3a] rounded" />
                <div className="flex gap-2 mt-4">
                  <div className="h-8 w-8 rounded-full bg-[#4D2DB7]/50" />
                  <div className="h-8 w-8 rounded-full bg-[#9D44C0]/50" />
                  <div className="h-8 w-8 rounded-full bg-[#EC53B0]/50" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-20 w-40 h-56 glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: -10 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="p-3 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-6 h-6 rounded bg-[#EC53B0]/30" />
                  <div className="w-4 h-4 rounded-full bg-[#4D2DB7]" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-[#1a1a3a] rounded" />
                  <div className="h-2 w-3/4 bg-[#1a1a3a] rounded" />
                </div>
                <div className="h-20 w-full bg-gradient-to-t from-[#9D44C0]/20 to-transparent rounded-lg" />
              </div>
            </motion.div>

            {/* Floating orbs */}
            <motion.div
              className="absolute top-20 left-20 w-4 h-4 rounded-full bg-[#EC53B0]"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-3 h-3 rounded-full bg-[#4D2DB7]"
              animate={{
                y: [0, 15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] text-[#8888aa]">SCROLL</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#4D2DB7] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
