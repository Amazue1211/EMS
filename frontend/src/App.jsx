import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PropertyCard from './PropertyCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* --- YOUR NEW REAL ESTATE SECTION --- */}
      <div className="mb-20">
        <h1 className="text-3xl font-bold text-blue-600 underline mb-8 text-center">
          Hello Real Estate Project!
        </h1>
        <div className="flex justify-center">
          <PropertyCard />
        </div>
      </div>

      {/* --- ORIGINAL VITE STARTER CODE --- */}
      <section id="center">
        <div className="className='hero' flex justify-center gap-4 mb-8">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Get started</h1>
          <p className="text-gray-600 mt-2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <button 
            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </section>

      <div className="ticks my-10 border-t border-gray-200"></div>

      <section id="next-steps" className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div id="docs">
          <h2 className="text-xl font-bold mb-2">Documentation</h2>
          <p className="text-gray-500 mb-4">Your questions, answered</p>
          <ul className="space-y-2">
            <li><a href="https://vite.dev/" target="_blank" className="text-blue-500 hover:underline">Explore Vite</a></li>
            <li><a href="https://react.dev/" target="_blank" className="text-blue-500 hover:underline">Learn more</a></li>
          </ul>
        </div>

        <div id="social">
          <h2 className="text-xl font-bold mb-2">Connect with us</h2>
          <p className="text-gray-500 mb-4">Join the Vite community</p>
          <ul className="space-y-2">
            <li><a href="https://github.com/vitejs/vite" target="_blank" className="text-blue-500 hover:underline">GitHub</a></li>
            <li><a href="https://chat.vite.dev/" target="_blank" className="text-blue-500 hover:underline">Discord</a></li>
            <li><a href="https://x.com/vite_js" target="_blank" className="text-blue-500 hover:underline">X.com</a></li>
            <li><a href="https://bsky.app/profile/vite.dev" target="_blank" className="text-blue-500 hover:underline">Bluesky</a></li>
          </ul>
        </div>
      </section>

      <div className="ticks mt-10"></div>
      <section id="spacer" className="h-20"></section>
    </div>
  )
}

export default App