import { useContext } from 'react'
import './App.css'
import { AppContext } from './contextApi/AppContext'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/constants';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <ThemeProvider theme={state.theme === "dark" ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<div>Welcome to geoattend !!!</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
