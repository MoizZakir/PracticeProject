import React from 'react'
import '../styles/contactsection1.css'

const Contactsection1 = () => {
    return (
        <div className='contactsection1'>
            <div className="contactsection1-body">
                <div className="contactsection1-body-right">
                    <div className='contactsection1-body-right-inner'>
                        <h2>Contact Us</h2>
                        <p>At the Red Dot, we cook delicious meals that summon memories of home.
                            The inspiration for our menu comes from family suppers and
                            our favourite comfort foods. We combine these familiar foods with
                            new flavours to create distinctive and savoury plates.</p>


                        <div className='contactsection1-body-right-adrres'>
                            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/map.png" alt="" />
                            <div>
                                <h6>Location</h6>
                                <p>5673 Main St. Osgoode, Ontario K0A 2W0 Canada​</p>
                            </div>

                        </div>
                        <div className='contactsection1-body-right-adrres'>
                            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/map.png" alt="" />
                            <div>
                                <h6>Location</h6>
                                <p>5673 Main St. Osgoode, Ontario K0A 2W0 Canada​</p>
                            </div>

                        </div>
                        <div className='contactsection1-body-right-adrres'>
                            <img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/map.png" alt="" />
                            <div>
                                <h6>Location</h6>
                                <p>5673 Main St. Osgoode, Ontario K0A 2W0 Canada​</p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="contactsection1-body-left">
                    <div className="contactsection1-body-left-innner">
                        <h4>Your Detail</h4>
                        <p>Let us know how to get back to you </p>
                        <hr />

                        <form action="">
                            <div>
                                <label htmlFor=""> Name <span>*</span></label>
                                <input type='text'/>
                                <p>hbhs dhbch sdh</p>
                            </div>
                            <div>
                                <label htmlFor=""> Last Name <span>*</span></label>
                                <input type='text'/>
                                <p>hbhs dhbch sdh</p>
                            </div>
                            <div>
                                <label htmlFor=""> Email <span>*</span></label>
                                <input type='text'/>
                                <p>hbhs dhbch sdh</p>
                            </div>
                            <div>
                                <label htmlFor=""> Subject <span>*</span></label>
                                <input type='text'/>
                                <p>hbhs dhbch sdh</p>
                            </div>
                           
                        </form>
<div className='contactsection1-body-left-innner-bottom'>
                        <h3>How can we help?</h3>
                        <p>Feel free to ask a question or Simplify leave a comment</p>
                        <p>Comments / Questions <span>*</span></p>
                        <textarea name="" id="" placeholder='Add text'></textarea>
                        <button>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contactsection1