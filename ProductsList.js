import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

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
            }
          }
        }
      }
    }
  `} render={props => props.allWordpressWpProduct.edges.map(product =>
    <div key={product.node.id}>
      <h2>{product.node.title}</h2>
      <img src={product.node.featured_media.source_url} alt="thumbnail" />
      <div dangerouslySetInnerHTML={{ __html: product.node.excerpt }} />
      <Link to={`/product/${products.node.slug}`}>Read More</Link>
    </div>
  )} />
)

export default ProductsList;