import { useContext } from 'react'
import './App.css'
import { AppContext } from './contextApi/AppContext'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/constants';
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


function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <ThemeProvider theme={state.theme === "dark" ? lightTheme : darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
