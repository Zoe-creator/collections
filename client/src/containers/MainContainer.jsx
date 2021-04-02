import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import PostCreate from '../screens/postCreate/PostCreate';
import PostDetails from '../screens/postDetails/PostDetails';
import PostEdit from '../screens/postEdit/postEdit';
import Posts from '../screens/homepage/Posts';
import Profile from '../screens/useProfile/Profile'

import { deletePost, updatePost, getAllPosts,createPost } from '../services/posts';

export default function MainContainer({currentUser}) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  // const { id } = useParams();
  // console.log(id)
  
  console.log(currentUser)

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts();
  }, [])

  const handleCreate = async (postData) => {
    const newPost = await createPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/posts');
  }

  const handleUpdate = async (id, postData) => {
    const updatedPost = await updatePost(id, postData);
    setPosts(prevState => prevState.map(post => {
      return post.id === +id ? updatedPost : post
    }))
    history.push(`/profile/${currentUser.id}`);
  }

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }



  return (
    <Switch>
      <Route path='/profile/:id'>
            <Profile
          currentUser={currentUser}
          posts={posts}
          handleDelete={handleDelete}
            />
      </Route>
      
      <Route path='/posts/new'>
        <PostCreate
          handleCreate={handleCreate}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/posts/:id/edit'>
        <PostEdit
          posts={posts}
          handleUpdate={handleUpdate}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/posts/:id'>
        <PostDetails
          posts={posts}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/posts'>
        <Posts
          posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>

    </Switch>
  )
}
