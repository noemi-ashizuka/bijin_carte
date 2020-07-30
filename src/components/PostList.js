import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

const PostList = () => (
  <StaticQuery query={graphql`
    {
      allWordpressPost{
        edges{
          node{
            id
            slug
            content
            title
            excerpt
            featured_media{
              source_url
            }
          }
        }
      }
    }
 `} render={props => <div>
   {props.allWordpressPost.edges.map(post => 
   <div key={post.node.id}>
      <h1>{post.node.title}</h1> 
      <p>{post.node.content}</p>
    </div>
   )}
    </div>
  } /> 
)

export default PostList;