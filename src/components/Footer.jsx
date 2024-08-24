import React from 'react'
import '../styles/footer.css'
import { FaTwitter,FaInstagram,FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-head"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/Asset-1-3-2048x636.png" alt="" /></div>
            <div className="footer-body">
                <div className="footer-body-item .footer-body-item1" style={{}}>
                    <h3>Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Hours</p>
                    <p>Menu</p>
                    <p>Contact</p>

                </div>
                <div className="footer-body-item footer-body-item2" style={{}}>
                    <h3>Menu</h3>
                    <p>Main Menu</p>
                    <p>Kids Menu</p>
                    <p>Breakfast Menu</p>
                    <p>Dessert Menu</p>
                    <p>Drink Menu</p>

                </div>
                <div className="footer-body-item footer-body-item3" style={{}}>
                    <h3>About Us</h3>
                    <p>At the Red Dot, we cook delicious meals that summon memories of home.
                        The inspiration for our menu comes from family suppers and our favourite comfort
                        foods. We combine these familiar foods with new flavours to create distinctive and savoury plates.
                        From soul satisfying soups to slow cooked aged meats, our food is traditional – but our flavours are not!</p>


                </div>
                <div className="footer-body-item footer-body-item4" style={{}}>
                    <h3>Contact</h3>
                    <div>
                        <p>5673 Main St. Osgoode,<br /> Ontario K0A 2W0 Canada​</p>
                        <p>info@reddotcafe.com</p>
                        <p>613-826-1692 - 613-826-0552</p>
                        <p>08 am - 06 pm</p></div>

                </div>

            </div>
            <div className="footer-bottom">
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: "-30px" }}>
                    <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/icon-spoon.png" alt="" /></div>
                <div>
                    <p>© 2024 Red Dot Cafe, All Rights Reserved</p>
                    <div style={{display:"flex",gap:"3px"}}>
                        <div className='icon'>
                        
                        <FaFacebookF />
                        </div>
                        <div className='icon'>
                        <FaInstagram />
                        
                        </div>
                        <div className='icon'>
                        <FaTwitter /> 
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer