import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Try from './try.jsx'
// import Navigation from './Navigation.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/> */}
  <App/>
  </StrictMode>,
)




