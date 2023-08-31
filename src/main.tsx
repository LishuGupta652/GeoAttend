import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContextProvider from './contextApi/AppContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
