import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/users';
import { getAllPosts } from '../../services/posts';
import { getProfile, updateProfile } from '../../services/profile'
import { useHistory, useParams } from 'react-router-dom';

const UserProfile = ({currentUser}) => {
  const { id } = useParams();
  const [user, setUser] = useState([])
  const [profiles,setProfiles]=useState([])
  const { push } = useHistory();
const [userProfile,setUserProfile]=useState()

useEffect(() => {
  const fetchUser = async () => {
    const UserData = await getUser(id);
    setUser(UserData);
  }
  fetchUser();

}, [])

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

  return (
    <div>
      {user &&
        <div>
        <h1>{user?.username}</h1>
        <h2>{user.email}</h2>
        <h3>{user.DOB}</h3>
        {/* <button onClick={handleUpdateClick}>Update</button> */}

        </div>}
      
        {/* {
              currentUser?.id === post.user_id &&
              <>
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(post.id)}>delete</button>
              </>
            } */}
      <hr />
      
    </div>
  );
}

export default UserProfile