import React from "react"
import {Link} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/banner.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="banner-box">
      <div class="banner-color-box">
      </div>
      <div class="banner-image-box">
        <div class="banner-title">
          <div class="banner-bold-title">
            <h1>NOT FOUND</h1>
          </div>
          <div class="banner-subtitle">
            <Link to="/" class="link-plain"><p>ホームページに戻る</p></Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
