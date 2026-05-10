"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" })
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const items = statsRef.current.querySelectorAll(".stat-value")
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      )
    })
  }, [])

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0E21A0]/5 to-transparent pointer-events-none" />

      {/* Cinematic horizontal rule that draws on scroll */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4D2DB7]/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
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
                initial={{ y: 120 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[#f0f0f5]">Design is</span>
                <br />
                <span className="gradient-text">emotion</span>
                <br />
                <span className="text-[#f0f0f5]">in motion</span>
              </motion.h2>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <motion.p
              className="text-xl md:text-2xl text-[#8888aa] leading-relaxed font-light"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              I believe in creating digital experiences that transcend the ordinary—where every pixel tells a story and every interaction feels intentional.
            </motion.p>

            <motion.p
              className="text-lg text-[#666680] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              At the intersection of high fashion aesthetics and technological innovation, I craft immersive visual narratives that challenge conventions and inspire action.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {["UI/UX Design", "Fashion Tech", "Visual Direction", "Brand Strategy"].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 text-sm border border-[#1a1a3a] rounded-full text-[#8888aa] transition-all duration-300"
                  whileHover={{
                    borderColor: "#4D2DB7",
                    color: "#f0f0f5",
                    boxShadow: "0 0 20px rgba(77,45,183,0.25)",
                    y: -2,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-[#1a1a3a]"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects" },
                { value: "∞", label: "Ideas" },
              ].map((stat) => (
                <div key={stat.label} className="stat-value">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs tracking-wider text-[#666680] mt-1 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
