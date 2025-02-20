import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../app/auth/Login'
import Home from '../Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    

  )
}

export default AppRouter;