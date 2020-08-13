const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
 
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
 
        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const homepageCustomPosts = path.resolve("./src/templates/homepageCustomPosts.js")
        const lessonsUnderContent = path.resolve("./src/templates/lessonsUnderContent.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        checkTemplate = (edge) => {
          if (edge.node.template === 'homepage_template_custom_posts.php') {
            return homepageCustomPosts
          } else if (edge.node.template === 'lessons_under_content.php') {
            return lessonsUnderContent
          }
          else {
            return pageTemplate
          }
        }

        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
 
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(checkTemplate(edge)),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== CUSTOM POST TYPE: PRODUCT ====

      .then(() => {
        graphql(
          `
            {
              allWordpressWpProduct{
                edges{
                  node{
                    id
                    slug
                    title
                    excerpt
                    content
                    featured_media{
                      source_url
                    }
                    acf{
                      image{
                        id
                        alt_text
                        caption
                        localFile{
                          childImageSharp{
                            fluid(quality: 100, maxWidth:500, maxHeight:500){
                              src
                              presentationWidth
                              presentationHeight
                            }
                          }
                        }
                      }
                      image_2{
                        id
                        alt_text
                        caption
                        localFile{
                          childImageSharp{
                            fluid(quality: 100, maxWidth:500, maxHeight:500){
                              src
                              presentationWidth
                              presentationHeight
                            }
                          }
                        }
                      }
                      image_3{
                        id
                        alt_text
                        caption
                        localFile{
                          childImageSharp{
                            fluid(quality: 100, maxWidth:500, maxHeight:500){
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
              }
            }
            
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const productTemplate = path.resolve("./src/templates/product.js")
          _.each(result.data.allWordpressWpProduct.edges, edge => {
            createPage({
              path: `/product/${edge.node.slug}`,
              component: slash(productTemplate),
              context: edge.node,
            })
          })
        })
      })

      // ==== END CUSTOM POST TYPE: PRODUCT
 
      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges{
                  node{
                    id
                    title
                    slug
                    excerpt
                    content
                    featured_media{
                      source_url
                      alt_text
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}