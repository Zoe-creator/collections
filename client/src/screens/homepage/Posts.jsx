import React from 'react';
import { Link } from 'react-router-dom';

import "../homepage/Posts.css"

export default function Posts({ posts }) {

  return (
    <div className="home-img" >
      {
        posts.map(post =>
          <Link key={post.id} to={`/posts/${post.id}`}><img src={post.img_url} alt={post.title} /></Link>
        )
      }
      <br />
    </div>
  )
}
