import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContextProvider from './contextApi/AppContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to geoattend !!!</div>,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
