import React from 'react'
import Layout from '../components/layout'
import ProductCard from '../components/ProductCard'

export default ({pageContext}) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    <ProductCard />
    <ProductCard />
  </Layout>
);