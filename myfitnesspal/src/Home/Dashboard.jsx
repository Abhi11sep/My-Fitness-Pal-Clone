import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Dashboard = () => {
  
    return (
        <div>
            <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-top-large%402x.dcc5ac56.png&w=1200&q=75' alt="photo" width="100%"/>
            <div style={{position:"absolute",left:"200px",top:"150px",width:"500px",textAlign:"left"}}>
            <h1 style={{fontSize:"65px",fontWeight:"500px"}}>Fitness starts with what you eat.</h1>
            <p style={{fontSize:"20px",width:"450px",marginTop:"-15px"}}>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</p>
            <button style={{color:"white",backgroundColor:"#2266e6",borderRadius:"5px",border:"0px",fontSize:"20px",padding:"15px 65px",marginTop:"15px"}}>START FOR FREE</button>
            <p style={{fontSize:"20px",width:"450px",marginTop:"15px"}}>Already have an account? <Link to="/login">Login</Link> </p>
            </div>
            <div style={{marginTop:"-10px"}}>
                <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-search-bottom-large%402x.34b86b17.png&w=1200&q=75' alt="pic" width="100%"/>
                <div style={{position:"absolute",left:"200px",top:"950px"}}>
                <h1 style={{width:"60%",margin:"auto",fontSize:"50px"}}>Search over 11 million foods in our database.</h1>
                <p style={{width:"500px",fontSize:"20px",marginLeft:"280px"}}>What's in your food? Learn about calorie count, nutrition information and serving size.</p>
                <form>
                <input style={{padding:"15px 550px 15px 25px",fontSize:"35px",borderRadius:"25px",border:"0px"}} type="text" placeholder='Get nutrition for any food'/>
             <FaSearch style={{position:"absolute",border:"0px",marginLeft:"-100px",borderRadius:"50px",padding:"20px",fontSize:"35px"}} />
                </form>
                
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard