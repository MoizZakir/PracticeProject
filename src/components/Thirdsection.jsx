import React from 'react'
import '../styles/section3.css'

const Thirdsection = () => {
  return (
    <div className='section3'>
        <div className='-sed3-head'>
            <div>
                <h2>WHY CHOOSE US </h2>
                <p>Best foods for you & family</p>
            </div>
            <div className='-sed3-head-img'>
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-best-01.png" alt="" />
            </div>

        </div>
        <div className='-sed3-body'>
            <div className='-sed3-body-img' style={{}}><img  src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/waffle.jpg" alt="" /></div>
            <div  style={{width:400,marginTop:"30px"}}>
                <p >At the Red Dot, we cook delicious meals that summon memories of home.
                     The inspiration for our menu comes from family suppers and our favourite comfort
                      foods. We combine these familiar foods with new flavours to create distinctive
                       and savoury plates. From soul satisfying soups to slow cooked aged meats, our food is traditional
                        – but our flavours are not!. Whether you’re looking for quiet fine dining or a fun, 
                    casual bar atmosphere, the Red Dot Café is well worth the drive. We have talented, innovative chefs and friendly personable service.</p>
                    <button className='sed3-body-btn'>DISCOVER MORE</button>
            </div>

        </div>
    </div>
  )
}

export default Thirdsection