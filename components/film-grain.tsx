"use client"

import { useEffect, useRef } from "react"

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const render = () => {
      frameRef.current++
      if (frameRef.current % 3 !== 0) {
        animRef.current = requestAnimationFrame(render)
        return
      }

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 18 - 9
        data[i] = 128 + noise
        data[i + 1] = 128 + noise
        data[i + 2] = 128 + noise
        data[i + 3] = Math.random() * 12 + 3
      }
      ctx.putImageData(imageData, 0, 0)

      animRef.current = requestAnimationFrame(render)
    }

    animRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[200]"
      style={{ opacity: 0.35, mixBlendMode: "overlay" }}
    />
  )
}
