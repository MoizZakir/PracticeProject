import React, { useEffect } from 'react'
import '../styles/section6.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sixthsection = () => {
    useEffect(()=>{

        Aos.init({duration:'1000',delay:"0" })
    
      },[])
  return (
    <div className='section6'>
        <div className="section6-head" data-aos='fade-up'>
            <h1>BOOKING YOUR FAVOUROIT TABLE</h1>
            <p>Best food for you & family</p>
        </div>
        <div className="section6-body" >
            <div className="section6-body-img" data-aos='zoom-in'>
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-booking-01.jpg" alt="" />

            </div>
            <div className="section6-body-form">
                <h3>Booking Table In Online</h3>
                <p>Fillup the input option </p>
                <form action="
                ">
                    <select name="" id="">
                        <option value="">Person</option>
                        <option value="">01</option>
                        <option value="">02</option>
                        <option value="">03</option>
                    </select>
                    <input type="email" />
                    <input type="date" />
                    <input type="time" />
                    <textarea name="" id=""></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Sixthsection