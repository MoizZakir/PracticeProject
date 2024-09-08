import React, { useEffect } from 'react'
import '../styles/section4.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Fourthsection = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:"0" })
    
      },[])
  return (
    <div className='section4'>
        <div className="section4-head"  data-aos='fade-up'>
            
            <h1 >TRY OUR SPECIAL OFFERS</h1>
            <p>Best food for you & your family</p>
        
        </div>
        <div className="section4-body">
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div   data-aos='fade-up' className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <div  data-aos='fade-up'  className='section4-body-item'>
                <div>
                    <h3>BRUSCHETTA</h3>
                    <p>Good Food, Good Beer, Good Times</p>
                </div>
                <h1 className='section4-body-item-price'>$12.9</h1>

            </div>
            <button className='section4-body-btn'>VIEW FULL MENUE ></button>
        </div>
    </div>
  )
}

export default Fourthsection