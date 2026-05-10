"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { PhotographySection } from "@/components/photography-section"
import { GarmentSection } from "@/components/garment-section"
import { UIUXSection } from "@/components/uiux-section"
import { EntrepreneurSection } from "@/components/entrepreneur-section"
import { AthleticsSection } from "@/components/athletics-section"
import { ContactSection } from "@/components/contact-section"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FilmGrain } from "@/components/film-grain"
import { WebGLAtmosphere } from "@/components/webgl-atmosphere"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <FilmGrain />
      <WebGLAtmosphere />
      <PageTransition />
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <motion.main
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <PhotographySection />
        <GarmentSection />
        <UIUXSection />
        <EntrepreneurSection />
        <AthleticsSection />
        <ContactSection />
      </motion.main>
    </SmoothScrollProvider>
  )
}
