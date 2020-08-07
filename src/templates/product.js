import React from 'react'
import Layout from '../components/layout';
import GalleryThumb from '../components/GalleryThumb';
import '../styles/productdetails.scss';

export default ({pageContext}) => (
  <Layout>
    <div className="product-details-wrapper">
      <h1 className="product-details-title">{pageContext.title}</h1>
      <img src={pageContext.featured_media.source_url} alt="product" className="product-details-image" />
      <div className="product-details-color-box">
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="product-details-text" />
      </div>
    </div>
    <GalleryThumb />
  </Layout>
);
