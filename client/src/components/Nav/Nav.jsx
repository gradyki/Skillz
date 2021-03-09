import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(props) {
const {currentUser, handleLogout} =props

  return (
    <div>
      <nav>
        <h1>Logo goes here</h1>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
              </>
            :
      
            <Link to='/login'>
              <h3>Login/Register</h3>
            </Link>
        }
      </nav>
    </div>
  )
}


