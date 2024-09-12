import React from 'react'
import '../styles/aboutsection4.css'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Aboutsection4 = () => {
  return (
    <div className='about-section4'>
        <div className="about-section4-head">
            <h1>OUR CUSTOMER FEEDBACK</h1>
            <p>Best food for you & family</p>
        </div>
        <div className="about-section4-body">
        <div className="about-section4-body-reviews">
        <Carousel className='abc'   useKeyboardArrows={true} showArrows={false} showStatus={false} infiniteLoop={true} width='100%' autoPlay={true} showThumbs={false} >
       <div style={{display:'flex',flexWrap:'wrap'}}>
         <div className='about-section4-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.
                    </p>
                    <h3 className='about-section4-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
                <div className='about-section4-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.</p>
                          <h3  className='about-section4-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div></div>
         <div style={{display:'flex',flexWrap:'wrap'}}>     
              <div className='about-section4-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.
                    </p>
                    <h3 className='about-section4-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
                <div className='about-section4-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.</p>
                          <h3  className='about-section4-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div></div>
               
            </Carousel>
        </div>
        
            
        </div>
    </div>
  )
}

export default Aboutsection4