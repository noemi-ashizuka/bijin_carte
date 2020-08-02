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
          }
        }
      }
    }
    `
  } render={props =>(
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Gallery</h1>
      <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
      <Fade left cascade>
        <div className="gallery-container">
          {props.allWordpressWpMedia.edges.slice(0, 4).map(image => 
            <img src={image.node.source_url} alt={image.node.alt_text} key={image.node.id} className="gallery-image" />
          )}
          <div className="gallery-color-box" />
        </div>
      </Fade>
      <Button title="More" className="gallery-button" />
    </div>
  )} />
);

export default Gallery;
