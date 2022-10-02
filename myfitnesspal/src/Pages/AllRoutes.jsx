import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import Login from '../Home/Login'
import SignUp from '../Home/SignUp'


const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>

  )
}

export default AllRoutes