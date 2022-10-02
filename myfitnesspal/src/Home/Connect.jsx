import React from 'react'

const Connect = () => {
  return (
    <div>
        <h1 style={{fontSize:"60px",width:"35%",margin:"auto"}}>Connect with over 50 apps.</h1>
        <p style={{width:"40%",margin:"15px auto 50px auto",fontSize:"18px"}}>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</p>
        <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75' alt='photo' width="40%"></img>
     
       <div style={{margin:"70px auto"}}>
       <a href='https://apps.apple.com/us/app/myfitnesspal/id341232718'><img src="https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg" alt='applestore'
        style={{margin:"0px 15px"}}></img></a> 

        <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android"><img src='https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg' alt='playstore'></img> </a>

        </div>
    </div>
  )
}

export default Connect