import React from 'react';
import Layout from '../components/layout';
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import PostList from '../components/PostList';

export default ({pageContext}) => (
  <Layout>
    <Banner />
    <PostList />
    <ProductsList />
  </Layout>
);
