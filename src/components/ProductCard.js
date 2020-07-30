import React from 'react'
import {Link} from 'gatsby';
import '../styles/productcard.scss'

const ProductCard = (props) => (
  <div className="card-box" key={props.node.id}>
    <div className="card-bg-color-top">
      <h1 className="card-text-title">{props.node.title}</h1>
    </div>
    <img className="card-image" src={props.node.featured_media.source_url} alt="make up thumbnail"></img>
    <div className="card-bg-color-bottom">
      <div className="card-text" dangerouslySetInnerHTML={{__html: props.node.excerpt }} />
      <Link to={`/product/${props.node.slug}`}>Read More</Link>
    </div>
  </div>
)

export default ProductCard;
