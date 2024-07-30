import React, { useEffect } from 'react'
import '../styles/slide.css'
import Aos
 from 'aos'
import 'aos/dist/aos.css'
const Slide = () => {
  useEffect(()=>{
    Aos.init({duration:'1000',delay:"0" })

  },[])
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval='2000' data-pause={false}>
  <div className="carousel-inner">
    <div data-aos='fade-up'><p >FINE COUNTRY DINING IN <br/>THE HEART OF THE VILLAGE <br/> OF OSGOODE!</p>
    
    <div  data-aos-once={true} className='bottombtn' style={{position:'absolute'}}>
      EXPLORE OUR MENUE >
    </div>
    </div>
    {/* <p data-aos='fade-up'>FINE COUNTRY DINING IN <br/>THE HEART OF THE VILLAGE <br/> OF OSGOODE!</p> */}
  <img style={{position:'absolute',right:'5%',top:'60%'}} src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-best.png" alt="" />
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-banner-02.jpg" alt="First slide"/>
      
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/hero_2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/hero_3.jpeg" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/hero_3.jpeg" alt="Third slide"/>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Slide