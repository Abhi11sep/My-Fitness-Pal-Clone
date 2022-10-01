import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
    
<div style={{backgroundColor:"#2266e6",display:"flex",paddingLeft:"150px"}}>
 <a href='https://www.myfitnesspal.com/welcome/learn_more' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>ABOUT</p></a>
 <a href='https://www.myfitnesspal.com/nutrition-facts-calories' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>FOOD</p> </a>
 <a href='https://www.myfitnesspal.com/exercise/lookup' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>EXERCISE</p></a>
 <a href='https://www.myfitnesspal.com/apps' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>APP</p></a>
 <a href='https://www.myfitnesspal.com/account/login?callbackUrl=https%3A%2F%2Fwww.myfitnesspal.com%2Fvanilla%2Flogin%3Ftarget%3Dhttps%253A%252F%252Fcommunity.myfitnesspal.com%252Fen%252Fentry%252Fjsconnect-redirect%253Fclient_id%253D1122755462%2526target%253D%25252Fcategories' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>COMMUNITY</p></a>
 <a href='https://blog.myfitnesspal.com/' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>BLOG</p></a>
 <a href='https://www.myfitnesspal.com/premium?source=menu_bar' style={{textDecoration:"none"}}><p style={{color:"white",margin:"15px 25px"}}>PREMIUM</p></a>
</div>
    </>
  )
}

export default Navbar