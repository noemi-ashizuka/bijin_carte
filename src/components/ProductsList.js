import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import ProductCard from '../components/ProductCard';
import '../styles/productlist.scss';

const ProductsList = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpProduct{
        edges{
          node{
            id
            slug
            title
            excerpt
            content
            featured_media{
              source_url
              alt_text
            }
          }
        }
      }
    }
  `} render={props => <div className="list-container">
      {props.allWordpressWpProduct.edges.map(product =>
        <ProductCard {...product} key={product.node.id} />
    )}
    </div>
  } />
)

export default ProductsList;
