import React, { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import CursorSquid from './components/CursorSquid.jsx'

export default function App() {
  const [bioOn, setBioOn] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('squid-cursor', bioOn)
  }, [bioOn])

  return (
    <div className="min-h-screen bg-deep">
      <Header bioOn={bioOn} setBioOn={setBioOn} />
      {bioOn && <CursorSquid />}
      <Home />
      <Footer />
    </div>
  )
}

function Header({ bioOn, setBioOn }) {
  const [open, setOpen] = useState(false)
  const linkCls = "px-3 py-2 rounded-xl hover:shadow-glow hover:text-glow transition"
  const go = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <button onClick={go('hero')} className="font-semibold tracking-wider glow">FINAL HOPE</button>
        <nav className="hidden md:flex items-center gap-2">
          <button className={linkCls} onClick={go('depths')}>Depths</button>
          <button className={linkCls} onClick={go('listen')}>Listen</button>
          <button className={linkCls} onClick={go('contact')}>Contact</button>
          <button className="ml-2 px-3 py-1 rounded-full border border-white/10 hover:border-white/30 text-xs"
            onClick={() => setBioOn(v => !v)}>{bioOn ? 'Bioluminescence: ON' : 'Bioluminescence: OFF'}</button>
        </nav>
        <button className="md:hidden px-3 py-2" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-black/60">
          <button className="block w-full text-left" onClick={go('depths')}>Depths</button>
          <button className="block w-full text-left" onClick={go('listen')}>Listen</button>
          <button className="block w-full text-left" onClick={go('contact')}>Contact</button>
          <button className="block w-full text-left opacity-75" onClick={() => setBioOn(v => !v)}>{bioOn ? 'Bioluminescence: ON' : 'Bioluminescence: OFF'}</button>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 mb-8 text-center text-white/60">
      <p className="text-xs">© {new Date().getFullYear()} Final Hope • Crafted with abyssal vibes</p>
    </footer>
  )
}