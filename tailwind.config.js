/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: '#0a0f1f',
        trench: '#020617',
        glow: '#7ef9ff',
        coral: '#ff6ec7',
        kelp: '#1dd3b0',
      },
      boxShadow: {
        glow: '0 0 20px 2px rgba(126,249,255,0.35), 0 0 40px 8px rgba(255,110,199,0.15)'
      },
      backgroundImage: {
        'deep-gradient':
          'radial-gradient(1000px 600px at 10% -10%, rgba(20,40,120,0.35), transparent), radial-gradient(800px 500px at 90% 10%, rgba(0,180,160,0.25), transparent), linear-gradient(180deg, #020617 0%, #0a0f1f 60%, #000510 100%)'
      }
    }
  },
  plugins: [],
}