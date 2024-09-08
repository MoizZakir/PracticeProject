import React, { useEffect } from 'react'
import '../styles/section5.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Fifthsection = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:"0" })
    
      },[])
  return (
    <div className='section5'>
        <div className="section5-head" data-aos='fade-up'>
            <h1>RESTAURANTS PHOTO GALLERY </h1>
            <p>Bset food for you & your family</p>
        </div>
        <div className="section5-body">
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/waffle-300x300.jpg" alt="" />
            </div>
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/hero_2.jpg" alt="" />
            </div>
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/top-view-beef-steaks-served-with-grilled-tomato-pepper-300x240.jpg" alt="" />
            </div>
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/choose-cate-04-237x300.jpg" alt="" />
            </div>
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/choose-cate-06-237x300.jpg" alt="" />
            </div>
            <div data-aos="flip-left" className="section5-body-img">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-noodle-300x186.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Fifthsection