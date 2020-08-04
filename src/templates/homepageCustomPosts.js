import React from 'react';
import Layout from '../components/layout';
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import Gallery from '../components/Gallery';

export default ({pageContext}) => (
  <Layout>
    <Banner />
    <PostList />
    <ProductsList />
    <Gallery />
  </Layout>
);
