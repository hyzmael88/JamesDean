import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AppLevelContextProvider } from './context/AppLevelContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppLevelContextProvider>

  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppLevelContextProvider>,
)
