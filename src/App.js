import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Sidebar from './components/Sidebar'
import Register from './pages/Register'
import PrivateRoute from './pages/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App