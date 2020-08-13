import React from 'react'
import Layout from '../components/layout';
// import GalleryThumb from '../components/GalleryThumb';
import '../styles/productdetails.scss';

export default ({pageContext}) => (
  <Layout>
    <div className="product-details-wrapper">
      <h1 className="product-details-title">{pageContext.title}</h1>
      {pageContext.featured_media && 
    <img src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} className="product-details-image" />
      }
      <div className="product-details-color-box">
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="product-details-text" />
      </div>
    </div>
    {pageContext.acf.image &&
      <div>
        <img src={pageContext.acf.image.localFile.childImageSharp.fluid.src}></img>
        <img src={pageContext.acf.image_2.localFile.childImageSharp.fluid.src}></img>
        <img src={pageContext.acf.image_3.localFile.childImageSharp.fluid.src}></img>
      </div>
    }
  </Layout>
);
