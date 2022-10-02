import React from 'react'
import { NavLink } from 'react-router-dom'


const NavbarA = () => {
  return (
    <div style={{margin:"15px 0px"}}>
  

    <NavLink style={{color:"#2266e6",fontSize:"45px",textDecoration:"none",margin:"25px 700px 35px 0px"}} to="/">myfitnesspal</NavLink>
    <NavLink style={{color:"#2266e6",fontSize:"20px",textDecoration:"none",padding:"10px 15px"}} to='/login'>LOGIN</NavLink>
    <span style={{color:"grey"}}>|</span>
    <NavLink style={{color:"#2266e6",fontSize:"20px",textDecoration:"none",padding:"10px 15px"}} to="/signup">SIGNUP</NavLink>

    </div>
  )
}

export default NavbarA