"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "5:30", label: "Mile Time", unit: "min" },
  { value: "200+", label: "Training Days", unit: "/year" },
  { value: "15", label: "Competitions", unit: "events" },
]

export function AthleticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Beyond Design
            </motion.span>
            
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[0.9]"
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="gradient-text">Discipline</span>
                <br />
                <span className="text-[#f0f0f5]">&</span>
                <br />
                <span className="text-[#f0f0f5]">Performance</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-xl text-[#8888aa] leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The same discipline that drives athletic excellence fuels creative innovation. 
              Every design is an endurance test, every project a sprint to perfection.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs tracking-wider text-[#666680] uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dynamic visual */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Abstract athletic figure */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Motion lines */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#4D2DB7] to-transparent"
                  style={{
                    width: `${150 + i * 30}px`,
                    left: '50%',
                    top: `${30 + i * 8}%`,
                    transform: `translateX(-50%) rotate(${-15 + i * 4}deg)`,
                    opacity: 0.3 - i * 0.03,
                  }}
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}

              {/* Central element */}
              <motion.div
                className="relative w-48 h-48 md:w-64 md:h-64"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Circular track */}
                <div className="absolute inset-0 rounded-full border border-[#1a1a3a]" />
                <div className="absolute inset-4 rounded-full border border-[#4D2DB7]/30" />
                <div className="absolute inset-8 rounded-full border border-[#9D44C0]/30" />
                
                {/* Moving point */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#EC53B0] glow-pink"
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "50% calc(50% + 96px)" }}
                />
              </motion.div>

              {/* Pulse rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#4D2DB7]"
                  animate={{
                    scale: [1, 1.5 + i * 0.3],
                    opacity: [0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>

            {/* Speed indicators */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              {["SPEED", "POWER", "ENDURANCE"].map((word, i) => (
                <motion.span
                  key={word}
                  className="text-xs tracking-[0.3em] text-[#666680]"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
