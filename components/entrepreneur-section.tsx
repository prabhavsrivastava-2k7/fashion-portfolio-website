"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ventures = [
  {
    name: "FashionAI",
    description: "AI-powered styling platform revolutionizing personal fashion",
    status: "Series A",
    metric: "$2.5M",
    metricLabel: "Raised",
  },
  {
    name: "ThreadLab",
    description: "Sustainable fabric marketplace for emerging designers",
    status: "Seed",
    metric: "10K+",
    metricLabel: "Users",
  },
  {
    name: "LookBook",
    description: "AR try-on solution for luxury e-commerce",
    status: "Growth",
    metric: "50+",
    metricLabel: "Partners",
  },
]

export function EntrepreneurSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0E21A0]/5 to-transparent">
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
              Innovation
            </motion.span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold tracking-[-0.02em]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Entrepreneurship
              <br />
              <span className="gradient-text">& Ventures</span>
            </motion.h2>
          </div>
          
          <motion.div
            className="self-end"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-[#8888aa] leading-relaxed mb-6">
              Building the future of fashion-tech through innovative startups and strategic ventures.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-[#EC53B0]">
              <span className="w-2 h-2 rounded-full bg-[#EC53B0] animate-pulse" />
              Featured on Shark Tank
            </div>
          </motion.div>
        </div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
            >
              <div className="glass rounded-2xl p-8 h-full hover:glow-purple transition-all duration-500">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-xs tracking-wider bg-[#4D2DB7]/30 rounded-full text-[#EC53B0]">
                    {venture.status}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#1a1a3a] flex items-center justify-center group-hover:border-[#4D2DB7] transition-colors">
                    <svg className="w-4 h-4 text-[#8888aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {venture.name}
                </h3>
                <p className="text-[#666680] text-sm mb-8 leading-relaxed">
                  {venture.description}
                </p>

                {/* Metric */}
                <div className="pt-6 border-t border-[#1a1a3a]">
                  <div className="text-3xl font-bold gradient-text">{venture.metric}</div>
                  <div className="text-xs tracking-wider text-[#666680] uppercase mt-1">
                    {venture.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated chart/diagram */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold">Growth Trajectory</h3>
              <div className="flex gap-4">
                {["Revenue", "Users", "Markets"].map((label, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: i === 0 ? '#4D2DB7' : i === 1 ? '#9D44C0' : '#EC53B0'
                      }}
                    />
                    <span className="text-xs text-[#666680]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chart visualization */}
            <div className="h-48 flex items-end gap-4">
              {[40, 55, 45, 70, 60, 85, 75, 95, 88, 100].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#4D2DB7] to-[#EC53B0] rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
