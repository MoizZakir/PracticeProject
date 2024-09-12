import React, { useEffect } from 'react'
import '../styles/aboutsection3.css'
import CountUp from 'react-countup';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Aboutsection3 = () => {
  useEffect(()=>{
    Aos.init({duration:'1000',delay:"0" })

  },[])
  return (
    <div className='about-section3'>
      <div className="about-section3-item"  >
        <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/chef-counter.png" alt="" />
        <h2>Professional Chefs</h2>
        <h1 data-aos='fade-down'><CountUp  duration={3.0} end={309} /></h1>

      </div>
      <div className="about-section3-item"  data-aos='fade-down'>
        <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/fast-food.png" alt="" />
        <h2>Items of Foods</h2>
        <h1><CountUp duration={3.0} end={453} /></h1>

      </div>
      <div className="about-section3-item"  data-aos='fade-down'>
        <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/fork.png" alt="" />
        <h2>Years of Experinced</h2>
        <h1><CountUp duration={3.0} end={64} />+</h1>

      </div>
      <div className="about-section3-item"  data-aos='fade-down'>
        <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza-counter.png" alt="" />
        <h2>Satisfied Customers</h2>
        <h1><CountUp duration={3.0} end={309} /></h1>

      </div>
      



    </div>
  )
}

export default Aboutsection3