import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div>
      <nav>
        <h1>Logo goes here</h1>
        <Link to='/login'>
          <h3>Login/Register</h3>
          </Link>
      </nav>
    </div>
  )
}


