import React from 'react';
import '../styles/gallery.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Button from './Button';

const GalleryPost = ({imgOne, imgTwo, imgThree}) => (
  <div className="gallery-wrapper">
    <h1 className="gallery-title">Gallery</h1>
    <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
    <div className="gallery-container">
      
      <div className="gallery-image-box">
        <Img resolutions={imgOne.localFile.childImageSharp.fluid} alt={imgOne.alt_text} className="gallery-image" />
        <p dangerouslySetInnerHTML={{ __html: imgOne.caption }}></p>
      </div>
      <div className="gallery-image-box">
        <Img resolutions={imgTwo.localFile.childImageSharp.fluid} alt={imgTwo.alt_text} className="gallery-image" />
        <p dangerouslySetInnerHTML={{ __html: imgTwo.caption }}></p>
      </div>
      <div className="gallery-image-box">
        <Img resolutions={imgThree.localFile.childImageSharp.fluid} alt={imgThree.alt_text} className="gallery-image" />
        <p dangerouslySetInnerHTML={{ __html: imgThree.caption }}></p>
      </div>
      <div className="gallery-color-box" />
    </div>
    <Link to='/gallery'><Button title="More" /></Link>
  </div>
)

export default GalleryPost;
