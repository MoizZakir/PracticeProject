import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Slide from '../components/Slide'
import SecondSection from '../components/SecondSection'
import Thirdsection from '../components/Thirdsection'
import Fourthsection from '../components/Fourthsection'
import Fifthsection from '../components/Fifthsection'

const Home = () => {
  return (
    <div><ResponsiveAppBar/>
    <Slide/>
    <SecondSection/>
    <Thirdsection/>
    <Fourthsection/>
    <Fifthsection/>
    
    </div>
  )
}

export default Home