import React from 'react';
import Layout from '../components/layout';
import '../styles/pagetemplate.scss';

export default ({pageContext}) => (
  <Layout>
    <div className="page-container">
    {pageContext.featured_media &&
      <div className="page-img-wrapper">
        <img src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} />
      </div>
    }
    <div className="page-content">
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} className="page-title" />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="page-text" />
    </div>
  </div>
  </Layout>
);
