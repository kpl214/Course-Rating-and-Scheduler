import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RequiredAuthProvider } from "@propelauth/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RequiredAuthProvider authUrl={process.env.VITE_AUTH_URL}>
        <App />
    </RequiredAuthProvider>
  </React.StrictMode>,
)
