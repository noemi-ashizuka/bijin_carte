import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import Button from './Button';
import {Fade} from 'react-reveal';
import '../styles/gallery.scss';
import Img from 'gatsby-image';

const GalleryThumb = () => (
  <StaticQuery query={graphql`
  {
    allWordpressWpMedia{
      edges{
        node{
          id
          alt_text
          caption
          localFile{
            childImageSharp{
              fluid(quality: 100, maxWidth:500, maxHeight:500){
                src
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
    `
  } render={props =>(
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Gallery</h1>
      <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
      
        <div className="gallery-container">
          {props.allWordpressWpMedia.edges.slice(0, 3).map(image =>
            <Fade left duration={1500} key={image.node.id}>
              <div className="gallery-image-box">
                <Img resolutions={image.node.localFile.childImageSharp.fluid} alt={image.node.alt_text} className="gallery-image" />
                <p dangerouslySetInnerHTML={{ __html: image.node.caption }}></p>
              </div>
            </Fade>
          )}
          <div className="gallery-color-box" />
        </div>
      <Link to='/gallery'><Button title="More" /></Link>
    </div>
  )} />
);

export default GalleryThumb;
