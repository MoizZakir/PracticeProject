import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Slide from '../components/Slide'
import SecondSection from '../components/SecondSection'
import Thirdsection from '../components/Thirdsection'
import Fourthsection from '../components/Fourthsection'
import Fifthsection from '../components/Fifthsection'
import Sixthsection from '../components/Sixthsection'
import Seventhsection from '../components/Seventhsection'
import Eighthsection from '../components/Eighthsection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Slide/>
    
    <SecondSection/>
    <Thirdsection/>
    <Fourthsection/>
    <Fifthsection/>
    <Sixthsection/>
    <Seventhsection/>
    <Eighthsection/>
    <Footer/>
    
    </div>
  )
}

export default Home