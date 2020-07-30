import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

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
    <div className="gallery-container">
      {props.allWordpressWpMedia.edges.slice(0, 4).map(image => 
        <img src={image.node.source_url} alt={image.node.alt_text} key={image.node.id} className="gallery-image" />
      )}
    </div>
  )}
  />
);

export default Gallery;
