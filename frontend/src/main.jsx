import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RequiredAuthProvider } from "@propelauth/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RequiredAuthProvider authUrl={process.env.VITE_AUTH_URL}>
      <App />
    </RequiredAuthProvider>
  </StrictMode>,
)
