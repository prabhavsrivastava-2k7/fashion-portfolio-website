"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function UIUXSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 bg-gradient-to-r from-[#0E21A0] via-[#4D2DB7] to-[#9D44C0] blur-3xl" />

      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Digital Craft
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UI/UX <span className="gradient-text">Design</span>
          </motion.h2>
        </div>

        {/* Device mockups */}
        <div className="relative h-[600px] md:h-[700px]">
          {/* Central phone */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: "-50%" } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-[280px] h-[580px] bg-[#0a0a15] rounded-[40px] p-3 glow-purple">
              {/* Phone frame */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a15] rounded-b-2xl" />
              
              {/* Screen */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0E21A0]/30 via-[#4D2DB7]/30 to-[#9D44C0]/30 backdrop-blur-sm">
                {/* App UI mockup */}
                <div className="p-6 h-full flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xs text-white/40">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/40 rounded-sm" />
                      <div className="w-4 h-2 bg-white/40 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="h-32 rounded-2xl bg-gradient-to-br from-[#EC53B0]/40 to-[#4D2DB7]/40" />
                    <div className="space-y-2">
                      <div className="h-3 w-3/4 bg-white/20 rounded" />
                      <div className="h-3 w-1/2 bg-white/10 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
                      <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
                    </div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around py-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-[#EC53B0]' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left floating screen */}
          <motion.div
            className="absolute left-10 md:left-20 top-1/4 z-10"
            initial={{ opacity: 0, x: -100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 20 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-[200px] md:w-[280px] h-[160px] md:h-[200px] glass rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#EC53B0]" />
                <div className="w-2 h-2 rounded-full bg-[#9D44C0]" />
                <div className="w-2 h-2 rounded-full bg-[#4D2DB7]" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="mt-4 h-16 rounded-lg bg-gradient-to-r from-[#4D2DB7]/30 to-[#9D44C0]/30" />
            </div>
          </motion.div>

          {/* Right floating screen */}
          <motion.div
            className="absolute right-10 md:right-20 top-1/3 z-10"
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: -15 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-[200px] md:w-[300px] h-[180px] md:h-[220px] glass rounded-2xl p-4 glow-pink">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#8888aa] mb-2">Dashboard</div>
                  <div className="h-3 w-1/2 bg-white/20 rounded mb-1" />
                  <div className="h-2 w-1/3 bg-white/10 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 rounded-lg bg-gradient-to-t from-[#4D2DB7]/20 to-transparent" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom floating element */}
          <motion.div
            className="absolute bottom-10 left-1/4 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-[180px] h-[100px] glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9D44C0] to-[#EC53B0]" />
              <div className="space-y-1">
                <div className="h-2 w-16 bg-white/20 rounded" />
                <div className="h-2 w-12 bg-white/10 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Floating dots decoration */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#4D2DB7]"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { title: "Micro-interactions", desc: "Thoughtful animations that delight" },
            { title: "Responsive Design", desc: "Seamless across all devices" },
            { title: "User-Centered", desc: "Intuitive and accessible interfaces" },
          ].map((feature, index) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4D2DB7] to-[#9D44C0] mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#666680]">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
