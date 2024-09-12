import React from 'react'
import Navbar from '../components/Navbar'
import AboutTop from '../components/AboutTop'
import Aboutsection2 from '../components/Aboutsection2'
import Aboutsection3 from '../components/Aboutsection3'
import Aboutsection4 from '../components/Aboutsection4'
import Multislides from '../components/Multislides'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <AboutTop name='About'/>
      <Aboutsection2/>
      <Aboutsection3/>
      <Aboutsection4/>
      <Multislides/>
      <Footer/>
    </div>
  )
}

export default About