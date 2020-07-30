import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import PostCard from './PostCard';

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
   <PostCard {...post} />
   )}
    </div>
  } /> 
)

export default PostList;