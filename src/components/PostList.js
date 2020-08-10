import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import PostCard from './PostCard';
import '../styles/postlist.scss'

const PostList = () => (
  <StaticQuery query={graphql`
  {
    allWordpressPost(filter: {
      tags: {
        elemMatch: {
          name: {eq: "homepage"}
        }
      }
    }) {
      edges {
        node {
          id
          slug
          content
          title
          excerpt
          featured_media {
            source_url
            alt_text
          }
        }
      }
    }
  }
 `} render={props => <div className="post-cards-wrapper">
  {props.allWordpressPost.edges.map(post => 
    <PostCard {...post} key={post.node.id} />
  )}
  </div>
  } /> 
)

export default PostList;
