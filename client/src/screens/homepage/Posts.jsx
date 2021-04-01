import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../components/modal/Modal';

export default function Posts({ posts, handleDelete, currentUser }) {
  const [open, handleOpen] = useState(false)

  return (
    <div>
      {
        posts.map(post => (
          <React.Fragment key={post.id}>
            <Link to={`/posts/${post.id}`}><p>{post.title}</p></Link>

            {
              currentUser?.id === post.user_id &&
              <>
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(post.id)}>delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/posts/new'><button>Create</button></Link>
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
  )
}
