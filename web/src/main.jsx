import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
document.addEventListener('touchstart', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
