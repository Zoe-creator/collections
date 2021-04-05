import { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { createLike, deleteLike } from '../../services/likes'
import Comment from './Comment'

import './PostDetail.css'

export default function PostDetails({ currentUser}) {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();

  const [post, setPost] = useState();
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);

  console.log(id)

  useEffect(() => {
    const fetchOnePost = async () => {
      const postData = await getOnePost(id);
      setPostDetails(postData);
    }
    fetchOnePost()
  }, [])

  const toggleLike = () => {
    if (liked) {
      if (liked.user_id === currentUser.id) {
        handleDeleteLike(liked.id);
      }
    } else {
      handleLike();

    };
  }

  useEffect(() => {
    fetchPost();
    const likedPost = post?.likes.find(post => post.user_id === postDetails.user_id);
    setLiked(likedPost);
  }, []);

  const handleDeleteLike = async id => {
    try {
      await deleteLike(id);
      await fetchPost();
      setLiked(null);
    } catch (error) {
      console.log(error);
    }
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
  const fetchPost = async () => {
    const response = await getOnePost(id);
    setPost(response);
    setTotalLikes(response.likes.length);
  };

  return (
    <div className='details-comments'>

      <div className='details'>
        <div className='detail-img'>
          <img src={postDetails?.img_url} alt={postDetails?.title} />
        </div>

        {currentUser &&
          <div className="like-comment">
            <div className='like' onClick={toggleLike}>
              {liked && liked.user_id === currentUser.id ? (
                <div>👍</div>
              ) : (
                <div>👍🏿</div>
              )}
              <p>{totalLikes}</p>
            </div>
          </div>}
        <div className='detail-description'>
          <p>Name of Collection: {postDetails?.title}</p>
          <p>Description : {postDetails?.description}</p>
        </div>
      </div>
      <Comment currentUser={currentUser} postDetails={postDetails}/>

    </div>
  )
}
