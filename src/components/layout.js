/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import HeaderMenu from '../components/HeaderMenu';
import FooterMenu from '../components/FooterMenu';
import "../styles/layout.scss";
import SimpleReactLightbox from "simple-react-lightbox";


const Layout = ({ children }) => (
  <>
  <HeaderMenu />
  <div className='container'>
    <SimpleReactLightbox>
      {children}
    </SimpleReactLightbox>
  </div>
  <FooterMenu />
  </>
)
   
export default Layout
