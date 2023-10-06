import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Sidebar from './components/Sidebar'
import PreviousTasks from './pages/PreviousTasks'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/prev' element={ <PreviousTasks />} />
        <Route path='/login' element={ <Login />} />
        <Route path='*' element={ <Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App