import { useContext } from 'react'
import './App.css'
import { AppContext } from './contextApi/AppContext'
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Header from './components/Header';
import { darkTheme, lightTheme } from './utils/theme';
import Home from './pages/Home';
import Test from './pages/Test';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <ThemeProvider theme={state.theme === "dark" ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
