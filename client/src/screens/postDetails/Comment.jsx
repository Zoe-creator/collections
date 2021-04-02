import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { createComment } from '../../services/comments'

 import Modal from '../../components/modal/Modal';
 import { deleteComment } from '../../services/comments'

import './Comment.css'

export default function PostComment({ currentUser, postDetails}) {
  const { id } = useParams();
  const [open, handleOpen] = useState(false)

  const [input, setInput] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    fetchPost();
  }, []);

  const handleCommentSubmit = async () => {
    try {
      await createComment({
        user_id: currentUser.id,
        post_id: id,
        comment_text: input
      });
      //fetch new comment
      // history.push( `/posts/${id}`);
      await fetchPost()
      setInput('');

    } catch (error) {
      console.log(error);
    }
  };

  const fetchPost = async () => {
    const response = await getOnePost(id);
    setPost(response);
  };

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };
  const handleDeleteComment = async (id)=>{
    await deleteComment(id)
    await fetchPost()
  }

  return (
    <div className='comment'>
      {currentUser && 
          <div className='post-comments'>
            <textarea
              type='text'
              className='comment-text-area'
              placeholder={`Share Your Thoughts...`}
              value={input}
              onChange={handleChange}
            />
            <button className='comment-submit' onClick={handleCommentSubmit}>Add A Comment</button>
          </div>
      }
      {(post?.comments.length >= 0 && currentUser) ?
        <p>Comments:</p> : <p>you may log in to write a comment!</p>}
    
      <div className='comments'>
        {post?.comments.map(comment =>
          <div className='comments-detail'>
            <p className='comment-author'>Comment by: {currentUser?.username}</p>
            <p className='comment-text' key={comment.id}>{comment.comment_text}</p>
            {currentUser?.id === comment.user_id && <button  onClick={() => handleOpen(comment.id)}>Delete</button>}
          </div>
        )}
      </div>

      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDeleteComment}
        />
      )}
    </div>
  )

}
