import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Home.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
