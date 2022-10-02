import React from 'react'

const Recipe = () => {
  return (
    <div>
    <div>
        <h1 style={{fontSize:"60px",marginTop:"85px"}}>Recipes & Inspiration</h1>
        <p style={{width:"40%",margin:"-20px auto"}}>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly",width:"65%",margin:" 80px auto"}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"280px",borderRadius:"15px"}}>
            <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75' alt='pic1' width="100%" style={{borderRadius:"15px 15px 0px 0px"}}/>
            <h3>15 Make-Ahead Breakfast Under 300 Calories</h3>
            <p style={{color:"#2266e6"}}> myfitnesspal Blog</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"280px",borderRadius:"15px"}}>
            <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75' alt='pic2' width="100%" borderRadius="15px" style={{borderRadius:"15px 15px 0px 0px"}}/>
            <h3>The Problem With Cheat days</h3>
            <p style={{marginTop:"45px",color:"#2266e6"}}>myfitnesspal Blog</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"280px",borderRadius:"15px"}}>
            <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75' alt='pic3' width="100%" borderRadius="15px" style={{borderRadius:"15px 15px 0px 0px"}}/>
            <h3>Essential Guide to Getting Moving</h3>
            <p style={{color:"#2266e6"}}>myfitnesspal Blog</p>
        </div>
    </div>
    </div>

  )
}

export default Recipe