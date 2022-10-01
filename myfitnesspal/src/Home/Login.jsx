import {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'


const Login = () => {
  
  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  });
  console.log(formdata);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]:e.target.value });
  };

  let userdata=JSON.parse(localStorage.getItem("data")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if(formdata.email===userdata[0].email && formdata.password===userdata[0].password){
      alert("login Success");
      window.location.href="/"
 }
 else {
   alert("wrong cerentials");
 }

   
    
  };
  return (
    <div>
      <Navbar/>
      <div style={{width:"30%",padding:"15px",margin:"45px auto",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
      <form style={{padding:"15px 15px 45px 15px"}}>
      <h1>Member Login</h1>
      <input style={{fontSize:"15px",margin:"10px 0px",borderRadius:"5px",padding:"15px 200px 15px 5px"}} type="text" placeholder="Email Address" name="email" value={formdata.email} onChange={handleChange}/>
       
       <br></br>
       <input  style={{fontSize:"15px",margin:"10px 0px",borderRadius:"5px",padding:"15px 200px 15px 5px"}}  type="password" placeholder="Create a Password" name='password' value={formdata.password} onChange={handleChange}/>
        <br></br>
        <Link>Forgot password ?</Link>
        <br></br>
        <button style={{fontSize:"18px",backgroundColor:"#2266e6",color:"white",padding:"15px 170px",margin:"15px 15px 0px 15px",border:"none",borderRadius:"5px"}} onClick={handleSubmit}>LOGIN</button>
        <p>Or</p>
        <button style={{fontSize:"18px",backgroundColor:"#4267B2",color:"white",padding:"15px 70px",margin:"0px 15px 15px 15px",border:"none",borderRadius:"5px"}}>CONTINUE WITH FACEBOOK</button>
      </form>
      </div>
      <p style={{marginBottom:"45px"}}>Not a member yet? <Link to='/signup' title='Sign up now!'>Sign up now!</Link> </p>
      <Footer/>
    </div>
  )
}

export default Login