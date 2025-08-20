import React from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'

export default function Home() {
  return (
    <main>
      <section id="hero" className="relative min-h-[90vh] grid content-center px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight glow">Calamari Crystal</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70">Clean & mysterious deep‑sea vibes for the Final Hope era.</p>
          <div className="mt-8 flex justify-center">
            <a href="#depths"
               className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:shadow-glow"
            >Dive into the abyss ↓</a>
          </div>
        </div>
      </section>

      <section id="depths" className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glow">Choose your depth</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          <DepthCard title="Surface — Neon Tide" desc="Bright, airy UI with subtle glow accents. Perfect for landing and links." />
          <DepthCard title="Midnight Zone" desc="Richer gradients, more bloom, and motion. Ideal for storytelling sections." />
          <DepthCard title="Abyssal Trench" desc="Minimal UI, heavy contrast, dramatic reveals. Perfect for call‑to‑action moments." />
        </div>
      </section>

      <section id="listen" className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow">Listen</h2>
          <p className="text-white/70 mb-8">Embed your latest single or playlist here.</p>
        </ScrollReveal>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 aspect-video">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow">Contact</h2>
          <p className="text-white/70 mb-6">Drop your email and we’ll send updates from the trench.</p>
        </ScrollReveal>
        <form className="grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
          <input required type="email" placeholder="you@abyssal.sea"
                 className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30"/>
          <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:shadow-glow">Send</button>
        </form>
      </section>
    </main>
  )
}

function DepthCard({ title, desc }) {
  return (
    <ScrollReveal className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-glow transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </ScrollReveal>
  )
}