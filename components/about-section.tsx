"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0E21A0]/5 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large typography */}
          <div>
            <motion.span
              className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Philosophy
            </motion.span>
            
            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-[-0.02em]"
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[#f0f0f5]">Design is</span>
                <br />
                <span className="gradient-text">emotion</span>
                <br />
                <span className="text-[#f0f0f5]">in motion</span>
              </motion.h2>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-8">
            <motion.p
              className="text-xl md:text-2xl text-[#8888aa] leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I believe in creating digital experiences that transcend the ordinary—where every pixel tells a story and every interaction feels intentional.
            </motion.p>

            <motion.p
              className="text-lg text-[#666680] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              At the intersection of high fashion aesthetics and technological innovation, I craft immersive visual narratives that challenge conventions and inspire action.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {["UI/UX Design", "Fashion Tech", "Visual Direction", "Brand Strategy"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-[#1a1a3a] rounded-full text-[#8888aa] hover:border-[#4D2DB7] hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-12 border-t border-[#1a1a3a]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects" },
                { value: "∞", label: "Ideas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs tracking-wider text-[#666680] mt-1 uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
