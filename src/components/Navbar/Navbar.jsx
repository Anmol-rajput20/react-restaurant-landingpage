import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false);
  return(
  <div className="app_navbar">
    {/* Logo */}
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>

    {/* Desktop Links */}
    <ul className="app_navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>

    {/* Login/Register */}
    <div className="app_navbar-login">
      <a href="#login" className="p__opensans">Log In/Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>

    {/* Small Screen / Hamburger */}
    <div className="app_navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && ( 
      <div className="app_navbar-smallscreen_overlay">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay_close"
          onClick={() => setToggleMenu(false)}
        />
        <ul className="app_navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </div>
  </div>
)};

export default Navbar;
