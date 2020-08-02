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
  `} render={props => <div className="list-wrapper">
      <h1 className="list-title">Lessons</h1>
      <h3 className="list-subtitle">あなたの持つ本来の「美」を見つけましょう
        <br/>それぞれのニーズに合わせたメニューをご用意しています。
      </h3>
      <div className="list-container">
        {props.allWordpressWpProduct.edges.map(product =>
          <ProductCard {...product} key={product.node.id} />
      )}
      </div>
    </div>
  } />
)

export default ProductsList;
