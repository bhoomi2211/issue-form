import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const element = document.getElementById('issue-tracker')
const siteKey = element.getAttribute('data-site-key')

createRoot(document.getElementById('issue-tracker')).render(
  <StrictMode>
    <App site_key={siteKey} />
  </StrictMode>,
)
