import React from 'react'
import HeroSection from './components/hero'
import PopularCars from './components/popular'
import Cars from './components/third'


function Home() {
  return (
    <div>
    <HeroSection/>
    <PopularCars/>
    <Cars/>
    
    </div>
  )
}

export default Home