import React from 'react';
import {Link} from 'gatsby';
import '../styles/postcard.scss';

const PostCard = (props) => (
    <div key={props.node.id} className="post-card-box">
      {props.node.featured_media &&
        <img src={props.node.featured_media.source_url} alt={props.node.featured_media.alt_text} className="post-card-image" />
      }
      <div className="post-card-color-box">
        <div className="post-card-right">
          <h1 className="post-card-title">{props.node.title}</h1>
          <div className="post-card-text" dangerouslySetInnerHTML={{__html: props.node.excerpt }} />
          {props.node.slug === "about" &&
            <Link to={`/post/${props.node.slug}`}>黄金比とは？</Link>
          }
        </div>
      </div>
    </div>
)

export default PostCard;
