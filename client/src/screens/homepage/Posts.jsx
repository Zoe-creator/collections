import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"
import Select from "./Select"

import "../homepage/Posts.css"

export default function Posts({ posts }) {
  const [queriedPosts, setQueriedPosts] = useState([])

  const handleSelector = (e) => {
    if (e.target.checked) {
      const filteredResult = posts.filter((post) =>
        post.categories.includes(e.target.value)
      );
      const filteredArr = Array.from(new Set([...filteredResult, ...queriedPosts]))
      setQueriedPosts(filteredArr);
    } else {
      const filteredResult = queriedPosts.filter(post => {
        return !post.categories.includes(e.target.value)
      })
      setQueriedPosts(filteredResult)
    }
  };

  return (
    <div>
        <Select onChange={handleSelector} />
      <div className="home-img" >
        {
          queriedPosts.length ? queriedPosts.map((post) =>
            <Link key={post.id} to={`/posts/${post.id}`}><img src={post.img_url} alt={post.title} /></Link>
          ) :
            posts.map(post =>
              <Link key={post.id} to={`/posts/${post.id}`}><img src={post.img_url} alt={post.title} /></Link>
            ) 
        }
      </div>
    </div>

  )
}
