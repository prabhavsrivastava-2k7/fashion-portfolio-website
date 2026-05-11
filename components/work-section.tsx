"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useCallback } from "react"

const projects = [
  {
    id: 1,
    title: "LUMIÈRE",
    category: "Fashion Brand",
    year: "2024",
    description: "Luxury fashion e-commerce experience with immersive 3D product visualization",
    gradient: "from-[#0E21A0] to-[#4D2DB7]",
    accent: "#4D2DB7",
  },
  {
    id: 2,
    title: "NEXUS",
    category: "Tech Platform",
    year: "2024",
    description: "AI-powered creative studio platform for fashion designers",
    gradient: "from-[#4D2DB7] to-[#9D44C0]",
    accent: "#9D44C0",
  },
  {
    id: 3,
    title: "AURORA",
    category: "Mobile App",
    year: "2023",
    description: "Augmented reality fashion try-on experience",
    gradient: "from-[#9D44C0] to-[#EC53B0]",
    accent: "#EC53B0",
  },
  {
    id: 4,
    title: "VOGUE AI",
    category: "Editorial",
    year: "2023",
    description: "Digital magazine platform with adaptive layouts",
    gradient: "from-[#EC53B0] to-[#0E21A0]",
    accent: "#EC53B0",
  },
]

function MagneticCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const tiltX = useSpring(rawX, { damping: 30, stiffness: 200 })
  const tiltY = useSpring(rawY, { damping: 30, stiffness: 200 })

  const arrowX = useMotionValue(0)
  const arrowY = useMotionValue(0)
  const arrowSpringX = useSpring(arrowX, { damping: 25, stiffness: 300 })
  const arrowSpringY = useSpring(arrowY, { damping: 25, stiffness: 300 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height

      rawX.set(dy * 6)
      rawY.set(-dx * 6)
      arrowX.set(dx * 10)
      arrowY.set(dy * 10)
    },
    [rawX, rawY, arrowX, arrowY]
  )

  const onMouseLeave = () => {
    setIsHovered(false)
    rawX.set(0)
    rawY.set(0)
    arrowX.set(0)
    arrowY.set(0)
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        className="relative glass rounded-2xl overflow-hidden cursor-pointer"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 30px 60px ${project.accent}25, 0 0 0 1px ${project.accent}30`
            : "0 0 0 1px rgba(255,255,255,0.04)",
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <motion.span
                className="text-xs tracking-[0.2em] text-[#8888aa] uppercase"
                animate={{ color: isHovered ? project.accent : "#8888aa" }}
                transition={{ duration: 0.4 }}
              >
                {project.category}
              </motion.span>
              <span className="w-1 h-1 rounded-full bg-[#4D2DB7]" />
              <span className="text-xs text-[#666680]">{project.year}</span>
            </div>

            <motion.h3
              className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4"
              animate={{
                backgroundImage: isHovered
                  ? `linear-gradient(135deg, ${project.accent}, #f0f0f5)`
                  : "none",
                WebkitBackgroundClip: isHovered ? "text" : "unset",
                WebkitTextFillColor: isHovered ? "transparent" : "#f0f0f5",
                backgroundClip: isHovered ? "text" : "unset",
              }}
              transition={{ duration: 0.4 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-[#666680] max-w-lg leading-relaxed">{project.description}</p>
          </div>

          <motion.div
            className="w-14 h-14 rounded-full border flex items-center justify-center flex-shrink-0"
            animate={{
              borderColor: isHovered ? project.accent : "#1a1a3a",
              backgroundColor: isHovered ? `${project.accent}20` : "transparent",
            }}
            transition={{ duration: 0.35 }}
          >
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ x: arrowSpringX, y: arrowSpringY }}
              animate={{ color: isHovered ? project.accent : "#8888aa" }}
              transition={{ duration: 0.35 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, #EC53B0)`,
          }}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  )
}

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
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
            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Featured
                <br />
                <span className="gradient-text">Projects</span>
              </motion.h2>
            </div>
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

        <div className="space-y-6">
          {projects.map((project, index) => (
            <MagneticCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
