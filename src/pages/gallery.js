import React, { useState } from 'react';
import {graphql, StaticQuery} from 'gatsby';
// import Button from '../components/Button';
import {Fade} from 'react-reveal';
import '../styles/gallery.scss';
import Img from 'gatsby-image';
import LightBox from '../components/Lightbox';



const Gallery = props => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    //e.preventDefault()
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

  return (

  <StaticQuery query={graphql`
  {
    allWordpressWpMedia{
      edges{
        node{
          id
          alt_text
          caption
          source_url
          localFile{
            childImageSharp{
              fluid(quality: 100, maxWidth:500, maxHeight:400, fit: INSIDE){
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
  } render={data =>{
    const images = data.allWordpressWpMedia.edges
    return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Gallery</h1>
      <h3 className="gallery-subtitle">各メニューのサンプルのスライドショー</h3>
      <div className="gallery-container">
        {data.allWordpressWpMedia.edges.map((image, i) =>
          <>
          <Fade left duration={1500} key={image.node.id}>
            <div className="gallery-image-box">
            <button onClick={handleOpen(i)} className="empty-button">
              <Img resolutions={image.node.localFile.childImageSharp.fluid} alt={image.node.alt_text} className="gallery-image" />
            </button>
              <p dangerouslySetInnerHTML={{ __html: image.node.caption }}></p>
              {showLightbox && selectedImage !== null && (
              <LightBox
                images={images}
                handleClose={handleClose}
                handleNextRequest={handleNextRequest}
                handlePrevRequest={handlePrevRequest}
                selectedImage={selectedImage}
              />
              )}
            </div>
          </Fade>
          </>
        )}
        <div className="gallery-color-box" />
      </div>
    </div>
    )
  }} />
)
        }

export default Gallery;