import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';


const HeaderMenu = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Header Menu"
        } 
      }){
        edges{
          node{
            items{
              title
              object_slug
            }
          }
        }
      }
    }
  `} 
  render={props => (
    <div>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
        <Link to={`/${item.object_slug}` === 'home' ? '/' : `/${item.object_slug}`} key={item.title}>
          {item.title}
        </Link>)}
    </div>
  )} />
);

export default HeaderMenu;