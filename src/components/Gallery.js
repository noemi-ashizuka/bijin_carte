import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Button from './Button';
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
    <div>
      <h1 className="gallery-title">Gallery</h1>
      <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
      <div className="gallery-container">
        {props.allWordpressWpMedia.edges.slice(0, 4).map(image => 
          <img src={image.node.source_url} alt={image.node.alt_text} key={image.node.id} className="gallery-image" />
        )}
        <div className="gallery-color-box" />
        <Button title="More" />
      </div>
    </div>
  )} />
);

export default Gallery;
