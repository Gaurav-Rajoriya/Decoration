import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'




const Header = () => {

  const [isopenMenu, setopenMenu] = useState(false)
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const onhandleChange = () => {
    setopenMenu(!isopenMenu)
  }

  const closeMenu = () => {
    setopenMenu(false)
  }

  const handleMouseEnters = () => {
    setMenuVisibility(true);
  };

  const handleMouseLeave = () => {
    setMenuVisibility(false);
  };

  return (
    <section className='main-header'>
      <div className='upper-header flex justify-between px-2 md:px-10'>
        <span><a href="tel:+91 9910021530"><i className="ri-phone-fill"></i> +91 9910021530</a></span>
        <p>Welcome To Rj Decoration</p>
      </div>
    {/* down Header */}
      <div className='down-header flex justify-between items-center'>
        <div className='logo_header logo'>
          {/* <img src={logo} alt="logo" /> */}
          <h1>LOgo</h1>
        </div>
        <nav className='navbar'>
          <ul className={`nav-links ${isopenMenu ? 'click' : ''} `}>
            <li><Link onClick={closeMenu} to="/">Home</Link></li>
            <li><Link onClick={closeMenu} to="/about_page">About Us</Link></li>
            <li className='dgmt-inventure-drop-down' onMouseLeave={handleMouseLeave}>
              <Link className='hover dropdown-hover' to="/product_page" onMouseEnter={handleMouseEnters}>Product</Link>
            <ul className={`dgmt-drop-down firstdrop ${isMenuVisible ? 'visible' : 'hidden'}`} >
                                        <li><Link target='blank'  onClick={closeMenu} to='/sexual_health'>Sexual_health</Link></li>
                                        <li><Link target='blank'  onClick={closeMenu} to='/weight_loss'>Weight_loss</Link></li>
                                        <li><Link target='blank'  onClick={closeMenu} to='/persnoal_care'>Personal_Care</Link></li>
                                        <li><Link target='blank'  onClick={closeMenu} to='/diabetes'>Diabetes</Link></li>
                                    </ul>
            </li>
            <li><Link onClick={closeMenu} to="/testimonial">Testimonial</Link></li>
            <li><Link onClick={closeMenu} to="/contact">Contact Us</Link></li>
            <li><Link onClick={closeMenu} to="/payment">Payment</Link></li>
          </ul>
        </nav>
        <div className='language'>
        
        </div>
        <div className='responsive'>
          <i onClick={onhandleChange} className="ri-menu-3-line"></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
