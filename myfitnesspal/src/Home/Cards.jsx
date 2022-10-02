import React from 'react'

const Cards = () => {
  return (
    <div>
        <h1 style={{fontSize:"60px"}}>The Tools for Your Goals</h1>
        <p style={{width:"35%",margin:"-20px auto"}}>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to hit your goals.</p>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"80px auto 35px auto",width:"60%"}}>
        <div style={{width:"250px"}}> 
        <img src='https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg' alt='photo1'/>
        <h3>Learn. Track. Improve.</h3>
        <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
        </div>
            <div style={{width:"250px"}}>
                <img src='https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg' alt='photo2'/>
                <h3>Logging Simplified</h3>
                <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
            </div>
            
            <div style={{width:"250px"}}>
                <img src='https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg' alt='photo3'/>
                <h3>Stay Motivated</h3>
                <p>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
            </div>

        </div>

        <button style={{color:"white",backgroundColor:"#2266e6",borderRadius:"5px",border:"0px",fontSize:"20px",padding:"15px 65px",marginTop:"15px"}}>START YOUR JOURNEY TODAY</button>
    </div>
  )
}

export default Cards