import React from 'react';
import Layout from '../components/layout';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

export default ({pageContext}) => (
  <Layout>
    <Banner />
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    <ProductCard />
    <ProductCard />
  </Layout>
);