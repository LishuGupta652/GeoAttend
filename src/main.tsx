import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContextProvider from './contextApi/AppContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={true}
          gutter={8}
          toastOptions={{
            // Define default options
            className: '',
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              opacity: 0.9,

            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            }
          }}

        />
      </AppContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
)
