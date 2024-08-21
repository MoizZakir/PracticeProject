import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Slide from '../components/Slide'
import SecondSection from '../components/SecondSection'
import Thirdsection from '../components/Thirdsection'

const Home = () => {
  return (
    <div><ResponsiveAppBar/>
    <Slide/>
    <SecondSection/>
    <Thirdsection/>
    
    </div>
  )
}

export default Home