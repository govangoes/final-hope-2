import React, { useEffect, useRef } from 'react'

export default function CursorSquid() {
  const ref = useRef(null)
  const tx = useRef(window.innerWidth / 2)
  const ty = useRef(window.innerHeight / 2)
  const px = useRef(tx.current)
  const py = useRef(ty.current)

  useEffect(() => {
    // disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = ref.current
    const onMove = (e) => {
      tx.current = e.clientX
      ty.current = e.clientY
    }
    window.addEventListener('mousemove', onMove)
    let raf
    const loop = () => {
      px.current += (tx.current - px.current) * 0.2
      py.current += (ty.current - py.current) * 0.2
      const dx = tx.current - px.current
      const dy = ty.current - py.current
      const angle = Math.atan2(dy, dx) * 180 / Math.PI
      el.style.transform = `translate3d(${px.current}px, ${py.current}px, 0) rotate(${angle}deg)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[100]">
      <svg width="40" height="40" viewBox="0 0 64 64" className="drop-shadow-[0_0_8px_rgba(126,249,255,0.6)]">
        <defs>
          <radialGradient id="body" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#7ef9ff"/>
            <stop offset="60%" stopColor="#4fd1c5"/>
            <stop offset="100%" stopColor="#0ea5a5"/>
          </radialGradient>
        </defs>
        <ellipse cx="28" cy="26" rx="14" ry="18" fill="url(#body)" opacity="0.9"/>
        <circle cx="23" cy="22" r="3" fill="#000" opacity="0.7"/>
        <circle cx="33" cy="22" r="3" fill="#000" opacity="0.7"/>
        <path d="M20 40 C18 52, 14 58, 16 60 M26 42 C24 54, 22 60, 24 62 M32 42 C30 54, 28 60, 30 62 M38 40 C36 52, 34 58, 36 60"
              stroke="#7ef9ff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8">
          <animate attributeName="d" dur="2s" repeatCount="indefinite"
            values="M20 40 C18 52, 14 58, 16 60; M20 40 C20 52, 16 58, 18 59; M20 40 C18 52, 14 58, 16 60;
                    M26 42 C24 54, 22 60, 24 62; M26 42 C26 54, 24 60, 26 61; M26 42 C24 54, 22 60, 24 62;
                    M32 42 C30 54, 28 60, 30 62; M32 42 C32 54, 30 60, 32 61; M32 42 C30 54, 28 60, 30 62;
                    M38 40 C36 52, 34 58, 36 60; M38 40 C38 52, 36 58, 38 59; M38 40 C36 52, 34 58, 36 60"/>
        </path>
      </svg>
    </div>
  )
}