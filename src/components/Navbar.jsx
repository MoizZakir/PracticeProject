import React, { useState } from 'react'
import '../styles/Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TbMenu2 } from "react-icons/tb";

const Navbar = ({route}) => {
  const [colorChange, setColorchange] = useState(false);
  const [visible,setVisible]=useState(false)
  const {innerWidth}=window
  console.log(innerWidth)

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
        <ul className='unlist'>
            <li onClick={()=>navigate('/')} style={{color:(route=="home")?'burlywood':''}} >HOME</li>
            <li onClick={()=>navigate('/about')}style={{color:(route=="about")?'burlywood':''}} >ABOUT</li>
            <li onClick={()=>navigate('/hours')} style={{color:(route=="hours")?'burlywood':''}} >HOURS</li>
            <li onClick={()=>navigate('/menu')} style={{color:(route=="menu")?'burlywood':''}} >MENU</li>
            <li  onClick={()=>navigate('/contact')} style={{color:(route=="contact")?'burlywood':''}} >CONTACT</li>
        </ul>
        
        </div>
        <div className='rightbtn'><FaPhoneAlt style={{marginRight:"9px"}} />+613-826-0552</div>
        <div className="menubtn">
          <button onClick={()=>setVisible(!visible)}><TbMenu2 /></button>

        </div>
        
        <ul className='menulist' style={{display:visible?'flex':'none'}}>
            <li onClick={()=>navigate('/')} style={{color:(route=="home")?'burlywood':'black'}} >HOME</li> <span onClick={()=>setVisible(!visible)}>X</span>
            
            <li onClick={()=>navigate('/about')}style={{color:(route=="about")?'burlywood':'black'}} >ABOUT</li>
            <li onClick={()=>navigate('/hours')} style={{color:(route=="hours")?'burlywood':'black'}} >HOURS</li>
            <li onClick={()=>navigate('/menu')} style={{color:(route=="menu")?'burlywood':'black'}} >MENU</li>
            <li  onClick={()=>navigate('/contact')} style={{color:(route=="contact")?'burlywood':'black'}} >CONTACT</li>
        </ul>
        

    </div>
  )
}

export default Navbar