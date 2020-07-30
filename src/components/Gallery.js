import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

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
      {props.allWordpressWpMedia.edges.map(image => 
        <img src={image.node.source_url} alt={image.node.alt_text} />
      )}
    </div>
  )}


  />
)

export default Gallery;