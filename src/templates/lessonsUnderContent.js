import React from 'react';
import Layout from '../components/layout';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import ProductsList from '../components/ProductsList';

export default ({pageContext}) => (
  <Layout>
    <Helmet>
      { ReactHtmlParser(pageContext.yoast_head)}
    </Helmet>
    {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} /> */}
    <ProductsList />
  </Layout>
);