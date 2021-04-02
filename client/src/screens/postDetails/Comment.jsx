import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { createComment } from '../../services/comments'
import { createLike, deleteLike } from '../../services/likes'
import { Switch, Route, useHistory } from 'react-router-dom';


import './Comment.css'

export default function PostComment({ currentUser, postDetails }) {
  const { id } = useParams();
  const history = useHistory()

  const [input, setInput] = useState();
  const [post, setPost] = useState();
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  let likedPost;

  useEffect(() => {
    fetchPost();
    likedPost = post?.likes.find(post => post.user_id === postDetails.user_id);
    setLiked(likedPost);
  }, []);

  const handleCommentSubmit = async () => {
    try {
      await createComment({
        user_id: currentUser.id,
        post_id: post?.id,
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
  console.log(post)

  const fetchPost = async () => {
    const response = await getOnePost(id);
    setPost(response);
    setTotalLikes(response.likes.length);
  };

  const handleLike = async () => {
    try {
      const response = await createLike({
        user_id: currentUser.id,
        post_id: postDetails.id
      });
      await fetchPost();
      setLiked(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteLike = async id => {
    try {
      await deleteLike(id);
      await fetchPost();
      setLiked(null);
    } catch (error) {
      console.log(error);
    }
  };
  //allow user to remove the like
  const toggleLike = () => {
    if (liked) {
      if (liked.user_id === currentUser.id) {
        handleDeleteLike(liked.id);
      }
    } else {
      handleLike();

    };
  }

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      {currentUser &&
        <div >
          <div className='like' onClick={toggleLike}>
            {liked && liked.user_id === currentUser.id ? (
              <div>👍</div>
            ) : (
              <div>👍🏿</div>
            )}
            <p>{totalLikes}</p>
          </div>
          <div className='post-comments'>
            <textarea
              type='text'
              className='comment'
              placeholder={`Share Your Thoughts...`}
              value={input}
              onChange={handleChange}
            />
            <button className='comment-submit' onClick={handleCommentSubmit}>Add A Comment</button>

          </div>

        </div>
      }


      <div className='comments'>
        <p>Comments:</p>
        {post?.comments.map(comment =>
          <div className='comments-detail'>
            <p>Comment by: {currentUser?.username}</p>
            <p key={comment.id}>{comment.comment_text}</p>
          </div>

        )}
      </div>
    </div>
  )

}
