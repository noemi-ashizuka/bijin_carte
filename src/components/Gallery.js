import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Button from './Button';
import {Fade} from 'react-reveal';
import '../styles/gallery.scss';

const Gallery = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpMedia{
        edges{
          node{
            id
            alt_text
            source_url
            caption
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
            <Fade left duration={1500}>
              <div className="gallery-image-box">
                <img src={image.node.source_url} alt={image.node.alt_text} key={image.node.id} className="gallery-image" />
                <p dangerouslySetInnerHTML={{ __html: image.node.caption }}></p>
              </div>
            </Fade>
          )}
          <div className="gallery-color-box" />
        </div>
      <Button title="More" />
    </div>
  )} />
);

export default Gallery;
