"use client"

import { useEffect, useRef } from "react"

export function WebGLAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
    })
    if (!gl) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight
    }
    window.addEventListener("mousemove", onMouse)

    const vertSrc = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `

    const fragSrc = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      vec3 palette(float t) {
        vec3 a = vec3(0.05, 0.08, 0.38);
        vec3 b = vec3(0.10, 0.06, 0.30);
        vec3 c = vec3(0.15, 0.10, 0.45);
        vec3 d = vec3(0.0, 0.05, 0.25);
        return a + b * cos(6.28318 * (c * t + d));
      }

      float sdBlob(vec2 p, float r) {
        float d = length(p) - r;
        d += 0.08 * sin(8.0 * atan(p.y, p.x) + u_time * 0.4);
        d += 0.04 * sin(13.0 * atan(p.y, p.x) - u_time * 0.6);
        return d;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 p = (uv - 0.5) * aspect;

        vec2 mouseOffset = (u_mouse - 0.5) * aspect * 0.12;

        float t = u_time * 0.12;
        vec3 col = vec3(0.0);

        vec2 b1 = p - vec2(0.4 + mouseOffset.x * 0.3, 0.25 + sin(t * 0.7) * 0.05);
        float d1 = sdBlob(b1, 0.32);
        col += palette(0.1) * smoothstep(0.35, -0.15, d1) * 0.55;

        vec2 b2 = p - vec2(-0.38 + mouseOffset.x * 0.2, -0.18 + cos(t * 0.5) * 0.06);
        float d2 = sdBlob(b2, 0.28);
        col += palette(0.55) * smoothstep(0.32, -0.12, d2) * 0.45;

        vec2 b3 = p - vec2(sin(t * 0.3) * 0.12 + mouseOffset.x * 0.1, cos(t * 0.4) * 0.08);
        float d3 = sdBlob(b3, 0.18);
        col += palette(0.82) * smoothstep(0.22, -0.08, d3) * 0.3;

        float vig = 1.0 - smoothstep(0.4, 1.2, length(p));
        col *= vig;

        gl_FragColor = vec4(col, dot(col, vec3(0.333)) * 0.85);
      }
    `

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posLoc = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const timeLoc = gl.getUniformLocation(prog, "u_time")
    const resLoc = gl.getUniformLocation(prog, "u_resolution")
    const mouseLoc = gl.getUniformLocation(prog, "u_mouse")

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    let start = Date.now()
    const render = () => {
      const t = (Date.now() - start) / 1000
      gl.uniform1f(timeLoc, t)
      gl.uniform2f(resLoc, canvas.width, canvas.height)
      gl.uniform2f(mouseLoc, mouseRef.current.x, mouseRef.current.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animRef.current = requestAnimationFrame(render)
    }
    animRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.8 }}
    />
  )
}
