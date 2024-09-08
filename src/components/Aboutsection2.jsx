import React from 'react'
import '../styles/aboutsection2.css'
import { FaCheck, FaRegHeart } from 'react-icons/fa'
const Aboutsection2 = () => {
  return (
    <div className='about-section2' >
        <div className="about-section2-head">
            <h1>WHY CHOOSE US</h1>
                <p>Best food for you & family</p>
        </div>
        <div className="about-section2-body">
          <div className="about-section2-body-left">
            <h1>29 Years Of Experience In Restaurant Services</h1>
            <p>At the Red Dot, we cook delicious meals that summon memories of home.
               The inspiration for our menu comes from family suppers and our favourite comfort foods.
                We combine these familiar foods with new flavours to create distinctive and savoury plates.
               From soul satisfying soups to slow cooked aged meats, our food is traditional – but our flavours are not!.
                Whether you’re looking for quiet fine dining or a fun, casual bar atmosphere, the Red Dot Café is well worth the drive.
                 We have talented, innovative chefs and friendly personable service.</p>
                 <button >DISCOVER MORE ></button>
          </div>
          <div className="about-section2-body-right">
            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/taco-2.jpeg" alt="" />
            <div>
              <h4>Red Dot Cafe is a hidden gem The Food is top-notch, and the atmosphere is so inviting. It’s the perfect spot to catch up</h4>
              <p style={{margin:'15px 0px'}}> <FaCheck style={{margin:'0px 10px'}} /> Fresh Products</p>
              <p style={{margin:'15px 0px'}}> <FaCheck style={{margin:'0px 10px'}} /> Professionals & Skilled Chefs</p>
              <p style={{margin:'15px 0px'}}> <FaCheck style={{margin:'0px 10px'}} /> Best Offer & Low Cost Bar</p>
              <p style={{margin:'15px 0px'}}> <FaCheck style={{margin:'0px 10px'}} /> Vegan Cuisine</p>
              <p style={{margin:'15px 0px'}}> <FaCheck style={{margin:'0px 10px'}} /> Online Delivery Shop</p>
            <div className='about-section2-body-right-satisfy-customer'>
            <FaRegHeart style={{fontSize:'40px', color:'burlywood'}} />
            <div>
              <h2>3025+</h2>
              <p>Satisfied Customer</p></div>
            </div>

            </div>
            </div>
          

        </div>
        </div>
  )
}

export default Aboutsection2