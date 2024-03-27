import React from 'react'
import '../../styles/landingpage/herosection.css'
import { FaRegPlayCircle } from "react-icons/fa";
import herosectionImage from '../../assets/herosection2.png' 
const HeroSection = () => {
  return (
  <main className='hero-main'>

    <div className='hero-container'>
       

        <div className='hero-content'>
            <div className='content-text'>
            <h1>Make Your Home A Sanctuary</h1>
            <p>order beautiful premium quality live plants online for your home garden delivered to your door step</p>

            </div>
            <div className='content-goto'>
                <button>Get Started</button>
                <div>
                <FaRegPlayCircle />
                <span>Watch Video</span>
                </div>
            </div>
        </div>
        <div className='hero-image'>
        <img src={herosectionImage} />

            <div className='circle'></div>

        </div>
    </div>
  </main>
  )
}

export default HeroSection
