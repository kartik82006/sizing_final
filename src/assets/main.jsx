import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>,
)
