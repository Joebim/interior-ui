import React from 'react'
import ReactDOM from 'react-dom/client'
import FontLoad from './global-components/FontLoad.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
