import React from 'react';
import Button from './Button';
import {Link} from 'gatsby';
import {Fade} from 'react-reveal';
import '../styles/banner.scss';

const Banner = () => (
  <div className="banner-box">
    <div className="banner-color-box"></div>
    <div className="banner-image-box">
      <div className="banner-bg-image"></div>
      <div className="banner-title">
        <Fade left duration={2000}>
          <h1 className="banner-bold-title">Find</h1>
          <h1 className="banner-cursive-title">your beauty</h1>
        </Fade>
        <Fade right delay={1000} duration={1000}>
          <h3 className="banner-subtitle">with 美人カルテ</h3>
        </Fade>
        <div className="banner-button">
          <Link to="/lessons"><Button title="Start Now" /></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
