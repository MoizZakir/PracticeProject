import React from 'react'
import '../styles/section7.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Seventhsection = () => {
  return (
    <div className='section7'>
        <div className="section7-head">
            <h1>OUR CUSTOMER FEEDBACK</h1>
            <p>Best food for you & family</p>
        </div>
        <div className="section7-body">
        <div className="section7-body-reviews">
        <Carousel  useKeyboardArrows={true} showArrows={false} showStatus={false} infiniteLoop={true} width='100%' autoPlay={true} showThumbs={false} >
        <div className='section7-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.
                    </p>
                    <h3 className='section7-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
                <div className='section7-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.</p>
                          <h3  className='section7-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
                <div className='section7-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.
                    </p>
                    <h3 className='section7-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
                <div className='section7-body-slider'>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/quotation.png" />
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                         placeat cumque error aperiam repellat esse quo quam fugit iste facere reprehenderit
                          blanditiis illum repudiandae suscipit similique, commodi soluta voluptatem tempora.</p>
                          <h3  className='section7-body-slider-heading'>Lawrence L.Jones,Writter</h3>
                </div>
               
            </Carousel>
        </div>
        <div className="section7-body-img">
            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img_feedback_Home01-UKZWFK6.jpg" alt="" />
        </div>
            
        </div>
    </div>
  )
}

export default Seventhsection