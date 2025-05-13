import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { ScrollToTop } from './components/index.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop></ScrollToTop>
      <App />
    </Router>
    
  </StrictMode>,
)
