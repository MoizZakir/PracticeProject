import React from 'react'
import Navbar from './Navbar'
import '../styles/abouttop.css'

const AboutTop = ({name,route}) => {
  return (
    <>
    <div className='about-top-main'>
        <Navbar route={route}/>
        <img className='about-top-img' src='https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/bg-section-inner.jpg'/>
        <h2 className='about-top-heading' >{name}</h2>
        
    </div>
    <div className='about-top-direcion'>
        <span>Home</span> <span>--</span> <span>{name}</span>
    </div>
    </>
  )
}

export default AboutTop