import React from 'react';
import '../styles/banner.scss';

const Banner = () => (
  <div className="banner-box">
    <div className="banner-color-box"></div>
    <div className="banner-image-box">
        <div className="banner-bg-image"></div>
        <div className="banner-title">
          <h1 className="banner-bold-title">Find <br/><span className="banner-cursive-title">your beauty</span></h1>
          <h3 className="banner-subtitle">with 美人カルテ</h3>
        </div>
      </div>
  </div>
);

export default Banner;
