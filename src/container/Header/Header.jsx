import React from 'react';

import {SubHeading} from "../../components";
import {images} from "../../constants";
import './Header.css';

const Header = () => (
  <div className = "app_header app_wrapper section_padding" id = "home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app_header_h1">The Key To Fine Dining</h1>
      <p className = "p__opensans" style={{margin : '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi alias nam rem error recusandae non, numquam fuga laboriosam suscipit commodi velit accusamus placeat nemo natus impedit dolorum? At, laboriosam.</p>
      <button type="button" className="custom_button">Explore Menu</button>
    </div>
    <div className="app_image">
      <img src={images.welcome} alt="header img"></img>
    </div> 
  </div>
  
);

export default Header;
