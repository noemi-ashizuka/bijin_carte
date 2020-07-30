import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import '../styles/headermenu.scss'


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
    <div className="navbar">
      <div className="navbar-inner">
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
          <Link to={`/${item.object_slug}` === 'home' ? '/' : `/${item.object_slug}`} key={item.title} className="navbar-menu-item">
            {item.title}
          </Link>
        )}
      </div>
    </div>
  )} />
);

export default HeaderMenu;