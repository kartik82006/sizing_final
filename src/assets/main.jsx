import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="bg-red-500 text-white p-4 rounded-sm text-center ">Tailwind Test: If this is red, Tailwind CDN works!</div>
    <Hero />
  </StrictMode>,
)
