import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom';


import { ThemeProvider } from '/src/components/ThemeContext';  // Import the ThemeProvider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <ThemeProvider>
          <Router>
              <App />
          </Router>
      </ThemeProvider>

  </React.StrictMode>,
)
