import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  // console.log(currentUser.id)
  return (
    <div>
      <header>
        <Link to='/'><h1>Collections Forum</h1></Link>
        {
          currentUser ?
            <>
              <p>Hi, {currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to='/posts'>Posts</Link>
          <Link to={`/profile/${currentUser.id}`}>Profile</Link>
          
          <hr />
        </>
      )}
      {props.children}
    </div>
  )
}
