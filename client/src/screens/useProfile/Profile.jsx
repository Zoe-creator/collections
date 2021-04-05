import React, { useEffect, useState } from 'react';
import { getProfiles, updateProfile, createProfile, deleteProfile } from '../../services/profile'
import { Link } from "react-router-dom"
import Modal from '../../components/modal/Modal';

import './Profile.css'

const UserProfile = ({ currentUser, posts, handleDelete }) => {
  const [input, setInput] = useState('')
  const [profiles, setProfiles] = useState([])
  const [open, handleOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    const response = await getProfiles();
    setProfiles(response)
  }
  const profile = profiles.find((one) => one.user_id === currentUser?.id)

  const handleShowAddBox = () => (
    <>
      <input className="profile-img-update"
        type='text'
        placeholder='profile image link'
        name='img_url'
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleProfilesubmit}>upload</button>
    </>
  )

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };


  const handleShowUpdateBox = () => (
    <>
      <input
        className="profile-img-update"
        type='text'
        placeholder='profile image link'
        name='img_url'
        value={input}
        onChange={handleChange}
      />
      {profile && <button onClick={handleUpdateProfile}>update</button>}
    </>
  )

  const handleProfilesubmit = async () => {
    try {
      await createProfile({
        user_id: currentUser?.id,
        img_url: input
      })
      await fetchProfiles()
      setInput('')
      setToggle(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateProfile = async () => {
    await updateProfile(profile?.id,
      {
        img_url: input,
        user_id: currentUser?.id
      })
    await fetchProfiles()
    setToggle(false)
    setInput('')
  }

  const handleDeleteProfile = async (id) => {
    try {
      await deleteProfile(id)
      await fetchProfiles()
    } catch (error) {
      console.log(error)
    }
  }
  const userName = currentUser?.username.charAt(0).toUpperCase() + currentUser?.username.slice(1)
  return (
    <div className="profile-page">
      {currentUser &&
        <div className="user-info">
          <h1>Welcome Home 😊 {userName}</h1>
          <div className='add-pic-input' style={{ 'width': '200px' }}>{toggle && (!!profile ? handleShowUpdateBox() : handleShowAddBox())}</div>
          {!!profile && <button onClick={() => handleDeleteProfile(profile?.id)}>Delete my Profile</button>}
          <p className="add-pic-link" onClick={() => setToggle(!toggle)} > {profile ? 'Update My Profile' : 'Add a profile Picture'} </p>
          {profile ? <img className="profile-pic" src={profile?.img_url} alt='your profile pic' /> : <p >🥺 You don't have Profile picture yet!</p>}
          <h2>{currentUser?.email}</h2>
          <h3>{currentUser?.DOB}</h3>

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