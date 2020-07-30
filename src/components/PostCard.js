import React from 'react';
import {Link} from 'gatsby';

const PostCard = (props) => (
  <div key={props.node.id} className="post-card-box">
    <div className="post-card-color-box">
      <img src={props.node.featured_media.source_url} alt="post thumbnail" className="post-card-image" />
      <h1 className="post-card-title">{props.node.title}</h1>
      <div class="post-card-text" dangerouslySetInnerHTML={{__html: props.node.excerpt }} />
      <Link to={`/post/${props.node.slug}`}>Read More</Link>
    </div>
  </div>
)

export default PostCard;