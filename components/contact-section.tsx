"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const socials = [
  { name: "Instagram", handle: "@prabhav" },
  { name: "LinkedIn", handle: "/in/prabhav" },
  { name: "Twitter", handle: "@prabhav" },
  { name: "Dribbble", handle: "/prabhav" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0E21A0]/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="text-sm tracking-[0.3em] text-[#8888aa] uppercase block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {"Let's Connect"}
          </motion.span>

          <div className="overflow-hidden mb-12">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.03em] leading-[0.9]"
              initial={{ y: 150 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="gradient-text">Start a</span>
              <br />
              <span className="text-[#f0f0f5]">Conversation</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-[#8888aa] leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have a project in mind? Looking to collaborate or just want to say hello?
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="mailto:hello@prabhav.studio"
              className="group inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-[#4D2DB7] to-[#9D44C0] rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300 hover:gap-6"
            >
              <span>hello@prabhav.studio</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-sm text-[#666680] mb-1">{social.name}</div>
                <div className="text-[#8888aa] group-hover:text-[#EC53B0] transition-colors">
                  {social.handle}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-8 border-t border-[#1a1a3a] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="text-sm text-[#666680]">
            © 2024 PRABHAV. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-[#666680]">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[#EC53B0]"
            >
              ♥
            </motion.span>
            <span>in pursuit of excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
