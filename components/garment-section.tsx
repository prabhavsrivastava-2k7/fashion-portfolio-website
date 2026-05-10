"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const designs = [
  {
    id: 1,
    name: "Avant-Garde Jacket",
    collection: "SS 2024",
    stage: "Concept to Final",
  },
  {
    id: 2,
    name: "Deconstructed Coat",
    collection: "FW 2024",
    stage: "Pattern Development",
  },
  {
    id: 3,
    name: "Tech-Wear Ensemble",
    collection: "Capsule",
    stage: "Prototype",
  },
]

export function GarmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Fabric texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 1px,
            rgba(255,255,255,0.03) 1px,
            rgba(255,255,255,0.03) 2px
          )`
        }}
      />

      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <motion.span
              className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Fashion Design
            </motion.span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Garment
              <br />
              <span className="gradient-text">Atelier</span>
            </motion.h2>
          </div>
          
          <motion.p
            className="text-xl text-[#8888aa] leading-relaxed self-end"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From initial sketch to final construction—exploring the meticulous process of bringing fabric dreams to life.
          </motion.p>
        </div>

        {/* Designs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
            >
              {/* Visual placeholder */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 glass">
                {/* Sketch side */}
                <div className="absolute inset-0 w-1/2 bg-[#0a0a1a]">
                  <svg className="w-full h-full p-8 opacity-30" viewBox="0 0 100 150">
                    <path
                      d="M50 20 L30 60 L25 130 L50 140 L75 130 L70 60 Z"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    />
                    <circle cx="50" cy="15" r="8" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M30 60 L15 100" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <path d="M70 60 L85 100" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                  </svg>
                </div>
                
                {/* Final side */}
                <div 
                  className="absolute inset-0 left-1/2 w-1/2 transition-transform duration-700 group-hover:-translate-x-1/4"
                  style={{
                    background: `linear-gradient(135deg, #0E21A0 0%, #4D2DB7 50%, #9D44C0 100%)`,
                  }}
                />
                
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#050510]/0 group-hover:bg-[#050510]/40 transition-colors duration-500 flex items-center justify-center">
                  <motion.span
                    className="text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Process
                  </motion.span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#8888aa] uppercase">
                    {design.collection}
                  </span>
                  <span className="text-xs text-[#4D2DB7]">{design.stage}</span>
                </div>
                <h3 className="text-xl font-semibold">{design.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process indicators */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-8">
            {["Sketch", "Pattern", "Prototype", "Final"].map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#4D2DB7] to-[#9D44C0] mb-2 mx-auto" />
                  <span className="text-xs tracking-wider text-[#666680]">{step}</span>
                </div>
                {index < 3 && <div className="w-12 h-[1px] bg-[#1a1a3a]" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
