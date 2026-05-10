"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Photography", href: "#photography" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">PRABHAV</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-sm tracking-wide text-[#8888aa] hover:text-white transition-colors duration-300"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {hoveredItem === item.name && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-[#4D2DB7] to-[#EC53B0]"
                    layoutId="navUnderline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-5 h-[1.5px] bg-white block"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-[1.5px] bg-white block"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-[1.5px] bg-white block"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#050510]/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-semibold tracking-tight text-white hover:text-[#EC53B0] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
