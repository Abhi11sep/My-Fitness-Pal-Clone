import React from 'react'
import Cards from './Cards';
import Connect from './Connect';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Navbar from './Navbar';
import Recipe from './Recipe';
import { SliderData } from './SliderData';
import Stories from './Stories';

const HomePage = () => {
  return (
    <div>
     <Navbar/>
     <Dashboard/>
     <Cards/>
     <Stories slides={SliderData}/>
     <Recipe/>
     <Connect/>
     <Footer/>
    </div>
  )
}

export default HomePage