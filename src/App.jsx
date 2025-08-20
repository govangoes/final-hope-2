import { useEffect, useState } from 'react'
import { Moon, Sun, Gem } from 'lucide-react'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import CursorSquid from './components/CursorSquid.jsx'
import { Link, Routes, Route } from 'react-router-dom'

export default function App(){
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const html = document.documentElement
    dark ? html.classList.add('dark') : html.classList.remove('dark')
  }, [dark])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-deepSeaBlue to-abyssNavy">
      <CursorSquid />
      <header className="sticky top-0 z-30 backdrop-blur-md bg-richBlack/40 border-b border-crystalMagenta/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Gem className="w-6 h-6 text-crystalCyan" />
            <span className="font-black text-xl text-paperWhite">GoVanGoes</span>
          </Link>
          <button aria-label="Toggle dark mode"
            onClick={() => setDark(d => !d)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-opalGlow/30 text-opalGlow hover:bg-opalGlow/10 transition">
            {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4" />}
            <span className="text-sm">Coral Glow</span>
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
