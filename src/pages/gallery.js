import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Layout from '../components/layout';
import {Fade} from 'react-reveal';
import { SRLWrapper } from 'simple-react-lightbox';
import SEO from '../components/seo';
import '../styles/gallery.scss';
import Img from 'gatsby-image';

const options = {
  buttons: {
    showDownloadButton: false,
  }
}

const Gallery= () => (
  <StaticQuery query={graphql`
  {
    allWordpressWpMedia(filter: {
      title: {
        ne: "website image"
      }
    }){
      edges{
        node{
          id
          alt_text
          caption
          localFile{
            childImageSharp{
              fluid(quality: 100, maxWidth:600, maxHeight:400, fit:INSIDE){
                src
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
    `
  } render={props =>(
    <Layout>
      <SEO title="美人カルテギャラリー" />
      <div className="gallery-wrapper">
        <h1 className="gallery-title">Gallery</h1>
        <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
        <SRLWrapper options={options}>
          <div className="gallery-container">
            {props.allWordpressWpMedia.edges.map(image =>
              <Fade left duration={1500} key={image.node.id}>
                <div className="gallery-image-box">
                  <Img resolutions={image.node.localFile.childImageSharp.fluid} alt={image.node.alt_text} className="gallery-image" />
                  <p dangerouslySetInnerHTML={{ __html: image.node.caption }}></p>
                </div>
              </Fade>
            )}
            <div className="gallery-color-box" />
          </div>
        </SRLWrapper>
      </div>
    </Layout>
  )} />
);

export default Gallery;
