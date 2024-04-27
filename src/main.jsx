import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SourceProvider } from './context/SourceContext.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <SourceProvider>
      <App />
    </SourceProvider>
  </React.StrictMode>
)
