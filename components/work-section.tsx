"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "LUMIÈRE",
    category: "Fashion Brand",
    year: "2024",
    description: "Luxury fashion e-commerce experience with immersive 3D product visualization",
    gradient: "from-[#0E21A0] to-[#4D2DB7]",
  },
  {
    id: 2,
    title: "NEXUS",
    category: "Tech Platform",
    year: "2024",
    description: "AI-powered creative studio platform for fashion designers",
    gradient: "from-[#4D2DB7] to-[#9D44C0]",
  },
  {
    id: 3,
    title: "AURORA",
    category: "Mobile App",
    year: "2023",
    description: "Augmented reality fashion try-on experience",
    gradient: "from-[#9D44C0] to-[#EC53B0]",
  },
  {
    id: 4,
    title: "VOGUE AI",
    category: "Editorial",
    year: "2023",
    description: "Digital magazine platform with adaptive layouts",
    gradient: "from-[#EC53B0] to-[#0E21A0]",
  },
]

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <motion.span
              className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Selected Work
            </motion.span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured
              <br />
              <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>
          
          <motion.p
            className="text-[#666680] max-w-sm mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated selection of projects that showcase the fusion of fashion aesthetics and technological innovation.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative glass rounded-2xl overflow-hidden p-8 md:p-12 cursor-pointer transition-all duration-500 hover:glow-purple">
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs tracking-[0.2em] text-[#8888aa] uppercase">{project.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#4D2DB7]" />
                      <span className="text-xs text-[#666680]">{project.year}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#666680] max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="w-14 h-14 rounded-full border border-[#1a1a3a] flex items-center justify-center group-hover:border-[#4D2DB7] group-hover:bg-[#4D2DB7]/20 transition-all duration-300"
                    animate={{
                      x: hoveredId === project.id ? 5 : 0,
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-[#8888aa] group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#4D2DB7] to-[#EC53B0]"
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredId === project.id ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
