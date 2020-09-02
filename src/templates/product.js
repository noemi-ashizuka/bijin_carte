import React from 'react'
import Layout from '../components/layout';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import GalleryPost from '../components/GalleryPost';
import '../styles/productdetails.scss';

export default ({pageContext}) => (
  <Layout>
  <Helmet>
    { ReactHtmlParser(pageContext.yoast_head)}
  </Helmet>
  <div className="product-details-wrapper">
    <h1 className="product-details-title">{pageContext.title}</h1>
    {pageContext.featured_media &&
      <div className="product-image-box">
        <div className="product-image-color-box"></div>
        <img src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} className="product-details-image" />
      </div>
    }
    <div className="product-details-color-box">
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="product-details-text" />
    </div>
  </div>
  {pageContext.acf.image &&
    <GalleryPost imgOne={pageContext.acf.image} imgTwo={pageContext.acf.image_2} imgThree={pageContext.acf.image_3} />
  }
</Layout>
);
