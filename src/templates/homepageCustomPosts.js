import React from 'react';
import Layout from '../components/layout';
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import GalleryThumb from '../components/GalleryThumb';
import ShindanList from '../components/ShindanList';

export default ({pageContext}) => (
  <Layout>
    <Banner />
    <PostList />
    <ProductsList />
    <ShindanList />
    <GalleryThumb />
  </Layout>
);
