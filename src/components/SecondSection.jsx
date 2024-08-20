import React, { useEffect } from 'react'
import '../styles/section2.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SecondSection = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:"0" })
    
      },[])
  return (
    <div>
    <div className='contain'>
        <div className='heads'>
            <div>
                <h1>CHOOSE YOUR BEST CATEGORY</h1>
                <p>Best food for & your family</p>
            </div>
            <div className='image'>
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-choose.png" alt="" />
            </div>

        </div>
        <div className='category' >
            <div className="single">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza.png" alt="" />
                <h4>Breakfast</h4>
                <a href="">Veiw ></a>
            </div>
            <div className="single">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza.png" alt="" />
                <h4>Breakfast</h4>
                <a href="">Veiw ></a>
            </div>
            <div className="single">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza.png" alt="" />
                <h4>Breakfast</h4>
                <a href="">Veiw ></a>
            </div>
            <div className="single">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza.png" alt="" />
                <h4>Breakfast</h4>
                <a href="">Veiw ></a>
            </div>
            <div className="single">
                <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/pizza.png" alt="" />
                <h4>Breakfast</h4>
                <a href="">Veiw ></a>
            </div>

        </div>
        <div className='btmimg'>
            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-choose-01.png" alt="" />
        </div>

    </div>
    <div className='bottomsImages'>
        <div data-aos='fade-up'>
            <img style={{width:"350px"}} src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-egg-02.png" alt="" />
        </div>
        <div style={{borderRadius:'50%',  border:"20px solid white", marginTop:"-150px"}} data-aos='zoom-in'>
            <img  style={{width:"600px"}} src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-egg-03.png" alt="" />
        </div>
        <div data-aos='fade-up'>
            <img style={{width:"350px"}} src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/crispy-fried-meat-vegetables-removebg-preview.png" alt="" />
        </div>

    </div>
    </div>
  )
}

export default SecondSection