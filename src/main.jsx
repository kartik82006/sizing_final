import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import Hero from './Hero.js'
import Navbar from './navbar.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>,
)
