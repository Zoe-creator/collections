import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/users';
import { getAllPosts } from '../../services/posts';
import { getProfile, updateProfile } from '../../services/profile'
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import Modal from '../../components/modal/Modal';

import './Profile.css'
const UserProfile = ({ currentUser, posts, handleDelete }) => {

  const [profiles, setProfiles] = useState([])
  const { push } = useHistory();
  const [userProfile, setUserProfile] = useState()
  const [open, handleOpen] = useState(false)

  // const handleUpdateClick = async () => {
  //   await updateProfile(+id, { post_text: input });
  //   push('/profile');
  // };
  // const profileData = async () => {
  //   const AllProfiles = await getProfiles()
  //   setProfiles(AllProfiles)

  // }
  // if (profiles) {
  // userProfile = profiles.find(profile => profile.id === userID);
  // }
  const userName = currentUser?.username.charAt(0).toUpperCase() + currentUser?.username.slice(1)
  return (
    <div>
      {currentUser &&
        <div>
          <h1>Welcome Home 😊 {userName}</h1>
          <h2>{currentUser?.email}</h2>
          <h3>{currentUser?.DOB}</h3>
          {/* <button onClick={handleUpdateClick}>Update</button> */}

        </div>}
      <hr />
      <div className="posts">
        {
        posts.map(post => (
          <React.Fragment key={post.id}>

            {
              currentUser?.id === post.user_id &&
              <div className="user-posts">
                <div className="post-info">
                  <div className="title-img-desc">
                    <img src={post.img_url} alt={post.title} />
                    <div>
                      <Link to={`/posts/${post.id}`}><p className='post-title'>{post.title}</p></Link>
                      <p className='post-description' >{post.description}</p>
                    </div>
                  </div>

                </div>


                <div className="posts-action">
                  <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                  <div><button onClick={() => handleOpen(post.id)}>delete</button></div>
                </div>
              </div>
            }

          </React.Fragment>
        ))
      }</div>
      

      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default UserProfile