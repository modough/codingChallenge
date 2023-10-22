import { BrowserRouter as Router, Routes, Route, useRouteError } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Landing from './pages/landing/Landing'
import ErrorPage from './pages/error/ErrorPage'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
  }
  return (
    <Router>
      <Header show={show} setShow={setShow} />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path='/home'
          element={<Home show={show} toggle={toggle} setToggle={setToggle} />}
        />
      </Routes>
      <Footer show={show} toggle={toggle} />
    </Router>
  )
}

export default App
