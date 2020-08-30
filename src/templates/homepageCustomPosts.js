import React from 'react';
import Layout from '../components/layout';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import GalleryThumb from '../components/GalleryThumb';
import ShindanList from '../components/ShindanList';
// import SEO from '../components/seo';

export default ({pageContext}) => (
  <Layout>
    <Helmet>
      { ReactHtmlParser(pageContext.yoast_head)}
    </Helmet>
    <Banner />
    <PostList />
    <ShindanList />
    <ProductsList />
    <GalleryThumb />
  </Layout>
);
