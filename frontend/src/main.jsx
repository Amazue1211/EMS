import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter"; // default weight
import "@fontsource/inter/600.css"; // semi-bold
import "@fontsource/inter/700.css"; // boldnpx tailwindcss init -p
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
