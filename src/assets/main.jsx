import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Quadcopter from './quadcopter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="bg-[#1995AD] text-white p-14 rounded-sm text-center "></div>
    <Hero />
    <Quadcopter/>
  </StrictMode>,
)
