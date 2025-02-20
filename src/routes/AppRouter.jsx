import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../app/auth/Login'
import Tes from '../app/Tes'
import Home from '../Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<Tes />} />
    </Routes>

  )
}

export default AppRouter;