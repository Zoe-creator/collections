import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { useHistory } from 'react-router-dom';
import { createComment } from '../../services/comments'
import { createLike, deleteLike } from '../../services/likes'
import { AdminContext } from '../../context/adminContext';

export default function PostDetails({ currentUser }) {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();
  const { push } = useHistory();
  const [input, setInput] = useState();
  const { admin } = useContext(AdminContext);
  const history = useHistory()
  const [post, setPost] = useState();
  const [liked, setLiked] = useState();
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  console.log(admin.id)
  console.log(id)

//  totalComments > 1 ? (comment = 'comments') : (comment = 'comment');

  useEffect(() => {
    const fetchOnePost = async () => {
      const postData = await getOnePost(id);
      setPostDetails(postData);
    }
    fetchOnePost()
  }, [])

  const fetchPost = async () => {
    const response = await getOnePost(id);
    setPost(response);
    setTotalLikes(response.likes.length);
    setTotalComments(response.comments.length);
    // history.push(`/posts/${id}`)
  };

  // useEffect(() => {
  //   fetchPost();
  //   const likedPost = post.like.find(one => one.user_id === post.user_id);
  //   setLiked(likedPost);
  // }, []);



  const handleCommentSubmit = async () => {
    try {
      await createComment({
        user_id: currentUser.id,
        post_id: id,
        comment_text: input
      });
      fetchPost();
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await createLike({
        user_id: currentUser.id,
        post_id: id
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
    }
  };



  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };


  return (
    <div>
      <div>
        <h3>Name of Collection: {postDetails?.title}</h3>
        <img src={postDetails?.img_url} alt={postDetails?.title} />
        <h3>Author's description of Collection: {postDetails?.description}</h3>
      </div>
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

        <textarea
          type='text'
          placeholder={`Share Your Thoughts...`}
          value={input}
          onChange={handleChange}
        />
        <div className='send-icon'>
          <button onClick={handleCommentSubmit}>Add A Comment</button>
        </div>
      </div> 
  }
     

      <div className='comments'>
        <p>Comments:</p>
        {post?.comments.map(comment => (
          <p key={comment.id}>{comment.comment_text}</p>
        ))}
      </div>


    </div>
  )
}
