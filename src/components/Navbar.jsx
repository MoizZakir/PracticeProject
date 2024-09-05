import React, { useState } from 'react'
import '../styles/Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navigate=useNavigate()
    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className='nav-main' style={{ transition:'all',transitionDuration:"0.4s", backgroundColor:!colorChange?'transparent':'black'}}>
        <div className='logo'><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/Asset-1-3-2048x636.png" alt="" /></div>
        <div className='menue'>
        <ul>
            <li onClick={()=>navigate('/')} >HOME</li>
            <li onClick={()=>navigate('/about')}>ABOUT</li>
            <li disabled={true}  style={{}}>HOURS</li>
            <li style={{}} >MENU</li>
            <li style={{}}>CONTACT</li>
        </ul>
        
        </div>
        <div className='rightbtn'><FaPhoneAlt style={{marginRight:"9px"}} />+613-826-0552</div>

    </div>
  )
}

export default Navbar