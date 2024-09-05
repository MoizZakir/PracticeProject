import React from 'react'
import Navbar from './Navbar'
import '../styles/abouttop.css'

const AboutTop = () => {
  return (
    <>
    <div className='about-top-main'>
        <Navbar/>
        <img className='about-top-img' src='https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/bg-section-inner.jpg'/>
        <h2 className='about-top-heading' >About us</h2>
        
    </div>
    <div className='about-top-direcion'>
        <span>Home</span> <span>--</span> <span>About Us</span>
    </div>
    </>
  )
}

export default AboutTop