import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"></img>
    </div>
    <div className="app__wrapper__info">
      <SubHeading title="Chef's World"></SubHeading>
      <h1 className="headtext__cormorant">What We Beleive In...</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"></img>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qu.</p>
        </div>
        <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quisqua</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"></img>
      </div>

    </div>
  </div>
);

export default Chef;
