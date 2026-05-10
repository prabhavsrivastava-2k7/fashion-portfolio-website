"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 60, stiffness: 80 })
  const springY = useSpring(mouseY, { damping: 60, stiffness: 80 })

  const blob1X = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const blob1Y = useTransform(springY, [-0.5, 0.5], [-20, 20])
  const blob2X = useTransform(springX, [-0.5, 0.5], [20, -20])
  const blob2Y = useTransform(springY, [-0.5, 0.5], [15, -15])
  const titleX = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const titleY = useTransform(springY, [-0.5, 0.5], [-5, 5])
  const cardsX = useTransform(springX, [-0.5, 0.5], [12, -12])
  const cardsY = useTransform(springY, [-0.5, 0.5], [8, -8])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener("mousemove", onMouse)
    return () => window.removeEventListener("mousemove", onMouse)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return

    gsap.to(bgRef.current, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    if (headlineRef.current) {
      gsap.to(headlineRef.current, {
        yPercent: -12,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1.2,
        },
      })
    }
  }, [])

  const letterVariants = {
    hidden: { y: 120, opacity: 0, filter: "blur(12px)" },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: 0.5 + i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const lineVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 1.1 + i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Parallax background blobs */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0E21A0 0%, transparent 70%)",
            x: blob1X,
            y: blob1Y,
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, #9D44C0 0%, transparent 70%)",
            x: blob2X,
            y: blob2Y,
            opacity: 0.12,
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Horizontal light sweep lines */}
        {[0.3, 0.5, 0.72].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px]"
            style={{ top: `${pos * 100}%` }}
            initial={{ scaleX: 0, opacity: 0, transformOrigin: "left center" }}
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.18, 0] }}
            transition={{
              duration: 5,
              delay: 2.5 + i * 1.2,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(77,45,183,0.5) 30%, rgba(236,83,176,0.3) 70%, transparent 100%)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – staggered letter reveal */}
          <motion.div
            ref={headlineRef}
            className="space-y-4"
            style={{ x: titleX, y: titleY }}
          >
            <div className="overflow-hidden pb-2">
              <div className="flex flex-wrap">
                {"PRABHAV".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="gradient-text text-glow inline-block font-bold"
                    style={{
                      fontSize: "clamp(4rem, 10vw, 9rem)",
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                    }}
                    variants={letterVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] text-[#8888aa]"
                variants={lineVariants}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                FASHION × TECHNOLOGY
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] text-[#f0f0f5]"
                variants={lineVariants}
                custom={1}
                initial="hidden"
                animate="visible"
              >
                VISUAL STORYTELLING
              </motion.p>
            </div>

            <motion.p
              className="text-[#8888aa] max-w-md mt-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.7 }}
            >
              Crafting immersive digital experiences at the intersection of luxury fashion and cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.9 }}
            >
              <a
                href="#work"
                className="group relative px-6 py-3 rounded-full text-sm font-medium overflow-hidden"
                style={{ background: "linear-gradient(135deg, #4D2DB7, #9D44C0)" }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #9D44C0, #EC53B0)" }}
                />
                <span className="relative">View Work</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#1a1a3a] rounded-full text-sm font-medium hover:border-[#4D2DB7] hover:bg-[#4D2DB7]/10 transition-all duration-400"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right – floating UI compositions with parallax depth */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            style={{ x: cardsX, y: cardsY }}
          >
            <motion.div
              className="absolute top-10 right-10 w-48 h-64 glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 60, rotateY: -15, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateY: -15, rotateX: 5 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.04, z: 20, transition: { duration: 0.3 } }}
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
              initial={{ opacity: 0, x: -60, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 10 }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
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
              initial={{ opacity: 0, y: 60, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: -10 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
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

            {/* Ambient floating orbs */}
            {[
              { top: "20%", left: "20%", size: 6, color: "#EC53B0", delay: 0 },
              { top: "65%", left: "30%", size: 4, color: "#4D2DB7", delay: 0.6 },
              { top: "40%", right: "15%", size: 5, color: "#9D44C0", delay: 1.1 },
            ].map((orb, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: orb.size,
                  height: orb.size,
                  top: (orb as any).top,
                  left: (orb as any).left,
                  right: (orb as any).right,
                  background: orb.color,
                  boxShadow: `0 0 ${orb.size * 4}px ${orb.color}80`,
                }}
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.4, 1.0, 0.4],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 4 + i * 1.2,
                  repeat: Infinity,
                  delay: orb.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs tracking-[0.3em] text-[#8888aa]">SCROLL</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#4D2DB7] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
