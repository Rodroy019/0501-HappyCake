import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
