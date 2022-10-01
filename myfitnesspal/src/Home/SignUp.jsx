import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react';

// const initState = {
//   email: "",
//   password: ""
// }

const SignUp = () => {

  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  });
  const [user, setUser] = useState([]);
  console.log(formdata);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]:e.target.value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, formdata]);
    localStorage.setItem("data",JSON.stringify(user));
    console.log("success")
    // alert("Signup success, Now login")
    // window.location.href="/Login"
  };




  return (
    <div>
      <div style={{width:"40%",padding:"15px",margin:"45px auto",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
      <form style={{padding:"15px 15px 45px 15px"}} onSubmit={handleSubmit}>
      <h2>Almost there! Create your account.</h2>
        <input style={{fontSize:"15px",margin:"10px 0px",borderRadius:"5px",padding:"15px 200px 15px 5px"}} type="text" placeholder="Email Address" name="email" value={formdata.email} onChange={handleChange}/>
       
        <br></br>
        <input  style={{fontSize:"15px",margin:"10px 0px",borderRadius:"5px",padding:"15px 200px 15px 5px"}}  type="password" placeholder="Create a Password" name='password' value={formdata.password} onChange={handleChange}/>
       
        
        <p style={{color:"grey",marginRight:"90px"}}>Must be at least 10 characters, no spaces.</p>
        <br></br>
        <p style={{color:"grey",fontSize:"14px",padding:"0px 85px"}}>By signing up for MyFitnessPal, you are agreeing to our Privacy Policy and Terms.By signing up for MyFitnessPal, you are agreeing to our <Link>Privacy Policy</Link> and <Link>Terms.</Link></p>
        <button style={{fontSize:"18px",backgroundColor:"#2266e6",color:"white",padding:"15px 150px",margin:"15px 15px 0px 15px",border:"none",borderRadius:"5px"}} onClick={handleSubmit}>CONTINUE</button>
        <p>Or</p>
        <button style={{fontSize:"18px",backgroundColor:"#4267B2",color:"white",padding:"15px 70px",margin:"0px 15px 15px 15px",border:"none",borderRadius:"5px"}}>CONTINUE WITH FACEBOOK</button>
      
<p style={{color:"grey",fontSize:"14px"}}>We will never post anything without your permission</p>     
<p style={{color:"grey",fontSize:"12px",padding:"0px 85px"}}>This site is protected by reCAPTCHA and the Google <Link>Privacy Policy</Link> and <Link>Terms.</Link> apply.</p> </form>
      </div>
    </div>
  )
}

export default SignUp