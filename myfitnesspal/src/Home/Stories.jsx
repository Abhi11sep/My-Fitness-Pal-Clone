import React from 'react'
import { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'


const Stories = ({slides}) => {
const [current,setCurrent]=useState(0);
const length=slides.length;

const nextSlide=()=>{
  setCurrent(current===length-1?0:current+1)
}

const prevSlide=()=>{
  setCurrent(current===0?length-1:current-1)
}

if(!Array.isArray(slides) || slides.length<=0){
  return null;
}

  return (
    <div>
        <h1 style={{fontSize:"60px",marginTop:"85px"}}>Victory Stories</h1>
    <p style={{width:"60%",margin:"auto",marginTop:"-20px"}}>When you reach your goals, our whole community celebrates with you. That’s over 200 million members sharing in your victory—using it to inspire their own journey.</p>
     
<section>
<FaArrowLeft style={{position:"absolute",top:"2450px",left:"250px",fontSize:"45px"}} onClick={prevSlide}/>
<FaArrowRight style={{position:"absolute",top:"2450px",right:"250px",fontSize:"45px"}} onClick={nextSlide}/>
  {SliderData.map((slide,index)=>{
    return  (
      <div className={index===current?'slide active':'slide'} key={index}>

      {/* { index===current && ( <img src={slide.image} alt='photomove'/>)} */}
      { index===current && ( <div style={{display:"flex",padding:"45px",margin:"45px auto",width:"50%",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
      <div>
      <img src={slide.image} alt='ok'/>
      </div>
     
      <div style={{padding:"0px 15px 15px 15px"}}>
      <h1 style={{fontSize:"35px"}}>{slide.heading}</h1>
      <p style={{fontSize:"22px"}}>{slide.para}</p>
      <p style={{fontSize:"20px",marginLeft:"250px"}}>{slide.name}</p> </div>
      </div>)}
      </div>
    )
  })}
</section>

    </div>
  )
}

export default Stories