import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { useHistory } from 'react-router-dom';
import { createComment } from '../../services/comments'
import { createLike, deleteLike } from '../../services/likes'
import Comment from './Comment'
import './PostDetail.css'

export default function PostDetails({ currentUser }) {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchOnePost = async () => {
      const postData = await getOnePost(id);
      setPostDetails(postData);
    }
    fetchOnePost()
  }, [])

  return (
    <div className='details-comments'>
      <div className='details'>
        <div className='detail-img'>
          <img src={postDetails?.img_url} alt={postDetails?.title} />
        </div>
        <div className='detail-description'>
          <p>Name of Collection: {postDetails?.title}</p>
          <p>Author's description of Collection: {postDetails?.description}</p>
        </div>
      </div>
      <Comment currentUser={currentUser} postDetails={postDetails} />

    </div>
  )
}
