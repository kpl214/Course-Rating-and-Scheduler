import './index.css'
import App from './App.jsx'
import { RequiredAuthProvider } from "@propelauth/react";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RequiredAuthProvider authUrl={process.env.VITE_AUTH_URL}>
        <App />
    </RequiredAuthProvider>
  </React.StrictMode>,
)
