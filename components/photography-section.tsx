"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const images = [
  { id: 1, title: "Urban Noir", category: "Street" },
  { id: 2, title: "Silk Dreams", category: "Fashion" },
  { id: 3, title: "Neon Nights", category: "Editorial" },
  { id: 4, title: "Monochrome", category: "Portrait" },
  { id: 5, title: "Abstract Form", category: "Art" },
  { id: 6, title: "Light & Shadow", category: "Studio" },
]

export function PhotographySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="photography" className="py-32 md:py-48 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12" ref={ref}>
        <motion.span
          className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Visual Archive
        </motion.span>
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Photography
        </motion.h2>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="flex-shrink-0 group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          >
            <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              {/* Placeholder gradient - replace with actual images */}
              <div
                className="absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, 
                    ${index % 2 === 0 ? '#0E21A0' : '#4D2DB7'} 0%, 
                    ${index % 2 === 0 ? '#9D44C0' : '#EC53B0'} 50%,
                    ${index % 2 === 0 ? '#EC53B0' : '#0E21A0'} 100%)`,
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#050510]/40 group-hover:bg-[#050510]/20 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="text-xs tracking-[0.2em] text-white/60 uppercase">
                  {image.category}
                </span>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <motion.div
                    className="h-[2px] bg-white/50"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/10">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="container mx-auto px-6 md:px-12 mt-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <div className="h-[1px] w-12 bg-[#4D2DB7]" />
        <span className="text-xs tracking-[0.2em] text-[#8888aa]">DRAG TO EXPLORE</span>
      </motion.div>
    </section>
  )
}
