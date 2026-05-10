"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const images = [
  { id: 1, title: "Urban Noir", category: "Street", angle: -135 },
  { id: 2, title: "Silk Dreams", category: "Fashion", angle: -105 },
  { id: 3, title: "Neon Nights", category: "Editorial", angle: -75 },
  { id: 4, title: "Monochrome", category: "Portrait", angle: -45 },
  { id: 5, title: "Abstract Form", category: "Art", angle: -15 },
  { id: 6, title: "Light & Shadow", category: "Studio", angle: 15 },
]

function PhotoCard({
  image,
  index,
  isInView,
}: {
  image: (typeof images)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      className="flex-shrink-0 group cursor-pointer"
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: 0.3 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative w-[280px] md:w-[360px] h-[380px] md:h-[480px] rounded-2xl overflow-hidden">
        {/* Color gradient backdrop */}
        <motion.div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            background: `linear-gradient(${image.angle}deg, 
              ${index % 2 === 0 ? "#0E21A0" : "#4D2DB7"} 0%, 
              ${index % 2 === 0 ? "#9D44C0" : "#EC53B0"} 55%,
              ${index % 2 === 0 ? "#EC53B0" : "#0E21A0"} 100%)`,
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-[#050510]"
          initial={{ opacity: 0.45 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <span className="text-xs tracking-[0.2em] text-white/60 uppercase">
            {image.category}
          </span>

          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {image.title}
            </motion.h3>
            <motion.div
              className="h-[1px] bg-white/60"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>

        {/* Number watermark */}
        <div className="absolute top-6 right-6 text-6xl font-bold text-white/8 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
          }}
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export function PhotographySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        <div className="overflow-hidden">
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
            initial={{ y: 80 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Photography
          </motion.h2>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div
        className="flex gap-5 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {images.map((image, index) => (
          <PhotoCard key={image.id} image={image} index={index} isInView={isInView} />
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="container mx-auto px-6 md:px-12 mt-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="h-[1px] bg-gradient-to-r from-[#4D2DB7] to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        <span className="text-xs tracking-[0.2em] text-[#8888aa]">DRAG TO EXPLORE</span>
      </motion.div>
    </section>
  )
}
