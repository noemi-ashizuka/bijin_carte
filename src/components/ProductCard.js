import React from 'react'
import {Link} from 'gatsby';
import Button from './Button';
import {Fade} from 'react-reveal';
import '../styles/productcard.scss';

const ProductCard = (props) => (
  <Fade bottom duration={2000}>
    <div className="card-box" key={props.node.id}>
      <div className="card-bg-color-top">
        <h1 className="card-text-title">{props.node.title}</h1>
      </div>
      {props.node.featured_media &&
        <img src={props.node.featured_media.source_url} className="card-image" alt={props.node.featured_media.alt_text} />
      }
      <div className="card-bg-color-bottom">
        <div className="card-text" dangerouslySetInnerHTML={{__html: props.node.excerpt }} />
        <Link to={`/product/${props.node.slug}`}><Button title="Read More" /></Link>
      </div>
    </div>
  </Fade>
)

export default ProductCard;
