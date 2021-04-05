import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  const [greeting, setGreeting] = useState("")
  const [hour, setHour] = useState()

  const getHour = () => {
    const hourNow = new Date().getHours()
    setHour(hourNow)
  }

  useEffect(() => {
    getHour()
    if (hour < 12) {
      setGreeting("Morning")
    } else if (hour < 18) {
      setGreeting("Afternoon")
    } else {
      setGreeting("Night")
    }
  }, [hour])

  return (
    <div>
      <header>
        <Link to='/posts'><h1 className="web-title">Collection Forum</h1></Link>
        {
          currentUser ?
            <>
              <p className="greeting">Good {greeting}, {currentUser?.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <nav>
              <Link to='/login'>Login/Register</Link>
              <Link to='/posts'>Posts</Link>
            </nav>
        }
      </header>
      <hr />
      {currentUser && (
        <nav>
          <Link to='/posts'>Posts</Link>
          <Link to={`/profile/${currentUser?.id}`}>Profile</Link>
          <Link to='/posts/new'>Post A Collection</Link>
          <hr />
        </nav>
      )}
      {props.children}
    </div>
  )
}
