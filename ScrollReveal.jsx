import React, { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className='' }) {
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    el.classList.add('reveal')
    const io = new IntersectionObserver(entries=>{
      for (const e of entries) {
        if (e.isIntersecting) {
          el.classList.add('visible')
          io.unobserve(el)
        }
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return ()=> io.disconnect()
  },[])
  return <div ref={ref} className={className}>{children}</div>
}