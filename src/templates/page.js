import React from 'react';
import Layout from '../components/layout';
//import ProductsList from '../components/ProductsList';

export default ({pageContext}) => (
  <Layout>
    {pageContext.title}
    <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    
  </Layout>
);
