import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {graphql, StaticQuery} from 'gatsby';
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
              url
            }
          }
        }
      }
    }
  `} 
  render={props => (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="/home">美人カルテ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
              (item.object_slug) ? 
              <Nav.Link href={`/${item.object_slug}` === 'home' ? '/' : `/${item.object_slug}`} key={item.title} className="navbar-menu-item ml-auto m-1">
                {item.title}
              </Nav.Link>
              :
              <Nav.Link href={`/${item.url}` === 'home' ? '/' : `/${item.url}`} key={item.title} className="navbar-menu-item ml-auto m-1">
                {item.title}
              </Nav.Link>
            )}
            <Navbar.Text className="navbar-menu-item navbar-menu-text ml-auto m-1 d-lg-none">Shindan</Navbar.Text>
            <Nav.Link href="/shindanA" className="navbar-menu-item ml-auto m-1 d-lg-none">Personal Color</Nav.Link>
            <Nav.Link href="/shindanB" className="navbar-menu-item ml-auto m-1 d-lg-none">Skin Type</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )} />
);

export default HeaderMenu;
