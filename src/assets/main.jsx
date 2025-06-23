import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Quadcopter from './quadcopter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="bg-[#222831] text-white p-14 mb-5 px-5 invisible rounded-sm text-center "></div>
    <Hero />
    <Quadcopter/>
  </StrictMode>,
)
