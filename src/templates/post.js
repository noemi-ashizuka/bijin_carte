import React from 'react';
import Layout from '../components/layout';
import ReactHtmlParser from 'react-html-parser';
import Button from '../components/Button';
import {Link} from 'gatsby';
import { Helmet } from "react-helmet";
import '../styles/postdetails.scss';

export default ({pageContext}) => (
  <Layout>
     <Helmet>
      { ReactHtmlParser(pageContext.yoast_head)}
    </Helmet>
    <div className="post-details-wrapper">
      <div className="post-details-left">
        {pageContext.featured_media &&
          <img src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} className="post-details-image" />
        }
      </div>
      <div className="post-details-right">
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} className="post-details-title" />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="post-details-text" />
      </div>
        <Link to="/"><Button title="Back" /></Link>
    </div>
  </Layout>
);
