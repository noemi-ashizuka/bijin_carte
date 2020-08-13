import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.scss';

const FooterMenu = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Footer Menu"
        } 
      }){
        edges{
          node{
            items{
              object_id
              title
              object_slug
              url
            }
          }
        }
      }
    }
  `} render={props => (
  <div className="footer-menu-box">
    <div className="footer-text-links">
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
        <a href={`/${item.object_slug}` === 'home' ? '/' : `/${item.object_slug}`} key={item.object_id} className="footer-link">{item.title}</a>
      )}
    </div>
    <div className="footer-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" /></a>
      <a href="https://www.instagram.com/chihiro_beautylabo/?hl=ja" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="footer-icon" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" /></a>
    </div>
  </div>
  )} />
);

export default FooterMenu;
