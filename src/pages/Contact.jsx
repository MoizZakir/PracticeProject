import React from 'react'
import AboutTop from '../components/AboutTop'
import Contactsection1 from '../components/Contactsection1'
import Contactsection2 from '../components/Contactsection2'
import Multislides from '../components/Multislides'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <div>
      <AboutTop name='Contact' route='contact'/>
      <Contactsection1/>
      <Contactsection2/>
      <Multislides/>
      <Footer/>
    </div>
  )
}

export default Contact