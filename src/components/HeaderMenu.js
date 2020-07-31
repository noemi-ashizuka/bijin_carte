import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
    <Navbar expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="#home">美人カルテ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> 
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
              <div className="navbar-inner">
                <Nav.Link>
                  <Link to={`/${item.object_slug}` === 'home' ? '/' : `/${item.object_slug}`} key={item.title} className="navbar-menu-item">
                    {item.title}
                  </Link>
                </Nav.Link>
                </div>
              )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )} />
);

export default HeaderMenu;
